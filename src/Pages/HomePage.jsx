import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllStudentsAPI, studentRegistrationAPI } from '../Services/AllApi';
import Table from 'react-bootstrap/Table';

function HomePage() {
    // register student
    const [inputs, setInputs] = useState({
        fullname: "", address: "", mobile: "", email: "", gender: "", dob: "", course: ""
    })

    // get all students
    const [studentData, setStudentData] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setInputs({ fullname: "", address: "", mobile: "", email: "", gender: "", dob: "", course: "" })
    }
    const handleShow = () => setShow(true);

    // validation fields logic
    const validateFullName = (fullname) => {
        return fullname.trim() !== ''
    }
    const validateAddress = (address) => {
        return address.trim() !== ''
    }
    const validateMobile = (mobile) => {
        return mobile.length <= 10;
    }
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const validateGender = (gender) => {
        return gender.trim() !== ''
    }
    const validateDob = (dob) => {
        return dob.trim() !== ''
    }
    const validateCourse = (course) => {
        return course.trim() !== ''
    }

    // student registration
    const handleStudentRegistration = async (e) => {
        e.preventDefault()
        const { fullname, address, mobile, email, gender, dob, course } = inputs
        if (validateFullName(fullname) && validateAddress(address) && validateMobile(mobile) &&
            validateEmail(email) && validateGender(gender) && validateDob(dob) && validateCourse(course)) {
            // api call

            try {
                const result = await studentRegistrationAPI(inputs)
                console.log(result);
                if (result.status == 200) {
                    toast.success('Successfully Registered')
                    setInputs({ fullname: "", address: "", mobile: "", email: "", gender: "", dob: "", course: "" })
                    handleClose()
                    getAllStudents()
                }
                else {
                    toast.error(result.response.data)
                }

            } catch (err) {
                console.log(err);
            }

        } else {
            toast.warning('Fill the form')
        }

    }
    console.log(inputs);

    // get all student data
    const getAllStudents = async () => {
        const result = await getAllStudentsAPI()
        if (result.status == 200) {
            setStudentData(result.data)
        }
    }

    useEffect(() => {
        getAllStudents()
    }, [])

    console.log(studentData);

    return (
        <div className='mt-5 text-center'>
            <Button variant="primary" onClick={handleShow}>
                Add New <i className='fas fa-plus'></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="fullname"
                            className="mb-3"
                        >
                            <Form.Control value={inputs.company_name}
                                onChange={e => setInputs({ ...inputs, fullname: e.target.value })}
                                type="text"
                                placeholder="fullname"
                                isInvalid={!validateFullName(inputs.fullname)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="Address"
                            className="mb-3"
                        >
                            <Form.Control value={inputs.address}
                                onChange={e => setInputs({ ...inputs, address: e.target.value })}
                                type="text"
                                placeholder="Address"
                                isInvalid={!validateAddress(inputs.address)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="Mobile"
                            className="mb-3"
                        >
                            <Form.Control value={inputs.mobile}
                                onChange={e => setInputs({ ...inputs, mobile: e.target.value })}
                                type="text"
                                placeholder="Mobile"
                                isInvalid={!validateMobile(inputs.mobile)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control value={inputs.email}
                                onChange={e => setInputs({ ...inputs, email: e.target.value })}
                                type="text"
                                placeholder="Email"
                                isInvalid={!validateEmail(inputs.email)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="Gender"
                            className="mb-3"
                        >
                            <Form.Control value={inputs.gender}
                                onChange={e => setInputs({ ...inputs, gender: e.target.value })}
                                type="text"
                                placeholder="Gender"
                                isInvalid={!validateGender(inputs.gender)}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="DOb"
                            className="mb-3"
                        >
                            <Form.Control value={inputs.dob}
                                onChange={e => setInputs({ ...inputs, dob: e.target.value })}
                                type="date"
                                placeholder="Dob"
                                isInvalid={!validateDob(inputs.dob)}
                            />
                        </FloatingLabel>

                        <select className='form-control text-danger'
                            name="course" id="course" value={inputs.course} onChange={e => setInputs({ ...inputs, course: e.target.value })}>
                            <option>Select a Course</option>
                            <option value="Biology">Biology</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Humanities">Humanities</option>
                        </select>

                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleStudentRegistration}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className='container-fluid p-5'>
                <h2 className='text-center'>Students Data</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Dob</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData?.length > 0 && studentData?.map((students, index) => (
                                <tr key={students}>
                                    <td>{index + 1}</td>
                                    <td>{students.fullname}</td>
                                    <td>{students.address}</td>
                                    <td>{students.mobile}</td>
                                    <td>{students.email}</td>
                                    <td>{students.gender}</td>
                                    <td>{students.dob}</td>
                                    <td>{students.course}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </div>
    )
}

export default HomePage
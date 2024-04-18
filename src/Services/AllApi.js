import { CommonAPI } from "./CommonAPI";
import { SERVER_URL } from "./SERVER_URL";


// student registration
export const studentRegistrationAPI = async(reqBody)=>{
    return await CommonAPI("POST",`${SERVER_URL}/student-registration`,reqBody)
}

// // get all students
export const getAllStudentsAPI = async()=>{
    return await CommonAPI("GET",`${SERVER_URL}/all-students`)
}
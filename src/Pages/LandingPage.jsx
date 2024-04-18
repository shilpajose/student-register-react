import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <div className='container w-100 mt-5 shadow border p-5'>
                <h2 className='text-center'>Welcome Students</h2>
                <p className='text-center'>students registration started !!!</p>
                <div className='text-center mt-5'>
                    <Link to={'/home'}>
                        <button className='btn btn-info'>Get Started</button>
                    </Link>  
                </div>
            </div>
        </>
    )
}

export default LandingPage
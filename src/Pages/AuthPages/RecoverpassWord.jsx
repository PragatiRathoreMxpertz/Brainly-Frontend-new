import React from 'react'
import { Link } from 'react-router-dom'

function RecoverpassWord() {
    return (
        <div>
            <h2>Please Fill the Email</h2>
            <form >
                <div className='flex flex-col justify-center items-center'>
                    <label htmlFor="username" className='text-white'>Username:</label>
                    <input
                        type="text"
                        id="username"


                        required
                    />
                </div>
            </form>
            <button type="submit" >Submit</button>
            
            <p className='text-white'>
                Don't have an account?
                <Link to="/SignUpPage"><button>SignUp</button> </Link>
            </p>
        </div>
    )
}

export default RecoverpassWord
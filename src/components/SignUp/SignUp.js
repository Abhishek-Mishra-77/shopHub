import React from 'react';
import '../Login/Login.css'
import {
    EyeInvisibleOutlined, EyeOutlined
} from '@ant-design/icons';

import '../Login/Login.css'

const SignUp = () => {
    return (
        <div className='login-page'>
            <div>
                <div className='login-page'>
                    <div>
                        <form className='common-background'>
                            <h2>Sign Up</h2>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' id='email' name='email' placeholder='abc@example.com' required />
                            <label htmlFor='password'>Password:</label>
                            <input type='password' id='password' name='password' required />
                            <label htmlFor='password'>Confirm Passwords:</label>
                            <div className='eye'>
                                <input type='password' id='password' name='password' required />
                                <i><EyeInvisibleOutlined /></i>
                                {/* <input type='text' id='password' name='password' required />
                                   <i><EyeOutlined /></i> */}
                            </div>
                            <button className='loginButton' type='submit' disabled>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
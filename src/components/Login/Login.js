import React from 'react';
import './Login.css'
import {
    EyeInvisibleOutlined
} from '@ant-design/icons';


const Login = () => {

    return (
        <div className='login-page'>
            <div>
                <form className='common-background'>
                    <h2>Login</h2>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' placeholder='abc@example.com' required />
                    <label htmlFor='password'>Password:</label>
                    <div className='eye'>
                        <input type='password' id='password' name='password' required />
                        <i><EyeInvisibleOutlined /></i>
                        {/* <input type='text' id='password' name='password' required />
                        <i><EyeOutlined /></i> */}
                    </div>
                    <button className='loginButton' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
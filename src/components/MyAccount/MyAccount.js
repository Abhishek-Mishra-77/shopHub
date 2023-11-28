import React from 'react';
import './MyAccount.css'
import {
    EyeInvisibleOutlined, EyeOutlined, DeleteOutlined, ExclamationCircleOutlined
} from '@ant-design/icons';
import './MyAccount.css';

const MyAccount = () => {
    return (
        <main className='main-content'>
            <div className='myaccount-page common-background'>
                <div className='login-page user-profile-page'>
                    <form>
                        <h2>Update Password</h2>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' placeholder='abc@example.com' required />
                        <label htmlFor='currentPassword'>Current Password:</label>
                        <input type='password' id='currentpassword' name='currentpassword' required />
                        <label htmlFor='newPassoword'>New Password:</label>
                        <input type='password' id='newPassoword' name='newPassword' required />
                        <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <div className='eye'>
                            <input type='password' id='password' name='password' required />
                            <i><EyeInvisibleOutlined /></i>
                            {/* <input type='text' id='password' name='password' required />
                        <i><EyeOutlined /></i> */}
                        </div>
                        <button className='loginButton' type='submit'>Update Password</button>
                    </form>
                </div>
                <div className='order-details'>
                    <h2>Order Details</h2>
                    <table>
                        <tr>
                            <th>ORDER ID</th>
                            <th>TIME STAMP</th>
                            <th>TOTAL</th>
                            <th>ACTIONS</th>
                        </tr>
                        <tr>
                            <td>65526dsdfs</td>
                            <td>22102021</td>
                            <td>$336</td>
                            <td className='actions'>
                                <ExclamationCircleOutlined className='info' />
                                <DeleteOutlined className='delete' />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>

    )
}

export default MyAccount
import React from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {loginFun} from '../actions/action'

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const login =(e)=>{
        
        const array = document.querySelectorAll('.item input')
        if (array[0].value === '' || array[1].value === '') {
            alert('Please fill the details!')
            dispatch(loginFun(false))
        }else{
            for (let i = 0; i < array.length; i++) {
                localStorage.setItem('username',array[0].value)
                localStorage.setItem('password',array[1].value)
            }
            for (let i = 0; i < array.length; i++) {
                array[0].value = ""
                array[1].value = ""
            }
            dispatch(loginFun(true))
            history.push('/')
        }
        
    }

    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form action="/" >
                    <div className="item">
                        <input type="text" placeholder="Enter your Username" />
                    </div>
                    <div className="item">
                        <input type="password" placeholder="Enter your Password" />
                    </div>
                    <div className="item">
                        <button type='button' onClick={(e)=>{login(e);}}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginFun, logoutFun } from '../actions/action'


const Nav = () => {
    const states = useSelector((state) => state.loginReducer)
    const dispatch = useDispatch()
    // console.log(states)
    const history = useHistory()
    const [active1, setActive1] = useState("")
    const [active2, setActive2] = useState("actives")
    const [logout, setlogout] = useState("hide")

    window.addEventListener('load',()=>{
        // console.log("reload the website")
        localStorage.setItem('loginState',states)
    })

    useEffect(() => {
        localStorage.setItem('loginState',states)
        if (states) {
            setlogout("")
            setActive2('hide')
            setActive1('actives')
            history.push('/')
        } else {
            setlogout("hide")
            setActive2('actives')
            setActive1('')
            history.push('/login')
        }
    })

    const click = (e) => {
        // console.log(e.target.innerHTML)
        if (e.target.innerHTML === 'Home') {
            if (states === true) {
                setActive1('actives')
                setActive2('')
                // history.push('/')
            } else {
                // history.push('/login')
            }

        } if (e.target.innerHTML === 'Login') {
            setActive2('actives')
            setActive1('')
        }
    }

    const Logout = (e) => {
        dispatch(logoutFun())
    }


    return (
        <>
            <div className="nav">
                <NavLink onClick={(e) => click(e)} className={active1} to="/">Home</NavLink>
                <NavLink onClick={(e) => click(e)} className={active2} to="/login">Login</NavLink>
                <NavLink className={logout} onClick={(e) => Logout(e)} to="/">Logout</NavLink>
            </div>
        </>
    )
}

export default Nav
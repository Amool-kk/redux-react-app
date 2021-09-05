import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFun, deleteFun,updateFun } from '../actions/action'


const Home = () => {

   

    const dispatch = useDispatch()

    const states = useSelector((state) => state.AddState).data

   
    const update = (e) => {
        let heading = document.querySelectorAll('.heading input')[e.target.value].value
        let body = document.querySelectorAll('.body input')[e.target.value].value
        console.log(heading,body)
        dispatch(updateFun({heading,body,id:e.target.value}))
        e.target.classList.add('hide')
    }

    const add = (e) => {
        e.preventDefault()
        

        dispatch(addFun({ "heading": document.querySelectorAll('.item input')[0].value, "body": document.querySelectorAll('.item input')[1].value }))

        document.querySelectorAll('.item input')[0].value = ""
        document.querySelectorAll('.item input')[1].value = ""
        // localStorage.setItem('data', states)
    }


    const Delete = (e) => {
        const elm = document.querySelectorAll('.card')[e.target.name].children[0].children[0].innerHTML
        // console.log()
        dispatch(deleteFun(elm))
    }


    return (
        <>
            <div className="form">
                <h1>Add your Notes</h1>
                <form>
                    <div className="item">
                        <input type="text" name="heading"  className="nheading" placeholder="Enter your Note Heading" />
                    </div>
                    <div className="item">
                        <input type="text" name="body" className="nbody" placeholder="Enter your Note" />
                    </div>
                    <div className="item">
                        <button onClick={(e) => { add(e) }}>Add</button>
                    </div>
                </form>
            </div>
            <div className="cont" >
                {states.map((item, i) => (
                    <div className="card" key={i}>
                        <div className="heading items">
                            <h1 onClick={(e) => {
                                e.target.classList.add('hide');
                                document.querySelector('.update').classList.remove('hide');
                                document.querySelectorAll('.heading input')[i].classList.remove('hide');
                                 document.querySelectorAll('.heading input')[i].value = document.querySelectorAll('.body p')[i].innerHTML;
                                document.querySelectorAll('.heading input')[i].focus();
                                document.querySelectorAll('.body input')[i].value = e.target.innerHTML;
                            }}
                            >{item.heading}</h1>
                            <input onBlur={(e)=>{e.target.classList.add('hide'); document.querySelectorAll('.heading h1')[i].classList.remove('hide')}} className="hide"  type="text" />
                        </div>
                        <div className="body items">
                            <p style={{ padding: '5px' }} onClick={(e) => {
                                e.target.classList.add('hide');
                                document.querySelector('.update').classList.remove('hide');
                                document.querySelectorAll('.body input')[i].classList.remove('hide'); 
                                document.querySelectorAll('.body input')[i].value = e.target.innerHTML;
                                document.querySelectorAll('.heading input')[i].value = document.querySelectorAll('.heading h1')[i].innerHTML;
                                document.querySelectorAll('.body input')[i].focus();
                                }}>{item.body}</p>
                            <input className="hide" onBlur={(e)=>{e.target.classList.add('hide'); document.querySelectorAll('.body p')[i].classList.remove('hide')}} stype="text" />
                        </div>
                        <div className="button items">
                            <button onClick={(e) => Delete(e)} name={i}>Delete</button>
                            <button value={i} onClick={(e) => update(e)} className="update hide">Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
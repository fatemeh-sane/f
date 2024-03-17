import './Form.css'
import swal from "sweetalert";

import {useState} from "react";

export default function Form() {
    const [userName, SetuserName] = useState('')
    const [userAge, SetAge] = useState('')

    const registerHandler= async (event) =>{
         event.preventDefault()
        const newUserObj={
             name:userName,
            age:userAge

        }
        const res=await fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify(newUserObj)
        })
        console.log(res)
        if(res.status===201 ){
            swal({
                title:"ثبت نام شما با موفقیت انجام شد",
                icon:'success',
                buttons:'خیلی هم عالی'

            })

        }
        else {
            swal({
                //Error
            })
        }

        const newUserResult=await res.json()
        console.log(newUserResult)
    }
    return (
        <>
            <div className="login-page">
                <div className="form">
                    <form className="login-page">
                        <input type="text" placeholder="UserName" value={userName}
                               onChange={event => SetuserName(event.target.value)}/>
                        <input type="text" placeholder="userAge" value={userAge}
                               onChange={event => SetAge(event.target.value)}/>
                        <button onClick={registerHandler}>Register</button>
                        <p className="message">
                            Are you Registered? <a href="#">Login</a>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [Sinp, setSinp] = useState({
        Semail:"",
        Spassword1:"",
        Spassword2:""
    })
    const [isLogin, setIsLogin] = useState(true)
    const [userData, setUserData] = useState([])
    const [isSbtnD, setSbtnD] = useState(true)
    function SinpHandle(event){
        const {name, value} = event.target
        setSinp(oldSinp=>{
            return{
                ...oldSinp,
                [name]:value
            }
        })
    }
    function addUser(){
        setUserData(oldUserData=>{
            return [
                ...oldUserData,
                {
                    Email:Sinp.Semail,
                    password:Sinp.Spassword1
                }
            ]
        })
        alert("اکانت شما ساخته شد")
        window.open("/home","_self")
    }
    useEffect(()=>{
        if(Sinp.Semail
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )){
                if(Sinp.Spassword1 > 8 && Sinp.Spassword2 > 8 && Sinp.Spassword1 === Sinp.Spassword2){
                    setSbtnD(false)
                }
            }else{
                setSbtnD(true)
            }
    },[Sinp])


    const [Linp, setLinp] = useState({
        Lemail:"",
        Lpassword:""
    })
    function LinpHandle(event){
        const {name, value} = event.target
        setLinp(oldLinp=>{
            return{
                ...oldLinp,
                [name]:value
            }
        })
    }
    function loginHandle(){
        if(userData.includes(Linp)){
            alert("وارد اکانت خود شدید")
            window.open("/home","_self")
        }else{
            alert("اکانت مورد نظر وجود ندارد")
        }
        
    }
    if (isLogin){
        return (
            <>
                <div className='shadow signup mx-auto mt-5 p-5 bg-white rounded-3'>
                <Link to="/home"><button type="" className="btn-close" aria-label="Close"></button></Link>
                    <h2 className='text-center mt-2 mb-3'>ثبت نام</h2>
                    <label htmlFor='Semail' className='form-label'>ادرس ایمیل</label>
                    <input
                        name='Semail' 
                        id="Semail"
                        type="email"
                        placeholder='ایمیل را وارد کنید'
                        className='form-control mb-2'
                        onChange={SinpHandle}
                        value={Sinp.Semail}
                    />
                    <label htmlFor='SPassword1' className='form-label'>رمز عبور</label>
                    <input
                        name='Spassword1'
                        id="SPassword1"
                        type="password"
                        placeholder='رمز عبور را وارد کنید'
                        className='form-control mb-2'
                        onChange={SinpHandle}
                        value={Sinp.Spassword1}
                    />
                    <label htmlFor='SPassword2' className='form-label'>تایید رمز عبور</label>
                    <input
                        name='Spassword2'
                        id="SPassword2"
                        type="password"
                        placeholder='رمز عبور را دوباره وارد کنید'
                        className='form-control mb-4'
                        onChange={SinpHandle}
                        value={Sinp.Spassword2}
                    />
                    {isSbtnD?<button className='btn btn-primary w-100 mb-3' disabled>ثبت</button>:<button className='btn btn-primary w-100 mb-3' onClick={addUser}>ثبت</button>}
                    <Link onClick={()=>setIsLogin(false)} >قبلا حساب کاربری ساخته اید</Link>
                </div>    
            </>
        )
    }
    
    return (
    <>
        <form className='shadow signup mx-auto mt-5 p-5 bg-white rounded-3'>
        <Link to="/home"><button type="" className="btn-close" aria-label="close"></button></Link>
            <h2 className='text-center mt-2 mb-3'>ورود به حساب کاربری</h2>
            <label htmlFor='Lemail' className='form-label'>ادرس ایمیل</label>
            <input
                name='Lemail' 
                id="Lemail"
                type="email"
                placeholder='ایمیل را وارد کنید'
                className='form-control mb-2'
                onChange={LinpHandle}
                value={Linp.Lemail}
            />
            <label htmlFor='LPassword' className='form-label'>رمز عبور</label>
            <input
                name='Lpassword'
                id="LPassword"
                type="password"
                placeholder='رمز عبور را وارد کنید'
                className='form-control mb-2'
                onChange={LinpHandle}
                value={Linp.Lpassword}
            />
            <button type='button' className='btn btn-primary w-100' onClick={loginHandle}>ثبت</button>
            <Link to="/apwiduhaw"> رمز عبور را فراموش کرده ام </Link><br />
            <Link onClick={()=>setIsLogin(true)} >ساخت اکانت جدید</Link>
        </form>    
    </>
  )
}
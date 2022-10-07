import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
        <form className='shadow signup mx-auto mt-5 p-5 bg-white rounded-3'>
        <Link to="/home"><button type="" class="btn-close" aria-label="Close"></button></Link>
            <h2 className='text-center mt-2 mb-3'>ثبت نام</h2>
            <label htmlFor='email' className='form-label'>ادرس ایمیل</label>
            <input
                name='email' 
                id="email"
                type="email"
                placeholder='ایمیل را وارد کنید'
                className='form-control mb-2'
            />
            <label htmlFor='Password1' className='form-label'>رمز عبور</label>
            <input
                name='password1'
                id="Password1"
                type="password"
                placeholder='رمز عبور را وارد کنید'
                className='form-control mb-2'
            />
            <label htmlFor='Password2' className='form-label'>تایید رمز عبور</label>
            <input
                name='password2'
                id="Password2"
                type="password"
                placeholder='رمز عبور را دوباره وارد کنید'
                className='form-control mb-4'
            />
            <button className='btn btn-primary w-100 mb-3'>ثبت</button>
            <Link to="/login" >قبلا حساب کاربری ساخته اید</Link>
        </form>    
    </>
  )
}




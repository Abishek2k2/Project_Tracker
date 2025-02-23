import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is : ", email);    
        console.log("password is : ", password);    
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                    submitHandler(e)
                }} action="" className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='outline-none border-2 border-emerald-600 bg-transparent rounded-full text-xl py-3 px-5 placeholder:text-white' type="email" placeholder='enter your email'/>
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='outline-none mt-3 border-2 border-emerald-600 bg-transparent rounded-full text-xl py-3 px-5 placeholder:text-white' type="password" placeholder='enter password'/>
                <button className='mt-5 border-none outline-none bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
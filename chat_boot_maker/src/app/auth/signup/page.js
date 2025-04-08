'use client'
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

 const Signup = () => {
  const [form,setForm] = useState({
    email:'',
    password:''
  });
  function chandelchnage(e){
    const fieldName = e.target.name;
    const fieldValue = e.target.value
    setForm({
      ...form,[fieldName]:fieldValue,
    })
  }
  function handelsubmit(e){
    e.preventDefault();
    console.log(form)
  }
  return (
    <div>
      <h1>Sign Up Pages!!</h1>
      <form onChange={chandelchnage} onSubmit={handelsubmit}>
        <input type="email" name='email' placeholder='enter email' />
        <input type="password" name="password" id=""  placeholder='enter password'/>
        <button type='submit'></button>
      </form>
    </div>
  )
}
export default Signup;

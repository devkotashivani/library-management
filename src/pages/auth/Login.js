import React, { useState } from 'react'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../components/customInput/CustomInput';
import { toast } from 'react-toastify';
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../config/FirebaseConfig"
import { getUserAction } from '../../user/userAction';
import { useDispatch } from 'react-redux';


function Login() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@gmail.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    }
  ]
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    const {email,password} = form
    try{
    const signInPromise = signInWithEmailAndPassword(auth, email,password)
    toast.promise(signInPromise,{
      pending: "In Progress ...",
    } )
    const signInValue = await signInPromise;
    // once logged in ..> send another call to firebase and grab user info and then save
    await getUserAction(signInValue.user.uid, dispatch);
    toast.success("Logged in");

  }
  catch (e){
    let {message} = e;
        if(e.message.includes("auth/email-already-in-use")){
          toast.error("Email Already Exists");
        }
        else{
          toast.error(message);
        }
  }
  
}
  return (
    <DefaultLayout>
      <div className='p-3 border shadow rounded admin-form'>
        <Form  onSubmit={handleOnSubmit}>
          {inputs.map((input , i) => (
            <CustomInput 
            key = {i}
            onChange= {handleOnChange}
            // label={input.label} 
            // placeholder={input.placeholder} 
            // type={input.type} 
            {...input}
            />
          ))}
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>

    </DefaultLayout>
  )
}


export default Login

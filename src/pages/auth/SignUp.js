import React, { useState } from 'react'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../components/customInput/CustomInput';
import { toast } from 'react-toastify';
import {auth, db} from "../../config/FirebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function SignUp() {

  const [form, setForm] = useState({});

  const inputs = [
    {
      label: "FIrst Name",
      name: "fname",
      type: "text",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "FIrst Name",
      name: "lname",
      type: "text",
      placeholder: "Smith",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "00000",
      required: true,
    },
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
      minLength:6,
    },
    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "*****",
      required: true,
      minLength:6,
    }
  ]
// capture value when someone is typing.
  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    if(form.password != form.confirmpassword){
      toast.error("Confirm pass and pass did not match!"); 
    return;
    }
    // use try catch
    const {email, password} = form
    try{
      console.log(email, password)
    const authSnapPromise =  createUserWithEmailAndPassword(auth, email, password);
    toast.promise(authSnapPromise,{
      pending: "In Progress ...",
    } )
    const authSnap =  authSnapPromise;
      if(authSnap.user.uid){
        console.log("I am here", form)
        const returnValue = await setDoc( doc(db, "users", authSnap.user.uid),form);
        console.log("R",returnValue)
        toast.success("New User has been created");
        console.log("Success")
      }
    
    } catch (e){
      console.log("Error",e)
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
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input, i) => (
           
            <CustomInput 
            key = {i}
            onChange = {handleOnChange}
            // label={input.label} 
            // placeholder={input.placeholder} 
            // type={input.type} 
            {...input}
            />
          ))}

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>

    </DefaultLayout>
  )
}

export default SignUp

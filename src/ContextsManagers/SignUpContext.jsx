import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";


const SignUpDataSource = () => {

  // FIELD VALUES OF THE SIGN UP INPUTS
    const newUser = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }

      const navigate = useNavigate();
      const [user, setUser] = useState(newUser);//STATE TO HOLD SIGN UP VALUES

       // ADDING SIGN UP FIELD VALUES TO THE SIGN UP STATE
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      } = user;



      // LOGIC TO SAVE THE INPUT FILL LIST TO THE SIGN UP STATE
      const handleSetUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };


      //LOGIC TO SAVE THE SIGN UP PROCESS
      const handleSignUp =  (e) => {
        e.preventDefault();
        if(firstName && lastName && email && password && confirmPassword && password === confirmPassword && password.length >= 8){
          navigate("/welcomeredirect");
          
          toast.success('Sign Up Successful')
        } else if(password !== confirmPassword){
          return toast.warn('Password do not match')
        }else if(password.length < 8){
          return toast.error('Password must contain at least 8 characters')
        }
    
      }

      return{handleSetUser,handleSignUp,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,}
}

const SignUpContext = createContext([])

export function useSignUpContext(){
    return useContext(SignUpContext)
  }


export const UseSignUp = ({children}) => {


  return (
    <SignUpContext.Provider value={SignUpDataSource()}>
      {children}
    </SignUpContext.Provider>
  )
}


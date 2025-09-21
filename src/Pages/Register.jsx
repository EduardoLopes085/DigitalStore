import React from 'react'
import Header from "../components/Header/header.jsx";
import Footer from "../components/Footer/footer.jsx";
import RegisterForm from '../components/Register-Form/register-form.jsx';



function RegisterPage() {
  return (
    <>
        <Header variant="minimal"/>
        <RegisterForm/>
        <Footer/>
    </>
  )
}

export default RegisterPage
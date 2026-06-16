import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import LoginForm from "../components/Login-Form/Login-form.jsx";


function LoginPage(){

    return(
        <>
            <Header variant="minimal"/>
            <LoginForm/>
            <Footer/>
        </>
       
    );
}


export default LoginPage;
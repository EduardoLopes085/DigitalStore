import Header from "../components/Header/header.jsx";
import Footer from "../components/Footer/footer.jsx";
import LoginForm from "../components/Login-Form/login-form.jsx";


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
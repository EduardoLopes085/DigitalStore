import Header from "../components/Header/header";
import Slider from "../components/swipper/swipper-home.jsx";
import SquareDestach from "../components/square-destach/square-destach.jsx";
import ColectionDestach from "../components/colection-destach/colection-destach.jsx";
import SpecialOffer from "../components/special-offer/special-offer.jsx";
import Footer from "../components/Footer/footer.jsx";

function Home(){

    return(
        <>
            <Header/>
            <Slider/>
            <SquareDestach/>
            <ColectionDestach/>
            <SpecialOffer/>
            <Footer/>
        </>
       
    );
}


export default Home;
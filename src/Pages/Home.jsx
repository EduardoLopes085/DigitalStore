import Header from "../components/Header/header";
import Slider from "../components/swipper/swipper-home.jsx";
import SquareDestach from "../components/square-destach/square-destach.jsx";
import ColectionDestach from "../components/colection-destach/colection-destach.jsx";
import SpecialOffer from "../components/special-offer/special-offer.jsx";
import Footer from "../components/Footer/footer.jsx";
import ProductGrid from "../components/Product-Grid/product-grid.jsx";


function HomePage(){

    return(
        <>
            <Header/>
            <Slider/>
            <SquareDestach/>
            <ColectionDestach/>
            <ProductGrid/>
            <SpecialOffer/>
            <Footer/>
        </>
       
    );
}


export default HomePage;
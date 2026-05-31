import Slider from "../components/swipper/swipper-home.jsx";
import SquareDestach from "../components/square-destach/square-destach.jsx";
import ColectionDestach from "../components/colection-destach/colection-destach.jsx";
import SpecialOffer from "../components/special-offer/special-offer.jsx";
import ProductGrid from "../components/Product-Grid/product-grid.jsx";
import Foto from "../assets/products/sneaker-photo.png"
import sneakers from "../mocks/sneakers.js";

function HomePage(){

    return(
        <>
            
            <Slider/>
            <SquareDestach/>
            <ColectionDestach/>
            <ProductGrid products={sneakers} variant = "default" title = "Produtos em Alta"/>
            <SpecialOffer/>
            
        </>
       
    );
}


export default HomePage;
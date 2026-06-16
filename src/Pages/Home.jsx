import Slider from "../components/swipper/Swipper-home.jsx";
import SquareDestach from "../components/square-destach/Square-destach.jsx";
import ColectionDestach from "../components/colection-destach/Colection-destach.jsx";
import SpecialOffer from "../components/special-offer/Special-offer.jsx";
import ProductGrid from "../components/Product-Grid/Product-grid.jsx";
import Foto from "../assets/products/sneaker-photo.png"
import sneakers from "../mocks/Sneakers.js";

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
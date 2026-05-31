import SingleCard from "../components/single-card/single-card.jsx";
import Foto from "../assets/products/sneaker-photo.png"
import ProductGrid from "../components/Product-Grid/product-grid.jsx";
import sneakers from "../mocks/sneakers.js";

function SingleProduto(){

    return(
        <>
            <SingleCard/>
            <ProductGrid products={sneakers} variant = "default" title = "Produtos Relacionados"/>
        </>
       
    );
}


export default SingleProduto;
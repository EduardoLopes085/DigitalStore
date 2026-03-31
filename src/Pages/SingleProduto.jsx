import SingleCard from "../components/single-card/single-card.jsx";
import Foto from "../assets/products/sneaker-photo.png"
import ProductGrid from "../components/Product-Grid/product-grid.jsx";

function SingleProduto(){

    const sneakers = [
            { id: 0, img: Foto, categoria: 'Tênis', name: 'K-Swiss V8', gender: 'masculino', price: 200, discountPrice: 100, discount: 50 },
            { id: 1, img: Foto, categoria: 'Tênis', name: 'Nike Revolution', gender: 'masculino', price: 319.99, discountPrice: 219.99, discount: 31 },
            { id: 2, img: Foto, categoria: 'Tênis', name: 'Asics Gel-Nimbus', gender: 'feminino', price: 749.99, discountPrice: 649.99, discount: 13 },
            { id: 3, img: Foto, categoria: 'Tênis', name: 'Reebok Nano X3', gender: 'masculino', price: 499.99, discountPrice: 499.99, discount: 0 },
        ];


    return(
        <>
            <SingleCard/>
            <ProductGrid products={sneakers} variant = "default" title = "Produtos Relacionados"/>
        </>
       
    );
}


export default SingleProduto;
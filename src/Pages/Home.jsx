import Slider from "../components/swipper/swipper-home.jsx";
import SquareDestach from "../components/square-destach/square-destach.jsx";
import ColectionDestach from "../components/colection-destach/colection-destach.jsx";
import SpecialOffer from "../components/special-offer/special-offer.jsx";
import ProductGrid from "../components/Product-Grid/product-grid.jsx";
import Foto from "../assets/products/sneaker-photo.png"

function HomePage(){

    const sneakers = [
        { id: 0, img: Foto, categoria: 'Tênis', name: 'K-Swiss V8', gender: 'masculino', price: 200, discountPrice: 100, discount: 50 },
        { id: 1, img: Foto, categoria: 'Tênis', name: 'Nike Revolution', gender: 'masculino', price: 319.99, discountPrice: 219.99, discount: 31 },
        { id: 2, img: Foto, categoria: 'Tênis', name: 'Asics Gel-Nimbus', gender: 'feminino', price: 749.99, discountPrice: 649.99, discount: 13 },
        { id: 3, img: Foto, categoria: 'Tênis', name: 'Reebok Nano X3', gender: 'masculino', price: 499.99, discountPrice: 499.99, discount: 0 },
        { id: 4, img: Foto, categoria: 'Tênis', name: 'Mizuno Wave Prophecy', gender: 'feminino', price: 999.99, discountPrice: 899.99, discount: 10 },
        { id: 5, img: Foto, categoria: 'Tênis', name: 'Adidas Ultraboost', gender: 'feminino', price: 599.99, discountPrice: 499.99, discount: 17 },
        { id: 7, img: Foto, categoria: 'Tênis', name: 'Puma RS-X', gender: 'masculino', price: 399.99, discountPrice: 399.99, discount: 0 }
    ];

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
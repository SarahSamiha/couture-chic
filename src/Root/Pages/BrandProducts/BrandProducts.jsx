import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import ProductDetails from "../ProductDetails/ProductDetails";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
    const brand = useLoaderData();
    const { _id, brandName, adImage1, adImage2, adImage3 } = brand;

    const [products, setProducts] = useState([]);
    // const [brandProducts, setBrandProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    // const tempProducts = [];

    // const brandProducts = products.find(product => product.brandName.toLowerCase() === brandName.toLowerCase())


    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={adImage1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-opacity-30 border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle  bg-opacity-30 border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={adImage2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle  bg-opacity-30 border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-opacity-30 border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={adImage3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-opacity-30 border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-opacity-30 border-none">❯</a>
                    </div>
                </div>
            </div>

            <div>
                {
                    products.map(product => {
                        if(product.brandName.toLowerCase() === brandName.toLowerCase()){
                          return (
                            <ProductCard key={product._id} product={product}></ProductCard>
                          )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default BrandProducts;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import ProductDetails from "../ProductDetails/ProductDetails";
import ProductCard from "./ProductCard";
import ErrorPage from "../ErrorPage/ErrorPage";

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

    const tempProducts = [];

    // const brandProducts = products.find(product => product.brandName.toLowerCase() === brandName.toLowerCase())


    return (
        <div>
            <div className="carousel h-[600px]">
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

            <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto">
                {
                    products ?
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    products.map(product => {
                                        if (product.brandName.toLowerCase() === brandName.toLowerCase()) {
                                            tempProducts.push(product);
                                            return (
                                                <ProductCard key={product._id} product={product}></ProductCard>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div>
                                {
                                    tempProducts.length === 0 &&
                                    <h1>No Products found</h1>
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <ErrorPage></ErrorPage>
                        </div>
                }
            </div>


        </div>
    );
};

export default BrandProducts;
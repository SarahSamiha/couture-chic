import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../BrandProducts/ProductCard";
import Title from "../Title";


const AllProducts = () => {
    const products = useLoaderData();

    const productsPerLoad = 6;
    const [next, setNext] = useState(productsPerLoad);

    const handleAllProductsLoadMore = () => {
        setNext(next + productsPerLoad)
    }

    return (
        <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto mt-28">
            <div>
                <Title title={"All Products"}></Title>

                <p className="max-w-xs md:max-w-xl lg:max-w-xl mx-auto my-3 text-center" data-aos="fade-up" data-aos-duration="3000">
                    Elevate your wardrobe and redefine your personal style with ease, as you discover the finest in fashion. Immerse yourself in the art of exquisite dressing, where every purchase is a statement of luxury and refinement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                    {
                        products?.slice(0, next)?.map(product => <ProductCard key={product._id}
                            product={product}></ProductCard>)
                    }
                </div>
                {
                    next < products.length &&
                    <div className="text-center mb-6">
                        <button className="btn btn-primary" onClick={handleAllProductsLoadMore}>Load more</button>
                    </div>
                }
            </div>

        </div>

    );
};

export default AllProducts;

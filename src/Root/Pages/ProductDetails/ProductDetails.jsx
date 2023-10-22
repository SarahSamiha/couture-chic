import { useLoaderData } from "react-router-dom";
import { BsCartPlus } from 'react-icons/bs';

const ProductDetails = () => {
    const product = useLoaderData();
    const { productName, productImage, brandName, type, price, description, rating } = product;
    console.log(product);
    return (
        <div className="bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/pjF8Rm6/stacked-peaks-haikei.png)' }}>
            <div className="lg:max-w-5xl mx-auto border-2 border-transparent">
                <div className="card card-side bg-base-100 bg-opacity-50 shadow-xl my-12 grid grid-cols-2">
                    <figure className=""><img src={productImage} alt="Movie" /></figure>
                    <div className="card-body ">
                        <h1 className="border-b-2 border-neutral text-2xl font-semibold">{brandName}</h1>
                        <h2 className="card-title text-xl font-bold">{productName}</h2>
                        <p>{description} <span className="badge badge-primary">
                            {type}
                        </span></p>

                        <div className="flex">
                            <p className="text-lg font-semibold">Price: ${price}</p>
                            <p className="flex justify-end text-lg font-semibold">Rating: {rating}</p>
                        </div>
                        <div className="card-actions justify-end ">
                            <button className="btn btn-primary w-full">
                                <BsCartPlus className="text-2xl font-semibold"></BsCartPlus>
                                Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
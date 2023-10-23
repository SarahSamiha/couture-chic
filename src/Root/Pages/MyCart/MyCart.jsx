import { useLoaderData } from "react-router-dom";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import CartCard from "./CartCard";
import { useState } from "react";

const MyCart = () => {
    const loadedCart = useLoaderData();

    const [cart, setCart] = useState(loadedCart);

    console.log(cart);
    return (
        <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto">
            <div className="font-bold text-4xl my-3 md:my-12 p-6 bg-primary rounded-xl bg-opacity-30 flex justify-center items-center gap-6">
                <h1>My Cart</h1>
                <HiOutlineShoppingCart></HiOutlineShoppingCart>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-6">
                {
                    cart.map(product => <CartCard
                        key={product._id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                    ></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;
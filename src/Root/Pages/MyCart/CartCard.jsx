import { RiDeleteBin5Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const CartCard = ({ product }) => {
    const { productName, productImage, brandName, price } = product;


    return (
        <div className="flex border rounded-3xl">
            <img className="w-[150px] h-[150px] rounded-l-3xl" src={productImage} alt="" />
            <div className="flex-grow flex flex-col">
                <p className="bg-primary bg-opacity-50 py-1 text-center font-bold text-xl w-full rounded-r-3xl rounded-b-none">{brandName}</p>
                <div className="pl-6 flex-grow">
                    <h1 className="text-lg font-semibold">{productName}</h1>
                    <p className="text-md font-medium">Price: ${price}</p>
                </div>
                <div className='flex justify-end'>
                    <button className='btn btn-ghost rounded-full'><RiDeleteBin5Fill className='text-error text-3xl font-bold'></RiDeleteBin5Fill></button>
                </div>
            </div>


        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default CartCard;
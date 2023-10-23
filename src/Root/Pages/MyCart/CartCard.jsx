import { RiDeleteBin5Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartCard = ({ product, cart, setCart }) => {
    const {_id, productName, productImage, brandName, price } = product;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "This is a limited edition product",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://couture-chic-server.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted from cart',
                                'success'
                            )
                            const remaining = cart.filter(prod => prod._id !== _id);
                            setCart(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div className="flex border border-primary border-opacity-30 rounded-3xl">
            <img className="w-[150px] h-[150px] rounded-l-3xl" src={productImage} alt="" />
            <div className="flex-grow flex flex-col">
                <p className="bg-primary bg-opacity-50 py-1 text-center font-bold text-xl w-full rounded-r-3xl rounded-b-none">{brandName}</p>
                <div className="pl-6 flex-grow">
                    <h1 className="text-lg font-semibold">{productName}</h1>
                    <p className="text-md font-medium">Price: ${price}</p>
                </div>
                <div className='flex justify-end'>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost rounded-full'><RiDeleteBin5Fill className='text-error text-3xl font-bold'></RiDeleteBin5Fill></button>
                </div>
            </div>


        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
}

export default CartCard;
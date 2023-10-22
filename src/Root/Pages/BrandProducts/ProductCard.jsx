import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, productName, productImage, brandName, type, price, description, rating } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="max-h-[300px] h-1/2"><img className="h-full w-full" src={productImage} alt="Product Image" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-neutral">{rating}</div>
                </h2>
                <p>{description.length > 100 ? `${description.slice(0, 100)}...` : `${description}`}</p>
                <div className="card-actions">
                    <div className="badge badge-outline">{type}</div>
                    <div className="badge badge-outline">${price}</div>
                    <div className="badge bg-primary font-bold bor">{brandName}</div>

                </div>
                <div className='flex justify-between mt-6'>
                    <Link to={`/updateProduct/${_id}`}><button className="btn btn-primary px-10">Update</button></Link>

                    <Link to={`/productDetails/${_id}`}><button className="btn btn-neutral px-10">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard;
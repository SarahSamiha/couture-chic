

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
                <p>{description}</p>
                <div className="card-actions justify-end">                  
                    <div className="badge badge-outline">{type}</div>
                    <div className="badge badge-outline">${price}</div>
                    <div className="badge bg-primary font-bold bor">{brandName}</div>
                    
                </div>
                <div>
                <button className="btn btn-primary w-1/2 ">Update</button>
                <button className="btn btn-neutral w-1/2 ">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
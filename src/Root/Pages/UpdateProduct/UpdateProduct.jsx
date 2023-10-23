import Swal from 'sweetalert2';
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const beforeUpdateProduct = useLoaderData();
    const {_id, productName, productImage, brandName, type, price, description, rating } = beforeUpdateProduct;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;


        const updatedProduct = { productName, productImage, brandName, type, price, description, rating }

        console.log(updatedProduct);

        fetch(`https://couture-chic-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div className=" min-h-screen bg-base-200 px-6 md:px-28 py-12">
            <h1 className=" text-5xl font-bold mb-6 text-center">Update Product</h1>
            <form onSubmit={handleUpdateProduct} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" defaultValue={productName} name="productName" placeholder="Product Name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="text" defaultValue={productImage} name="productImage" placeholder="Image URL" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <div className="space-y-6">
                        <input type="text" defaultValue={brandName} name="brandName" placeholder="Brand Name" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <div className="space-y-6">
                        <input type="text" defaultValue={type} name="type" placeholder="Type: Tops/Pants/Watch/ Glass/ Perfume etc" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <div className="space-y-6">
                        <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control w-full row-span-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <div className="space-y-6">
                        <textarea defaultValue={description} name="description" placeholder="Short Description" className="textarea textarea-bordered h-40 w-full" required></textarea>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="space-y-6">
                        <input type="number" defaultValue={rating} name="rating" placeholder="Rating: 1 to 5" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input className="btn btn-primary btn-block lg:col-span-2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;
import Swal from 'sweetalert2';


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productImage = form.productImage.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;


        const newProduct = { productName, productImage, brandName, type, price, description, rating }

        console.log(newProduct);

        fetch('https://couture-chic-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className=" min-h-screen bg-base-200 px-3 md:px-28 py-10">
            <h1 className=" text-5xl font-bold mb-6 text-center">Add a New Product</h1>
            <form onSubmit={handleAddProduct} className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="text" name="productImage" placeholder="Image URL" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <div className="space-y-6">
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <div className="space-y-6">
                        <input type="text" name="type" placeholder="Type: Tops/Pants/Watch/ Glass/ Perfume etc" className="input input-bordered w-full"  required/>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <div className="space-y-6">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full"  required/>
                    </div>
                </div>
                <div className="form-control w-full row-span-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <div className="space-y-6">
                        <textarea name="description" placeholder=" Short Description" className="textarea textarea-bordered h-40 w-full"  required></textarea>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="space-y-6">
                        <input type="number" name="rating" placeholder="Rating: 1 to 5" className="input input-bordered w-full"  required/>
                    </div>
                </div>
                <input className="btn btn-primary btn-block lg:col-span-2" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;
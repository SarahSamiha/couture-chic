import Swal from 'sweetalert2';

const AddBrand = () => {

    const handleAddBrand = e => {
        e.preventDefault();
        const form = e.target;
        const brandName = form.brandName.value;
        const brandThumbnailImage = form.brandThumbnailImage.value;
        const adImage1 = form.adImage1.value;
        const adImage2 = form.adImage2.value;
        const adImage3 = form.adImage3.value;

        const newBrand = {brandName, brandThumbnailImage, adImage1, adImage2, adImage3 }

        console.log(newBrand);

        fetch('http://localhost:5000/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 px-28 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src="/src/assets/undraw_shopping_bags_sbj5.svg" className=" rounded-lg w-1/2" />
                <form onSubmit={handleAddBrand} className="w-full space-y-6">
                    <h1 className="text-5xl font-bold mb-6">Add a New Brand</h1>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Thumbnail Image</span>
                        </label>
                        <input type="text" name="brandThumbnailImage" placeholder="Image URL" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Advertisement Images</span>
                        </label>
                        <div className="space-y-6">
                            <input type="text" name="adImage1" placeholder="Image URL" className="input input-bordered w-full" />
                            <input type="text" name="adImage2" placeholder="Image URL" className="input input-bordered w-full" />
                            <input type="text" name="adImage3" placeholder="Image URL" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <input className="btn btn-primary btn-block" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddBrand;
// 	Brand image
// 	Brand name
// 	Advertisement images

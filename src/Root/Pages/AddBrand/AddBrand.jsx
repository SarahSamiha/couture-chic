

const AddBrand = () => {
    return (
        <div className="md:max-w-4xl md:my-14 mx-auto card border bg-liquid-cheese">
            <h1 className="card-title">Add a Brand</h1>
            <div className="space-y-6 card-body">
                <div>
                    <h3>Brand Name</h3>
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <h3>Thumbnail Photo URL</h3>
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="thumbnail" placeholder="Thumbnail Photo URL" />
                </div>
                <div className="grid gap-6 justify-center">
                    <h3>Advertisement Images</h3>
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="advertisement1" placeholder="Advertisement Image URL" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="advertisement2" placeholder="Advertisement Image URL" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="advertisement3" placeholder="Advertisement Image URL" />
                </div>
            </div>
            
        </div>
    );
};

export default AddBrand;
// 	Brand image
// 	Brand name
// 	Advertisement images

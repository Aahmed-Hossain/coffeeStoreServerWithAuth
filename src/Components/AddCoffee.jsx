import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = (e)=> {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);
        // send data to the server
        fetch('https://coffee-store-server-side-3sr79axfy-ahmed-hossains-projects.vercel.app/coffee',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Great',
                    text: 'Your Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] P-24 min-h-screen p-24">
            <h2 className="text-3xl font-bold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}> 
                {/* form name and quantity row */}
                <div className="md:flex">

                <div className="form-control md:w-1/2">
                <label className="label"><span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Coffee Name" name="name" />
                </label>
                </div>

                <div className="form-control md:w-1/2 ml-4">
                <label className="label"><span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Available Quantity" name="quantity"/>
                </label>
                </div>

                </div>
                {/* form supplier and taste row */}
                <div className="md:flex">
                <div className="form-control md:w-1/2">
                <label className="label"><span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Supplier" name="supplier" />
                </label>
                </div>

                <div className="form-control md:w-1/2 ml-4">
                <label className="label"><span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Taste" name="taste"/>
                </label>
                </div>

                </div>
                {/* form category details row */}
                <div className="md:flex">

                <div className="form-control md:w-1/2">
                <label className="label"><span className="label-text">Category</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Category" name="category" />
                </label>
                </div>

                <div className="form-control md:w-1/2 ml-4">
                <label className="label"><span className="label-text">Details</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Details" name="details"/>
                </label>
                </div>

                </div>
                {/* form photo url row */}
                <div className="">
                <div className="form-control">
                <label className="label"><span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                <input className="input input-bordered w-full" placeholder="Photo URL" name="photo" />
                </label>
                </div>

                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#F4F3] mt-4"/>
            </form>
        </div>
    );
};

export default AddCoffee;
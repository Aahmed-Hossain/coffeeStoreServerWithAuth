/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees, setCoffees}) => {
    const {_id, name, quantity, supplier, taste, photo} = coffee;

    const handleDelete = _id => {
      console.log(_id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-store-server-side-3sr79axfy-ahmed-hossains-projects.vercel.app/coffee/${_id}`,{method:'DELETE'})
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount> 0){
              Swal.fire(
                'Deleted!',
                'Your coffee has been deleted.',
                'success'
              )
              const remaining = coffees.filter(item => item._id !== _id)
              setCoffees(remaining);
            }
          })
        }
      })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-auto h-56" src={photo} alt="Movie"/></figure>
        <div className="flex justify-between w-full pr-4">
          <div className="ml-4">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: <b>{quantity}</b></p>
          <p className="py-4">{supplier}.</p>
          <p>Taste: {taste}.</p>
          </div>
          <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-8">
  <button className="btn">View</button>
  <Link to={`updateCoffee/${_id}`}>
  <button className="btn">Edit</button></Link>
  <button onClick={()=> handleDelete(_id)} className="btn bg-orange-400">Delete</button>
</div>  
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Foodtable = ({ food }) => {
    const { _id, foodImage, foodName, foodQuantity, pickupLocation } = food

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/foods/${_id}`,{
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })    
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-20">
            <figure><img className="w-[280px] h-[200px]" src={foodImage} alt="Movie" /></figure>
            <div className="flex justify-between gap-10 pl-10">
                <div>
                    <p className="text-xl font-medium">Food Name: {foodName}</p>
                    <p className="text-xl font-medium">Food Quantity : {foodQuantity}</p>
                    <p className="text-xl font-medium">Pickup Location: {pickupLocation}</p>
                </div>               
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <Link to={`/updatefood/${_id}`}><button className="btn btn-primary">Update</button></Link>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodtable;
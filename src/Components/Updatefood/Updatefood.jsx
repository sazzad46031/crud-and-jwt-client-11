import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Updatefood = () => {
    const updatefood = useLoaderData()
    const {user} = useContext(AuthContext)

    const handleUpdateFood = event => {
        event.preventDefault()
        const form = event.target
        const foodName =form.foodName.value
        const foodImage =form.foodImage.value
        const foodQuantity =form.foodQuantity.value
        const pickupLocation =form.pickupLocation.value
        const expiredDate =form.expiredDate.value
        const additionalNotes =form.additionalNotes.value
        const foodStatus =form.foodStatus.value
        const donatorName =form.donatorName.value 
        const donatorEmail =form.donatorEmail.value
        const donatorImage =form.donatorImage.value
        const updateFood = {foodName, foodImage, foodQuantity, pickupLocation, expiredDate, additionalNotes, foodStatus, donatorName, donatorEmail, donatorImage}
        console.log(updateFood)
        fetch(`http://localhost:5000/foods/updatefood/${_id}`,{
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateFood)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Food updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-lime-200 max-w-screen-2xl mx-auto p-24">
        <h2 className="text-5xl text-purple-400 font-bold mb-8 text-center">Update Food</h2>
        <form onSubmit={handleUpdateFood}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" placeholder="Food Name" name="foodName" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input type="text" placeholder="Food Image" name="foodImage" className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Quantity</span>
                    </label>
                    <input type="number" placeholder="Food Quantity" name="foodQuantity" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" placeholder="Pickup Location" name="pickupLocation" className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Expired Date</span>
                    </label>
                    <input type="date" placeholder="Expired Date" name="expiredDate" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <input type="text" placeholder="Additional Notes" name="additionalNotes" className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Donator Image</span>
                    </label>
                    <input type="text" defaultValue={user.photoURL} name="donatorImage" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Donator Name</span>
                    </label>
                    <input type="text"  defaultValue={user.displayName} name="donatorName" className="input w-full input-bordered" />
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Donator Email</span>
                    </label>
                    <input type="text" defaultValue={user.email} name="donatorEmail" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Food Status</span>
                    </label>
                    <input type="text" placeholder="Available" name="foodStatus" className="input w-full input-bordered" />
                </div>
            </div>
                <input type="submit" value="Update Food" className="btn btn-block bg-purple-400" />
        </form>
    </div>
    );
};

export default Updatefood;
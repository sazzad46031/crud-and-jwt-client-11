import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Fooddetails = () => {
    const singleFood = useLoaderData()
    const { _id,foodName, foodImage, foodQuantity, pickupLocation, expiredDate, additionalNotes, donatorName, donatorEmail } = singleFood
    const {user} = useContext(AuthContext)

    const handleRequest = event => {
        event.preventDefault()
        const form = event.target
        const foodName =form.foodName.value
        const foodImage =form.foodImage.value
        const foodId =form.foodId.value
        const pickupLocation =form.pickupLocation.value
        const expiredDate =form.expiredDate.value
        const additionalNotes =form.additionalNotes.value
        const userEmail =form.userEmail.value
        const donatorName =form.donatorName.value 
        const donatorEmail =form.donatorEmail.value
        const requestDate =form.requestDate.value
        const donationMoney =form.donationMoney.value
        const newRequest = {foodName, foodImage, foodId, pickupLocation, expiredDate, additionalNotes, userEmail, donatorName, donatorEmail, requestDate, donationMoney}
        console.log(newRequest)
        fetch('http://localhost:5000/request',{
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newRequest)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Food requested successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <img className="w-[500px] h-[320px]" src={foodImage} alt="" />
            <p className="text-3xl text-primary font-semibold">Donator information : </p>
            <p className="text-xl font-medium">Donator name: {donatorName}</p>
            <p className="text-xl font-medium">Pickup location: {pickupLocation}</p>
            <p className="text-3xl text-primary font-semibold">Single food information :</p>
            <p className="text-3xl text-primary font-semibold">Food name: {foodName}</p>
            <p className="text-xl font-medium">Food quantity: {foodQuantity}</p>
            <p className="text-xl font-medium">Expired date: {expiredDate}</p>
            <button className="btn btn-secondary" onClick={() => document.getElementById('my_modal_1').showModal()}>Request</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleRequest}>
                        <div className="md:flex mb-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text"  defaultValue={foodName} name="foodName" readOnly className="input w-full input-bordered" />
                            </div>
                            <div className="form-control ml-4">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" defaultValue={foodImage} name="foodImage" readOnly className="input w-full input-bordered" />
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Id</span>
                                </label>
                                <input type="text" defaultValue={_id} name="foodId" readOnly className="input w-full input-bordered" />
                            </div>
                            <div className="form-control ml-4">
                                <label className="label">
                                    <span className="label-text">Food Donator Email</span>
                                </label>
                                <input type="text" defaultValue={donatorEmail} name="donatorEmail" readOnly className="input w-full input-bordered" />
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Donator Name</span>
                                </label>
                                <input type="text" defaultValue={donatorName} name="donatorName" readOnly className="input w-full input-bordered" />
                            </div>
                            <div className="form-control ml-4">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" defaultValue={user.email} name="userEmail" readOnly className="input w-full input-bordered" />
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Requset Date</span>
                                </label>
                                <input type="date" name="requestDate" readOnly className="input w-full input-bordered" />
                            </div>
                            <div className="form-control ml-4">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" defaultValue={pickupLocation} name="pickupLocation" readOnly className="input w-full input-bordered" />
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expired Date</span>
                                </label>
                                <input type="text" defaultValue={expiredDate} name="expiredDate" readOnly className="input w-full input-bordered" />
                            </div>
                            <div className="form-control ml-4">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" placeholder="Additional Notes" name="additionalNotes" className="input w-full input-bordered" />
                            </div>
                        </div>
                            <div className="form-control ml-4">
                                <label className="label">
                                    <span className="label-text">Donation Money</span>
                                </label>
                                <input type="text" placeholder="Donation Money" name="donationMoney" className="input w-full input-bordered" />
                            </div>
                            <input type="submit" value="Request" className="btn btn-block mt-4 bg-purple-400" />
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Fooddetails;
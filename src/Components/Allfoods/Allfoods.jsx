

const Allfoods = ({food}) => {
    const {foodName, foodImage, foodQuantity, pickupLocation, expiredDate, additionalNotes, donatorName, donatorImage} = food
    return (
        <div>
            
            <img className="w-[500px] h-[320px]" src={foodImage} alt="" /> 
            <p className="text-3xl text-primary font-semibold">{foodName}</p>
            <p className="text-xl font-medium">Food quantity: {foodQuantity}</p>
            <p className="text-xl font-medium">Pickup location: {pickupLocation}</p>
            <p className="text-xl font-medium">Expired date: {expiredDate}</p>
            <p className="text-xl font-medium">Additional notes: {additionalNotes}</p>
            <p className="text-xl font-medium">Donator name: {donatorName}</p>
            <p className="text-xl font-medium">Donator image: {donatorImage}</p> 
            <button className="btn btn-primary mt-4">View detail</button>             
        </div>
    );
};

export default Allfoods;
import { useLoaderData } from "react-router-dom";
import Foodtable from "../Components/Foodtable/Foodtable";


const ManageMyFoods = () => {
    const foods = useLoaderData()
   
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {
                foods.map(food => <Foodtable key={food._id} food={food}></Foodtable>)
            }
        </div>
    );
};

export default ManageMyFoods;
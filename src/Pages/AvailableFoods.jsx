import { useLoaderData } from "react-router-dom";
import Allfoods from "../Components/Allfoods/Allfoods";


const AvailableFoods = () => {
    const availableFoods = useLoaderData()

    return (
        <div>
            <h2 className="text-5xl font-bold mt-10 mb-10 text-center">Available foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    availableFoods.map(food => <Allfoods key={food._id} food={food}></Allfoods>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
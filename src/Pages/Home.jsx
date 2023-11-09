import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import Hungry from "../Components/Hungry/Hungry";
import Share from "../Components/Share/Share";
import Foodcollection from "../Components/Foodcollection/Foodcollection";




const Home = () => {
    const foods = useLoaderData()
    const {foodQuantity} = foods
    
    const sortedfoods = foods.sort(function(a,b){
        if(a.foodQuantity < b.foodQuantity) return 1;
        if(a.foodQuantity > b.foodQuantity) return -1;
        return 0
    })

    
    return (
        <div>
            <Header></Header>
            <h2 className="text-5xl font-bold mt-10 mb-10 text-center">Featured foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sortedfoods && sortedfoods.slice(0, 6).map(food => <Foodcollection key={food._id} food={food}></Foodcollection>)
                }
            </div>
            <Link to="/availablefoods">
                <div className="text-center mt-20">
                    <button className="btn btn-success">Show all</button>
                </div>
            </Link>
            <Hungry></Hungry>
            <Share></Share>

        </div>
    );
};

export default Home;
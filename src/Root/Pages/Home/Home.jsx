
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import BrandCard from "./BrandCard";


const Home = () => {

    const brands = useLoaderData();
    console.log(brands);

    return (
        <div>
            <Header></Header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-6 my-10">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Home;
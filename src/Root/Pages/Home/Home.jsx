
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import BrandCard from "./BrandCard";
import Title from "./Title";


const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Header></Header>

            <Title
                title={"Browse by Your Favorite Brand"}>
            </Title>

            <p className="max-w-xs md:max-w-xl lg:max-w-xl mx-auto my-3 text-center">
                Step into a realm of unrivaled sophistication and style. Our platform is your gateway to the world of high-end fashion and luxury brands, all thoughtfully curated and brought together in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto gap-6 my-10">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;

// At [Your Website Name], we invite you to shop in style and define your unique signature look, creating a fashion experience unlike any other.
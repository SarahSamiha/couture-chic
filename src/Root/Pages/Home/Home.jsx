import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import BrandCard from "./BrandCard";
import Title from "./Title";
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';


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

            {/* Contact us */}
            <div className="hero h-[500px] mt-14 lg:rounded-2xl  lg:max-w-6xl mx-auto mb-12" style={{ backgroundImage: 'url(https://i.ibb.co/QKyDS0j/martin-martz-z-Ea54wu6-IYY-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 lg:rounded-2xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl ">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                        <p className="mb-5 max-w-lg mx-auto">
                            At Couture Chic, we invite you to shop in style and define your unique signature look, creating a fashion experience unlike any other.
                        </p>
                        <div className="hero">
                            <div className="hero-content text-center text-neutral-content">
                                <div className="w-[250px] h-[250px] bg-primary bg-opacity-30 flex flex-col justify-center items-center p-12">
                                    <FaLocationDot className="text-3xl font-bold"></FaLocationDot>
                                    <p className="text-xl font-bold">Our Main Office</p>
                                    <p>Sky Villa 14 <br />
                                        Rd 10, Dhaka 1212</p>
                                </div>
                                <div className="w-[250px] h-[250px] bg-primary bg-opacity-30 flex flex-col justify-center items-center p-12">
                                    <AiFillPhone className="text-3xl font-bold"></AiFillPhone>
                                    <p className="text-xl font-bold">Phone Number</p>
                                    <p>+880-191-949-5995 <br />
                                        +880-190-037-7359</p>
                                </div>
                                <div className="w-[250px] h-[250px] bg-primary bg-opacity-30 flex flex-col justify-center items-center p-12">
                                    <IoIosMail className="text-3xl font-bold"></IoIosMail>
                                    <p className="text-xl font-bold">Email</p>
                                    <p>sarahfaizakhan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


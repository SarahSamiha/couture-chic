

const Header = () => {
    return (
        <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/YbXpTBk/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md " data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="mb-5 text-5xl font-bold">Couture Chic</h1>
                    <p className="mb-5">
                        Experience Elegance Like Never Before!
                        Unveil a World of High-End Fashion & Luxury Brands,
                        All Within Your Reach, Right Here at Couture Chic.
                        Indulge in the Art of Exquisite Dressing,
                        Where Luxury Meets Convenience.
                        Shop in Style, Define Your Signature Look!
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Header;
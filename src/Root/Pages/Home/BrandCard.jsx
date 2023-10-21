import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { _id, brandName, brandThumbnailImage, brandLogo, adImage1, adImage2, adImage3 } = brand
    return (
        <Link to={`brands/${_id}`}>
            <div className="hero h-80 " style={{ backgroundImage: `url(${brandThumbnailImage})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{brandName}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object.isRequired,
}

export default BrandCard;
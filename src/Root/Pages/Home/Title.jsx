import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <div className="flex justify-center items-center text-5xl text-neutral font-bold mt-10">
            <h1>{title}</h1>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;
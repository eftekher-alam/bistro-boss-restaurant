import PropTypes from 'prop-types';

const SectionHeader = ({ header, subHeader }) => {
    return (
        <div className='space-y-2 text-center w-72 md:w-96 mx-auto my-10'>
            <h2 className='text-yellow-500'>--- {subHeader} ---</h2>
            <h1 className='text-2xl lg:text-3xl border-y-4 py-3 uppercase'>{header}</h1>
        </div>
    );
};

SectionHeader.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string
}

export default SectionHeader;
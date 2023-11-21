import PropTypes from 'prop-types';

const SectionHeader = ({ header, subHeader }) => {
    return (
        <div className='space-y-2 text-center w-4/5 md:w-1/2 xl:w-1/3 mx-auto my-10'>
            <h2 className='text-yellow-500'>---{subHeader}---</h2>
            <h1 className='text-2xl lg:text-4xl border-y-4 py-3'>{header}</h1>
        </div>
    );
};

SectionHeader.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string
}

export default SectionHeader;
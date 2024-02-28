import PropTypes from 'prop-types'

const ChartSquare = ({ src, title }) => {
    return (
        <div style={{
            width: '300px', // Set your desired width
            height: '300px', // Set your desired height
            margin: '10px', // Set your desired margin
            overflow: 'hidden',
            borderRadius: '5px',
            boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        }}>
            <iframe
                title={title}
                width="100%"
                height="100%"
                src={src}
                frameBorder="0"
                style={{ border: 'none' }}
                allowFullScreen
            ></iframe>
        </div>
    )
}

ChartSquare.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ChartSquare

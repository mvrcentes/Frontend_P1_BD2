import { useState } from 'react'
import PropTypes from 'prop-types'

const StudentCodeInput = ({ onSubmit }) => {
    const [studentCode, setStudentCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(studentCode);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Student Code:
                <input type="text" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

StudentCodeInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default StudentCodeInput;

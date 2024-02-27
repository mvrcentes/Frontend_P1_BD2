import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './StudentCodeInput.module.css'

const StudentCodeInput = ({ onSubmit }) => {
    const [studentCode, setStudentCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(studentCode);
    };

    return (
        <form className={styles.studentCodeForm} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Student Code:
                <input className={styles.inputStudentCode} type="text" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} />
            </label>
            <button className={styles.studentCodeSubmit} type="submit">Submit</button>
        </form>
    );
};

StudentCodeInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default StudentCodeInput;

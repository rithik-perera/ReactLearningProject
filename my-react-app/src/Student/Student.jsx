import styles from './Student.module.css'
import propTypes from 'prop-types'

function Student(props){

    return(
        <div className={styles.student}>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    );
}

// validates the data types for the props
// have to import propTypes first from the node modules
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

export default Student;
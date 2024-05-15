import styles from './Sticker.module.css'
import propTypes from 'prop-types'
// import defaultProps from 'default-props'


function Sticker(props){
    return(
        <>
        <div className={styles.sticker}>
        <h1>Title: {props.title}</h1>
        <p>First Name: {props.fname}</p>
        <p>Last Name: {props.lname} </p>
        <p>Class: {props.class}</p>
        <p>Subject: {props.subject}</p>  
        </div>
        </>

    );


}

    Sticker.propTypes = {
        title : propTypes.string,
        fname: propTypes.string,
        lname: propTypes.string,
        class: propTypes.string,
        subject: propTypes.string
    }

Sticker.defaultProps = {
    title: "Text Book",
    fname : 'Guest',
    lname: 'Guest',
    class: 'no-class-allocated',
    subject: 'no-subject-allocated'
}

export default Sticker;
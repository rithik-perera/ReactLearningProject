import propTypes from 'prop-types'

function UserGreetings(props){

    return(
        props.loggedIn ? <h2 className='welcomeMessage'>welcome to the webpage {props.userName}</h2>:
        <h2 className='loginPrompt'> Sign in to access the webpage content</h2>
    );

}

UserGreetings.propTypes = {
    loggedIn : propTypes.bool,
    userName : propTypes.string
}

UserGreetings.defaultProps = {
    loggedIn : false,
    userName : 'Guest'
}

export default UserGreetings;
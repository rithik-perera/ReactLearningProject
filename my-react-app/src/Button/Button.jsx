import styles from  './Button.module.css';

function Button(){

    const onclickHandler = () => console.log('the button has been clicked')

    const onClickHandlerWithProps = (parameter)=> console.log('you have pressed the button ' + parameter);

    //executing an event handler

    let count = 0;

    const changingEventHandler = (e)=>  {
        if(count >= 3){
            e.target.textContent = 'You have clicked me enough';
        }
        count ++;

        
    }
        

    return(
        <button className={styles.button} onClick = {(e) => changingEventHandler(e)}>Click Here</button>
    );
}

export default Button;


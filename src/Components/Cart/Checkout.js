import classes from './Checkout.module.css';
import {useRef,useState} from 'react';


const isEmpty = (value) => value.trim() === '';
const isSixChar = (value) => value.trim().length === 6 ;

const Checkout = (props) => {

    const [formInputValidity,setFormInputValidity]=useState({
        name:true,
        area:true,
        city:true,
        pincode:true
    });

    const nameInputRef = useRef();
    const areaInputRef = useRef();
    const cityInputRef = useRef();
    const pincodeInputRef = useRef();
 
    const confirmHandler = (event) => {
       event.preventDefault();

       const enteredName = nameInputRef.current.value;
       const enteredArea = areaInputRef.current.value;
       const enteredCity = cityInputRef.current.value;
       const enteredPincode = pincodeInputRef.current.value;

       const enteredNameIsValid = !isEmpty(enteredName);
       const enteredAreaIsValid = !isEmpty(enteredArea);
       const enteredCityIsValid = !isEmpty(enteredCity);
       const enteredPincodeIsValid = isSixChar(enteredPincode);

       setFormInputValidity({
           name:enteredNameIsValid,
           area:enteredAreaIsValid,
           city:enteredCityIsValid,
           pincode:enteredPincodeIsValid,
       });

       const formIsValid =
         enteredNameIsValid &&
         enteredAreaIsValid &&
         enteredCityIsValid &&
         enteredPincodeIsValid;

        if(!formIsValid){
            return;
        }

        props.onConfirm({
           name:enteredName,
           arae:enteredArea,
           city:enteredCity,
           pincode:enteredPincode

        });
    };

    const nameControlClasses = `${classes.control} ${
        formInputValidity.name ? '' : classes.invalid
    }`;
    const areaControlClasses = `${classes.control} ${
        formInputValidity.area ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formInputValidity.city ? '' : classes.invalid
    }`;
    const pincodeControlClasses = `${classes.control} ${
        formInputValidity.pincode ? '' : classes.invalid
    }`;

    return(
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputValidity.name && <p>Please enter a valid name!</p> }
            </div>
            <div className={areaControlClasses}>
                <label htmlFor='area'>Area</label>
                <input type='text' id='area' ref={areaInputRef}/>
                {!formInputValidity.area && <p>Please enter a valid area!</p> }
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
                {!formInputValidity.city && <p>Please enter a valid city!</p> }
            </div>
            <div className={pincodeControlClasses}>
                <label htmlFor='pincode'>Pincode</label>
                <input type='text' id='pincode' ref={pincodeInputRef}/>
                {!formInputValidity.pincode && (<p>Please enter a valid pincode (Six characters long)!</p>) }
            </div>
            <div className={classes.actions}>
            <button type='button' onClick={props.onCancel} >Cancel</button>
            <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
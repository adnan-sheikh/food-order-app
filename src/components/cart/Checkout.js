import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isSixChars = (value) => value.trim().length > 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    isNameValid: true,
    isStreetValid: true,
    isPostalValid: true,
    isCityValid: true,
  });

  const { isNameValid, isStreetValid, isPostalValid, isCityValid } =
    formInputValidity;

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const handleConfirm = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const isEnteredNameValid = !isEmpty(enteredName);
    const isEnteredStreetValid = !isEmpty(enteredStreet);
    const isEnteredPostalValid = isSixChars(enteredPostal);
    const isEnteredNameCity = !isEmpty(enteredCity);

    const isFormValid =
      isEnteredNameValid &&
      isEnteredStreetValid &&
      isEnteredPostalValid &&
      isEnteredNameCity;

    setFormInputValidity({
      isNameValid: isEnteredNameValid,
      isStreetValid: isEnteredStreetValid,
      isPostalValid: isEnteredPostalValid,
      isCityValid: isEnteredNameCity,
    });

    if (!isFormValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    !isNameValid && classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    !isStreetValid && classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    !isPostalValid && classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    !isCityValid && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={handleConfirm}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!isNameValid && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!isStreetValid && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!isPostalValid && (
          <p>Please enter a valid postal code (6 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!isCityValid && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;

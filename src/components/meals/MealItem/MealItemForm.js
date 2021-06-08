import { useRef } from 'react';

import Input from '../../ui/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    enteredAmount = +enteredAmount;

    if (!enteredAmount.trim() || enteredAmount < 1 || enteredAmount > 5) {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

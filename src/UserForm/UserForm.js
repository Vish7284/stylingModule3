import React, { useState } from "react";
import Card from "../Card/Card";
import classes from './UserForm.module.css';
import Button from "../Button/Button";
import ErrorModal from "../UI/ErrorModal";


const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
   
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
  
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
    setError({
        title:"Invalid Input",
        message:'Thoda sahi se enter karo data'
    })
      return;
    }
    if (+enteredAge < 1) {
     setError({
        title:"age maanya nahi hai",
        message:'Age > 0 hona chahiye '
     })
      return;
    }
    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    console.log(userData);
    
    props.onAdd(userData);
    setEnteredName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null)
  }
  return (
    <>
      {error && <ErrorModal title= {error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            id="username"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="userage">Age (Years):</label>
          <input
            type="number"
            min="0"
            id="userage"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;

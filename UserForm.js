import React, { useState ,useRef} from "react";
import Card from "../Card/Card";
import classes from './UserForm.module.css';
import Button from "../Button/Button";
import ErrorModal from "../UI/ErrorModal";


const UserForm = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
const nameInputRef = useRef();
const ageInputRef = useRef();
const collegeInputRef = useRef();
  const [error, setError] = useState();

//   const nameChangeHandler = (event) => {
   
//     setEnteredName(event.target.value);
//   };
//   const ageChangeHandler = (event) => {
  
//     setEnteredAge(event.target.value);
//   };
  const submitHandler = (event) => {
    event.preventDefault();
   const enteredUserName = nameInputRef.current.value;
   const enteredUserAge = ageInputRef.current.value;
   const enteredCollege = collegeInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
    setError({
        title:"Invalid Input",
        message:'Thoda sahi se enter karo data'
    })
      return;
    }
    if (+enteredUserAge < 1) {
     setError({
        title:"age maanya nahi hai",
        message:'Age > 0 hona chahiye '
     })
      return;
    }
    const userData = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredUserAge,
      college:enteredCollege
    };
    console.log(userData);
    
    props.onAdd(userData);
    // setEnteredName("");
    // setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null)
  }
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            id="username"
            // value={enteredName}
            // onChange={nameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="userage">Age (Years):</label>
          <input
            type="number"
            min="0"
            id="userage"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="college">College Name:</label>
          <input
            type="text"
            id="college"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={collegeInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;

import React,{useState} from "react";
import UserForm from "./UserForm/UserForm";
import UserList from "./UI/UserList";

function App() {
  const [enteredUser,setEnteredList] = useState([]);

 const addHandler = (input)=>{
setEnteredList((prevList)=>{
  return[...prevList,input]
})
 }
  return (
    <div>
      <UserForm  onAdd={addHandler} />
      <UserList items={enteredUser}/>
    </div>
  );
}

export default App;

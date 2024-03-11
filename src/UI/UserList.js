import Card from "../Card/Card";
import classes from './UserList.module.css';


const UserList =(props) => {
return (
  <Card className={classes.users}>
    <ul>
      {props.items.map((user) => {
        return (
          <li key={user.id}>
            {user.name} is {user.age} years old.
          </li>
        );
      })}{" "}
    </ul>
  </Card>
);
};
export default UserList;
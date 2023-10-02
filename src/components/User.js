import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  const { name, location } = props;
  return (
    <div className="user">
      <h1>Count:{count}</h1>
      <h1>Coun2:{count2}</h1>
      <p>Nmae:{name}</p>
      <p>Location:{location}</p>
    </div>
  );
};
export default User;

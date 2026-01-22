export default User;
import React from "react";
import ReactDOM from "react-dom/client";
import User from "./App";

const User =()=>{
    return (
        // in return only use single fragments (<></>)  inside this we can create so many html tage
        <>
<User name="ronoldo" department="cse" />
// props passing
        </>

    )
}
export default User         
// Child component to display user info
// const UserDetails = ({ name, department }) => {
//   return (
//     <>
//       <h2>Name: {name}</h2>
//       <p>Department: {department}</p>
//     </>
//   );
// };

// // Parent component
// const User = () => {
//   return (
//     <>
//       {/* Passing props to the child component */}
//       <UserDetails name="Ronaldo" department="CSE" />
//     </>
//   );
// };

// export default User;
// import React from "react";
// import ReactDOM from "react-dom/client";
// import User from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<User />);

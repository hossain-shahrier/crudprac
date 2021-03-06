import { useState } from "react";

const CreateUser = ({ list, callback }) => {
  const [user, setUser] = useState({ id: "", name: "", dept: "" });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    list.push(user);
    callback(list);
    console.log(list);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="main">
        <div className="container">
          <input
            type="number"
            className=""
            placeholder="Enter Id"
            name="id"
            value={user.id}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="text"
            className=""
            placeholder="Enter  Name"
            name="name"
            value={user.name}
            onChange={(e) => onInputChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Your Dept"
            name="dept"
            value={user.dept}
            onChange={(e) => onInputChange(e)}
          />
          <button>Create User</button>
        </div>
      </div>
    </form>
  );
};

export default CreateUser;

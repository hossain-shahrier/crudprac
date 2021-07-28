import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import "./css/edit.css";
const EditUser = ({ list, callback }) => {
  const { id } = useParams();
  const [user, setUser] = useState({ id: "", name: "", dept: "" });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loadUser = () => {
    const result = list.map((user) => user);
    setUser(result[id - 1]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    list = list.filter((myuser) => myuser.id !== user.id);
    list.push(user);
    callback(list);
    console.log(list);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="main">
        <div className="container">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={(e) => onInputChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Your Name"
            name="dept"
            value={user.dept}
            onChange={(e) => onInputChange(e)}
          />
          <button>Update User</button>
        </div>
      </div>
    </form>
  );
};

export default EditUser;

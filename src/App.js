import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { users } from "./UserData";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";

function App() {
  const [user, setUsers] = useState(users);
  const deletecallback = (id) => {
    const data = user.filter((myuser) => myuser.id !== id);
    setUsers(data);
  };
  const updatecallback = (list) => {
    setUsers(list);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <AddUser />
          </Route>
          <Route path="/users">
            <UserList list={user} callback={deletecallback} />
          </Route>
          <Route
            path="/edit/:id"
            children={<EditUser list={user} callback={updatecallback} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

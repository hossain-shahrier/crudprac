import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home |</Link>
      <Link to="/create">Create user |</Link>
      <Link to="/users">User list</Link>
    </div>
  );
};

export default Navbar;

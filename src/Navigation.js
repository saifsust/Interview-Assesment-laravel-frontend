import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/bookMeta">Book-Meta</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;
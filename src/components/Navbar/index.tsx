import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav navbar-container bg-primary">
      <Link to="/">
        <h4>Github API</h4>
      </Link>
    </nav>
  );
};

export default Navbar;

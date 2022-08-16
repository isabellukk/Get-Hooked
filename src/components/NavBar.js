import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <Link to={`/`}>Home</Link>
        </ul>
        <ul>
          <Link to={`/click`}>Click</Link>
        </ul>
        <ul>
          <Link to={`/photosearch`}>Photos</Link>
        </ul>
        <ul>
          <Link to={`/facts`}>Facts</Link>
        </ul>
        <ul>
          <Link to={`/hues`}>Hues</Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

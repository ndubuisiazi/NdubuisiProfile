import '../style/App.css';
import { BsCircleFill } from 'react-icons/bs';
import '../style/index.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <div className="header">
      <Link to="/" className='header-logo' style={{ textDecoration: 'none' }}> NA </Link>
      <div>Full Stack Software Engineer | Banking Professional | Contact </div>
          
          
    </div>
  );
}

export default Header;


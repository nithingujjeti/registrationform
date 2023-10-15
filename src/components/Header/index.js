import './index.css' // Import your custom CSS for the header

const Header = () => (
  <div className="container">
    <div className="logo">Art Work </div>
    <nav className="links">
      <ul className="nav-links">
        <li className="name">
          <a href="#services">Home</a>
        </li>
        <li className="name">
          <a href="#services">Services</a>
        </li>
        <li className="name">
          <a href="#about">About Us</a>
        </li>
        <li className="name">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header

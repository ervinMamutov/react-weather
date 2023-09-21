import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header-title">
          <h1 className="title-text">{text}</h1>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;

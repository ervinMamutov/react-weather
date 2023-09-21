import './Test.css';
import PropTypes from 'prop-types';

const Test = ({ hour, temp, up }) => {
  return (
    <>
      <div className="card">
        <p>
          <span>HOVER ME</span>
        </p>
        <p>
          <span>HOVER ME</span>
        </p>
        <p>
          <span>HOVER ME</span>
        </p>
      </div>
    </>
  );
};

Test.propTypes = {
  hour: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  up: PropTypes.string.isRequired
};

export default Test;

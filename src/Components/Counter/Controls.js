import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles/styles.module.css';

const Controls = ({ onIncrement, onDecrement, disablePrev, disableNext }) => {
  return (
    <section className={Styles.controls}>
      <button
        className={disablePrev === 'true' ? Styles.disableBtn : Styles.button}
        type="button"
        onClick={disablePrev === 'true' ? null : onDecrement}
      >
        Назад
      </button>
      <button
        className={disableNext === 'true' ? Styles.disableBtn : Styles.button}
        type="button"
        onClick={disableNext === 'true' ? null : onIncrement}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  disablePrev: PropTypes.string.isRequired,
  disableNext: PropTypes.string.isRequired,
};

export default Controls;

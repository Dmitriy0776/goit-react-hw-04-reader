import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles/styles.module.css';

const Counter = ({ currentArticle, quantityArticle }) => (
  <p className={Styles.counter}>
    {currentArticle}/{quantityArticle}
  </p>
);

export default Counter;

Counter.propTypes = {
  currentArticle: PropTypes.number.isRequired,
  quantityArticle: PropTypes.number.isRequired,
};

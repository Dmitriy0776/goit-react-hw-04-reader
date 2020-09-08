import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles/styles.module.css';

const Publications = ({ article }) => {
  return (
    <article className={Styles.publication}>
      <h2>{article.title} </h2>
      <p>{article.text}</p>
    </article>
  );
};

Publications.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publications;

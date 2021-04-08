import React from 'react';
import statisticalData from './statistical-data.json';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = () =>  '#' + Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({title, stats}) => (

  <section className={styles.statistics}>
  {title && (<h2 className={styles.title}>{title}</h2>)}
  
  <ul className={styles.statList}>
  
    {stats.map(({id, label, percentage})=>(
      <li 
      key={id}
      className={styles.item}
      style={{
              backgroundColor: randomColor(),
            }}
      >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
    ))}

  </ul>
</section>
  );

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

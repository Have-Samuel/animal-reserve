import React from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import './animalCard.css';

const AnimalCard = ({
  name, img, onClick, weight, pos,
}) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    onClick={onClick}
    onKeyDown={onClick}
    aria-hidden="true"
    className="animalcard"
  >
    <IoIosArrowDropleftCircle className="pointer" />
    <div className="animalname">
      <h3>{name}</h3>
      <small>{`${weight}kgs`}</small>
    </div>
    <div className={pos === 1 || pos === 2 || pos === 5 || pos === 6 || pos === 9
      ? 'overlay lightpink' : 'overlay darkpink'}
    />
  </div>
);

AnimalCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  weight: PropTypes.string.isRequired,
  pos: PropTypes.number.isRequired,
};

export default AnimalCard;

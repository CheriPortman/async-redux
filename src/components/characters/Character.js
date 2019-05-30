import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }) {
  return (
    <section>
      <Link to={`/avatar/${character.id}`}>
        <p>{character.name}</p>
        <img src={character.img} />
      </Link>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
};

export default Character;

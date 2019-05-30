import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <section>
      <p>{character.name}</p>
      <img src={character.img} />
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CharacterDetail from '../components/characters/CharacterDetail';
import { getCharacter, getCharacterLoading } from '../selectors/characterDetailSelectors';
import { fetchCharacter } from '../actions/CharacterDetailActions';

class CharacterById extends PureComponent {
  static propTypes = {
    character: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    }),
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { character, loading } = this.props;
    if(loading) return <h1>loading</h1>;
    return <CharacterDetail character={character} />;
  }
}

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharacterLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchCharacter(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterById);

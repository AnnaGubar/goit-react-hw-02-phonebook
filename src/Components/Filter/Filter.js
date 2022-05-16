import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  handleInputSearch = e => {
    this.props.handleSearch({
      filter: e.currentTarget.value.toLowerCase().trim(),
    });
  };

  render() {
    return (
      <form>
        <label>
          Find contacts by name
          <input
            className={s.Filter_input}
            type="text"
            onChange={this.handleInputSearch}
            placeholder="Enter something to start searching"
          />
        </label>
      </form>
    );
  }
}

Filter.propTypes = {
  handleSearch: propTypes.func.isRequired,

  stateProps: propTypes.arrayOf(
    propTypes.shape({
      filter: propTypes.string.isRequired,
      contacts: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string.isRequired,
          name: propTypes.string.isRequired,
          number: propTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

export default Filter;

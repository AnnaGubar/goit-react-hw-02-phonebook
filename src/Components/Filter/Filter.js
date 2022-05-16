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
};

export default Filter;

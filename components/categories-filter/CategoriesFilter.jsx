import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import CategoryButton from './CategoryButton';

export default class CategoriesFilter extends Component {
  constructor() {
    super();
    this.state = {
      disabledBtnAnimation: '',
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.showAllWorks = this.showAllWorks.bind(this);
  }
  buttonClick(category) {
    const { filterOnChange, selectedCategories, pageTitle } = this.props;
    const selectedItems = selectedCategories.slice();
    const position = selectedItems.indexOf(category);

    if (position === -1) {
      selectedItems.push(category);
    } else if (selectedItems.length === 1) {
      this.setState({ disabledBtnAnimation: category });
      setTimeout(() => {
        this.setState({ disabledBtnAnimation: '' });
      }, 500);
      return;
    } else {
      selectedItems.splice(position, 1);
    }
    const url = `/${pageTitle}?chosen=${selectedItems.join(',')}`;
    window.history.replaceState({ url }, '', url);
    filterOnChange(selectedItems);
  }

  showAllWorks() {
    const {
      filterOnChange,
      selectedCategories,
      categorisList,
      pageTitle,
    } = this.props;
    const selectedItems = selectedCategories.slice();

    if (selectedItems.length === categorisList.length) {
      this.setState({ disabledBtnAnimation: 'all' });
      setTimeout(() => {
        this.setState({ disabledBtnAnimation: '' });
      }, 500);
      return;
    }

    const url = `/${pageTitle}`;
    window.history.replaceState({ url }, '', url);

    filterOnChange(categorisList);
  }

  render() {
    const { disabledBtnAnimation } = this.state;
    const {
      categorisList,
      selectedCategories,
      pageTitle,
    } = this.props;
    return (
      <div className={`filter filter--${pageTitle}`}>
        <div className="filter__show-all">
          <button
            onClick={this.showAllWorks}
            className={classnames('filter__btn -show-all', { '-active': selectedCategories.length !== categorisList.length, '-disabled': disabledBtnAnimation === 'all' })}
          >
              Show all
          </button>
        </div>
        <ul className="filter__list">
          {categorisList.map(category => (
            <CategoryButton
              category={category}
              key={category}
              isActive={selectedCategories.includes(category)}
              buttonClick={() => this.buttonClick(category)}
              isDisabled={disabledBtnAnimation === category}
            />
          ))}
        </ul>
      </div>
    );
  }
}
CategoriesFilter.propTypes = {
  categorisList: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array,
  filterOnChange: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};
CategoriesFilter.defaultProps = {
  selectedCategories: [],
};

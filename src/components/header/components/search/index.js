/* eslint-disable class-methods-use-this, react/jsx-no-bind */
import React, { Component } from 'react';
import DropdownComponent from '../../../shared-components/dropdown/DropdownComponent';
import './assets/search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationOptions: ['Bhatinda', 'Bijapur', 'Chandigarh', 'Chennai', 'Lucknow'],
    };
    this.onSelectChanged = this.onSelectChanged.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  onSelectChanged() {

  }

  doSearch() {

  }

  render() {
    return (
      <div className="searchcontainer">
        <div className="locationpicker">
          <DropdownComponent
            className='locationpicker'
            options={this.state.locationOptions}
            onChange={this.onSelectChanged}
            type='default'
            styling={{
              height: '100%',
              width: '100%',
              backgroundColor: '#f5f5f5',
              border: 'none'
            }}
            placeholder="Select"
          />
        </div>
        <div className="field">
          <div className="inputfield">
            <input type="text" name="search" placeholder="Explore design, service provider & buy products." />
          </div>
        </div>
        <div className="searchbutton">
          <button className="buttonStyles" onClick={this.doSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
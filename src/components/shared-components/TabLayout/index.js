import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './assets/TabLayout.scss';
import TabPanelComponent from '../tabPanel';
import Tab from './Tab';

export default class TabLayout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      tabs: props.tabs,
      enabledTab: props.selectedTab
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick(index) {
    this.setState({
      enabledTab: index
    });
  }


  render() {
    return (
      <div className='container'>
        <div className='auth-info'>
          <div className='why-image' />
          <div className='why-info'>
          </div>
          <div className='why-footer'>
            <span>@ 2018 </span>
          </div>
        </div>
        <div className='auth-action'>
          <div className='tab-container'>
            <div className='tabs'>
              <div className='tab-list'>
                {
                  this.state.tabs.map((tab, index) => {
                  const isEnabled = this.state.enabledTab === index;
                  return (
                    <Tab
                      key={tab.infoheader}
                      tabIndex={index}
                      tabContent={tab.label}
                      toggleTab={this.toggleClick}
                      isEnabled={isEnabled}
                    />
                  );
                })
                }
              </div>
              <TabPanelComponent component={this.state.tabs[this.state.enabledTab].component} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TabLayout.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.element.isRequired,
    component: PropTypes.element.isRequired
  })).isRequired,
  selectedTab: PropTypes.number
};

TabLayout.defaultProps = {
  selectedTab: 0
};
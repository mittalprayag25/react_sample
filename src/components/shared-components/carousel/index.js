import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import SliderIndicator from './SliderIndicator';
import './carousel.scss';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      itemToDisplay: this.props.itemToDisplay,
      direction: '',
      currentIdDisplayed: 0,
      carouselItems: this.props.carouselItems,
    };
    this.state.currentIdsDisplayed = this.state.carouselItems.slice(0, this.state.itemToDisplay).map((item) => { return item.id; });
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  /**
   * Go to previous slide and toggles the animation
   */
  goToPrevSlide() {
    const newIds = this.state.currentIdsDisplayed.map((id) => {
      if(id - 1 < this.state.carouselItems[0].id) {
        return this.state.carouselItems[this.state.carouselItems.length - 1].id;
      }

      return id - 1;
    });

    this.setState({
      currentIdsDisplayed: newIds
    });
    this.setState({ direction: 'left' });
  }

  /**
   * Go to the next slide
   */
  goToNextSlide() {
    const newIds = this.state.currentIdsDisplayed.map((id) => {
      if(id + 1 > this.state.carouselItems[this.state.carouselItems.length - 1].id) {
        return this.state.carouselItems[0].id;
      }

      return id + 1;
    });

    this.setState({
      currentIdsDisplayed: newIds
    });
    this.setState({ direction: 'right' });
  }

  goToSlide(index) {
    if(this.state.currentIdDisplayed > index) {
      this.goToPrevSlide();
      this.setState({ currentIdDisplayed: index });
    } else if(this.state.currentIdDisplayed < index) {
      this.goToNextSlide();
      this.setState({ currentIdDisplayed: index });
    }
  }

  render() {
    return (
      <div className='carousel'>

        {
          this.props.leftIndicator &&
          <SliderIndicator goTo={this.goToPrevSlide}>
            <span className="fa fa-4x fa-angle-left" />
          </SliderIndicator>
        }

        <CSSTransitionGroup
          component='div'
          className='slides-container animated'
          transitionEnterTimeout={10}
          transitionLeaveTimeout={10}
          transitionName={this.state.direction}
        >
          { this.state.currentIdsDisplayed
                .map((id) => { return this.state.carouselItems.find((item) => { return item.id === id; }); })
                .map((item) => { return this.props.tileComponent(item.id, item); })
              }
        </CSSTransitionGroup>

        {
          this.props.showDots &&
          <div className='slider-dots'>
            <div className='dots-container'>
              {
               this.state.carouselItems.map((item) => {
                 return (
                   <div key={item.id}>
                     <button
                       className='action-button'
                       onClick={() => { this.goToSlide(item.id); }}
                     >
                       {
                         this.state.currentIdDisplayed === item.id ?
                           <span className='fa fa-circle' /> : <span className='fa fa-circle-o' />
                         }
                     </button>
                   </div>
                 );
               })
             }

            </div>

          </div>
        }

        {
          this.props.rightIndicator &&
          <SliderIndicator goTo={this.goToNextSlide}>
            <span className="fa fa-4x fa-angle-right" />
          </SliderIndicator>
        }

      </div>
    );
  }
}

/**
 * Disabling this since it can be an array of any type it depends
 * on how tileComponent can be selected
 */

/* eslint-disable react/forbid-prop-types */
Carousel.propTypes = {
  leftIndicator: PropTypes.bool,
  rightIndicator: PropTypes.bool,
  itemToDisplay: PropTypes.number.isRequired,
  carouselItems: PropTypes.array.isRequired,
  tileComponent: PropTypes.func.isRequired,
  showDots: PropTypes.bool
};

Carousel.defaultProps = {
  leftIndicator: true,
  rightIndicator: true,
  showDots: false
};


export default Carousel;

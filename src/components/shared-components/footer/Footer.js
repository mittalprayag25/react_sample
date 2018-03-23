import React, { Component } from 'react';
import './assets/footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerItems: {
        footerItemClassName: 'horizontal-align',
        footerItemClassNameDivider: 'no-divider',
        footerItemClassNameMenu: 'menu',
        footerUserListItems: ['Your Orders', 'Shiping rates & Policies', 'Returns & Replacements'],
        footerCompanyListItems: ['About Us', 'Contact Us', 'FAQ', 'Prvacy Policy', 'Terms of Use']
      },
    };
  }

  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-user'>
            <ul>
              {
                this.state.footerItems.footerUserListItems.map((listItem, count) => {
                  if(count === 2) {
                    return (
                      <li className={[this.state.footerItems.footerItemClassNameMenu, this.state.footerItems.footerItemClassNameDivider].join(' ')} key={listItem[count]}>
                        <img className='menu-item-image' alt='' />
                        <span className='menu-item-text'>{listItem}</span>
                      </li>
                    );
                  }
                  return (
                    <li className={this.state.footerItems.footerItemClassNameMenu} key={listItem[count]}>
                      <img className='menu-item-image' alt='' />
                      <span className='menu-item-text'>{listItem}</span>
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className='footer-company'>
            <ul>
              {
                this.state.footerItems.footerCompanyListItems.map((listItem, count) => {
                  if(count === 4) {
                    return (
                      <li className={[this.state.footerItems.footerItemClassNameMenu, this.state.footerItems.footerItemClassNameDivider].join(' ')} key={listItem[count]}>{listItem}</li>
                    );
                  }
                  return (
                    <li className={this.state.footerItems.footerItemClassName} key={listItem[count]}>{listItem}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
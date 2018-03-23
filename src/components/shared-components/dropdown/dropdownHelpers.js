import React from 'react';

/*eslint-disable jsx-a11y/no-static-element-interactions*/
export default class dropdownHelpers {
  static populateList(options, changeFunction) {
    return options.map((inputOption) => {
      //const initialTab = !index ? index : -1;
      const optionType = typeof inputOption;
      const option = inputOption !== null ? inputOption : '';
      const optionValue = optionType === 'object' ? option.value : option;
      const displayValue = optionType === 'object' ? option.displayValue : option;
      return (
        <div
          className="list-option"
          key={optionValue}
          onClick={() => { changeFunction(optionValue); }}
          onKeyPress={() => { changeFunction(optionValue); }}
        >
          {displayValue}
        </div>
      );
    });
  }

  static checkSize(height, width) {
    const heightNum = Number(height.replace('px', ''));
    const widthNum = Number(width.replace('px', ''));
    const checkedDimensions = {
      height,
      width,
    };
    if(typeof height !== 'string' || isNaN(heightNum) || heightNum <= 0) {
      checkedDimensions.height = '40px';
    }
    if(typeof width !== 'string' || isNaN(widthNum) || widthNum <= 0) {
      checkedDimensions.width = '200px';
    }
    return checkedDimensions;
  }

  static setOffset(height, type) {
  // const topOffset = +(props.height.slice(0,2)) - 22 + 'px';
  // WEAKLY TYPED FTW

    const heightNum = Number(height.replace('px', ''));
    const offsetNumber = heightNum - 2;
    const listOffset = offsetNumber.toString().concat('px');

    // set off set to drop up if in product-details page.
    if(type === 'product-details') {
      return {
        bottom: listOffset,
      };
    }
    return {
      top: listOffset,
    };
  }
}

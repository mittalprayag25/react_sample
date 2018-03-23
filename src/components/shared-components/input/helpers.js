import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function buildIconAndClassName(page, tempIcon) {
  let className;
  switch (page) {
    case 'login':
      className = 'login-input';
      break;
    case 'dashboard':
      className = 'dashboard-input';
      break;
    case 'details':
      className = 'details-input';
      break;
    default:
      className = 'input';
      break;
  }

  let icon;
  if(tempIcon) {
    if(typeof tempIcon === 'string') {
      icon = (
        <FontAwesome
          className="icon"
          name={tempIcon}
        />
      );
    } else {
      icon = tempIcon;
    }
  } else {
    className = `${className} input-spacer`;
  }
  return { className, icon };
}

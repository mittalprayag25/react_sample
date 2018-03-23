import React from 'react';

import HeaderRowCellComponent from './header/HeaderRowCellComponent';
import HeaderComponent from './header/HeaderComponent';
import HeaderRowComponent from './header/HeaderRowComponent';

import BodyComponent from './body/BodyComponent';
import BodyRowComponent from './body/BodyRowComponent';
import BodyRowCellComponent from './body/BodyRowCellComponent';

export default class TableRenderHelpers {
  static renderHeader(columns, children) {
    if(columns.length) {
      return (
        <HeaderComponent>
          <HeaderRowComponent>
            {columns.map(TableRenderHelpers.renderHeaderData)}
          </HeaderRowComponent>
        </HeaderComponent>
      );
    }

    return (
      <div>
        {React.Children.map(children, (child) => { // eslint-disable-line consistent-return
            if(child.type.displayName === 'HeaderComponent') {
              return child;
            }
          })
        }
      </div>
    );
  }

  static renderHeaderData(headerData, index) {
    return (
      <HeaderRowCellComponent key={index}>
        <div className="header-cell-content">{headerData}</div>
      </HeaderRowCellComponent>
    );
  }

  static renderBody(rows, children) {
    if(rows.length) {
      return (
        <BodyComponent>
          {rows.map(TableRenderHelpers.renderRowData)}
        </BodyComponent>
      );
    }

    return (
      <div>
        {React.Children.map(children, (child) => { // eslint-disable-line consistent-return
            if(child.type.displayName === 'BodyComponent') {
              return child;
            }
          })
        }
      </div>
    );
  }

  static renderRowData(rowData, index) {
    return (
      <BodyRowComponent key={index}>
        {rowData.map(TableRenderHelpers.renderCellData)}
      </BodyRowComponent>
    );
  }

  static renderCellData(cellData, index) {
    return (
      <BodyRowCellComponent key={index}>
        <div className="body-cell-content">{cellData}</div>
      </BodyRowCellComponent>
    );
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import tableRenderHelpers from './tableRenderHelpers';


import './TableComponent.scss';


/* ***** USAGE *****
  Example 1: Feed the table with the data and styles it needs
  const tableData = {
    columns: ['First Name', 'Last Name'],
    rows: [['John', 'Smith'], ['Thomas', 'Finch']]
  };
  <TableComponent data={tableData} styles={{ height: '400px', width: '400px' }} />

  Example 2: Manually build the table with the components you would like
  <TableComponent styles={{ height: '300px', width: '300px' }}>
    <HeaderComponent>
      <HeaderRowComponent>
        <HeaderRowCellComponent>
          <div>Make</div>
        </HeaderRowCellComponent>
        <HeaderRowCellComponent>
          <div>Model</div>
        </HeaderRowCellComponent>
      </HeaderRowComponent>
    </HeaderComponent>
    <BodyComponent>
      <BodyRowComponent>
        <BodyRowCellComponent>
          <div>BMW</div>
        </BodyRowCellComponent>
        <BodyRowCellComponent>
          <div>M6</div>
        </BodyRowCellComponent>
      </BodyRowComponent>
    </BodyComponent>
  </TableComponent>
***** USAGE ***** */

export default class TableComponent extends Component {
  constructor(props) {
    super(props);

    const columnData = props.data ? props.data.columns : [];
    const rowData = props.data ? props.data.rows : [];
    const stylesConfig = Object.assign({}, TableComponent.defaultProps.styles, props.styles);
    this.state = {
      columns: columnData,
      rows: rowData,
      styles: stylesConfig
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ columns: nextProps.data ? nextProps.data.columns : [] });
  }

  render() {
    if(this.props.data && (this.state.columns.length || this.state.rows.length)) {
      return (
        <div style={this.state.styles} className="tbl">
          { tableRenderHelpers.renderHeader(this.state.columns, this.props.children) }
          { tableRenderHelpers.renderBody(this.state.rows, this.props.children) }
        </div>
      );
    }
    return (
      <div style={this.state.styles} className="tbl">
        {this.props.children}
      </div>
    );
  }
}

TableComponent.propTypes = {
  data: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])),
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])))
  }),
  children: PropTypes.node,
  styles: PropTypes.shape({
    height: PropTypes.string,
    maxWidth: PropTypes.string
  })
};

TableComponent.defaultProps = {
  data: null,
  children: [],
  styles: {}
};

TableComponent.displayName = 'TableComponent';
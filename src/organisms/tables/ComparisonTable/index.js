import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {
  Col,
  Layout,
} from 'atoms/Layout';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Tooltip from 'atoms/Tooltip';

import styles from './comparison_table.module.scss';

const ComparisonTable = (props) => {
  const { children } = props;

  return (
    <div className={styles['comparison-table']}>
      { children }
    </div>
  );
};

const TableHeader = (props) => {
  const { children } = props;

  if (React.Children.toArray(children).length === 2) {
    return (
      <Layout
        className={styles['header-2-row']}
        smallCols={[ 12, 6, 6 ]}
        mediumCols={[ 4 ]}
      >
        <Col className={styles['col-header-2-cells-offset']} />

        {
          React.Children.map(children, (child, idx) =>
            <Col key={idx} className={styles['col-header-2-cells']}>{ child }</Col>
          )
        }
      </Layout>
    );
  }

  return (
    <TableRow
      {...props}
      header
    >
      { children }
    </TableRow>
  );
};

class TableRow extends React.Component {
  get childrenArray() {
    const { children } = this.props;

    return React.Children.toArray(children);
  }

  get colClass() {
    const { header } = this.props;

    const className = header ? 'col-header-3-cells' : 'cell';
    const addFloatingBorder = this.childrenArray.length === 3 && !header ? 'floating-border' : 'no-floating-border';

    return cx(
      styles[className],
      styles[addFloatingBorder],
    );
  }

  get layoutProps() {
    const { header } = this.props;

    const className = cx(styles.row, header && styles['header-3-row']);

    if (this.childrenArray.length === 2) {
      return {
        className,
        smallCols: [ 12 ],
        mediumCols: [ 4, 8 ]
      };
    }

    return {
      className,
      smallCols: [ 12, 6, 6 ],
      mediumCols: [ 4 ]
    };
  }

  renderCol = (child, idx, colClass) => {
    const {
      tooltip,
      subHeader
    } = this.props;

    if (tooltip && idx === 0) {
      return (
        <Col key={idx} className={colClass}>
          {child}
          <Tooltip className={styles['tooltip']}>{subHeader}</Tooltip>
        </Col>
      );
    }

    if (subHeader && idx === 0) {
      return (
        <Col key={idx} className={cx(colClass, styles['sub-header'])}>
          {child}
          <Spacer size={12} />
          <Text
            className={styles['sub-header-text']}
            font='b'
            type={10}
          >
            {subHeader}
          </Text>
        </Col>
      );
    }

    return <Col key={idx} className={colClass}>{ child }</Col>;
  }

  render() {
    const {
      subHeader
    } = this.props;

    const colClass = this.colClass;

    return (
      <Layout
        {...this.layoutProps}
      >
        { this.childrenArray.map((child, idx) => this.renderCol(child, idx, colClass)) }

        {
          subHeader &&
            <Col
              className={styles['sub-header-mobile']}
            >
              <Text
                size={10}
                font='b'
              >
                {subHeader}
              </Text>
            </Col>
        }
      </Layout>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,

  /**
   * If true, adds tooltip.
  **/
  tooltip: PropTypes.bool,

  /**
   * Adds subheader text when tooltip prop is not present. If tooltip prop is present, this will be tooltip text.
  **/
  subHeader: PropTypes.string,

  /**
   * Adds styling to TableRow to make it a TableHeader
   */
  header: PropTypes.bool,
};

export default {
  Table: ComparisonTable,
  Header: TableHeader,
  Row: TableRow,
};

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';

import LinkWrapper from 'atoms/LinkWrapper';
import { Col, Layout } from 'atoms/Layout';
import CurrencyAmount from 'molecules/LockUps/CurrencyAmount';

import styles from 'organisms/cards/PlaybackCard/playback_card.module.scss';

function PlaybackCardWrapper(props) {
  const {
    children,
    className,
    logo,
    amount,
    unit,
    footer,
    footerOnClick,
  } = props;

  const formattedNumber = accounting.formatNumber(amount, { precision: 2 });

  const renderHeader = () => {
    if (!logo || !amount) return null;

    return (
      <Layout
        className={styles['playback-wrapper-head']}
        mediumCols={[ 6 ]}
        fullwidth
      >
        <div className={classnames(styles['logo-wrapper'], styles['playback-wrapper-logo'])}>{logo}</div>
        <Col className={styles['amount']}>
          <CurrencyAmount
            color='secondary-2'
            amount={formattedNumber.toString()}
            unit={unit}
            size={5}
            font='a'
            highlight
          />
        </Col>
      </Layout>
    );
  };

  return (
    <div className={classnames(styles['playback-wrapper'], className)}>
      { renderHeader()}

      <div className={styles['playback-wrapper-body']}>
        { children }
      </div>

      <div className={styles['playback-wrapper-foot']}>
        <LinkWrapper variant='secondary' onClick={footerOnClick}>{ footer }</LinkWrapper>
      </div>
    </div>
  );
}


PlaybackCardWrapper.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Logo for the header
   */
  logo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  /**
   * Amount for the header.
   */
  amount: PropTypes.number,
  /**
   * per unit for Amount displayed in header.
   */
  unit: PropTypes.string,
  /**
   * Text for the footer of the playback wrapper
   */
  footer: PropTypes.string,
  /**
   * Callback for footer link
   */
  footerOnClick: PropTypes.func,
};

export default PlaybackCardWrapper;

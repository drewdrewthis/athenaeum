import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import classnames from 'classnames';
import styles from './step_indicator.module.scss';

export default class ProgressBarStep extends Component {
  textProps() {
    const {
      step
    } = this.props;

    if (step.currentStepActive) {
      return {
        color: 'primary-3',
      };
    }

    return {
      color: 'neutral-3',
    };
  }

  circleClasses() {
    const {
      step
    } = this.props;


    return [
      styles['circle'],
      step.currentStepActive && styles['circle-active'],
      step.clickable && !step.currentStepActive && styles['circle-completed'],
    ];
  }

  circleWrapperClasses() {
    const {
      step
    } = this.props;

    return [
      styles['circle-wrapper'],
      step.nextStepAccessible ? styles['circle-wrapper-accessible'] : styles['circle-wrapper-inaccessible'],
    ];
  }

  textClasses() {
    const {
      step
    } = this.props;

    return [
      styles['step-wrapper'],
      step.clickable && styles['step-wrapper-clickable'],
      !step.currentStepActive && styles['step-wrapper-inactive']
    ];
  }

  handleClick = () => {
    const {
      step,
      navigateToPath
    } = this.props;

    if (step.clickable) {
      navigateToPath(step.route);
    }
  }

  render() {
    const {
      step
    } = this.props;

    return (
      <div className={styles['breadcrumb']} onClick={this.handleClick}>
        <div className={classnames(this.textClasses())}>
          <Text tag='span' size={11} font='b' semibold {...this.textProps()}>{ step.text.toUpperCase() }</Text>
        </div>
        <div className={classnames(...this.circleWrapperClasses())}>
          <div className={classnames(...this.circleClasses())} />
        </div>
      </div>
    );
  }
}

ProgressBarStep.propTypes = {
  step: PropTypes.object,
  navigateToPath: PropTypes.func,
};

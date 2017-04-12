import React from 'react';
import styles from '../shared/forms.module.scss';
import classnames from 'classnames';

function GeneralForm ( props ) {
  const {
    type,
    className,
    children,
    formName,
    onSubmit,
    onClose
  } = props;

  const kids = React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: styles['form-components'],
      htmlFor: formName
    })
  })

  return (
    <div className={ classnames( className, styles['formWrapper'] ) }>
      <span onClick={ onClose } className={ styles['icon-close'] }/>
      <form
        className={ styles.form }
        onSubmit={ onSubmit }
        name={ formName }
      >
        { kids }
      </form>
    </div>
  )
}

GeneralForm.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  formName: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func
}

export default GeneralForm;

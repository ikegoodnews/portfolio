import React, {useEffect, useState} from 'react';
import {withFormsy} from 'formsy-react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

/// ICON IMPORTS ///
import ErrorIcon from '../../../public/_assets/icons/Error.svg';
import {AppEmitter} from '@/_controllers/EventEmitter';

export const TextArea = (props) => {
   const [value, setValue] = useState('');
   const [focused, setFocused] = useState(false);
   const changeValue = (e) => {
      // setValue() will set the value of the component, which in
      // turn will validate it and the rest of the form
      // Important: Don't skip this step. This pattern is required
      // for Formsy to work.
      setValue(e.currentTarget.value);
      typeof props.onValueChange === 'function' && props.onValueChange(e.currentTarget.value);
   };

   useEffect(() => {
      const listener = AppEmitter.addListener('email_success', () => {
         setValue('');
      });

      return () => listener.remove();
   }, []);

   // props.errorMessage comes only if the component is invalid
   const errorMessage = props.errorMessage || props.valError;

   return (
      <div className={classNames('text-area text-input', props.className)}>
         <div className={classNames('wrapper position-relative', {focus: focused, filled: !!value})}>
            <label htmlFor={props.name}>{props.label}</label>
            <textarea
               id={props.id}
               name={props.name}
               className="w-100"
               onFocus={() => setFocused(true)}
               onBlur={() => setFocused(false)}
               value={value || ''}
               onChange={changeValue}
               required={props.required}
               disabled={props.disabled}
               placeholder={props.placeholder}
               autoFocus={props.autoFocus}
               autoComplete={props.autoComplete}
               rows={props.rows || 6}
            />
         </div>
         {!!errorMessage && !props.isPristine && (
            <div className="error d-flex align-items-center">
               {/* <ErrorIcon /> */}
               <p style={{color: 'red'}}>{errorMessage}</p>
            </div>
         )}
      </div>
   );
};

// TextArea.propTypes = {
//    id: PropTypes.string,
//    name: PropTypes.string.isRequired,
//    className: PropTypes.string,
//    type: PropTypes.string,
//    value: PropTypes.string,
//    placeholder: PropTypes.string,
//    required: PropTypes.bool,
//    disabled: PropTypes.bool,
//    autoFocus: PropTypes.bool,
//    autoComplete: PropTypes.string,
// };

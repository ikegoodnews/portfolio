import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import {AppEmitter} from '@/_controllers/EventEmitter';

/// ICON IMPORTS ///
// import ErrorIcon from '../../../public/_assets/icons/Error.svg';

export const TextInput = (props) => {
   const [value, setValue] = useState('');
   const [focused, setFocused] = useState(false);

   const changeValue = (e) => {
      // setValue() will set the value of the component, which in
      // turn will validate it and the rest of the form
      // Important: Don't skip this step. This pattern is required
      // for Formsy to work.
      if (props.valError !== '') {
         typeof props.clearError === 'function' && props.clearError();
      }
      setValue(e.currentTarget.value);
      typeof props.onValueChange === 'function' && props.onValueChange(e.currentTarget.value);
   };

   useEffect(() => {
      const listener = AppEmitter.addListener('email_success', () => {
         setValue('');
      });

      return () => listener.remove();
   }, []);

   // const changeValue = debounce((e) => _changeValue(e), 1000);

   // props.errorMessage comes only if the component is invalid
   const errorMessage = props.errorMessage || props.valError;

   return (
      <div className={classNames('text-input', props.className)}>
         <div className={classNames('wrapper position-relative', {focus: focused, filled: !!value})}>
            <label htmlFor={props.name}>{props.label}</label>
            {props.prefix}
            {props.leftIcon}
            <input
               id={props.id}
               type={props.type}
               name={props.name}
               className="w-100"
               onChange={changeValue}
               required={props.required}
               disabled={props.disabled}
               value={value || ''}
               autoFocus={props.autoFocus}
               placeholder={props.placeholder}
               onBlur={() => setFocused(false)}
               onFocus={() => setFocused(true)}
               autoComplete={props.autoComplete}
               onKeyDown={props.onKeyDown}
               min={props.min}
               max={props.max}
            />
            {props.rightIcon}
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

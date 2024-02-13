import React, {memo} from 'react';
import {createPortal} from 'react-dom';
import classNames from 'classnames';

import CloseIcon from '../../../public/_assets/icons/close.svg';

// eslint-disable-next-line react/display-name
const FullscreenModal = memo((props) => {
   return props.open
      ? createPortal(
           <div className={classNames('fullscreen-modal d-flex align-items-center justify-content-center', {notification: props.notification})}>
              <div onClick={props.onClickAway} className="back-drop" />
              <div className={classNames('content position-relative', props.className)}>
                 <div onClick={props.onClickAway} className="closeIcon position-absolute">
                    <CloseIcon />
                 </div>
                 {props.children}
              </div>
           </div>,
           document.body,
        )
      : null;
});

export default FullscreenModal;

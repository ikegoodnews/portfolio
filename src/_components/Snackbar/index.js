import React, {useEffect} from 'react';
import {appActions} from '../../_actions';
import {useSelector} from 'react-redux';
import classNames from 'classnames';

// SVGS
import OkIcon from '../../../public/_assets/icons/new-ok.svg';
import ErrorIcon from '../../../public/_assets/icons/new-error.svg';

export default function Snackbar(props) {
   const snack = useSelector((s) => s.snackbar);

   useEffect(() => {
      const timer = setTimeout(() => {
         props.dispatch(appActions.clearSnackBar());
      }, 3000);
      return () => clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [snack.open]);

   return snack.open ? (
      <div className={classNames('p-3 snack-bar d-flex align-items-center', snack.variant)}>
         <span className="ps-2 pe-3">
            {snack.variant === 'success' ? <OkIcon style={{transform: 'scale(.7)'}} /> : <ErrorIcon style={{transform: 'scale(.7)'}} />}
         </span>
         <p className="pe-3">{snack?.message}</p>
      </div>
   ) : null;
}

import React, {memo, useCallback, useState} from 'react';
import FullscreenModal from '../..';

// eslint-disable-next-line react/display-name
const DeleteDialogue = memo((props) => {
   const [open, setOpen] = useState(false);

   const setOpenState = useCallback(
      (v) => {
         setOpen(v);
         typeof props?.dropState === 'function' && props?.dropState(v);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props?.dropState],
   );

   const handleAction = () => {
      typeof props?.handleAction === 'function' && props?.handleAction();
      setOpenState(false);
   };

   const handleCancel = () => {
      typeof props?.handleCancel === 'function' && props?.handleCancel();
      setOpenState(false);
   };

   return (
      <>
         <button onClick={() => setOpenState(true)} title={props?.tooltip} data-toggle="tooltip" data-placement="top" className={props?.className}>
            {props?.children}
         </button>
         <FullscreenModal open={open} className="d-flex" onClickAway={() => setOpenState(false)}>
            <div className="delete-user p-md-5 p-4">
               <h3>{props?.title}</h3>
               <p className="pt-3 pb-md-5 pb-3">{props?.description}</p>
               <div className="d-flex justify-content-center align-items-center pt-md-4 pt-3">
                  <button className="cancel px-4 py-3 me-3" onClick={handleCancel}>
                     {props?.rejectText}
                  </button>
                  <button onClick={handleAction} className="deactivate px-4 py-3">
                     {props?.actionText}
                  </button>
               </div>
            </div>
         </FullscreenModal>
      </>
   );
});

export default DeleteDialogue;

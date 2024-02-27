import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const Title = memo(({title, label}) => {
   return (
      <div className="section__title">
         <p className="">{label}</p>
         <h2 className="">{title}.</h2>
      </div>
   );
});

export default Title;

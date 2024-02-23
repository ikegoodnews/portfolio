import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const Title = memo(({title}) => {
   return (
      <div className="section__title">
         <h2 className="">{title}</h2>
         {/* <h1 className="title">{title}</h1> */}
      </div>
   );
});

export default Title;

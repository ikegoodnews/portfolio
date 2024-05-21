import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const Title = memo(({title, label, tClassName}) => {
   return (
      <div className={`section__title ${tClassName}`}>
         {label && <p className="mb-2 mb-md-0">{label}</p>}
         {title && <h2 className="">{title}.</h2>}
      </div>
   );
});

export default Title;

import React, {memo} from 'react';

// eslint-disable-next-line react/display-name
const SkipToContent = memo(({content = '0'}) => {
   return (
      <a className="skip-main animated fadeIn" href={`#${content}`} aria-label="Skip navigation and go to main content">
         Skip to main content
      </a>
   );
});

export default SkipToContent;

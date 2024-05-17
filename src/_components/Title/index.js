import React, {memo, useEffect} from 'react';

// eslint-disable-next-line react/display-name
const Title = memo(({title, label, tClassName}) => {
   useEffect(() => {
      const cards = document.querySelectorAll('.section__title');

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting);
         });
      });

      if (cards) {
         cards.forEach((card) => {
            observer.observe(card);
         });
      }
   }, []);

   return (
      <div className={`section__title ${tClassName}`}>
         {label && <p className="">{label}</p>}
         {title && <h2 className="">{title}.</h2>}
      </div>
   );
});

export default Title;

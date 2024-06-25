import waystream from '../../../public/_assets/images/waystream.png';
import portfolio from '../../../public/_assets/images/portfolio.png';
import lagosteahouse from '../../../public/_assets/images/lagosteahouse.png';

export const PROJECTS = [
   {
      id: 1,
      img: waystream,
      title: 'Waystream HQ',
      techStacks: ['Next.js', 'Electron.js', 'Firebase', 'Hls.js', 'Redux-saga'],
      description: 'Live audio streaming and podcast platform.',
   },
   {
      id: 2,
      img: lagosteahouse,
      title: 'Lagos Tea House',
      techStacks: ['React.js', 'Redux/Redux-saga', 'Bootstrap', 'CKEditor'],
      description: 'Lagos Tea House is a contemporary café and restaurant.',
   },
   {
      id: 3,
      img: portfolio,
      title: 'my portfolio',
      techStacks: ['Next.js', 'Bootstrap', 'SASS/SCSS', 'Email.Js', 'Formspree'],
      description: 'Minimalistic design portfolio',
   },
];

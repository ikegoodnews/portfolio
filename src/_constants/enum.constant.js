import {Facebook, Github, Instagram, Linkedin, Twitter} from '@/_helpers';

export const menuDrop = [
   {id: 1, label: 'home', link: '/', active: 1},
   {id: 2, label: 'about', link: '/about', active: 2},
   {id: 3, label: 'projects', link: '/projects', active: 3},
   {id: 4, label: 'services', link: '/services', active: 4},
   {id: 5, label: 'contact', link: '/contact', active: 5},
];

export const footerSocial = [
   {id: 1, title: 'LinkedIn Page', href: 'https://linkedin.com/in/goodnews-ike', icon: <Linkedin />},
   {id: 2, title: 'Github Page', href: 'https://github.com/goodnewsike', icon: <Github />},
   {id: 3, title: 'Twitter Page', href: 'https://twitter.com/goodnews-ike', icon: <Twitter />},
   {id: 4, title: 'Instagram Page', href: 'https://instagram.com/_goodnewsike', icon: <Instagram />},
   {id: 5, title: 'Facebook Page', href: 'https://facebook.com/Gudniuzplanet', icon: <Facebook />},
];

export const experiences = [
   {
      id: 1,
      role: 'frontend_developer',
      title: 'frontend developer',
      organization: 'zyonel technologies',
      link: 'https://zyonel.com',
      startDate: 'aug 2021',
      endDate: 'current',
      organizationDescription:
         'Zyonel Technologies is a comprehensive ICT solutions company managed by highly experienced information technology professionals and offers consulting services in the area of Software Development, IT Infrastructure Management, IT Training, Technology Hardware Procurement, Security Infrastructure design, Quality Assurance and implementation.',
      responsibility: 'Responsible for developing visual and interactive elements that users engage with when using client’s products.',
      techUsed: [
         {id: 1, label: 'React.js'},
         {id: 2, label: 'Redux'},
         {id: 3, label: 'JavaScript'},
         {id: 4, label: 'SASS'},
         {id: 5, label: 'Bootstrap'},
         {id: 6, label: 'HTML5'},
         {id: 7, label: 'CSS3'},
         {id: 8, label: 'Gitlab'},
         {id: 9, label: 'JSON'},
         {id: 10, label: 'WEB SERVICES API'},
      ],
      responsibilities: [
         {
            id: 1,
            label: 'Mentored 3 Front-End students’ developers on React.js, JavaScript, HTML5, CSS3, Bootstrap, Sass, Git, ensuring best practices.',
         },
         {id: 2, label: 'Ensuring proper documentation of every process within the team.'},
         {id: 3, label: 'Wrote reusable, effective and scalable codes to be used across multiple projects in an agile environment.'},
         {id: 4, label: 'Optimized application for maximum speed and scalability.'},
         {id: 5, label: 'Collaborated with product managers and back-end developers to develop functional applications. '},
         {
            id: 6,
            label: 'Highly involved in the entire product development process and improvement of a live audio-streaming app and an e-commerce application.',
         },
         {id: 7, label: 'Paginate large dataset ensuring low latency via API call.'},
         {id: 8, label: 'Effectively used localForage in caching data on the browser.'},
         {id: 9, label: "Implemented infinite scroll that breaks down heavily populated data into several smaller pages for user's convenience."},
         {id: 10, label: 'Troubleshoot and resolved bugs escalated from customer support.'},
         {id: 11, label: 'Developed from scratch multiple dynamic, responsive and browser compatible pages with REACT.js framework.'},
         {id: 12, label: 'Translated UI/UX designs and wireframes into interactive User Interface and Experience on the Web.'},
         {id: 13, label: 'Efficient in building user interfaces for clients without compromising functionality for aesthetics.'},
      ],
   },
   {
      id: 2,
      role: 'frontend__developer',
      title: 'frontend developer',
      organization: 'zyonel technologies',
      link: 'https://zyonel.com',
      organizationDescription: 'a software development company located at gbagada',
      responsibility: 'Responsible for developing visual and interactive elements that users engage with when using client’s products.',
      startDate: 'aug 2021',
      endDate: 'current',
      techUsed: [
         {id: 1, label: 'react.js'},
         {id: 2, label: 'redux'},
      ],
      responsibilities: [
         {id: 1, label: 'developed numerous apps'},
         {id: 2, label: 'optimized codes'},
      ],
   },
   {
      id: 2,
      role: 'frontend___developer',
      title: 'frontend developer',
      organization: 'zyonel technologies',
      link: 'https://zyonel.com',
      organizationDescription: 'a software development company located at gbagada',
      responsibility: 'Responsible for developing visual and interactive elements that users engage with when using client’s products.',
      startDate: 'aug 2021',
      endDate: 'current',
      techUsed: [
         {id: 1, label: 'react.js'},
         {id: 2, label: 'redux'},
      ],
      responsibilities: [
         {id: 1, label: 'developed numerous apps'},
         {id: 2, label: 'optimized codes'},
      ],
   },
];

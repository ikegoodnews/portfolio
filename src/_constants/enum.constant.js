import {Facebook, Github, Instagram, Linkedin, Twitter} from '@/_helpers';
import project1 from '../../public/_assets/images/project1.jpg';

export const menuDrop = [
   {id: 1, label: 'hero', link: '/#hero', active: 1},
   {id: 2, label: 'about', link: '/#about', active: 2},
   {id: 3, label: 'experience', link: '/#experience', active: 3},
   // {id: 4, label: 'skills', link: '/#skills', active: 4},
   {id: 4, label: 'projects', link: '/#projects', active: 4},
   {id: 5, label: 'contact', link: '/#contact', active: 5},
];

export const footerSocial = [
   {id: 1, title: 'LinkedIn Page', href: 'https://linkedin.com/in/ikegoodnews/', icon: <Linkedin />},
   {id: 2, title: 'Github Page', href: 'https://github.com/ikegoodnews/', icon: <Github />},
   {id: 3, title: 'Twitter Page', href: 'https://twitter.com/goodnews_ike', icon: <Twitter />},
   {id: 4, title: 'Instagram Page', href: 'https://instagram.com/ikegoodnewsofficial/', icon: <Instagram />},
   {id: 5, title: 'Facebook Page', href: 'https://facebook.com/goodnewsikeogeh', icon: <Facebook />},
];

export const aboutCards = [
   {id: 1, icon: 'fa fa-laptop', label: 'frontend developer'},
   {id: 2, icon: 'fa fa-cogs', label: 'web developer'},
   {id: 3, icon: 'fa fa-mobile', label: 'flutter app developer'},
   {id: 3, icon: 'fa fa-desktop', label: 'desktop app developer'},
];

export const techStacks = ['html', 'css', 'javascript', 'bootstrap', 'react.js', 'next.js', 'dart', 'flutter', 'electron.js'];

export const projects = [
   {
      id: 1,
      img: project1,
      title: 'project 1',
      date: Date.now(),
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt pariatur possimus voluptates aspernatur hic autem omnis est beatae architecto optio necessitatibus dolor adipisci sapiente eos, voluptatem doloremque laborum ipsum fugiat quos! Iste ea ut accusantium numquam maxime quae quisquam consequuntur. Mollitia neque sapiente consequatur magni illo, temporibus iusto assumenda.',
   },
   {
      id: 2,
      img: project1,
      title: 'project 1',
      date: Date.now(),
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt pariatur possimus voluptates aspernatur hic autem omnis est beatae architecto optio necessitatibus dolor adipisci sapiente eos, voluptatem doloremque laborum ipsum fugiat quos! Iste ea ut accusantium numquam maxime quae quisquam consequuntur. Mollitia neque sapiente consequatur magni illo, temporibus iusto assumenda.',
   },
   {
      id: 3,
      img: project1,
      title: 'project 1',
      date: Date.now(),
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt pariatur possimus voluptates aspernatur hic autem omnis est beatae architecto optio necessitatibus dolor adipisci sapiente eos, voluptatem doloremque laborum ipsum fugiat quos! Iste ea ut accusantium numquam maxime quae quisquam consequuntur. Mollitia neque sapiente consequatur magni illo, temporibus iusto assumenda.',
   },
   {
      id: 4,
      img: project1,
      title: 'project 1',
      date: Date.now(),
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt pariatur possimus voluptates aspernatur hic autem omnis est beatae architecto optio necessitatibus dolor adipisci sapiente eos, voluptatem doloremque laborum ipsum fugiat quos! Iste ea ut accusantium numquam maxime quae quisquam consequuntur. Mollitia neque sapiente consequatur magni illo, temporibus iusto assumenda.',
   },
   {
      id: 5,
      img: project1,
      title: 'project 5',
      date: Date.now(),
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt pariatur possimus voluptates aspernatur hic autem omnis est beatae architecto optio necessitatibus dolor adipisci sapiente eos, voluptatem doloremque laborum ipsum fugiat quos! Iste ea ut accusantium numquam maxime quae quisquam consequuntur. Mollitia neque sapiente consequatur magni illo, temporibus iusto assumenda.',
   },
   {
      id: 6,
      img: project1,
      title: 'project 6',
      date: Date.now(),
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt pariatur possimus voluptates aspernatur hic autem omnis est beatae architecto optio necessitatibus dolor adipisci sapiente eos, voluptatem doloremque laborum ipsum fugiat quos! Iste ea ut accusantium numquam maxime quae quisquam consequuntur. Mollitia neque sapiente consequatur magni illo, temporibus iusto assumenda.',
   },
];

export const experiences = [
   {
      id: 1,
      duration: 'oct, 2022',
      companyDescription:
         'Waystream is a multi-component audio streaming platform with the best user experience. Every minute, hundreds of hours of audio content are uploaded to our platform, and you can listen to more than one billion hours of any of this audio content from anywhere in the world. It also stores your audio content in the cloud and users can access real-time statistics of their audio content uploaded on our platform.',
      occupation: 'Software developer',
      companyName: 'WAYSTREAM HQ, Gbagada, Lagos, Nigeria',
      companyLink: 'https://waystre.am/',
      responsibilities: [
         'Spearheaded the design of the WAYSTREAM web application and admin dashboard with React.js and Redux which led to over 90% recognition from customers and increasing revenue by 40% to the company.',
         'Implemented new features, optimized and maintain the migrated WAYSTREAM web application, which escalated customer awareness and usability/accessibility by 200% in 5 days.',
         'Contributed to the development of the desktop application for WAYSTREAM using Electron.js with React.js and actively maintaining the desktop application with increased 30% performance rate.',
         'Mentored several young people on web and responsive development with over 90% of them successfully qualified to at least intern anywhere in the world, and 2 of them currently mentoring others in the academy.',
      ],
   },
   {
      id: 2,
      duration: 'nov, 2020',
      companyDescription:
         'Zyonel Technologies is a comprehensive ICT solutions company managed by highly experienced information technology professionals and offers consulting services in the area of Software Development, IT Infrastructure Management, IT Training, Technology Hardware Procurement, Security Infrastructure design, Quality Assurance and implementation.',
      occupation: 'Front-end developer',
      companyName: 'zyonel technologies ltd',
      companyLink: 'https://zyonel.com/',
      responsibilities: [
         'Collaborated with the UI/UX designers to translate wireframes and mockups into an interactive and visually appealing web-applications that generate revenue for clients.',
         'Work in a team of 4 front-end developers to implement complicated features in web applications.',
         'Write efficient, clean and reusable codes. Utilize postman in testing and fetching data from API endpoints which improved my work rate by 40%.',
      ],
   },
];

// export const experiences = [
//    {
//       id: 1,
//       role: 'frontend_developer',
//       title: 'frontend developer',
//       organization: 'zyonel technologies',
//       link: 'https://zyonel.com',
//       startDate: 'aug 2021',
//       endDate: 'current',
//       organizationDescription:
//          'Zyonel Technologies is a comprehensive ICT solutions company managed by highly experienced information technology professionals and offers consulting services in the area of Software Development, IT Infrastructure Management, IT Training, Technology Hardware Procurement, Security Infrastructure design, Quality Assurance and implementation.',
//       responsibility: 'Responsible for developing visual and interactive elements that users engage with when using client’s products.',
//       techUsed: [
//          {id: 1, label: 'React.js'},
//          {id: 2, label: 'Redux'},
//          {id: 3, label: 'JavaScript'},
//          {id: 4, label: 'SASS'},
//          {id: 5, label: 'Bootstrap'},
//          {id: 6, label: 'HTML5'},
//          {id: 7, label: 'CSS3'},
//          {id: 8, label: 'Gitlab'},
//          {id: 9, label: 'JSON'},
//          {id: 10, label: 'WEB SERVICES API'},
//       ],
//       responsibilities: [
//          {
//             id: 1,
//             label: 'Mentored 3 Front-End students’ developers on React.js, JavaScript, HTML5, CSS3, Bootstrap, Sass, Git, ensuring best practices.',
//          },
//          {id: 2, label: 'Ensuring proper documentation of every process within the team.'},
//          {id: 3, label: 'Wrote reusable, effective and scalable codes to be used across multiple projects in an agile environment.'},
//          {id: 4, label: 'Optimized application for maximum speed and scalability.'},
//          {id: 5, label: 'Collaborated with product managers and back-end developers to develop functional applications. '},
//          {
//             id: 6,
//             label: 'Highly involved in the entire product development process and improvement of a live audio-streaming app and an e-commerce application.',
//          },
//          {id: 7, label: 'Paginate large dataset ensuring low latency via API call.'},
//          {id: 8, label: 'Effectively used localForage in caching data on the browser.'},
//          {id: 9, label: "Implemented infinite scroll that breaks down heavily populated data into several smaller pages for user's convenience."},
//          {id: 10, label: 'Troubleshoot and resolved bugs escalated from customer support.'},
//          {id: 11, label: 'Developed from scratch multiple dynamic, responsive and browser compatible pages with REACT.js framework.'},
//          {id: 12, label: 'Translated UI/UX designs and wireframes into interactive User Interface and Experience on the Web.'},
//          {id: 13, label: 'Efficient in building user interfaces for clients without compromising functionality for aesthetics.'},
//       ],
//    },
// ];

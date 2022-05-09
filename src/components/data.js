import firstImage from "../assets/images/indubitably.png";
import secondImage from '../assets/images/techblog.png';
import thirdImage from '../assets/images/makimaku.png'


export const projects = [
    {
      title: 'Indubitably',
      subtitle: 'Interactive Full-Stack',
      description:'Job seeking app for employers and contractors based solely off skills. Using Handlebars, Javascript, Sequelize, Express, MySql2, Argon2',
      image: firstImage,
      link: "https://tranquil-ocean-87497.herokuapp.com/"
      },
    {
      title: 'Tech Blog',
      subtitle:'Express Handlebars',
      description:
      'This is a tech blog for sharing ideas and interacting with other users',
      image: secondImage,
      link: "https://warm-river-34592.herokuapp.com/post/1"
    },
    {
      title: 'Maki Maku',
      subtitle: 'Third Party API',
      description:
        'Make at home dates more spontaneous with this api randomizing movie and dinner app',
      image: thirdImage,
      link: "https://camillenicolet.github.io/MakiMaku/"
    }
    
];

export const skills = [ "React", 'Node.js', 'JavaScript',
 'Express',
  'Handlebars',
   'MongoDB',
    'SQL', 
]



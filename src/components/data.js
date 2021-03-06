import firstImage from "../assets/images/indubitably.png";
import secondImage from '../assets/images/techblog.png';
import thirdImage from '../assets/images/makimaku.png';
import fourthImage from '../assets/images/StickerBook.png';


export const projects = [
  {
    title: 'Sticker Book',
    subtitle: 'MERN, GraphQL, Tailwind',
    description:
      'Track your goals and encourage friends with digital stickers',
    image: fourthImage,
    link: "https://sticker-book.herokuapp.com/login",
    github: "https://github.com/K-G-J/sticker-book.git"
  },
    {
      title: 'Indubitably',
      subtitle: 'Javascript, CSS, Materialize',
      description:'Job seeking app for employers and contractors based solely off skills. Using Handlebars, Javascript, Sequelize, Express, MySql2, Argon2',
      image: firstImage,
      link: "https://tranquil-ocean-87497.herokuapp.com/",
      github: "https://github.com/geo-a-mac/indubidubly.git"
      },
    {
      title: 'Tech Blog',
      subtitle:'Express Handlebars',
      description:
      'This is a tech blog for sharing ideas and interacting with other users',
      image: secondImage,
      link: "https://warm-river-34592.herokuapp.com/post/1",
      github: "https://github.com/camilleNicoleT/tech-blog.git"
    },
    {
      title: 'Maki Maku',
      subtitle: 'Third Party API',
      description:
        'Make at home dates more spontaneous with this api randomizing movie and dinner app',
      image: thirdImage,
      link: "https://camillenicolet.github.io/MakiMaku/",
      github: "https://github.com/camilleNicoleT/MakiMaku.git"
    }
    
];

export const skills = [ "React", 'Node.js', 'JavaScript',
 'Express',
  'Handlebars',
   'MongoDB',
    'SQL', 
]



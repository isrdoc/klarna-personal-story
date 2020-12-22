import { Person, Story } from './types'
import { findCompetency } from '../Competency/utils'
import { findLevel } from '../Level/utils'
import { findImpact } from '../Impact/utils'

// import alexandreBorelMainImage from './assets/Engineering_Alexandre-Borel-hps-d.jpg.webp'
// import alexandreBorelMoreImage1 from './assets/Engineering_Alexandre-Borel-psc-m.jpg.webp'
// import alexandreBorelMoreImage2 from './assets/Engineering_Alexandre-Borel-ps-m.jpg.webp'

const igorSrdocMainImage =
  'https://lh3.googleusercontent.com/u/0/d/17Z5Y7VQGCuOuzrgN8Ky9iTRytM1fU7gl=w2614-h1594-iv1'

const igorSrdocMainMoreImage1 =
  'https://lh3.googleusercontent.com/u/0/d/1tsNWYIFTKUwG7R6ZWtyOX88aKzUREgd6=w2614-h1594-iv1'
const igorSrdocMainMoreImage2 =
  'https://lh3.googleusercontent.com/u/0/d/1tsNWYIFTKUwG7R6ZWtyOX88aKzUREgd6=w2614-h1594-iv1'

const alexandreBorelMainImage =
  'https://lh3.googleusercontent.com/u/0/d/1T4_zfUSg8TbYQKREtrw1qxbJEGo_bAZq=w2614-h1594-iv1'
const alexandreBorelMoreImage1 =
  'https://lh3.googleusercontent.com/u/0/d/14LYpziLkoJ5Z95wdr7p5aEnJKNm9kU67=w2614-h1594-iv1'
const alexandreBorelMoreImage2 =
  'https://lh3.googleusercontent.com/u/0/d/13hBlCIA17rAzOzM7fE0yfVhIg1ys02-I=w2614-h1594-iv1'

const IgorSrdoc: Person = {
  id: 'igor-srdoc',
  firstName: 'Igor',
  lastName: 'Srdoc',

  title: {
    id: 'senior-js-engineer',
    name: 'Senior JS Engineer',

    competency: findCompetency({ id: 'engineering' }),
    level: findLevel({ id: 'senior' }),
    impact: findImpact({ id: 'associate' }),
  },
}

const IgorSrdocStory: Story = {
  id: 'igor-srdoc-story',
  atKlarnaIcan:
    'I can create and deliver solutions that users are simply excited about.',
  title: 'Senior JS Engineer',
  mission:
    'I use customer insight to create smooth interfaces that make even the most complicated journeys look simple and doable.',
  myIrregularPath:
    'Started via freelance web development with Content Management Systems like Joomla and Wordpress. Found that coding with JavaScript enables more creativity and control for me. Was also teaching in academia, live/online tutorials - which still do - and mentoring programmers. For the last 4 years my drive to solve problems pulled me towards team-leading and product-owning roles. My last role before (hopefully!) starting at Klarna was of a Product Manager where I juggled between business requirements, UX & UI, R&D, IT, marketing and project execution.',
  workingAtKlarna:
    "(I hope that) working at Klarna for me looks like this: My weeks are packed with fast and focused learning through specific project execution. With every day I have a new chance to actively participate in two fields: project planning and delivery. With our great team we try hard to understand how our users think and feel - and then which solutions fit best our business model to deliver them the value they require. The second part is as much as exciting: architecting and developing the solution from start to its earliest possible launch. It's so rewarding to put the pieces (and people) together and make it work!",
  unreasonablePassion: `I'm unreasonably passionate about telling a good story. In code "story" is its architecture. In business, it's products (not the thing on the shelf, but the solution it brings). Among people, it is teamwork.`,

  aDayInMyLife: {
    am: ['Morning 1', 'Morning 2', 'Morning 3'],
    pm: ['Afternoon 1', 'Afternoon 2', 'Afternoon 3'],
    evening: ['Evening 1', 'Evening 2', 'Evening 3'],
  },

  takesOnKlarna: {
    leadershipPrinciple:
      'Customer obsession is an obvious choice - I love to build things for real people. But the one that describes me the best is: Detailed thinkers. Because ambition and desire for knowledge puts me in a high-energy state that enables me to live up to all other Leadership Principles.',
    bestTaskOfTheDay: 'Best task of the day is...',
    myTeamDescription: 'My team is a bunch of people who know more than me',
  },

  images: {
    main: igorSrdocMainImage,
    more: [igorSrdocMainMoreImage1, igorSrdocMainMoreImage2],
  },
}

IgorSrdoc.story = IgorSrdocStory

const AlexandreBorel: Person = {
  id: 'alexandre-borel',
  firstName: 'Alexandre',
  lastName: 'Borel',

  title: {
    id: 'engineering-manager',
    name: 'Engineering Manager',

    competency: findCompetency({ id: 'engineering' }),
    level: findLevel({ id: 'senior' }),
    impact: findImpact({ id: 'manager' }),
  },
}

const AlexandreBorelStory: Story = {
  id: 'alexandre-borel-story',
  atKlarnaIcan:
    'I have the autonomy to challenge and create a vision for my product.',
  title: 'Engineering Manager',
  mission:
    "I drive architecture choices and gather skilled people to offer Klarna's payment methods to consumers in physical stores.",
  myIrregularPath:
    'I took my first bend on the irregular path 2 weeks after joining. The recruiters had told me that ‘you will get opportunities here’ - they weren’t wrong. I joined a LEAP (our short-term single-issue focus team) working on creating a new Klarna In-store solution. I applied to become the Competence Lead of the team and was successful. During those first months, I quickly learned that at Klarna, you can share your opinion, and more importantly, you can convince people too. I was able to go on to build the In-store application for consumers and for retailers. 2 years later, I am now Accountable Lead for my team and I relish the role I play in creating great products and supporting great people.',
  workingAtKlarna:
    'With great thanks to our operating model, you really get the autonomy that lets you develop your sense of ownership, challenge, get into the details, and have a vision for your work. I regularly get the opportunity to defend our vision for In-store in front of management or try to convey to what is seen as the wider In-store strategy. This has given me a lot of opportunities to sharpen my communication skills. So there are lots of things to like at Klarna, but in the end, I’ve stayed because of the operating model.',
  unreasonablePassion:
    'Two things - the first is how to get systems to work together. From people to IT systems, I love how we can build things on top of other things and get a ‘wow it works’ feeling. Secondly, I love physical copies of video games. Nowadays everything is digital so it’s amazing to get that rare indie game that finally had a limited-run edition.',

  aDayInMyLife: {
    am: [
      'I usually schedule early meetings with people from my team and do 1-1s at an early start in the day.',
      "I bike to work. It's so cool to live in a place that is near enough to use your bike to go to the office.",
      'After my 1-1s of the early morning, I start off with the team stand-up.',
    ],
    pm: [
      'I will get my espresso after lunch, which is the last coffee of the day. Espresso after lunch is the best.',
      "I usually follow up on subjects while I'm waiting with my Espresso.",
      'And then I will probably help the team create awesome stuff. While drinking sparkling water.',
    ],
    evening: [
      'I will probably work late at the office, at least for Sweden. I love working when no one is here anymore.',
      "I love to go for a run when it's dark, which is pretty hard in summer, where I prefer to go for some drinks!",
      'I may end up playing one of the video games I bought. Maybe.',
    ],
  },

  takesOnKlarna: {
    leadershipPrinciple:
      'Customer obsession. I just love to create products that satisfy customers. Not just final customers - everyone from merchants to colleagues that sell or use our products.',
    bestTaskOfTheDay:
      'cleaning up JIRA, our task management system. I love to clean up JIRA and go home! I know it’s not everyone’s idea of fun but we constantly go from one challenge to another at Klarna so cleaning up JIRA helps me reflect on what we’ve achieved.',
    myTeamDescription:
      'Exigent! I love that we constantly thrive to live by the leadership principles without actually thinking about it. We are constantly trying to start small, to learn fast, to question our own ways of working, and to focus on the details.',
  },

  images: {
    main: alexandreBorelMainImage,
    more: [alexandreBorelMoreImage1, alexandreBorelMoreImage2],
  },
}

AlexandreBorel.story = AlexandreBorelStory

export const people = [IgorSrdoc, AlexandreBorel]

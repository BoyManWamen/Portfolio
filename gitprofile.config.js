// gitprofile.config.js

const config = {
  github: {
    username: 'BoyManWamen', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://boymanwamen.github.io/Portfolio/',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://profile.indeed.com/p/dbz0y7x', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'C++',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
    'SQL',
    'Unreal Engine'
  ],
  experiences: [
    {
      company: 'US Army National Guard',
      position: 'IT Specialist',
      from: 'August 2023',
      to: 'March 2023',
      companyLink: 'https://www.goarmy.com/explore-the-army/army-structure/national-guard.html',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of California, Merced',
      degree: 'Computer Science and Engineering, B.S.',
      from: '2023',
      to: '2027',
    },
    {
      institution: 'Rosemead High School',
      degree: 'High School Diploma',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'BubbleBust',
      description:
        'How many bubbles can you bust in this bubble-busting game?',
      imageUrl: 'https://www.telegraph.co.uk/multimedia/archive/01441/bubble_1441934c.jpg?imwidth=680',
      link: 'https://boymanwamen.github.io/BubbleBust/',
    },
    {
      title: 'Work in Progress',
      description:
        'I am currently developing a video game using unreal engine.',
      imageUrl: 'https://bairesdev.mo.cloudinary.net/blog/2022/08/ue-logo-1400x788-1400x788-8f185e1e3635-1.jpg?tx=w_1200,q_auto',
      link: 'https://www.unrealengine.com/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;

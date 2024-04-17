interface Project {
  title: string
  description: string
  category: string
  url: string
  imgPath: string
}

export const projectsMock: Project[] = [
  {
    title: 'Pizza Shop',
    description:
      'Application for managing a pizzeria (administrator dashboard), also communicating with APIs via HTTP requests. Has frontend tests.',
    category: 'Full Stack',
    url: 'https://github.com/Doug-Sales/React-pizza-shop',
    imgPath: '/mock-img/pizza-shop.png',
  },
  {
    title: 'API Find a friend',
    description:
      'Backend module completion challenge project meeting application and business rules.',
    category: 'Full Stack',
    url: 'https://github.com/Doug-Sales/find-a-friend-API',
    imgPath: '/mock-img/find-friend.png',
  },
  {
    title: 'CI/CD',
    description: 'Continuous delivery and implementation pipeline on EC2.',
    category: 'Backend',
    url: 'https://github.com/Doug-Sales/CI-CD_curso',
    imgPath: '/mock-img/ci-cd.png',
  },
  {
    title: 'Ignite Gym',
    description:
      'Application with backend integration for gyms and students, created for tracking executed exercises.',
    category: 'Mobile, Full Stack',
    url: 'https://github.com/Doug-Sales/ignitegym',
    imgPath: '/mock-img/ignite-gym.png',
  },
  {
    title: 'Guest List',
    description:
      'Application with a simple interface, adds and removes names of guests from the event, still in editing, the main focus is the application of React-Native fundamentals, Rocketseat course.',
    category: 'Mobile, Full Stack',
    url: 'https://github.com/Doug-Sales/App_lista_de_convidados/tree/main/my-app',
    imgPath: '/mock-img/guest-list.png',
  },
  {
    title: 'Figma Tokens',
    description: 'Figma course for web design application by Rocketseat.',
    category: 'Frontend',
    url: 'https://github.com/Doug-Sales/figma-tokens',
    imgPath: '/mock-img/figma-img.png',
  },
  {
    title: 'Use Case Website',
    description:
      'Prototype website being architected in reactjs, for a developing aesthetics clinic.',
    category: 'Real clients',
    url: 'https://github.com/Doug-Sales/clinica-estetica-jaqueline',
    imgPath: '/mock-img/use-case.png',
  },
  {
    title: 'API Gympass SOLID',
    description:
      'Same functional, non-functional, and business requirements as Gympass. Using clean code concepts.',
    category: 'Backend',
    url: 'https://github.com/Doug-Sales/03-api-SOLID',
    imgPath: '/mock-img/solid-first-five-principles.png',
  },
  {
    title: 'HackerRank Exercises',
    description:
      'Repository of studies and challenges already carried out on the hackerrank website.',
    category: 'Data Structure',
    url: 'https://github.com/Doug-Sales/HackerRank_exercises',
    imgPath: '/mock-img/hackerrank-logo.png',
  },
]

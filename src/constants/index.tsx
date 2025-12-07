/**
 * @copyright 2025 Mehmet Akif YILDIZ
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Github,
  Home,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Server,
  Settings,
  User,
  Database,
  Cloud,
  Shield,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mehmet-akif-yildiz/',
  },
  {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/codearct',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Dotnet Microservice Project',
    tags: ['EBazaar', 'Microservice'],
    projectLink: 'https://github.com/codearct/EBazaar',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Patika-Sodexo .NET Core Bootcamp Project',
    tags: ['ByCell', 'Bootcamp'],
    projectLink: 'https://github.com/codearct/ByCell',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Technological Term Dictionary ',
    tags: ['TechSoz', 'Full Stack'],
    projectLink: 'https://github.com/codearct/TechSoz',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: '.Net Movie Store Project',
    tags: ['MovieStore', 'Full Stack'],
    projectLink: 'https://github.com/codearct/MovieStore',
  },
];

const education: ExperienceType[] = [
  {
    year: 'Sep 1999 – Sep 2005',
    title: 'Bachelor of Architecture',
    instituteOrCompany: 'Middle East Technical University',
    desc: 'Built a foundation in analytical design, spatial reasoning, and structured problem-solving',
  },
  {
    year: 'Dec 2021 – Feb 2022',
    title: 'PatikaDev-Sodexo .Net Core Bootcamp',
    instituteOrCompany: 'Online Course',
    desc: 'Learned modern C# and .NET Core through real-world projects.',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'Nov 2021 – Feb 2022',
    title: 'Intern',
    instituteOrCompany: 'İletişim Yazılım, Bursa',
    desc: 'Assisted in backend development using C# and ASP.NET MVC; optimized MSSQL database structures; managed version control using Git and TFS.',
  },
  {
    year: 'Mar 2022 – Sep 2024',
    title: 'Jr. Software Developer',
    instituteOrCompany: 'Pluxee (Sodexo), İstanbul (Remote)',
    desc: 'Worked on modernization of legacy applications; developed high-performance solutions using C#, ASP.NET Core Web API, MSSQL, Oracle, Blazor WebAssembly, and Microsoft Orleans; contributed to Azure DevOps pipelines and Agile/Scrum processes; implemented and integrated SOAP services.',
  },
  {
    year: 'Sep 2024 – Present',
    title: 'Software Developer',
    instituteOrCompany: 'Pluxee (Sodexo), İstanbul (Remote)',
    desc: 'Led backend development of core product modules end-to-end, delivering scalable and maintainable solutions.',
  },
];

const tools: ToolsType[] = [
  // Programming Languages & Frameworks
  { label: 'C#', imgSrc: '/images/tools/csharp.svg' },
  { label: '.NET Core', imgSrc: '/images/tools/dotnetcore.svg' },
  { label: 'ASP.NET Core', imgSrc: '/images/tools/aspnetcore.png' },
  { label: 'Microsoft Orleans', imgSrc: '/images/tools/orleans.png' },

  // Database & ORM
  { label: 'MSSQL', imgSrc: '/images/tools/mssql.png' },
  { label: 'Oracle', imgSrc: '/images/tools/oracle.svg' },
  { label: 'Entity Framework Core', imgSrc: '/images/tools/efcore.svg' },
  { label: 'Linq2Db', imgSrc: '/images/tools/linq2db.png' },

  // Tools & Technologies
  { label: 'Git', imgSrc: '/images/tools/git.svg' },
  { label: 'Postman', imgSrc: '/images/tools/postman.svg' },
  { label: 'Docker', imgSrc: '/images/tools/docker.svg' },
  { label: 'Azure Devops', imgSrc: '/images/tools/azuredevops.svg' },
];

const services: ServiceType[] = [
  {
    title: 'API Design & Development',
    desc: 'I build scalable, secure, and well-documented RESTful APIs using modern backend technologies.',
    projects: '4 Projects',
    icon: <Server className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Microservices Architecture',
    desc: 'Designing distributed systems with domain-driven design principles, creating lightweight and maintainable microservices.',
    projects: '2 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Database Design & Optimization',
    desc: 'Creating efficient database schemas, optimizing queries, and ensuring high performance in SQL Server and Oracle.',
    projects: '4 Projects',
    icon: <Database className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Cloud & DevOps Automation',
    desc: 'Setting up CI/CD pipelines on Azure Devops for fast and reliable delivery.',
    projects: '2 Projects',
    icon: <Cloud className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Backend Performance & Security',
    desc: 'Improving system performance with caching, rate limiting, monitoring, and enhancing security with best industry practices.',
    projects: '4 Projects',
    icon: <Shield className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '04+',
    label: 'Years Of Experience',
  },
  {
    number: '100+',
    label: 'Agile Sprints Completed',
  },
  {
    number: '300+',
    label: 'Tasks Completed',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};

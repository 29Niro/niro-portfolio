// Initial content. Used (1) as a fallback when Sanity is not configured and
// (2) by scripts/seed-sanity.mjs to import everything into Sanity once.

export const siteSettings = {
  name: 'Niroshan',
  role: 'Software Engineer',
  rotatingRoles: ['Full-Stack Developer', 'Flutter Developer', 'React & Next.js Engineer', 'UI/UX Enthusiast'],
  heroIntro:
    "I'm a software engineer based in Sri Lanka. I specialize in building exceptional digital experiences across web and mobile, from healthcare platforms to SaaS products.",
  availability: 'Available for freelance work',
  profileImage: '/assets/profile.png',
  cv: '/assets/NIROSHAN_PUSHPARAJ.pdf',
  stats: [
    { title: 'Years of Experience', count: 2 },
    { title: 'Projects completed', count: 6 },
    { title: 'Code commits', count: 212 },
    { title: 'Technologies', count: 8 },
  ],
  email: '29niro@gmail.com',
  phone: '+94 775 139 934',
  address: 'Vavuniya, Sri Lanka',
  socials: [
    { name: 'GitHub', url: 'https://github.com/29Niro' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/niroshan-pushparaj/' },
    { name: 'YouTube', url: 'https://www.youtube.com/@TechKeyTamil-k4i' },
  ],
  aboutTitle: 'About Me',
  aboutDescription:
    'I am a full-stack developer with a passion for building high-quality web and mobile applications. I specialize in React, Next.js, and Flutter, and I have experience working with Node.js, Express, and MongoDB. I also have a background in UI/UX design, which allows me to create visually appealing and user-friendly interfaces. I am committed to delivering exceptional results and providing value to my clients.',
  aboutInfo: [
    { fieldName: 'Name', fieldValue: 'Niroshan Pushparaj' },
    { fieldName: 'Phone', fieldValue: '(+94) 775 139 934' },
    { fieldName: 'Experience', fieldValue: '2+ Years' },
    { fieldName: 'Nationality', fieldValue: 'Sri Lankan' },
    { fieldName: 'Email', fieldValue: '29niro@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'Tamil, English' },
  ],
  experienceIntro:
    'I have contributed to production-grade mobile and web applications across healthcare, ticketing, construction, property, and automation domains. My experience spans Flutter, React, Next.js, RESTful APIs, and cloud technologies, working in cross-functional engineering teams to deliver scalable, user-centric solutions.',
  educationIntro:
    'I hold a degree in "BSc (Hons) in Software Engineering" from University of Kelaniya, where I gained a strong foundation in software engineering principles and hands-on experience in developing innovative applications. My academic journey equipped me with technical expertise in full-stack development, mobile applications, and cloud-based solutions, all of which I apply in my professional projects.',
  skillsIntro:
    'I have experience working with a variety of modern technologies across mobile, web, backend, cloud, and automation. Here are some of the key skills I bring to the table:',
  seoTitle: 'Niroshan | Full-Stack Software Engineer | Web & Mobile Solutions',
  seoDescription:
    'Niroshan is a full-stack software engineer specializing in web and mobile application development, offering tailored solutions for businesses with a focus on performance, scalability, and mobile responsiveness.',
  ogImage: '/assets/og-image.png',
};

export const projects = [
  {
    slug: 'nivez-bridal',
    title: 'Nivez Bridal',
    category: 'Frontend',
    summary: 'Elegant, fully responsive landing site for a bridal service business, with EmailJS booking enquiries.',
    description:
      'The project "nivezbridal.com" is a fully responsive landing website developed for a bridal service business. Built using React and Tailwind CSS, it showcases the business\'s services and portfolio in an elegant and modern design. The website features seamless navigation, user-friendly layouts, and is optimized for both desktop and mobile devices. Integrated with EmailJS, it allows potential clients to easily contact the service for bookings and inquiries, ensuring a smooth user experience.',
    stack: ['React', 'Tailwind CSS', 'Email JS'],
    image: '/assets/work/nivez-bridal.png',
    live: 'https://www.nivezbridal.com/',
    github: 'https://github.com/29Niro/nivez-bridal',
    featured: true,
    order: 1,
  },
  {
    slug: 'devi-web',
    title: 'Devi Web',
    category: 'Frontend',
    summary: 'Modern marketing site that showcases professional services and digital solutions.',
    description:
      'The project "deviweb.com" is a modern, fully responsive website designed to showcase professional services and digital solutions. Developed using cutting-edge technologies like React and Tailwind CSS, the site offers a sleek, user-friendly interface optimized for both desktop and mobile devices. With seamless navigation and intuitive layouts, "deviweb.com" effectively highlights key services, portfolio items, and client testimonials. Integrated with various interactive features, it ensures visitors can easily engage with the business, explore offerings, and make inquiries via integrated contact forms.',
    stack: ['React', 'Tailwind CSS', 'Email JS'],
    image: '/assets/work/devi-web.png',
    live: 'https://www.deviweb.com/',
    github: 'https://github.com/29Niro/react-landing-page',
    featured: true,
    order: 2,
  },
  {
    slug: 'capture-rings',
    title: 'Capture Rings',
    category: 'Fullstack',
    summary: 'Studio management platform with bookings, image sales, galleries and an admin panel.',
    description:
      'The project "Capture Rings" is a comprehensive studio management website designed to streamline customer interactions and showcase the studio’s work. Customers can easily book time slots for photography sessions, purchase images, and browse through the showcased galleries. The platform features an admin panel where the studio can upload new galleries, manage blogs, and handle bookings. The user-facing side of the site is optimized for a smooth and engaging experience, making it easy for clients to explore services and make purchases.',
    stack: ['React', 'Tailwind CSS', 'Firebase', 'Email JS'],
    image: '/assets/work/capture-rings.png',
    live: 'https://29niro.github.io/capture-rings/',
    github: 'https://github.com/29Niro/capture-rings',
    featured: true,
    order: 3,
  },
];

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Yarl Ventures (Pvt) Ltd',
    date: 'Feb 2025 - Present',
    description:
      'Developing a comprehensive healthcare mobile platform enabling patients to discover doctors, book appointments, and access remote consultations. Built cross-platform applications using Flutter with native Android/iOS integrations. Implemented appointment workflows, multi-vendor diagnostics, performance optimizations, and mentored junior developers.',
  },
  {
    title: 'Frontend Engineer (Part-Time)',
    company: 'Keture',
    date: 'Oct 2025 - Present',
    description:
      'Enhancing and maintaining client-facing React and Next.js applications. Implementing new modules, optimizing UI/UX flows, and integrating RESTful APIs for real-time data-driven functionality.',
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    date: 'Apr 2024 - Present',
    description:
      'Delivering full-stack and mobile solutions for clients using React.js, Next.js, Flutter, Node.js, and Firebase. Projects include dashboards, e-commerce interfaces, internal company tools, and automation pipelines using n8n and cloud services.',
  },
  {
    title: 'Frontend Engineer',
    company: 'Keture',
    date: 'Jun 2024 - Feb 2025',
    description:
      'Developed SaaS platforms including a real-time seat booking system, construction management system, and property listing CMS. Worked with React.js, Redux, Tailwind CSS, Flutter, and RESTful APIs to build scalable, high-performance UI components and admin panels.',
  },
  {
    title: 'Full Stack Developer (Intern)',
    company: 'Silverline IT',
    date: 'Dec 2023 - May 2024',
    description:
      'Built and maintained full-stack features using React.js, Firebase, and Express.js. Implemented RESTful APIs, optimized performance, and collaborated with cross-functional teams to deliver scalable product enhancements.',
  },
  {
    title: 'Trainee Mobile App Developer',
    company: 'DDS Techvira',
    date: 'Jan 2023 - Jul 2023',
    description:
      'Developed cross-platform Flutter applications with Bloc state management. Designed UI/UX with Figma and integrated Firebase for authentication and real-time backend services.',
  },
].map((e, i) => ({ ...e, order: i + 1 }));

export const education = [
  { institution: 'University of Kelaniya', degree: 'BSc (Hons) in Software Engineering', duration: 'Feb 2020 - Apr 2024' },
  { institution: 'V/Vavuniya Tamil M.M.V', degree: 'Advanced Level', duration: 'Jan 2017 - Dec 2018' },
].map((e, i) => ({ ...e, order: i + 1 }));

export const skills = [
  { name: 'HTML', icon: 'html', group: 'Frontend' },
  { name: 'CSS', icon: 'css', group: 'Frontend' },
  { name: 'JavaScript', icon: 'js', group: 'Frontend' },
  { name: 'React JS', icon: 'react', group: 'Frontend' },
  { name: 'Next.js', icon: 'next', group: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', group: 'Frontend' },
  { name: 'Flutter', icon: 'flutter', group: 'Mobile' },
  { name: 'React Native', icon: 'react', group: 'Mobile' },
  { name: 'Node.js', icon: 'node', group: 'Backend' },
  { name: 'Express.js', icon: 'express', group: 'Backend' },
  { name: 'Nginx', icon: 'nginx', group: 'Backend' },
  { name: 'n8n Automation', icon: 'n8n', group: 'Automation' },
  { name: 'Twilio Voice & SMS', icon: 'twilio', group: 'Automation' },
  { name: 'AWS', icon: 'aws', group: 'Cloud & DevOps' },
  { name: 'Linux (Ubuntu)', icon: 'linux', group: 'Cloud & DevOps' },
  { name: 'Git & GitHub', icon: 'git', group: 'Cloud & DevOps' },
  { name: 'Docker', icon: 'docker', group: 'Cloud & DevOps' },
  { name: 'Figma', icon: 'figma', group: 'Design' },
].map((s, i) => ({ ...s, order: i + 1 }));

export const services = [
  {
    title: 'Web Development',
    value: 'web-development',
    description:
      'I build custom, mobile-responsive websites using React, Next.js, and Tailwind CSS. My solutions are optimized for performance, security, and scalability.',
  },
  {
    title: 'Mobile Development',
    value: 'mobile-development',
    description:
      'I create high-performance mobile applications using Flutter, delivering seamless experiences on both Android and iOS. I also offer expertise in React Native for cross-platform solutions.',
  },
  {
    title: 'UI/UX Design',
    value: 'ui-design',
    description:
      'I design user-friendly and conversion-optimized interfaces using Figma, ensuring an engaging and intuitive experience for your users.',
  },
  {
    title: 'SEO',
    value: 'seo-service',
    description:
      'I specialize in technical SEO, optimizing your site’s structure and performance to ensure better visibility and ranking on search engines.',
  },
].map((s, i) => ({ ...s, order: i + 1 }));

// Plain-text body so the fallback and Sanity both render through the same path.
export const posts = [
  {
    slug: 'hello-world',
    title: 'Hello, world: why I rebuilt my portfolio',
    publishedAt: '2026-10-19T00:00:00.000Z',
    excerpt: 'A short note on moving my portfolio onto a headless CMS so I can publish without touching code.',
    tags: ['Next.js', 'Sanity'],
    paragraphs: [
      'This portfolio now runs on Next.js with Sanity as its content backend.',
      'Projects, experience, skills and blog posts all live in the CMS, so updating the site no longer needs a code change or a redeploy.',
    ],
  },
];

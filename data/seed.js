// Initial content. Used (1) as a fallback when Sanity is not configured and
// (2) by scripts/seed-sanity.mjs to import everything into Sanity once.

export const siteSettings = {
  name: 'Niroshan',
  role: 'Software Engineer',
  rotatingRoles: ['Full-Stack Developer', 'Voice AI & SaaS Engineer', 'React & Next.js Engineer', 'Flutter Developer', 'Java & Spring Boot'],
  heroIntro:
    "I'm a full-stack software engineer based in Sri Lanka with 3 years of experience. I build scalable web and mobile products, from healthcare platforms to Voice AI SaaS, with React, Next.js, Node.js, Flutter and a growing Java and Spring Boot backend focus.",
  availability: 'Available for freelance work',
  profileImage: '/assets/profile.png',
  cv: '/assets/NIROSHAN_PUSHPARAJ.pdf',
  stats: [
    { title: 'Years of Experience', count: 3 },
    { title: 'Projects completed', count: 6 },
    { title: 'Companies worked with', count: 5 },
    { title: 'Technologies', count: 20 },
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
    'Full-Stack Software Engineer with 3 years of experience building scalable web applications using React.js, Node.js, and RESTful/microservices architectures, backed by relational database design in MySQL and PostgreSQL. I am actively expanding my backend expertise in Java and Spring Boot through hands-on project work, with a strong foundation in clean code, CI/CD automation, and Agile collaboration.',
  aboutInfo: [
    { fieldName: 'Name', fieldValue: 'Niroshan Pushparaj' },
    { fieldName: 'Phone', fieldValue: '(+94) 775 139 934' },
    { fieldName: 'Experience', fieldValue: '3+ Years' },
    { fieldName: 'Nationality', fieldValue: 'Sri Lankan' },
    { fieldName: 'Email', fieldValue: '29niro@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'Tamil, English' },
    { fieldName: 'Current role', fieldValue: 'Software Engineer, AIVOX' },
  ],
  experienceIntro:
    'I have shipped production software across Voice AI, healthcare, ticketing, construction and property domains. My work spans Next.js, React, Flutter, Node.js and Spring Boot, plus the integrations that tie products together: Stripe billing, Twilio and Vapi voice, real-time video, and n8n automation.',
  educationIntro:
    'I hold a B.Sc. (Hons) in Software Engineering from the University of Kelaniya (GPA 3.38 / 4.00), where I built a strong foundation in software engineering principles, full-stack development, mobile applications, and cloud-based solutions that I apply in my professional projects.',
  skillsIntro:
    'I have experience working with a variety of modern technologies across mobile, web, backend, cloud, and automation. Here are some of the key skills I bring to the table:',
  seoTitle: 'Niroshan Pushparaj | Full-Stack Software Engineer | Next.js, Java, Flutter',
  seoDescription:
    'Niroshan Pushparaj is a full-stack software engineer (3 years) building scalable web, mobile and Voice AI products with React, Next.js, Node.js, Flutter, Java and Spring Boot.',
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
    company: 'AIVOX, Australia (Remote)',
    date: 'May 2026 - Present',
    highlights: [
      'Building AIVOX, a Voice AI agent SaaS platform that answers, qualifies, and books calls 24/7 for small and medium businesses across trades, clinics, and professional services.',
      'Developed customer and admin dashboards with Next.js and Supabase for agent setup, call logs, and account management, with Stripe-powered subscription billing across multiple pricing tiers.',
      'Integrated Vapi and Twilio to configure inbound and outbound voice agents, tuning speech-to-text, LLM, and text-to-speech settings for natural, low-latency conversations.',
      'Automated outbound calling campaigns and email follow-up sequences with n8n workflows.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vapi', 'Twilio', 'n8n', 'Netlify'],
  },
  {
    title: 'Software Engineer',
    company: 'Yarl Ventures, Sri Lanka',
    date: 'Feb 2025 - Apr 2026',
    highlights: [
      'Architected and developed "Mediman," a comprehensive healthcare platform using Flutter, ensuring a seamless cross-platform experience for patients and doctors.',
      'Managed the complete release lifecycle, publishing regular updates to both the Google Play Store and Apple App Store, and implemented CI/CD pipelines with automated testing to catch regressions before release.',
      'Integrated complex third-party SDKs (Video Call SDK) and real-time communication for digital consultations.',
      'Conducted code reviews, mentored junior developers on clean code and architectural patterns, and took part in Agile sprint planning.',
    ],
    technologies: ['Flutter', 'Kotlin', 'Swift', 'GetX', 'Firebase', 'Spring Boot', 'RESTful APIs', 'MySQL'],
  },
  {
    title: 'Frontend Engineer (Part-Time)',
    company: 'Keture',
    date: 'Oct 2025 - Present',
    highlights: [
      'Enhancing and maintaining client-facing React and Next.js applications.',
      'Implementing new modules, optimizing UI/UX flows, and integrating RESTful APIs for real-time data-driven functionality.',
    ],
    technologies: ['React.js', 'Next.js', 'RESTful APIs'],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    date: 'Apr 2024 - Present',
    highlights: [
      'Delivering full-stack and mobile solutions for clients using React.js, Next.js, Flutter, Node.js, and Firebase.',
      'Projects include dashboards, e-commerce interfaces, internal company tools, and automation pipelines using n8n and cloud services.',
    ],
    technologies: ['React.js', 'Next.js', 'Flutter', 'Node.js', 'Firebase', 'n8n'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Keture, Sri Lanka',
    date: 'Jun 2024 - Feb 2025',
    highlights: [
      'Built and shipped three client-facing products end-to-end: a real-time seat booking platform (Empty Seat LK), a construction management system with automated workflows, and a property listing CMS with an admin panel (Deal Partner).',
      'Designed scalable, responsive user and admin interfaces, and integrated RESTful APIs for real-time and seamless data handling across all three platforms.',
    ],
    technologies: ['Flutter', 'GetX', 'React.js', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Intern Full Stack Developer',
    company: 'Silverline IT, Sri Lanka',
    date: 'Dec 2023 - Jun 2024',
    highlights: [
      'Developed and maintained full-stack applications using React.js and Firebase, ensuring seamless frontend-backend integration.',
      'Designed and implemented RESTful APIs using Express.js to enhance data communication and functionality.',
      'Collaborated with team members to troubleshoot issues, optimize performance, and deliver scalable solutions.',
    ],
    technologies: ['React.js', 'Firebase', 'Express.js', 'RESTful APIs'],
  },
  {
    title: 'Trainee Mobile App Developer',
    company: 'DDS Techvira, Sri Lanka',
    date: 'Jan 2023 - Jul 2023',
    highlights: [
      'Developed cross-platform mobile applications using Flutter, focusing on intuitive UI/UX with Figma.',
      'Implemented state management using the Bloc pattern for scalable, maintainable app architecture.',
      'Integrated Firebase for auth and real-time data while collaborating with the team to resolve issues.',
    ],
    technologies: ['Flutter', 'Firebase', 'Bloc', 'Figma'],
  },
].map((e, i) => ({ ...e, order: i + 1 }));

export const education = [
  { institution: 'University of Kelaniya, Sri Lanka', degree: 'B.Sc. (Hons) in Software Engineering', duration: '2020 - 2024', grade: 'GPA 3.38 / 4.00' },
  { institution: 'V/Vavuniya Tamil M.M.V', degree: 'Advanced Level', duration: 'Jan 2017 - Dec 2018' },
].map((e, i) => ({ ...e, order: i + 1 }));

export const skills = [
  { name: 'Java', icon: 'java', group: 'Languages' },
  { name: 'JavaScript', icon: 'js', group: 'Languages' },
  { name: 'TypeScript', icon: 'typescript', group: 'Languages' },
  { name: 'Dart', icon: 'dart', group: 'Languages' },
  { name: 'React JS', icon: 'react', group: 'Frontend' },
  { name: 'Next.js', icon: 'next', group: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', group: 'Frontend' },
  { name: 'HTML', icon: 'html', group: 'Frontend' },
  { name: 'CSS', icon: 'css', group: 'Frontend' },
  { name: 'Spring Boot', icon: 'spring', group: 'Backend' },
  { name: 'Node.js', icon: 'node', group: 'Backend' },
  { name: 'Express.js', icon: 'express', group: 'Backend' },
  { name: 'Nginx', icon: 'nginx', group: 'Backend' },
  { name: 'MySQL', icon: 'mysql', group: 'Databases' },
  { name: 'PostgreSQL', icon: 'postgres', group: 'Databases' },
  { name: 'MongoDB', icon: 'mongodb', group: 'Databases' },
  { name: 'Supabase', icon: 'supabase', group: 'Databases' },
  { name: 'Firebase', icon: 'firebase', group: 'Databases' },
  { name: 'Flutter', icon: 'flutter', group: 'Mobile' },
  { name: 'React Native', icon: 'react', group: 'Mobile' },
  { name: 'Stripe', icon: 'stripe', group: 'Automation' },
  { name: 'n8n Automation', icon: 'n8n', group: 'Automation' },
  { name: 'Twilio Voice & SMS', icon: 'twilio', group: 'Automation' },
  { name: 'AWS', icon: 'aws', group: 'Cloud & DevOps' },
  { name: 'Docker', icon: 'docker', group: 'Cloud & DevOps' },
  { name: 'Git & GitHub', icon: 'git', group: 'Cloud & DevOps' },
  { name: 'Linux (Ubuntu)', icon: 'linux', group: 'Cloud & DevOps' },
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
    title: 'Voice AI & Automation',
    value: 'ai-automation',
    description:
      'I build Voice AI agents and automation workflows with Vapi, Twilio and n8n that answer calls, qualify leads, book appointments and run follow-ups around the clock.',
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

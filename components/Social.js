import Link from 'next/link';

import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/29Niro',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/niroshan-pushparaj/',
    icon: <FaLinkedin />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@TechKeyTamil-k4i',
    icon: <FaYoutube />,
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.url} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

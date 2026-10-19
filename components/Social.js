import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaLink } from 'react-icons/fa';

const iconFor = {
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  twitter: FaTwitter,
  x: FaTwitter,
  instagram: FaInstagram,
};

const Social = ({ socials = [], containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => {
        const Icon = iconFor[social.name?.toLowerCase()] || FaLink;
        return (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={iconStyles}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Social;

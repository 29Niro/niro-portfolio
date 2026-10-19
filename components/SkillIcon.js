import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaLinux, FaGitAlt, FaDocker, FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiFlutter, SiExpress, SiNginx, SiN8N, SiFigma,
} from 'react-icons/si';
import { MdCall } from 'react-icons/md';

const icons = {
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJs,
  react: FaReact,
  next: SiNextdotjs,
  tailwind: SiTailwindcss,
  flutter: SiFlutter,
  node: FaNodeJs,
  express: SiExpress,
  nginx: SiNginx,
  n8n: SiN8N,
  twilio: MdCall,
  aws: FaAws,
  linux: FaLinux,
  git: FaGitAlt,
  docker: FaDocker,
  figma: SiFigma,
  code: FaCode,
};

const SkillIcon = ({ name }) => {
  const Icon = icons[name] || FaCode;
  return <Icon />;
};

export default SkillIcon;

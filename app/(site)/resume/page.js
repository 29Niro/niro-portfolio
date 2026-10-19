import ResumeTabs from '@/components/ResumeTabs';
import { getSettings, getExperience, getEducation, getSkills } from '@/lib/content';

export const metadata = {
  title: 'Resume',
  description: 'Experience, education, skills and background of Niroshan.',
};

const Resume = async () => {
  const [settings, experience, education, skills] = await Promise.all([
    getSettings(),
    getExperience(),
    getEducation(),
    getSkills(),
  ]);
  return <ResumeTabs settings={settings} experience={experience} education={education} skills={skills} />;
};

export default Resume;

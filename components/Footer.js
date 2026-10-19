import Social from './Social';
import { getSettings } from '@/lib/content';

const Footer = async () => {
  const s = await getSettings();
  return (
    <footer className="border-t border-white/10 py-8 mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} {s.name}. Built with Next.js &amp; Sanity.
        </p>
        <Social
          socials={s.socials}
          containerStyles="flex gap-3"
          iconStyles="w-9 h-9 border border-white/20 rounded-full flex justify-center items-center text-white/70 text-sm hover:border-accent hover:text-accent transition-all"
        />
      </div>
    </footer>
  );
};

export default Footer;

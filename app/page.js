import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Social from '@/components/Social';
import Profile from '@/components/Profile';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              {`Hello, I'm`}
              <br />
              <span className="text-accent">Niroshan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software engineer based in Sri Lanka. I specialize in
              building exceptional digital experiences and I am proficient in
              various programming languages and frameworks.
            </p>

            <div className="flex flex-col gap-8 xl:flex-row items-center">
              <Button
                size="lg"
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <FiDownload className="text-xl" />
                Download CV
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duratio-500"
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Profile />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

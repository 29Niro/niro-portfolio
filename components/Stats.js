'use client';

import { Item } from '@radix-ui/react-select';
import CountUp from 'react-countup';

const stats = [
  { title: 'Years of Experience', count: 2 },
  { title: 'Projects completed', count: 6 },
  { title: 'Code commits', count: 212 },
  { title: 'Technologies', count: 8 },
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.count}
                  duration={5}
                  delay={2}
                  className="h2 text-4xl xl:text-6xl font-extrabold"
                />
                <h2 className="h2 text-4xl xl:text-6xl font-extrabold">
                  +
                </h2>
                <p
                  className={`${
                    stat.title.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

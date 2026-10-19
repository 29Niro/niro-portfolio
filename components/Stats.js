'use client';

import CountUp from 'react-countup';

const Stats = ({ stats = [] }) => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex gap-3 items-center justify-center xl:justify-start"
            >
              <div className="flex items-baseline text-4xl xl:text-6xl font-extrabold">
                <CountUp end={stat.count} duration={2.5} delay={0.3} />
                <span>+</span>
              </div>
              <p className="max-w-[120px] leading-snug text-white/80 text-sm xl:text-base">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

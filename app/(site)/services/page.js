import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';
import { getServices } from '@/lib/content';

export const metadata = {
  title: 'Services',
  description: 'Web development, mobile development, UI/UX design and SEO services.',
};

const Services = async () => {
  const services = await getServices();
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <h1 className="sr-only">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          {services.map((service, index) => (
            <div key={service.value} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <Link
                  href={`/contact?service=${service.value}`}
                  aria-label={`Enquire about ${service.title}`}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

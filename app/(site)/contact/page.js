import ContactForm from '@/components/ContactForm';
import { getSettings, getServices } from '@/lib/content';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your web or mobile project.',
};

const Contact = async ({ searchParams }) => {
  const [{ service }, settings, services] = await Promise.all([
    searchParams,
    getSettings(),
    getServices(),
  ]);

  const info = [
    { icon: <FaPhoneAlt />, title: 'Phone', text: settings.phone, href: `tel:${settings.phone?.replace(/\s/g, '')}` },
    { icon: <FaEnvelope />, title: 'Email', text: settings.email, href: `mailto:${settings.email}` },
    { icon: <FaMapMarkedAlt />, title: 'Address', text: settings.address },
  ].filter((i) => i.text);

  return (
    <section className="py-6 fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-1/2 order-2 xl:order-none">
            <ContactForm services={services} defaultService={service} />
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-14 h-14 xl:w-20 xl:h-20 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-3xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl hover:text-accent transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <h2 className="text-xl">{item.text}</h2>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; 

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    text: '+94 775 139 934',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    text: '29niro@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    text: 'Vavuniya, Sri Lanka',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Niroshan', // or any recipient's name
          from_name: 'Niro Portfolio Site', // Sender's name
          name: formData.name, // Sender's name
          subject: formData.subject, // Subject from the form
          service: formData.service, // Selected service from the form
          message: formData.message, // The message from the form
          email: formData.email, // Sender's email
          phone: formData.phone, // Sender's phone number
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setIsSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-1/2 order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Reach out to discuss your project, ask questions, or
                collaborate. I&apos;m here to help bring your ideas to life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  label="Phone"
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label="Subject"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <Select
                name="service"
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                    <SelectItem value="ui-design">UI/UX Design</SelectItem>
                    <SelectItem value="seo-service">SEO Services</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-52"
                placeholder="Type your message here."
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <Button type="submit" size="md" className="max-w-40">
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>

              {isSuccess && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {isError && (
                <p className="text-red-500">Failed to send message.</p>
              )}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-14 h-14 xl:w-20 xl:h-20 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.text}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

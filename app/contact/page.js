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

import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log('Email successfully sent!', response);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send message.');
        }
      );

    sendEmail(e);

    setFormData({
      firstName: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: '',
    });
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
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
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
                    <SelectItem value="wd">Web Development</SelectItem>
                    <SelectItem value="md">Mobile App Development</SelectItem>
                    <SelectItem value="ud">UI/UX Design</SelectItem>
                    <SelectItem value="sd">SEO Services</SelectItem>
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
                Send Message
              </Button>
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

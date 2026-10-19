'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

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

const empty = { name: '', email: '', phone: '', subject: '', message: '', website: '' };

const ContactForm = ({ services = [], defaultService }) => {
  const [formData, setFormData] = useState(empty);
  const [service, setService] = useState(
    services.some((s) => s.value === defaultService) ? defaultService : ''
  );
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    setError('');

    // honeypot: real users never fill the hidden "website" field
    if (formData.website) return;

    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Please enter your name and a message.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Niroshan',
          from_name: 'Niro Portfolio Site',
          name: formData.name,
          subject: formData.subject,
          service,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setStatus('success');
      setFormData(empty);
      setService('');
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus('error'); // keep the typed message so nothing is lost
    }
  };

  return (
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={sendEmail} noValidate>
      <h1 className="text-4xl text-accent">Let&apos;s work together</h1>
      <p className="text-white/60">
        Reach out to discuss your project, ask questions, or collaborate. I&apos;m here to help bring your
        ideas to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input aria-label="Name" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
        <Input aria-label="Email" type="email" placeholder="Your Email Address" name="email" value={formData.email} onChange={handleChange} required />
        <Input aria-label="Phone" type="tel" placeholder="Your Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
        <Input aria-label="Subject" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
      </div>

      <Select value={service} onValueChange={setService}>
        <SelectTrigger className="w-full" aria-label="Service">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            {services.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Textarea
        className="h-52"
        aria-label="Message"
        placeholder="Type your message here."
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* honeypot */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Button type="submit" size="md" className="max-w-40" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      <div aria-live="polite">
        {error && <p className="text-red-400">{error}</p>}
        {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
        {status === 'error' && (
          <p className="text-red-400">Failed to send message. Please try again or email me directly.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

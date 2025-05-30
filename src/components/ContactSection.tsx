import React, { useState, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    if (formRef.current) {
      emailjs.sendForm(
        'service_ug2xrfc',     // Replace with actual EmailJS service ID
        'template_xdrou9t',    // Replace with actual EmailJS template ID
        formRef.current,
        '9QOsS__fG9PhIr3RX'      // Replace with actual EmailJS public key
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('Failed to send message. Please try again later.');
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ready to amplify your church’s message? Let’s connect and create impactful content that inspires and engages your community.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              {status && (
                <p className="text-sm text-white/70">{status}</p>
              )}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2"
              >
                <SendIcon size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Availability */}
          <div>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                    <MailIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-white/70">jonathanloyloyjr.01@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                    <PhoneIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                    <p className="text-white/70">+63-962-2615-732</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-white/70">Philippines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Availability</h3>
              <p className="text-white/70 mb-6">
                You can communicate with us according to your time of availability and we will surely respond immediately
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Current Availability</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Working Hours</span>
                  <span className="text-white">Mon-Fri, 9pm-6am PHT</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_ab9qw0v', // Get from EmailJS dashboard after creating service
        'template_n7gqqkj', // Get from EmailJS dashboard after creating template
        formData,
        'PZZDEBVuUOUdmde0O' // Get from EmailJS dashboard account settings
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    emailjs.init('PZZDEBVuUOUdmde0O'); // Get from EmailJS dashboard account settings
  }, []);

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Get in Touch</h3>
            <p>I'm eager to collaborate on UI/UX design projects and learn from 
              experienced professionals. Let's discuss design principles, user flows, and creative solutions!</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:nipunwarnakulasooriya@gmail.com" className='hover:underline'>
                    nipunwarnakulasooriya@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+94 76 765 9698</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>41/1, Colombo Road, Kadugannawa</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'
                    required/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Email'
                    required/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message'
                    required/>
                </div>
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                    transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full
                    disabled:opacity-50 disabled:cursor-not-allowed'>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-green-400 mt-4">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>
                  )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
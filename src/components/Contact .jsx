import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_dhdx8in',  // Replace with your Service ID
      'template_bfe5gzl', // Replace with your Template ID
      formData,
      'kSJjseU_EO8EHf_O9'      // Replace with your User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="name">Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      id="name"
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2' htmlFor="phone">Phoneeee</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      id="phone"
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="email">Email</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='email'
                  id="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="subject">Subject</label>
                <input
                  className='border-2 p-3 rounded-lg flex border-gray-300'
                  type='text'
                  id="subject"
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2' htmlFor="message">Message</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300'
                  id="message"
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='10'
                  required
                />
            </div>
            <button type='submit' className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Send Message</button>
        </form>
    </div>
  );
};

export default Contact;

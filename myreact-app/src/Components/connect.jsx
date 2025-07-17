 import React, { useState } from 'react';

export const Connecting = () => {
  const [formdata, setformdata] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handlechange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://portfolio-mdsu.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully ✅');
      } else {
        setStatus(`Failed: ${data.message}`);
      }
    } catch (err) {
      setStatus(`${err}`);
    }
  };

  return (
    <div className='h-max-fit w-1/2 mx-auto pt-[1rem]'>
      <h1 className='text-center font-extrabold text-3xl'> LET'S CONNECT 🤷‍♂️ </h1>
      <div>
        <form onSubmit={handlesubmit} className='flex flex-col space-y-4 items-center mt-4'>
          <div className='flex flex-col'>
            <label className='font-bold'>Name</label>
            <input
              type="text"
              name="name"
              placeholder='Name'
              onChange={handlechange}
              required
              className='px-[1rem] py-[0.5rem] w-[20rem] border border-gray-300 outline-lime-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-bold'>Contact</label>
            <input
              type="number"
              name="contact"
              placeholder="Enter Mobile Number"
              onChange={handlechange}
              required
              className='px-[1rem] py-[0.5rem] w-[20rem] border border-gray-300 outline-lime-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-bold'>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter the Email"
              onChange={handlechange}
              required
              className='px-[1rem] py-[0.5rem] w-[20rem] border border-gray-300 outline-lime-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-bold'>Message</label>
            <textarea
              name="message"
              placeholder='Send Message'
              onChange={handlechange}
              required
              className='px-[1rem] py-[0.5rem] w-[20rem] h-[8rem] border border-gray-300 outline-lime-400'
            />
          </div>

          <button
            type="submit"
            className='mt-4 px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-lime-500'
          >
            Send Message
          </button>

          <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
        </form>
      </div>
    </div>
  );
};

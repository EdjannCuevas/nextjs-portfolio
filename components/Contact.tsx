import React, { useState, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { sendContactForm } from '../lib/api'
import { AiOutlineReload } from 'react-icons/ai'
import Modal from './Modal';

interface ContactProps {
  handleLink: (arg: string) => void;
}

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const initState = {values: initValues};

const Contact: React.FC<ContactProps> = ({ handleLink }) => {
  const [state, setState] = useState(initState);
  const [hasEmpty, setHasEmpty] = useState(true);
  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasEmptyValue = Object.values(state.values).some((value) => value === '');
    setHasEmpty(hasEmptyValue);
  },[state]);

  const { values } = state;
  
  const handleChange = ({ target }: any) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }))

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    await sendContactForm(values);
    setState({ values: initValues });
    setMessageSent(true);
    setIsLoading(false);
  };

  const closeModal = () => setMessageSent(false);

  return (
    <div
      id='contact'
      className='w-full md:h-auto p-5 flex items-center py-24'
    >
        <div className='w-full m-auto flex items-center justify-center pt-4'>
            <div className='w-full md:w-[1240] lg:w-[1240px] rounded p-10 shadow-lg border-2 bg-opacity-50'>
              <div className='flex flex-row justify-between '>
                <h2 className='py-4'>Get In Touch!</h2>
                <div className='flex'>
                  <div
                    onClick={() => handleLink('https://www.linkedin.com/in/edgardo-cuevas-979311255/')} 
                    className='flex items-center justify-center rounded shadow-lg shadow-grey-400 p-5 bg-black bg-opacity-50 cursor-pointer border-2 hover:scale-105 ease-in duration-300 m-1'
                  >
                    <FaLinkedinIn />
                  </div>
                  <div
                    onClick={() => handleLink('https://github.com/EdjannCuevas')}
                    className='flex items-center justify-center rounded shadow-lg shadow-grey-400 p-5 bg-black bg-opacity-50 cursor-pointer border-2 hover:scale-105 ease-in duration-300 m-1'
                  >
                    <FaGithub />
                  </div>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className='flex flex-col py-2 w-full h-auto'>
                  <div className='grid grid-cols-2 py-2'>
                    <div>
                      <label className='uppercase text-sm py-3'>Name <span className='text-red-500'>*</span></label>
                      <input
                        className='border-2 text-black rounded-lg p-3 w-[90%] flex border-gray-300'
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className='uppercase text-sm py-3'>Email <span className='text-red-500'>*</span></label>
                      <input
                        className='border-2 text-black rounded-lg p-3 w-[100%] flex border-gray-300'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-3'>Subject <span className='text-red-500'>*</span></label>
                    <input
                      className='border-2 text-black rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                      value={values.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-3'>Message <span className='text-red-500'>*</span></label>
                    <textarea
                      className='border-2 text-black rounded-lg p-3 flex border-gray-300'
                      rows={2}
                      value={values.message}
                      name='message'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button disabled={hasEmpty} className={`flex justify-center items-center rounded-xl shadow-lg w-full p-5 mt-5 ${hasEmpty ? 'cursor-not-allowed bg-gray-400' : 'bg-[#46a8fd]'}`}>{isLoading && !messageSent ? <AiOutlineReload className='animate-spin'/> :'Send Message'}</button>
              </form>
              {
                messageSent ? <Modal isOpen={messageSent} onClose={closeModal}/> : null
              }
            </div>
        </div>
    </div>
  )
}

export default Contact
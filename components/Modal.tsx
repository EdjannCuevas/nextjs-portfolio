import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  return (
    <Transition
      show={true}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg p-5 z-10">
            <div className="flex justify-end">
            </div>
            <div className="w-screen h-[150%] md:w-[260px] md:h-[100%] text-center">
                <div className='flex flex-col min-h-[200px]'>
                    <div className='h-[70%]'>
                        <p className="text-4xl p-4 m-6 h-[70%] text-black uppercase tracking-widest">message sent!</p>
                    </div>
                    <Link href={'/'}>
                        <button onClick={handleClose} className="flex flex-col justify-center items-center w-full p-3 text-3xl rounded-lg h-[30%] bg-[#46a8fd] text-white hover:scale-105 ease-in duration-300 border-2 border-gray-300 focus:outline-none">
                            <HiOutlineChevronDoubleUp/>
                            <p>Back To Top</p>
                        </button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Modal;
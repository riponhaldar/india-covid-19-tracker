import Link from 'next/link';
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
export default function Navbar() {
  return (
    <div className='h-20  flex items-center relative shadow-sm'>
      <div className='text-3xl text-center w-full text-gray-400 font-bold'>
        India Covid live
      </div>
      {/* social links*/}
      <div className='absolute right-0'>
        <ul className='flex text-2xl'>
          <li className=' mr-8 p-2 text-blue-400 bg-gray-50  hover:text-blue-200  transform delay-200 ease-in-out'>
            <Link href='/'>
              <a>
                <FiGithub />
              </a>
            </Link>
          </li>
          <li className=' mr-8 p-2 text-blue-400 bg-gray-50  hover:text-blue-200  transform delay-200 ease-in-out'>
            <Link href='/'>
              <a>
                <FiLinkedin />
              </a>
            </Link>
          </li>
          <li className=' mr-4 p-2 text-blue-400 bg-gray-50  hover:text-blue-200  transform delay-200 ease-in-out'>
            <Link href='/'>
              <a>
                <FiGlobe />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

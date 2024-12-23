import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { color } = useContext(GlobalContext);

  return (
    <header
      className='continer w-full mx-auto flex items-center justify-between p-5'
      style={{ backgroundColor: color }}
    >
      {/* Logo */}
      <div
        className='flex items-center cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Link to='/' className='btn btn-ghost text-xl'>
          MyShop
        </Link>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex gap-5 items-center transition-all duration-300  ${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex`}
      >
        <li>
          <Link to='/' className='hover:text-primary'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-primary'>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='hover:text-primary'>
            Contact
          </Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className='flex items-center gap-3'>
        {/* Cart Dropdown */}
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'
          >
            <div className='card-body'>
              <span className='text-lg font-bold'>9 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVRQUiLZMMBawmw2483gS0iCOUXhvrvzYWg&s' />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

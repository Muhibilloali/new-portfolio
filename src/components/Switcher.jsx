import React, {useState, useEffect} from 'react'
import {BsFillMoonFill} from 'react-icons/bs'
import {HiOutlineSun} from 'react-icons/hi'
const Switcher = () => {
  const [theme, setTheme] = useState('dark');


  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])


  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className=''>
              <button class="flex gap-x-2.5 p-2 bg-yellow-300 dark:bg-[#3B3A51] rounded-lg " onClick={handleThemeSwitch}>
        {theme === 'dark' ?   <BsFillMoonFill className='text-gray-400' size={18} /> : <HiOutlineSun className='text-black' size={18} />}
      </button>
    </div>
  )
}

export default Switcher
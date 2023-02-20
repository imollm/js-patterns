import { JSIcon } from './Icons'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='bg-darkGray w-full h-20 px-32 flex justify-between'>
      <div className='flex gap-8 items-center'>
        <figure className='w-8 h-8'>
          <JSIcon />
        </figure>
        <span className='text-lightGray'>JavaScript Patterns</span>
      </div>
      <div className='flex items-center text-lightGray'>
        <Link to='/'>
          Home
        </Link>
      </div>
    </header>
  )
}

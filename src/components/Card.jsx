// import { Link } from 'react-router'

import { Link } from 'react-router-dom'

export default function Card ({ name }) {
  const patternName = name.split(' ')[0]

  return (
    <div className='border-4 bg-darkGray text-lightYellow border-[#BABABA] rounded flex items-center justify-center w-[650px] h-64 my-0 mx-auto'>
      <Link to={`/pattern/${patternName.toLowerCase()}`} className='w-full h-full flex justify-center items-center'>
        <div className='text-2xl flex justify-center'>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  )
}

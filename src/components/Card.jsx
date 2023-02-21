import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Card ({ name }) {
  const linkRef = useRef('')
  const patternName = name.split(' ')[0]

  const changeTitle = () => {
    const title = document.querySelector('head title')
    title.innerText = ''
    title.innerText = `JS Patterns - ${linkRef.current.dataset.pattern}`
  }

  return (
    <div onClick={changeTitle} className='border-4 bg-darkGray text-lightYellow border-[#BABABA] rounded flex items-center justify-center w-[650px] h-64 my-0 mx-auto hover:text-darkGray hover:bg-darkYellow hover:scale-110 hover:animate-active'>
      <Link
        to={`/pattern/${patternName.toLowerCase()}`}
        className='w-full h-full flex justify-center items-center'
        data-pattern={patternName}
        ref={linkRef}
      >
        <div className='text-2xl flex justify-center'>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  )
}

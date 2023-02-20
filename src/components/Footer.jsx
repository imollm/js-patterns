import { GitHubIcon, WebSiteIcon } from './Icons'

export default function Footer () {
  return (
    <footer className='bg-darkGray grid place-content-center py-10 text-lightGray'>
      <span>Made it with ❤️ by Ivan</span>
      <div className='flex justify-around gap-4 pt-6'>
        <figure className='w-6 h-6'>
          <GitHubIcon />
        </figure>
        <figure className='w-6 h-6'>
          <WebSiteIcon />
        </figure>
      </div>
    </footer>
  )
}

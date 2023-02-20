import Header from './Header'
import Footer from './Footer'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <main className='bg-lightYellow h-full py-10'>
        {children}
      </main>
      <Footer />
    </>
  )
}

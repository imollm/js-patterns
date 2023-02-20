export default function PatternParagraph ({ title, text }) {
  return (
    <section>
      <h2 className='text-2xl mb-3'>
        {title}
      </h2>
      <p className='text-xl max-w-3xl mb-16 text-justify leading-relaxed bg-darkGray text-lightGray p-6 rounded-md'>
        {text}
      </p>
    </section>
  )
}

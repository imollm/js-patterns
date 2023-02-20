import Card from './Card'
import { patterns } from '../patterns'

export default function Grid () {
  return (
    <section className='grid grid-cols-1 gap-8 px-80'>
      {
        patterns.map(pattern => {
          return (
            <Card key={pattern.name} name={pattern.name} />
          )
        })
      }
    </section>
  )
}

import { useParams } from 'react-router'
import CodeSnippet from './CodeSnippet'
import CodeOutput from './CodeOutput'
import { patterns } from '../patterns'
import PatternParagraph from './PatternParagraph'

export default function Pattern () {
  const { name } = useParams()
  const pattern = patterns.find(pattern => pattern.name.toLowerCase().includes(name))

  if (!name || !pattern) {
    window.location.href = '/'
  } else {
    return (
      <section className='flex flex-col items-center'>
        <h1 className='text-5xl mt-8 mb-16'>
          {pattern.name}
        </h1>
        <PatternParagraph title='Description:' text={pattern.description} />
        <PatternParagraph title='Example:' text={pattern.example} />
        <div className='flex flex-col items-start gap-4 ml:flex-row'>
          <CodeSnippet code={pattern.code} />
          <CodeOutput output={pattern.output} />
        </div>
      </section>
    )
  }
}

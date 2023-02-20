import { CodeSection } from 'react-code-section-lib'
import CodeSectionHeader from './CodeSnippetHeader'

export default function CodeOutput ({ output }) {
  return (
    <div className='code-output max-w-fit mt-8'>
      <h2 className='text-2xl mb-6'>
        Output
      </h2>
      <CodeSectionHeader />
      <CodeSection
        theme='dark'
        lang='javascript'
      >
        {output}
      </CodeSection>
    </div>
  )
}

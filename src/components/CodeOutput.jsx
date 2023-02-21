import { CodeSection } from 'react-code-section-lib'
import CodeSectionHeader from './CodeSnippetHeader'

export default function CodeOutput ({ output }) {
  return (
    <div className='code-output w-full ml:max-w-fit'>
      <h2 className='text-2xl mb-6 mt-6 ml:mt-0'>
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

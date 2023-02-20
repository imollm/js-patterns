import { CodeSection } from 'react-code-section-lib'
import CodeSectionHeader from './CodeSnippetHeader'

export default function CodeSnippet ({ code }) {
  return (
    <div className='flex flex-col max-w-fit code-snippet border-x-slate-500'>
      <h2 className='text-2xl mb-6'>
        Code snippet
      </h2>
      <CodeSectionHeader />
      <CodeSection
        showLineNumbers
        theme='dark'
        lang='javascript'
      >
        {code}
      </CodeSection>
    </div>
  )
}

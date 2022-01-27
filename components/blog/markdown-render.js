import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

export default function MarkdownRender({ markdown, highlight = true }) {
  return highlight ? (
    <ReactMarkdown className="markdown-body pt-5 pb-4" rehypePlugins={[rehypeRaw, rehypeHighlight]}>{markdown}</ReactMarkdown>
  ) : (
    <ReactMarkdown className="markdown-body pt-5 pb-4" rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
  )
}
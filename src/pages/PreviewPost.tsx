import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ReactMarkdown from 'react-markdown'

export default function PreviewPost() {
  const location = useLocation()
  const navigate = useNavigate()
  const { content } = location.state as { content: string }

  const handleBackToEditor = () => {
    navigate('/create')
  }

  const handleSubmitPost = () => {
    // In a real application, you would submit the post to the server here
    console.log('Submitting post:', content)
    // After submission, navigate to the home page or the new post page
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Preview Post</h1>
      <div className="prose dark:prose-invert max-w-none mb-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={handleBackToEditor}>Back to Editor</Button>
        <Button onClick={handleSubmitPost}>Submit Post</Button>
      </div>
    </div>
  )
}
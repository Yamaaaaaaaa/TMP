import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function CreatePost() {
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handlePreview = () => {
    // In a real application, you would send the content to the server
    // and receive the HTML preview. For this example, we'll just
    // navigate to the preview page with the content as a parameter.
    navigate('/preview', { state: { content } })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <div className="mb-4">
        <Textarea
          placeholder="Write your post content here using Markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={20}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Save Draft</Button>
        <Button onClick={handlePreview}>Preview</Button>
      </div>
    </div>
  )
}
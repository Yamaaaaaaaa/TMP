import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import PostCard from '@/components/PostCard'

// Mock data for posts
const posts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  description: 'This is a short description of the blog post...',
  topic: 'Programming',
  tags: ['#news', '#proptit_picnic', '#ai'],
}))

export default function TopicPage() {
  const { subjectName } = useParams<{ subjectName: string }>()
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts in {subjectName}</h1>
      <div className="grid gap-6">
        {currentPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="mx-4">
          Page {currentPage} of {Math.ceil(posts.length / postsPerPage)}
        </span>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastPost >= posts.length}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
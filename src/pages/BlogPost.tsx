import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import PostCard from '@/components/PostCard'
import { useEffect, useState } from 'react'
import { getAPost } from '@/services/post'
import MarkdownRenderer from '@/components/convertMD/MarkdownRenderer'



// Mock data for related posts
const relatedPosts = Array.from({ length: 3 }, (_, i) => ({
  id: i + 2,
  title: `Related Post ${i + 1}`,
  description: 'This is a short description of a related post...',
  topic: 'React',
  tags: ['#react', '#javascript'],
}))

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  console.log("blogpost id:", id);

  const [postData, setPostData] = useState({})
  useEffect(() => {
    const getData = async() => {
      const data = await getAPost(id);
      setPostData(data)
      console.log("data: ", data);
    }
    console.log("id: ", id);
    
    getData()
    
  }, [id])


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
          <div className="text-sm text-muted-foreground mb-4">
            {/* By {post.author} | {post.date} */}
            By SON | 1/1/1111
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <MarkdownRenderer content={postData.content}/>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {/* {postData.tags.map((tag) => (
              <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                {tag}
              </span>
            ))} */}
          </div>
          <div className="mt-8 flex justify-between">
            <Button variant="outline">Previous Post</Button>
            <Button variant="outline">Next Post</Button>
          </div>
        </div>
        {/* <div>
          <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.id} {...relatedPost} />
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Share</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">Facebook</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
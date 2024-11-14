import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { getAPost } from '@/services/post'


export default function PostCard(props: { id: string }) {
  console.log(props);
    
  const [postData, setPostData] = useState({})
  useEffect(() => {
    const getData = async() => {
      const data = await getAPost(props.id);
      setPostData(data)
      console.log("data: ", data);
    }
    console.log("id: ", props.id);
    
    getData()
    
  }, [props.id])

  return (
    <Card className={`md:col-span-2 flex flex-col`}>
      <CardHeader>
        <CardTitle>{postData.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* <p className="text-sm text-muted-foreground mb-2">{topic}</p> */}
        <p>{postData.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
              #tag1
            </span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
              #tag2
            </span>
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
              #tag3
            </span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/post/${props.id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
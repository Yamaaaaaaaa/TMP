import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const topics = [
  { name: 'JavaFX', slug: 'javafx' },
  { name: 'C++', slug: 'cpp' },
  { name: 'C', slug: 'c' },
]

export default function Sidebar({ 
  open, 
  setOpen 
}: { 
  open: boolean
  setOpen: (open: boolean) => void 
}) {
  return (
    <div
      className={`${
        open ? 'w-64' : 'w-16'
      } relative flex flex-col h-screen p-3 bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-in-out`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className={`${!open && 'hidden'} text-xl font-bold`}>Topics</h2>
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <div className="space-y-1">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/subject/${topic.slug}`}
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {topic.name}
              </Link>
            ))}
          </div>
          <div className={`mt-4 ${!open && 'hidden'}`}>
            <h3 className="mb-2 text-sm font-semibold text-gray-500">Developer Info</h3>
            <Link
              to="/about/proptit"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              PTIT Programming Club
            </Link>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
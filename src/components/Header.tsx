import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun, Settings, Menu, PlusCircle } from 'lucide-react'
// import { useTheme } from './theme-provider'

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { setTheme } = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleClickLogin = (event) => {
    setIsLoggedIn(true)
  }
  const handleLogout = (event) => {
    sessionStorage.removeItem('user')
    setIsLoggedIn(false)
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Programming Blog</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-9 px-0">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/create">
              <Button variant="ghost" size="sm" className="w-9 px-0">
                <PlusCircle className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Create New Post</span>
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="ghost" size="sm" className="w-9 px-0">
                <Settings className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>

            <div>
                {isLoggedIn ? 
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                  >
                      Logout
                  </Button> : 
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClickLogin}
                  >
                      <Link to="/login">Login</Link>
                  </Button>
                }
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
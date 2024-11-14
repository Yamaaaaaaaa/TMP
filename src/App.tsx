import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useTheme } from './components/theme-provider'
import Header from './components/Header'
import Sidebar from '@/components/SideBar'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import BlogPost from './pages/BlogPost'
import Settings from '@/pages/Setting'
import CreatePost from './pages/CreatePost'
import PreviewPost from './pages/PreviewPost'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  // const { theme } = useTheme()

  return (
    <Router>
      <div className={`flex h-screen overflow-hidden`}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/subject/:subjectName" element={<TopicPage />} />
              <Route path="/post/:id" element={<BlogPost />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/preview" element={<PreviewPost />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}
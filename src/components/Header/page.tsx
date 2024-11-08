"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogOut} from "lucide-react"

export default function Header() {
  const [isLogin, setLogin] = useState(false); 

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')
    console.log(storedUser);
    
    if (storedUser) {
      setLogin(true)
    }
  }, [])

  const handleLogout = (event) => {
    sessionStorage.removeItem('user')
    setLogin(false)
  }
  return (
    <div>
      <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">My Blog</h1>
          {
            isLogin ? <Button variant="outline" onClick={handleLogout}><LogOut className="mr-2 h-4 w-4" />Logout</Button> :  
            <div>
              <Button variant="outline"><Link href={"/login"}>Login</Link></Button>
              <Button variant="outline"><Link href={"/register"}>Register</Link></Button>
            </div> 
          }
      </div>      
    </div>
  );
}

"use client"
import AddNewRecord from "@/components/AddNewBlog/page";
import supabase from "@/config/supabaseClient";
import Link from "next/link";
import "./style.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Trash2 } from "lucide-react"


export default function BlogList(){
    //1. Xử lý data:
    const [fetchErr, setFetchErr] = useState(null)
    const [smoothies, setSmoothies] = useState(null)
    const [updated, setUpdated] = useState(0)
    const router = useRouter()
    console.log(supabase);
    
    useEffect(() => {
        const fetchSmoothies = async() =>{
          const {data, error} = await supabase
            .from("smoothies") //Lấy data từ bảng smoothies
            .select() //Lấy smt, ko để j là lấy hết
    
            if(error){
              setSmoothies(null)
              console.log("Error:", error);    
            }
            if(data){
              setFetchErr(null)
              setSmoothies(data)  
              console.log("Dataa: ", data);            
            }
        }
        fetchSmoothies()
      }, [updated])


    // 2. Xử lý các sự kiện: CRUD  
    const handleClick_Edit = (id: any) => {
        if(isLogin){

        }
        else{
            router.push("/login")
        }
    }
    const HandleClick_delete = (id: number) => {
        if(isLogin){
            console.log(id);
            const fetchSmoothies = async() =>{
                const {data, error} = await supabase
                .from("smoothies") //Lấy data từ bảng smoothies
                .delete()
                .eq("id", id)
                .select() //Lấy smt, ko để j là lấy hết
        
                if(error){
                    console.log("Xoa bi loi");    
                }
                if(data){
                    console.log("Xoa thanh cong", data);
                    setUpdated(updated + 1)
                }
            }
            fetchSmoothies()
        }
        else{
            router.push("/login")
        }
    }
        //*: Xử lý việc update data khi xóa, sửa ko cần reload:
    


    // 3. Để ý các tk cần show ra khi đã đăng nhập, đăng kí chưa

    const [isLogin, setLogin] = useState(false); 

    useEffect(() => {
      const storedUser = sessionStorage.getItem('user')
      console.log(storedUser);
      
      if (storedUser) {
        setLogin(true)
      }
    }, [])


    return(
        <div>
            
            {isLogin ?  <AddNewRecord/> : <div></div>}
            <h2>List Posts:</h2>

            {fetchErr && <p>{fetchErr}</p>}
            {smoothies && (
                <div>
                    <div className="smoothies">
                    {
                        smoothies.map((smoothie, id) => {
                            return (
                                <div key={id}>
                                    <Card key={smoothie.id} className="group hover:border-primary/50 transition-colors">
                                    <CardContent className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-2">
                                        <span className="font-medium text-muted-foreground">Blog {id}:</span>
                                        <span className="font-semibold"><Link href={{pathname:`/blogs/${id}`, query: { id: smoothie.id, title: smoothie.title }}}>{smoothie.title}</Link></span>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary" onClick={() => handleClick_Edit(smoothie.id)}>
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Edit
                                        </Button>
                                        <Button variant="destructive" size="sm" key={id} onClick={() => HandleClick_delete(smoothie.id)}>
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </Button>
                                        </div>
                                    </CardContent>
                                    </Card>
                                </div>
                            )
                        }
                    )}
                    </div>
                </div>
            )}
        </div>
    )
}


"use client"
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";
import ConvertMarkdown from "@/components/ConvertMarkDown/page";
import { useSearchParams } from "next/navigation";

// {searchParams } : {
//     searchParams: { id: string, title: string} 
// }
export default function BlogDetail()
{
    const searchParams = useSearchParams(); // Nên dùng searchParam hay params bằng hook, nếu truyền bên trên kiểu tham số sẽ gây lỗi
    const [smoothies, setSmoothies] = useState(null)

    useEffect(() => {
        const fetchSmoothies = async() =>{
          const {data, error} = await supabase
            .from("smoothies") //Lấy data từ bảng smoothies
            .select() //Lấy smt, ko để j là lấy hết
            .eq("id", searchParams.get("id"))
            .single()
            if(error){
              setSmoothies(null)
              console.log(error);    
            }
            if(data){
              setSmoothies(data) 
            }
        }
        fetchSmoothies()
      }, [searchParams])
    console.log("Content:", smoothies);

    return(
        <div>
            <h1>Detail about Blog: {searchParams.get("title")}</h1>
            {
                smoothies && (
                    <ConvertMarkdown params={{
                        data: smoothies.content,
                    }}/>
                )
            }
        </div>
    )
    
}
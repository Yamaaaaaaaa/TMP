"use client"

import { useState } from "react"
import "./style.css"
import supabase from "@/config/supabaseClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react"

export default function AddNewRecord(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [formErr, setFormError] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!title || !content){
            setFormError("Pls fill in all the field")
            console.log(formErr);
            
            return;
        }

        console.log(title, " ", content);
        const {data, error} = await supabase
            .from("smoothies")
            .insert([{title, content}])
            .select() //Nếu muốn data nó trả về cái tk vừa add thì thêm cái này, ko là nó trả all

            if(error){
                console.log(error);
                setFormError("Post bị lỗi")
            }
            if(data){
                setFormError("Add new Record Completly:" + data[0].title)
            }
            console.log("hang vua them:", data);
    }
    return(
        <div className="addPost">
            <form onSubmit={handleSubmit}>
                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="text-2xl">Add New Post</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="title" className="text-sm font-medium">
                            Enter Title
                            </label>
                            <Input id="title" placeholder="Enter your post title" type="text" onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="content" className="text-sm font-medium">
                            Content
                            </label>
                            <Textarea
                            id="content"
                            placeholder="Write your post content here..."
                            className="min-h-[100px]"
                            onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        </div>
                        <Button type="submit" className="w-full md:w-auto">
                            <Plus className="mr-2 h-4 w-4" />
                            Submit Post
                        </Button>
                    </CardContent>
                </Card>
                {formErr && <p>{formErr}</p>}
            </form>
        </div>
    )
}
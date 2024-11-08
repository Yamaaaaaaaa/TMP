"use client"

import { useState } from "react"
import "./style.css"
import supabase from "@/config/supabaseClient";
export default function EditPost(){
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
            console.log(data);
            
    }
    return(
        <div className="addPost">
            ADD NEW POST:
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" >Enter Title:</label>
                <input type="text" placeholder="Title" id="title" onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="content" >Enter Title:</label>
                <textarea placeholder="Content" id="content" onChange={(e) => setContent(e.target.value)}/>
                <button type="submit">Submit</button>
                {formErr && <p>{formErr}</p>}
            </form>
        </div>
    )
}
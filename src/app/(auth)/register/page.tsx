// 1. Đăng kí
"use client"
import supabase from "@/config/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"

export default function Home() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    function handleChange(event) {
        console.log(event.target.value);
        setFormData((prevFormData) => {
        return{
            ...prevFormData, 
            [event.target.name]: event.target.value
        }
        })
        console.log(formData);
    }
    async function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault()
        try {
        const { data, error } = await supabase.auth.signUp(
            {
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                full_name: formData.fullName,
                },
            }
            }
        )
        if(error) alert("Đăng kí không thành công:", error);
        else{
            alert("Đăng kí thành công")
            console.log("ng dung moi: ", data);
            sessionStorage.setItem("user", data);
            router.push("/")
        }
        
        } catch (error) {
            alert("Error:", error)
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
                <Card className="w-full max-w-sm">
                    <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Đăng ký tài khoản</CardTitle>
                    <CardDescription>
                        Nhập thông tin của bạn để tạo tài khoản mới
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên</Label>
                        <Input 
                        id="name" 
                        placeholder="Nhập họ và tên của bạn"  
                        name="fullName" type="text" onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                        id="email" 
                        placeholder="example@example.com" 
                        type="email"
                        defaultValue="sonasked1@gmail.com"
                        name="email" onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Input 
                        id="password" 
                        type="password"
                        defaultValue="••••••"
                        name="password"
                        onChange={handleChange}
                        />
                    </div>
                    <Button className="w-full" size="lg" type="submit">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Đăng ký
                    </Button>
                    <div className="text-center text-sm">
                        <span className="text-muted-foreground">Bạn đã có tài khoản? </span>
                        <a 
                        href="#" 
                        className="text-primary hover:text-primary/90 font-medium underline-offset-4 hover:underline"
                        >
                        <Link href={"/login"}>Đăng nhập</Link>
                        </a>
                    </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    </div>
    )
}
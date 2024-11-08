"use client"
import supabase from "@/config/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
    //2. Đăng nhập:
    const [formData_Login, setFormData_Login] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const router = useRouter();
    
    function handleChange_Login(event: { preventDefault: () => void; target: { value: any; name: any; }; }) {
        event.preventDefault()
        console.log(event.target.value);
        setFormData_Login((prevFormData) => {
        return{
            ...prevFormData, 
            [event.target.name]: event.target.value
        }
        })
        console.log(formData_Login);
    }

    async function handleSubmit_Login(event: { preventDefault: () => void; }){
        event.preventDefault()
        try {
        const { data, error } = await supabase.auth.signInWithPassword(
            {
            email: formData_Login.email,
            password: formData_Login.password,
            }
        )
        if(error) alert("Đăng nhập không thành công:", error)
        else{
            alert("Đăng nhập thành công")
            console.log("Đăng nhập thành công", data);
            sessionStorage.setItem("user", data);
            router.push("/")
        }
        } catch (error) {
            alert("Error:", error)
        }
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit_Login} className="login-box">
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
                    <Card className="w-full max-w-sm">
                        <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Đăng Nhập</CardTitle>
                        <CardDescription>
                            Nhập email và mật khẩu của bạn để đăng nhập
                        </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                            id="email" 
                            placeholder="example@example.com" 
                            type="email" 
                            defaultValue="sontb@gmail.com"
                            name="email" onChange={handleChange_Login}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Mật khẩu</Label>
                            <Input 
                            id="password" 
                            type="password" 
                            defaultValue="••••••"
                            name="password" onChange={handleChange_Login}
                            />
                        </div>
                        <Button className="w-full" size="lg" type="submit">
                            Đăng nhập
                        </Button>
                        <div className="text-center text-sm">
                            <span className="text-muted-foreground">Bạn chưa có tài khoản? </span>
                            <a 
                            href="#" 
                            className="text-primary hover:text-primary/90 font-medium underline-offset-4 hover:underline"
                            >
                            <Link href={"/register"}>Đăng kí</Link>
                            </a>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </form>

        </div>
        
    );
}

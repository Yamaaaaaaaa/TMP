import supabase from "@/config/supabaseClient";

export const getAllPosts = async () => {
    const {data, error} = await supabase
        .from("posts") //Lấy data từ bảng smoothies
        .select() //Lấy smt, ko để j là lấy hết
        .range(1, 4)
        if(error){
            console.log("Error:", error);    
        }
        if(data){
            console.log("Data All Posts: ", data); 
            return data    
        }
}

export const getAllPostFromTo = async (from:number, to:number) => {
    const {data, error} = await supabase
        .from("posts") //Lấy data từ bảng smoothies
        .select() //Lấy smt, ko để j là lấy hết
        .range(from, to)
        if(error){
            console.log("Error:", error);    
        }
        if(data){
            console.log("Data All Posts: ", data); 
            return data    
        }
}

export const getAPost = async (id: string) => {    
    const {data, error} = await supabase
        .from("posts") //Lấy data từ bảng smoothies
        .select() //Lấy smt, ko để j là lấy hết
        .eq("id", id)
        .single()
        if(error){
            console.log("Error get A post: ", error);    
        }
        if(data){
            console.log("A Post: ", data);  
            return data
        }
}
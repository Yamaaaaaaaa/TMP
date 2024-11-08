# I. Connect:
1. file.env
   1. NEXT_APP_SUPABASE_URL=...
   2. NEXT_APP_SUPABASE_ANON_KEY=...
2. Hoặc có thể áp mẹ nó cái link vào:
   1.   Để code sau ở phần config:
        ```tsx
            import { createClient } from '@supabase/supabase-js'
            const supabaseUrl = "https://ivnzpdrmeysahpkvyffu.supabase.co"
            const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2bnpwZHJtZXlzYWhwa3Z5ZmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4Mzc0MjIsImV4cCI6MjA0NTQxMzQyMn0.x9yCM-VYeizWcTL2sHAzygYrW9nSE03pZf702pmLLTE"
            const supabase = createClient(supabaseUrl, supabaseKey)

            export default supabase
        ```
   2. Lúc này ta đã có được supabaseClient = supabase, ta có thể in ra:
      1. ![alt text](image.png)
      2. ![alt text](image-1.png)

# II. Fetching Data:
1. B1: Tạo bảng:
   1. ![alt text](image-2.png)
2. B2: VD: Muốn lấy tất cả data ở bảng smoothies:
   1. ![alt text](image-3.png)
   2. Duyệt thì cứ map mà duyệt:
   3. ![alt text](image-4.png)
3. VD: Muốn lấy data theo content của 1 cột : sử dụng eq("tencot", "data") (equal):
   1. ![alt text](image-5.png)


# III. Add a Record:
1. à 
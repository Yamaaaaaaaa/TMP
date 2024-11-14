import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://ivnzpdrmeysahpkvyffu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2bnpwZHJtZXlzYWhwa3Z5ZmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4Mzc0MjIsImV4cCI6MjA0NTQxMzQyMn0.x9yCM-VYeizWcTL2sHAzygYrW9nSE03pZf702pmLLTE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
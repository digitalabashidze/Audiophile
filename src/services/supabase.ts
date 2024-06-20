import { createClient } from '@supabase/supabase-js'

export const supabaseStorageUrl =
	'https://hropcrkvjlflngrduqxw.supabase.co/storage/v1/object/public/avatars'
export const supabaseUrl = 'https://hropcrkvjlflngrduqxw.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyb3Bjcmt2amxmbG5ncmR1cXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NDI1ODcsImV4cCI6MjAzMzAxODU4N30.2xgoWskQ2BL1fqtJqvaaN4sDF8LKj6ncHWYfjCa_YYE'

export const supabase = createClient(supabaseUrl, supabaseKey)

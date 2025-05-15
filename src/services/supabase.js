import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://meaplrfqojmlmpikpous.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lYXBscmZxb2ptbG1waWtwb3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNDA5NDksImV4cCI6MjA2MjcxNjk0OX0.yWBvGo6vaNIPglSGoPJudURos2y420C2dQ9rjk4z-_Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

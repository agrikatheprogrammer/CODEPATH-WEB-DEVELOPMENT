// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mmjtaivpobmfexzmkrjb.supabase.co'

// ✅ Hardcoded for testing/dev purposes only
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tanRhaXZwb2JtZmV4em1rcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTAyODksImV4cCI6MjA2OTQyNjI4OX0.09EQYRw3StlMPRRo4swwQxTNynfeSQOgVjqNumDpcwI'  // Replace this with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseKey)

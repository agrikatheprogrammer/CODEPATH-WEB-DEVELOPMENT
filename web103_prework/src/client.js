import { createClient } from '@supabase/supabase-js';

const URL='https://ssbzhvyxfbcfcnsnnebe.supabase.co';
const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzYnpodnl4ZmJjZmNuc25uZWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMTk0MjMsImV4cCI6MjA3MTU5NTQyM30.01FrQkfrnashnSVdVZQNPXmx9iUQ0K0EgbTVlgvVSeU';

const supabase= createClient(URL,API_KEY);

export default supabase;

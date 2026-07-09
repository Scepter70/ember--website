// ============================================================
// Paste your own Supabase project details here.
// Find them in Supabase: Project Settings -> API
//   - "Project URL"      -> SUPABASE_URL
//   - "anon public" key  -> SUPABASE_ANON_KEY
// This key is safe to expose publicly — it only allows what your
// Row Level Security policies in schema.sql permit.
// ============================================================
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_PUBLIC_KEY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

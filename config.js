// ============================================================
// Paste your own Supabase project details here.
// Find them in Supabase: Project Settings -> API
//   - "Project URL"      -> SUPABASE_URL
//   - "anon public" key  -> SUPABASE_ANON_KEY
// This key is safe to expose publicly — it only allows what your
// Row Level Security policies in schema.sql permit.
// ============================================================
const SUPABASE_URL = "https://mnojgvxymkmceqbeqqtg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YdRZSdVj_TTAN3x2qlMlZQ_0sjTWC3D";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

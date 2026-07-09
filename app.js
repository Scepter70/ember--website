// Shared helpers used across pages. Requires config.js to be loaded first.

async function getSession() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session;
}

// Redirects to login if not signed in. Call at the top of protected pages.
async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = "login.html";
    return null;
  }
  return session;
}

async function getProfile(userId) {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}

function formatUSD(n) {
  return Number(n).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}

function formatQty(n, decimals = 6) {
  return Number(n).toLocaleString("en-US", { maximumFractionDigits: decimals });
}

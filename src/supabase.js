import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl = "https://ixdtbmgfwmvdrlptxchr.supabase.co";
const supabaseKey = "sb_publishable_ktCj-3RHC7gEUQHWr7rWWw_foJd-f8c";
 
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

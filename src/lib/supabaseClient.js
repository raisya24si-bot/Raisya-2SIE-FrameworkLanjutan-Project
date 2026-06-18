import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebttikzefzzydfbnmheq.supabase.co";
const supabaseKey = "sb_publishable_515hSVGYPahI45JXbxrMtg_axbe2JL7";

export const supabase = createClient(supabaseUrl, supabaseKey);
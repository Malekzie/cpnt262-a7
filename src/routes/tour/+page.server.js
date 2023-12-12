/** @type {import('./$types').PageServerLoad} */
import { supabase } from '$lib/db';
export async function load() {
    const { data } = await supabase.from('a_lodging').select();
    return {
        a_lodging: data ?? [],
    }
};
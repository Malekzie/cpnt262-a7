/** @type {import('./$types').PageServerLoad} */
import { supabase } from '$lib/db';

export async function load() {
    const { data } = await supabase.from('a_dragon').select();
    return {
        a_dragon: data ?? [],
    };
};
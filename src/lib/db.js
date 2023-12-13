import { createClient } from '@supabase/supabase-js'
import { PUBLIC_KEY, PUBLIC_URL } from '$env/static/public'

export const supabase = createClient(PUBLIC_URL, PUBLIC_KEY)
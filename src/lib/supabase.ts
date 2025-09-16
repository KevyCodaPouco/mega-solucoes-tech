import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  nome: string
  empresa: string
  email: string
  mensagem: string
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
      body: data
    })

    if (error) {
      throw error
    }

    return result
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}
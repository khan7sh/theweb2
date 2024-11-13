export interface ContactSubmission {
  id?: number
  name: string
  email: string
  message: string
  created_at?: string
  status?: 'new' | 'in_progress' | 'completed'
} 
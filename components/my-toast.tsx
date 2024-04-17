'use client'
import { toast } from 'sonner'

export function MyToast() {
  return (
    <button onClick={() => toast('This is a sonner toast')}>
      Render my toast
    </button>
  )
}

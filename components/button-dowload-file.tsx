'use client'

import { Download } from 'lucide-react'

import { Button } from './ui/button'

export function ButtonCurriculo() {
  const PDF_FILE_URL = 'curriculo/Douglas-Medeiros-Curriculo.pdf'

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = PDF_FILE_URL
    a.setAttribute('download', 'Douglas-Medeiros-Curriculo.pdf')
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <Button
      variant={'outline'}
      size={'lg'}
      className="bg-accent-foreground text-primary-foreground transition-colors duration-200"
      onClick={handleDownload}
    >
      <Download className=" mr-2 h-5 w-5" />
      <span className="">Baixar Curriculo</span>
    </Button>
  )
}

import { Github, Linkedin, Mail, MessageCircleCode } from 'lucide-react'
import Link from 'next/link'

import { ButtonCurriculo } from './button-dowload-file'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export function FooterSection() {
  return (
    <footer className="h-80 w-full border-t pt-6">
      <div className="mx-auto h-full w-full max-w-7xl">
        <div className="grid h-full py-6 lg:grid-cols-3">
          <div className="flex flex-col space-y-4 pb-6">
            <Button
              variant={'link'}
              className="mx-auto flex w-60 items-center justify-center text-xl font-light text-foreground/80 underline decoration-1 transition-colors hover:text-[#0e76a8] hover:underline-offset-2"
              asChild
            >
              <Link
                href={'https://www.linkedin.com/in/douglas-saless/'}
                target="_blank"
              >
                <Linkedin className="mr-2 h-5 w-5 " /> LinkedIn
              </Link>
            </Button>

            <Button
              variant={'link'}
              className="mx-auto flex w-60 items-center justify-center pl-0 text-xl font-light text-foreground/80 underline decoration-1 transition-colors hover:text-[#f1502f] hover:underline-offset-2"
              asChild
            >
              <Link
                href={'https://www.linkedin.com/in/douglas-saless/'}
                target="_blank"
              >
                <Github className="mr-2 h-6 w-6 " /> GitHub
              </Link>
            </Button>
          </div>
          <div className="w-full ">
            <span className="flex justify-center pb-8 *:bg-muted *:text-foreground *:transition-all *:hover:bg-muted/40 ">
              <ButtonCurriculo />
            </span>
          </div>
          <div className="px-4">
            <Card className="flex flex-col items-center space-y-4 border-none pb-8 *:w-full *:cursor-default *:rounded-md *:border *:bg-muted/50 *:py-4  *:text-muted-foreground  ">
              <CardContent className="hover:bg-muted/80 hover:text-primary max-sm:pl-1">
                <span className="flex items-center pb-1.5 text-sm">
                  <Mail className="mr-2 h-4 w-4 " />
                  E-mail
                </span>
                <p className="">fullstack@douglasmedeiros.tech</p>
              </CardContent>
              <CardContent className="hover:bg-muted/80 hover:text-primary max-sm:pl-2">
                <span className="flex items-center text-nowrap pb-1.5 text-sm ">
                  <MessageCircleCode className="mr-2 h-4 w-4 " />
                  Contato / Whatsapp
                </span>
                <p>(19) 9 9732.1279</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </footer>
  )
}

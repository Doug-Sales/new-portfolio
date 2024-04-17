import { Linkedin, Mail, MessageCircleCode } from 'lucide-react'
import Link from 'next/link'

import { ButtonCurriculo } from '@/components/button-dowload-file'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'

export function CardsSocial() {
  return (
    <div className="flex gap-2 space-y-4 pt-8 max-sm:flex-col">
      <Card className="flex flex-col items-center space-y-2 border-none py-4 *:w-full *:cursor-default *:rounded-md *:border *:bg-muted/50 *:py-4  *:text-muted-foreground  ">
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

      <Card className="mx-auto w-full max-w-xl border-none">
        <CardHeader className="py-2.5">
          <CardDescription>Social</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-x-4">
            <Button
              variant={'outline'}
              size={'icon'}
              className="h-14 w-14 text-muted-foreground shadow-sm shadow-muted-foreground/50 hover:scale-105 hover:text-[#0e76a8]  hover:shadow-md hover:shadow-[#0e76a8]/30"
              asChild
            >
              <Link
                href={'https://www.linkedin.com/in/douglas-saless/'}
                target="_blank"
              >
                <Linkedin className="h-10 w-10 p-1" />
              </Link>
            </Button>

            <Button
              variant={'outline'}
              size={'icon'}
              className="h-14 w-14 text-muted-foreground shadow-sm shadow-muted-foreground/50 hover:scale-105 hover:text-[#32C766] hover:shadow-md hover:shadow-[#32C766]/30"
              asChild
            >
              <Link
                href={'https://www.hackerrank.com/profile/douglasmsales28'}
                target="_blank"
              >
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .159-.045.208-.109l1.679-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z"></path>
                  </g>
                </svg>
              </Link>
            </Button>

            <Button
              variant={'outline'}
              size={'icon'}
              className="h-14 w-14 text-muted-foreground shadow-sm shadow-muted-foreground/50 transition-all hover:scale-105 hover:text-[#f1502f] hover:shadow-md hover:shadow-[#f1502f]/30"
              asChild
            >
              <Link href={'https://github.com/Doug-Sales'} target="_blank">
                <svg
                  className="h-10 w-10"
                  viewBox="-143 145 512 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"></path>
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M244.2,423.4 c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2 c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8 c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3 c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6 c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5C243,374.6,247.3,398.2,244.2,423.4z"></path>
                    </g>
                  </g>
                </svg>
              </Link>
            </Button>
          </div>
          <ButtonCurriculo />
        </CardContent>
      </Card>
    </div>
  )
}

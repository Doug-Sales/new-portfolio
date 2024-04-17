import { Rocket } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface Project {
  title: string
  description: string
  category: string
  url: string
  imgPath: string
}

interface CardGridProps {
  projects: Project[]
}

export function CardGridProjects({ projects }: CardGridProps) {
  return (
    <div className=" mx-auto overflow-hidden">
      <Card className="mx-auto max-w-5xl border-none">
        <CardHeader>
          <CardTitle className=" flex items-center space-x-6 text-3xl text-foreground/90 ">
            <span>Alguns Projetos</span>
            <Rocket className="h-8 w-8" />
          </CardTitle>
          <CardDescription>
            <span className="w-full whitespace-pre-line text-pretty px-2 pt-4">
              {`No meu repositório GitHub, você encontrará uma variedade de projetos que abrangem desde o básico de quando inicieios estudos, até projetos mais avançados. Cada commit e pull request representa um passo em direção ao meu constante aprimoramento como profissional.`}
            </span>
          </CardDescription>
        </CardHeader>

        <div className=" grid grid-cols-1 space-y-4 py-8 *:h-96 *:w-60 *:place-self-center *:rounded-lg *:text-center max-sm:gap-x-2 max-sm:*:h-80 xs:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <CardContent
              key={item.title}
              className="group relative cursor-pointer overflow-hidden border-none p-0 transition-shadow duration-500 hover:shadow-lg hover:shadow-foreground/50"
            >
              <div>
                <Image
                  src={item.imgPath}
                  priority
                  width={500}
                  height={500}
                  alt="image bg"
                  className="h-auto w-full object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-25% via-transparent via-30%  to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>

              <div className="absolute inset-0 flex translate-y-[70%] flex-col  justify-around px-2 text-center transition-all duration-300 ease-in-out group-hover:translate-y-0">
                <h2 className="text-center text-xl font-bold text-white group-hover:text-white/80 lg:text-2xl">
                  {item.title}
                </h2>
                <p className="py-4  font-com text-lg italic text-white opacity-0 transition-opacity group-hover:overflow-y-auto  group-hover:opacity-100">
                  {item.description}
                </p>
                <Button
                  variant={'outline'}
                  size={'sm'}
                  className="my-2 rounded-lg  bg-muted-foreground/90 text-sm text-foreground shadow-sm shadow-foreground/30 transition-colors duration-200 hover:bg-muted-foreground/50"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Repositório
                  </a>
                </Button>
              </div>
            </CardContent>
          ))}
        </div>
      </Card>
    </div>
  )
}

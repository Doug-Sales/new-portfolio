import Image from 'next/image'

import { CardsSocial } from '@/app/ui/about/cards-social'
import { ResumeIDoAccordion } from '@/app/ui/about/what-i-do-cards'
import { BackgroundOpacity } from '@/app/ui/background-opacity'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function AboutMe() {
  return (
    <div className="mx-auto min-h-screen w-full   px-4 pb-10 md:pt-16 lg:pt-20 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
        <div className="mb-6 shrink lg:mb-2">
          <div className="relative max-w-md brightness-75 grayscale transition-all hover:brightness-90 dark:brightness-90">
            <AspectRatio ratio={2 / 3}>
              <Image
                src="/douglas-image/about-me.png"
                priority
                quality={100}
                width={500}
                height={500}
                alt="Picture of the author"
                className=" absolute inset-0 aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-md shadow-blue-700/30 ring-inset ring-muted"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="inset-0 mb-2 rounded-xl bg-muted/80 text-foreground/90 shadow-md shadow-blue-700/30 ring-inset ring-muted dark:bg-muted/40">
          <h2 className="p-4 text-3xl font-medium tracking-tight underline decoration-foreground/80 decoration-1 underline-offset-8 lg:text-5xl ">
            Sobre
          </h2>
          <p className="whitespace-pre-line p-4 text-base lg:leading-7">
            {` Olá, meu nome é Douglas Medeiros, sou estudante do curso de Sistemas de Informação, conclusão prevista para o 2º semestre de 2025 e atualmente moro na cidade de Valinhos-SP.            
            Sempre tive interesse e curiosidade para entender como a internet funcionava "debaixo dos panos".
            Na primeira oportunidade encontrada após alguns anos de estruturação familiar, mergulhei de forma autodidata no desenvolvimento web e suas tecnologias, utilizando diversas plataformas, como Rocketseat, Udemy, Alura, YouTube, entre outras. Posso afirmar que sou um entusiasta da tecnologia e testemunhei muitas barreiras sendo superadas à medida que a paciência e a disciplina no aprendizado trouxeram resultados.
            Possuo habilidades de comunicação desenvolvidas ao longo de 7 anos trabalhando diretamente com clientes finais. Estou em constante movimento, buscando aprender e aplicar conhecimentos em desafios, também aprimorando as habilidades necessárias para me tornar um profissional dinâmico e consciente dos desafios e necessidades do mundo real.`}
          </p>
        </div>
        <div className="col-span-2 lg:mt-12">
          <div className="flex flex-col justify-center px-4">
            <CardsSocial />
          </div>
          <div className="mt-12 pb-16 pr-4 lg:pr-12">
            <span className="block text-center text-sm">O que faço.</span>
            <ResumeIDoAccordion />
          </div>
          <BackgroundOpacity />
        </div>
      </div>
    </div>
  )
}

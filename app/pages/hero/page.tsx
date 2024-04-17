import Image from 'next/image'

import { BackgroundOpacity } from '@/app/ui/background-opacity'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function HomePageSection() {
  return (
    <main className="mx-auto h-auto w-full max-w-7xl px-6 pb-32 pt-20 sm:pt-28 lg:px-8 lg:pt-12">
      <section className="mx-auto w-full max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className=" w-full  max-w-xl flex-shrink-0 space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            <span className="block py-1 text-lg font-light tracking-wider">
              Bem vindo ao meu portfólio
            </span>
            Douglas Medeiros
          </h1>

          <p className="whitespace-pre-line text-pretty px-2 text-lg text-muted-foreground sm:text-xl">
            {`Aqui você terá um breve resumo das minhas atuais habilidades e conhecimentos que desde já digo que está em constante evolução.`}
          </p>
          <BackgroundOpacity />
          <div className="w-fit border bg-muted/40 p-2 text-center font-mono text-xl font-medium text-foreground lg:text-2xl">
            {`< Desenvolvedor Web Full Stack /> `}
            <span className="ml-3 animate-typing-blink border border-white" />
          </div>
        </div>

        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
          <div className="ml-auto w-52 flex-none space-y-4 pt-32 sm:ml-0 sm:pt-80 lg:order-first lg:pt-36 xl:order-none ">
            <div className="relative ">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src="/douglas-image/perfil-douglas.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className=" absolute inset-0 block aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-lg shadow-blue-700/30 ring-inset ring-muted"
                />
              </AspectRatio>
            </div>
            <div className="relative ">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src="/others-img/walking.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className=" absolute inset-0 block aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-lg shadow-blue-700/20 ring-inset ring-muted"
                />
              </AspectRatio>
            </div>
          </div>

          <div className="mr-auto w-52 flex-none space-y-4 sm:mr-0 sm:pt-52 lg:pt-20">
            <div className="relative ">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src="/others-img/card-image.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className=" absolute inset-0 block aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-lg shadow-blue-700/20 ring-inset ring-muted"
                />
              </AspectRatio>
            </div>

            <div className="relative ">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src="/douglas-image/douglas-de-oculos.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className=" absolute inset-0 block aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-lg shadow-blue-700/20 ring-inset ring-muted"
                />
              </AspectRatio>
            </div>
          </div>

          <div className="pt-30 w-52 flex-none space-y-4 max-sm:hidden sm:pt-0">
            <div className="relative ">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src="/others-img/background-code.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className=" absolute inset-0 block aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-lg shadow-blue-700/20 ring-inset ring-muted"
                />
              </AspectRatio>
            </div>

            <div className="relative ">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src="/others-img/hello-world.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className=" absolute inset-0 block aspect-[2/3] h-auto w-full rounded-xl object-cover align-middle shadow-lg shadow-blue-700/20 ring-inset ring-muted"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

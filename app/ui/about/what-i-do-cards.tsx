import {
  BrainCircuit,
  Code,
  LayoutTemplate,
  Paintbrush2,
  Settings,
  TabletSmartphone,
} from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function ResumeIDoAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full pb-10">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="flex items-center">
            <Paintbrush2 className="mr-2 h-5 w-5 " />
            Design
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-pretty bg-primary-foreground p-2">
          Priorizo o design centrado no usuário, incorporando feedbacks e
          iterando continuamente para melhorar a usabilidade. Meu domínio em
          Figma e a aplicação de design patterns são fundamentais para criar
          experiências que atendam às necessidades do usuário.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <span className="flex items-center">
            <TabletSmartphone className="mr-2 h-5 w-5 " />
            App Development
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-pretty bg-primary-foreground p-2">
          Como experiência destaco minha participação no evento Jupesq, onde
          apresentei um aplicativo mobile desenvolvido com React Native, sendo
          reconhecido com um certificado. Tenho como meta avanço no conhecimento
          em aplicação mobile,com uma dedicação contínua ao aprendizado para
          impulsionar o desenvolvimento de soluções inovadoras nesse cenário.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <span className="flex items-center">
            <Settings className="mr-2 h-5 w-5 " />
            Systems
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-pretty bg-primary-foreground p-2">
          Desenvolvi habilidades sólidas em ambientes Linux. Compreendo os
          fundamentos e a administração do sistema, incluindo tópicos como
          segurança, controle de processos, gerenciamento de pacotes e
          configuração de redes. Minha experiência se estende além da teoria,
          buscando aplicar esses conhecimentos em projetos práticos.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <span className="flex items-center">
            <LayoutTemplate className="mr-2 h-5 w-5 " />
            Web development
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-pretty bg-primary-foreground p-2">
          Com foco em desenvolvimento web, destaco habilidades sólidas em
          Node.js, banco de dados (PostgreSQL, MySQL, MongoDB) e conteinerização
          (Docker). No meu portfólio, você encontrará projetos exemplares que
          demonstram. Essas tecnologias formam a base do meu conhecimento e
          experiência, sendo parte integrante do meu repertório no
          desenvolvimento de sistemas web.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <span className="flex items-center">
            <BrainCircuit className="mr-2 h-5 w-5 " />
            Methodology
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-pretty bg-primary-foreground p-2">
          Utilizo abordagens ágeis, como Scrum e Kanban, para promover a
          colaboração eficaz, entregas contínuas e adaptação constante a
          mudanças. Minha experiência inclui a implementação de práticas ágeis
          para melhorar a eficiência e a qualidade dos projetos, garantindo a
          entrega de soluções alinhadas às expectativas dos clientes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <span className="flex items-center">
            <Code className="mr-2 h-5 w-5 " />
            Backend
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-pretty bg-primary-foreground p-2">
          Prática em backend e criação eficiente de APIs. Conhecimento em Design
          Patterns (factory, repository) para código robusto. Experiência em
          testes E2E e unitários, CI/CD (GitHub), JWT, RBAC e NPM scripts.
          Gerenciamento eficiente de scripts NPM para otimizar o
          desenvolvimento. Aplico essas habilidades em projetos, destacando-me
          no desenvolvimento web e backend.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

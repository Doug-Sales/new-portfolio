import { CardGridProjects } from '@/app/ui/projects/card-grid-projects'
import { InfiniteLogos } from '@/app/ui/projects/infinite-logo'
import { projectsMock } from '@/lib/mock-data-projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full pb-24 md:pt-10 lg:pt-20 ">
      <div className="relative bg-primary/15 py-8 dark:bg-muted">
        <InfiniteLogos />
      </div>
      <div className="mx-auto w-full py-8 lg:py-20">
        <CardGridProjects projects={projectsMock} />
      </div>
    </div>
  )
}

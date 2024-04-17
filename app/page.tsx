import { FooterSection } from '@/components/footer'

import AboutMe from './pages/about/page'
import HomePageSection from './pages/hero/page'
import ProjectsPage from './pages/projects/page'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center ">
      <div className="w-full overflow-hidden ">
        <HomePageSection />
        <AboutMe />
        <ProjectsPage />
        <FooterSection />
      </div>
    </main>
  )
}

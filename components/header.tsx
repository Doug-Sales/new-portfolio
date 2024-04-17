import { ModeToggle } from './toggle-mode'
import { Separator } from './ui/separator'

export function HeaderNav() {
  return (
    <>
      <div className="container ml-auto  flex items-center justify-end py-4">
        <ModeToggle />
      </div>
      <Separator orientation="horizontal" />
    </>
  )
}

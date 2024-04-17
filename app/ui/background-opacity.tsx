export function BackgroundOpacity() {
  return (
    <div className="dark relative z-[-1] flex place-items-center before:absolute before:h-[500px] before:w-full before:translate-x-1/3 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700/70 before:opacity-50 before:blur-3xl before:content-[''] after:absolute  after:-z-20 after:h-[500px] after:w-full after:translate-x-1/3 after:from-red-700/20 after:via-transparent after:opacity-10 after:blur-3xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[600px]" />
  )
}

import Image from 'next/image'
import React from 'react'

import { pathLogosSvg } from '@/lib/path-logos-svg'

export function InfiniteLogos() {
  return (
    <div className="before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] before:md:w-40 after:md:w-40 before:lg:w-80 after:lg:w-80">
      <div className="inline-block animate-logo-slide whitespace-nowrap">
        {pathLogosSvg.map((imgPath: string, index: number) => (
          <React.Fragment key={index}>
            <div className="mx-4 inline-block h-auto w-20 lg:w-28 ">
              <Image
                src={`/${imgPath}`}
                alt="logo image"
                width={100}
                height={100}
                priority
                className="inline-block brightness-90 grayscale transition-all hover:grayscale-0 dark:brightness-95"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

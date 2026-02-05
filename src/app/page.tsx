import LINKS from '@/links'
import { ThemeSwitcher } from './theme-switcher'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils-path'

export default function Home() {
  return (
    <div className="text-foreground relative mx-auto h-full w-[700px] max-w-full p-8 md:p-16 xl:w-[1400px]">
      <div className="mb-12 w-full xl:fixed xl:mb-0 xl:w-[500px]">
        <Image
          className="border-border h-28 w-28 rounded-full border-2 xl:h-[184px] xl:w-[184px]"
          src={getAssetPath('/images/yo.jpg')}
          alt="profile picture"
          width={184}
          height={184}
          priority
        />

        <div className="mt-8">
          <h2 className="font-heading text-3xl sm:text-[44px]">
            Angel Larrreal
          </h2>
          <p className="font-base mt-6 text-base sm:text-xl">
            Senior Developer specializing in Angular & Flutter with 7 years of
            full-stack experience via Node.js. I build efficient,
            high-performance technological solutions for web and mobile.
            Currently seeking new challenges where I can lead frontend
            architecture and drive innovation.
            <br />
          </p>
        </div>
      </div>
      <div className="justify-end xl:flex">
        <div
          id="grid-container"
          className="text-foreground grid w-full grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16"
        >
          {Object.keys(LINKS).map((key) => {
            const link = LINKS[key]
            const href = link.disabled ? '#' : link.link
            const isExternal = !link.isInternal

            // Use Link component for internal links, a tag for external
            if (link.isInternal && !link.disabled) {
              return (
                <Link
                  className="border-border shadow-shadow text-main-foreground rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 p-5 transition-all hover:shadow-none"
                  key={key}
                  href={href}
                >
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    src={link.icon.src}
                    alt={link.title}
                  />
                  <p className="font-heading mt-3 text-lg sm:text-xl">
                    {link.title}
                  </p>
                  <p className="font-base mt-1 text-sm sm:text-base">
                    {link.text}
                  </p>
                </Link>
              )
            }

            // For external links, use getAssetPath if it's a local file (starts with /)
            const finalHref = href.startsWith('/') ? getAssetPath(href) : href

            return (
              <a
                className="border-border shadow-shadow text-main-foreground rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 p-5 transition-all hover:shadow-none"
                key={key}
                target={isExternal ? '_blank' : '_self'}
                href={finalHref}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                <img
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  src={link.icon.src}
                  alt={link.title}
                />
                <p className="font-heading mt-3 text-lg sm:text-xl">
                  {link.title}
                </p>
                <p className="font-base mt-1 text-sm sm:text-base">
                  {link.text}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

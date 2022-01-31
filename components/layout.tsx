import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_TITLE, BLOG_SUBTITLE } from '../lib/constants'
const profilePic = '/images/profile.jpeg'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className="max-w-prose px-4 mx-auto my-12 font-sans text-lg">
      <a className='focus:not-sr-only focus:absolute focus:p-4 font-bold text-black no-underline bg-white sr-only' href='#content'>Skip to content</a>
      <Head>
        <link rel="icon" type="image/svg+xml" href="https://fav.farm/🔰" />
        <link rel="mask-icon" href="https://fav.farm/🔰" color="#ff0000" />
        <title>{BLOG_TITLE}</title>
        <meta
          name="description"
          content={BLOG_SUBTITLE}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            BLOG_TITLE
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={BLOG_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <header className='mb-8 text-center'>
        {home ? (
          <>
            <Image
              priority
              className='rounded-full'
              src={profilePic}
              height={144}
              width={144}
              alt="Profile Pic, Me Smiling"
            />
            <h1>{BLOG_TITLE}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  className='rounded-full'
                  src={profilePic}
                  height={108}
                  width={108}
                  alt="Profile Pic, Me Smiling"
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{BLOG_TITLE}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main id="content">{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
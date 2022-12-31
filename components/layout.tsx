import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_TITLE, BLOG_SUBTITLE } from '../lib/constants'
const profilePic = '/images/Profile-Illustration.JPG'
const sassyPic = '/images/me-gameboy.jpg'

function ProfilePicture() {
  return (
    <div className='group p-1'>
     <Image
        priority
        className='rounded-full mx-auto w-32 h-32 object-cover group-hover:hidden'
        src={profilePic}
        height={144}
        width={144}
        alt="Profile Pic, Illustration of me, my partner Sarah, and our cat Theo."
      />
     <Image
        priority
        className='rounded-full mx-auto w-32 h-32 object-cover hidden group-hover:block'
        src={sassyPic}
        height={144}
        width={144}
        alt="Profile Pic, Me looking up from playing gameboy, Age 8?"
      />
    </div>
  )
}

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
        <script defer data-domain="karges.org" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <header className='mb-8 text-center'>
        {home ? (
          <>
            <ProfilePicture/>
            <h1>{BLOG_TITLE}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <ProfilePicture/>
            </Link>
            <h2>
              <Link href="/">
                {BLOG_TITLE}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main id="content">{children}</main>
      {!home && (
        <div className='py-4 my-4'>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
      <footer>
        <nav>
          <ul className='flex gap-4 text-sm'>
            <li>
              <Link href='/rss.xml' >RSS</Link>
            </li>
            <li>
              <a href='https://eskargeaux.co' target='_blank' rel='noopener noreferrer' >Portfolio</a>
            </li>
            <li>
              <a href='https://github.com/skarges3' target='_blank' rel='noopener noreferrer' >Github</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
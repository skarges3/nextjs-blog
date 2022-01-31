import Head from 'next/head'
import fs from 'fs'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { generateRss } from '../lib/rss'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    excerpt: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Thoughts on sundry topics, including but not limited to web development, CSS, HTML, public policy." />
      </Head>
      <section className='my-12 space-y-4'>
        <h2 className='font-bold tracking-widest uppercase'>Intro</h2>
        <p>Hi. I&rsquo;m Spencer Karges.</p>
        <p>I&rsquo;ve been tinkering on the web for nearly a decade now, but still have a lot to learn.</p>
        <p>Currently I work at <a href='https://smakkstudios.com' target='_blank' rel='noopener noreferrer' >SMAKK Studios</a> as Senior Developer.</p>
      </section>
      <section className='my-12 space-y-4'>
        <h2 className='font-bold tracking-widest uppercase'>Recent Posts</h2>
        <ul className='space-y-8 text-xl'>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className='block'>
                <Date dateString={date} />
              </small>
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  const rss = await generateRss(allPostsData)

  fs.writeFileSync('./public/rss.xml', rss)

  return {
    props: {
      allPostsData
    }
  }
  
}
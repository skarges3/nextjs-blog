import fs from 'fs'
import Layout from '../components/layout'
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
      <section className='my-12 space-y-4 font-sans'>
        <h2 className='font-bold tracking-widest uppercase text-base'>Intro</h2>
        <p>Hi. I&rsquo;m Spencer Karges.</p>
        <p>I&rsquo;ve been tinkering on the web for nearly a decade now, but still have a lot to learn.</p>
        <p>Currently I work at <a href='https://www.85sixty.com' target='_blank' rel='noopener noreferrer' >85SIXTY</a> as a Technical Lead Manager. Formerly <a href='https://corra.com' target='_blank' rel='noopener noreferrer' >Corra</a>, <a href='https://smakkstudios.com' target='_blank' rel='noopener noreferrer' >SMAKK Studios</a>.</p>
      </section>
      <section className='my-16 space-y-4'>
        <h2 className='font-bold tracking-widest uppercase text-base mb-8'>Recent Posts</h2>
        <ul className='space-y-8 text-xl'>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li key={id}>
              <span className='flex flex-col-reverse gap-2 flex-wrap'>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <small className='block text-xs uppercase tracking-widest opacity-80'>
                <Date dateString={date} />
              </small>
              </span>
              <p className='text-base mt-2'>{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
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

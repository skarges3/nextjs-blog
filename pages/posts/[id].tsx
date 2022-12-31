import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    excerpt: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="description"
          content={postData.excerpt}
        />
      </Head>
      <article className='prose-slate dark:prose-invert prose-ul:list-disc prose-li:marker:text-lime-800 dark:prose-li:marker:text-lime-400 mx-auto my-12 prose prose-lg prose-a:text-lime-800 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-1 dark:prose-a:text-lime-400'>
        <h1 className='min-w-0 font-black break-words'>{postData.title}</h1>
        <p className='block text-xs uppercase tracking-widest opacity-80'>
          <Date dateString={postData.date} />
        </p>
        <div className='' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
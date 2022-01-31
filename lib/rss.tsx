import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeFigure from 'rehype-figure'
import rehypeExternalLinks from 'rehype-external-links'
import { BLOG_URL, BLOG_TITLE, BLOG_SUBTITLE } from '../lib/constants'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function generateRssItem(post) {

  const fullPath = path.join(postsDirectory, `${post.id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
  .use(remarkRehype)
  .use(rehypeFigure)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypeExternalLinks, {target: "_blank", rel: ['noreferrer', 'noopener']})
  .use(rehypeStringify)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return `
    <item>
      <guid>${BLOG_URL}/posts/${post.id}</guid>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>${BLOG_URL}/posts/${post.id}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${contentHtml}]]></content:encoded>
    </item>
  `
}

export async function generateRss(posts) {
  const itemsList = await Promise.all(posts.map(generateRssItem))

  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>${BLOG_TITLE}</title>
        <link>${BLOG_URL}</link>
        <description>${BLOG_SUBTITLE}</description>
        <language>en</language>
        <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
        <atom:link href="${BLOG_URL}" rel="self" type="application/rss+xml"/>
        ${itemsList.join('')}
      </channel>
    </rss>
  `
}
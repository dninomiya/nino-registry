import createMDX from '@next/mdx'
import codeImport from 'remark-code-import';
import rehypeShiki from '@shikijs/rehype'
import remarkGfm from 'remark-gfm'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      [rehypeShiki, {
        themes: {
          light: 'github-dark-default'
        }
      }]
    ]
  }
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
import { writeFileSync } from 'node:fs'

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { readSync } from 'to-vfile'
import { unified } from 'unified'

import rehypeCallouts from '../dist/index.js'

const file = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeCallouts)
  .use(rehypeStringify)
  .processSync(readSync('test.md'))

// console.log(String(file))
writeFileSync('test.html', String(file), 'utf8')

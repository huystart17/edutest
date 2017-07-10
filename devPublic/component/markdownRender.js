/**
 * Created by huy on 6/7/17.
 */
const md = require('markdown-it')(
  {breaks: true}
)
const mdKatex = require('markdown-it-katex')
md.use(mdKatex)
// const md = require('markdown-it')({breaks: true})
//   .use(require('markdown-it-mathjax')());
module.exports = md

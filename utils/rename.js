/**
 *  按规定格式重命名所有 md 文件
 */
const fs = require('fs') // 文件模块
const path = require('path') // 路径模块
const docsRoot = path.join(__dirname, '..', 'docs') // docs 文件路径
const matter = require('gray-matter') // FrontMatter 解析器 https://github.com/jonschlinkert/gray-matter
const except = ['.vuepress', '@pages']

rename()

function rename(dir = docsRoot) {
  const files = fs.readdirSync(dir)
  files.forEach((fileName, i) => {
    let filePath = path.join(dir, fileName)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && !except.includes(fileName)) {
      rename(path.join(dir, fileName)) // 递归读取文件
    } else if (stat.isFile()) {
      // 过滤 docs 目录级下的文件
      if (path.basename(dir) !== 'docs') {
        const fileNameArr = fileName.split('.')
        let hasIndex = false
        let index = i + 1
        let name = null
        let type = null
        if (fileNameArr.length === 2) {
          // 没有序号的文件
          name = fileNameArr[0]
          type = fileNameArr[1]
        } else if (fileNameArr.length === 3) {
          // 有序号的文件
          hasIndex = true
          index = fileNameArr[0]
          name = fileNameArr[1]
          type = fileNameArr[2]
        } else {
          // 超过两个 '.' 的
          log(chalk.yellow(`warning: 该文件 "${filePath}" 没有按照约定命名, 将忽略重命名`))
          return
        }
        // 过滤非 md 文件
        if (type === 'md') {
          const {
            data: { title }
          } = matter(fs.readFileSync(filePath, 'utf8'))
          // 无序号或文件名和 title 不同, 需要重命名
          if (!hasIndex || title !== name) {
            fs.renameSync(filePath, path.join(dir, `${index}.${title}.${type}`))
          }
        }
      }
    }
  })
}

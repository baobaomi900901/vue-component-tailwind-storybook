#!/usr/bin/env node
const path = require('path')
const fs = require("fs-extra");
const chalk = require('chalk')

const red = '#ce7575'

/**
 * 文件重命名并修改里面的引用
 * @param {string[]} files 模板文件下的所有文件名的数组
 * @param {string} dirPath 组件目录
 * @param {string} dirName 组件名称
 */
const rename = async (files, dirPath, dirName) => {
  try {
    await files.forEach(async (fileName) => {
      const oldPath = path.resolve(dirPath, `${fileName}`)
      const newPath = oldPath.replace(/(.*)ComponentName/, `$1${dirName}`)
      await fs.renameSync(oldPath, newPath)
      const content = await fs.readFileSync(newPath, 'utf8');
      await fs.writeFileSync(newPath, content.replace(/ComponentName/g, dirName));
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * 创建模版
 * @param {string|undefined} dirName 组件名称
 */
const createTemplate = async (dirName) => {
  // 判断是否有传入参数
  if (!dirName) {
    console.log(chalk.hex(red)(`❌  "请传入组件名称，如：Radio`))
    process.exit(0)
  }
  const dirPath = path.resolve(process.cwd(), `./src/stories/${dirName}`)
  // 判读目录名字是否符合规范
  const res = /^[A-Z][a-zA-Z]+$/.test(dirName)
  if (!res) {
    console.error(chalk.hex(red)(`❌  "${dirName}"不符合组件名称规范，组件名称必须驼峰命名并且开头大写`))
    process.exit(0)
  }
  try {
    // 判断目录是否存在
    if (fs.existsSync(dirPath)) {
      // 目录已存在
      console.log(chalk.hex(red)(`❌  "${dirPath}"目录已存在`))
      process.exit(0)
    }
    const tempDir = path.resolve(__dirname, './temp')
    if (!fs.existsSync(tempDir)) {
      console.log(chalk.hex(red)(`❌  模板目录"${tempDir}"不存在`))
      process.exit(0)
    }
    // 创建目录
    fs.mkdir(dirPath)
    // 把模板中的文件复制到新创建的目录下
    await fs.copySync(path.resolve(__dirname, './temp'), dirPath)
    const files = await fs.readdirSync(dirPath)
    await rename(files, dirPath, dirName)

    console.log(chalk.green('✅  模板初始完毕'));
  } catch (error) {
    console.log(error);
    console.log(chalk.hex(red)('❌  模板创建失败'));
  }
}

createTemplate(process.argv[2])





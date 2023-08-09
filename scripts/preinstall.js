if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  console.log('请使用pnpm安装依赖！')
  process.exit(1)
} else {
  console.log('正在使用pnpm安装依赖...')
}

export default (ctx) => {
  if (
    ctx.route.fullPath === '/posts/women-in-computing-are-losing-ground' ||
    ctx.route.fullPath === '/articles/women-in-computing-are-losing-ground' ||
    ctx.route.fullPath === '/blog/women-in-computing-are-losing-ground'
  ) {
    ctx.redirect(301, '/blog/articles/women-in-computing-are-losing-ground')
  } else if (
    ctx.route.fullPath ===
      '/posts/a-curated-list-of-cheat-sheets-for-web-developers' ||
    ctx.route.fullPath ===
      '/articles/a-curated-list-of-cheat-sheets-for-web-developers' ||
    ctx.route.fullPath ===
      '/blog/a-curated-list-of-cheat-sheets-for-web-developers'
  ) {
    ctx.redirect(
      301,
      '/blog/articles/a-curated-list-of-cheat-sheets-for-web-developers'
    )
  } else if (
    ctx.route.fullPath ===
      '/posts/perilous-confusion-and-the-opportunity-for-growth' ||
    ctx.route.fullPath ===
      '/articles/perilous-confusion-and-the-opportunity-for-growth' ||
    ctx.route.fullPath ===
      '/blog/perilous-confusion-and-the-opportunity-for-growth'
  ) {
    ctx.redirect(
      301,
      '/blog/articles/perilous-confusion-and-the-opportunity-for-growth'
    )
  } else if (
    ctx.route.fullPath ===
      '/posts/clean-up-development-commits-by-combining-them-into-one' ||
    ctx.route.fullPath ===
      '/articles/clean-up-development-commits-by-combining-them-into-one' ||
    ctx.route.fullPath ===
      '/blog/clean-up-development-commits-by-combining-them-into-one'
  ) {
    ctx.redirect(
      301,
      '/blog/articles/clean-up-development-commits-by-combining-them-into-one'
    )
  } else if (
    ctx.route.fullPath ===
      '/posts/use-webhooks-to-automatically-deploy-your-gatsby-site' ||
    ctx.route.fullPath ===
      '/articles/use-webhooks-to-automatically-deploy-your-gatsby-site' ||
    ctx.route.fullPath ===
      '/blog/use-webhooks-to-automatically-deploy-your-gatsby-site'
  ) {
    ctx.redirect(
      301,
      '/blog/articles//use-webhooks-to-automatically-deploy-your-gatsby-site'
    )
  } else if (
    ctx.route.fullPath === '/posts/what-is-destructuring-in-javascript' ||
    ctx.route.fullPath === '/articles/what-is-destructuring-in-javascript' ||
    ctx.route.fullPath === '/blog/what-is-destructuring-in-javascript'
  ) {
    ctx.redirect(301, '/blog/articles/what-is-destructuring-in-javascript')
  } else if (
    ctx.route.fullPath ===
      '/posts/use-sass-to-automatically-convert-pixels-to-rems' ||
    ctx.route.fullPath ===
      '/articles/use-sass-to-automatically-convert-pixels-to-rems' ||
    ctx.route.fullPath ===
      '/blog/automatically-convert-pixels-to-rems-with-sass'
  ) {
    ctx.redirect(
      301,
      '/blog/articles/automatically-convert-pixels-to-rems-with-sass'
    )
  } else if (
    ctx.route.fullPath ===
      '/posts/create-a-command-line-alias-to-list-your-git-branches-by-most-recent' ||
    ctx.route.fullPath ===
      '/articles/create-a-command-line-alias-to-list-your-git-branches-by-most-recent' ||
    ctx.route.fullPath === '/blog/create-an-alias-to-list-git-branches-by-date'
  ) {
    ctx.redirect(
      301,
      '/blog/articles/create-an-alias-to-list-git-branches-by-date'
    )
  } else if (
    ctx.route.fullPath ===
      '/posts/create-a-command-line-alias-to-list-your-git-branches-by-most-recent' ||
    ctx.route.fullPath ===
      '/posts/search-git-history-for-certain-words-and-phrases' ||
    ctx.route.fullPath ===
      '/blog/search-git-history-for-certain-words-and-phrases'
  ) {
    ctx.redirect(
      301,
      '/blog/articles/search-git-history-for-certain-words-and-phrases'
    )
  } else if (
    ctx.route.fullPath ===
    '/articles/useful-npm-packages-and-gatsby-plugins-from-the-cristinio-redesign'
  ) {
    ctx.redirect(410, '/blog/1')
  }
}

// 提供controller   接管控制器

exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts');
}

exports.getPosts = async ctx => {      // 博客首页
    ctx.body = 'getPosts';
}


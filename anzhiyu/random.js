var posts=["2023/05/03/Counter-Strike的下个时代/","2023/04/30/我们的60华里远足/","2023/05/04/G2-Announces-Swanis-Coach-Job-Confirmation/","2023/05/03/Markdown语法与外挂标签写法汇总/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
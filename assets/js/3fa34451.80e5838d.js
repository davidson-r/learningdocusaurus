"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91692],{96579:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"reading-a-csv-using-python","metadata":{"permalink":"/learningdocusaurus/blog/reading-a-csv-using-python","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/read-csv.md","source":"@site/blog/read-csv.md","title":"Reading a CSV using python","description":"---","date":"2022-07-17T02:18:41.617Z","formattedDate":"July 17, 2022","tags":[{"label":"csv","permalink":"/learningdocusaurus/blog/tags/csv"}],"truncated":false,"authors":[],"nextItem":{"title":"Reading and merging multiple CSVs","permalink":"/learningdocusaurus/blog/reading-and-merging-multiple-csvs"}},"content":"---\\n\\nGiven a csv file `file.csv` with the below format:\\n\\n| First Column             | Second Column             |\\n| ------------------------ | ------------------------- |\\n| First Line First column  | First row Second column   |\\n| Second Line First column | Second Line Second column |\\n\\n<br/>\\n\\nIt can be read using\\n\\n### A list of dictionaries\\n\\n```\\nimport csv\\n\\nwith open(\'file.csv\') as f:\\n    reader = csv.reader(f)\\n    data = list(reader)\\n\\nprint(data)\\n```\\n\\n### Using [Pandas](https://pandas.pydata.org/)\\n\\n```\\nimport pandas as pd\\n\\ndata = pd.read_csv(\'file.csv\', delimiter=\',\')\\n\\nprint(data)\\n```"},{"id":"reading-and-merging-multiple-csvs","metadata":{"permalink":"/learningdocusaurus/blog/reading-and-merging-multiple-csvs","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/reading-and-merging-multiple-csvs.md","source":"@site/blog/reading-and-merging-multiple-csvs.md","title":"Reading and merging multiple CSVs","description":"---","date":"2022-07-17T02:18:41.617Z","formattedDate":"July 17, 2022","tags":[{"label":"csv","permalink":"/learningdocusaurus/blog/tags/csv"}],"truncated":false,"authors":[],"prevItem":{"title":"Reading a CSV using python","permalink":"/learningdocusaurus/blog/reading-a-csv-using-python"},"nextItem":{"title":"Welcome","permalink":"/learningdocusaurus/blog/welcome"}},"content":"---\\n\\nGiven two files named `file1.csv` and `file2.csv` with the below format:\\n\\n| First Column             | Second Column             |\\n| ------------------------ | ------------------------- |\\n| First Line First column  | First row Second column   |\\n| Second Line First column | Second Line Second column |\\n\\n<br/>\\n\\nIt can be read using\\n\\n### A list of dictionaries\\n\\n```\\nimport csv\\n\\nwith open(\'file1.csv\') as f:\\n    reader = csv.reader(f)\\n    file1 = list(reader)\\n\\nwith open(\'file2.csv\') as f:\\n    reader = csv.reader(f)\\n    file2 = list(reader)\\n\\n```\\n\\n### Merge lists\\n\\n```\\nfile = file1 + file2\\n```"},{"id":"welcome","metadata":{"permalink":"/learningdocusaurus/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/learningdocusaurus/blog/tags/facebook"},{"label":"hello","permalink":"/learningdocusaurus/blog/tags/hello"},{"label":"docusaurus","permalink":"/learningdocusaurus/blog/tags/docusaurus"}],"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"prevItem":{"title":"Reading and merging multiple CSVs","permalink":"/learningdocusaurus/blog/reading-and-merging-multiple-csvs"},"nextItem":{"title":"MDX Blog Post","permalink":"/learningdocusaurus/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/learningdocusaurus/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/learningdocusaurus/blog/tags/docusaurus"}],"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"prevItem":{"title":"Welcome","permalink":"/learningdocusaurus/blog/welcome"},"nextItem":{"title":"Greetings!","permalink":"/learningdocusaurus/blog/greetings"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n\\n:::"},{"id":"greetings","metadata":{"permalink":"/learningdocusaurus/blog/greetings","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-02-28-greetings.md","source":"@site/blog/2021-02-28-greetings.md","title":"Greetings!","description":"Congratulations, you have made your first post!","date":"2021-02-28T00:00:00.000Z","formattedDate":"February 28, 2021","tags":[{"label":"greetings","permalink":"/learningdocusaurus/blog/tags/greetings"}],"truncated":false,"authors":[{"name":"Joel Marcey","title":"Co-creator of Docusaurus 1","url":"https://github.com/JoelMarcey","image_url":"https://github.com/JoelMarcey.png","imageURL":"https://github.com/JoelMarcey.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","image_url":"https://github.com/slorber.png","imageURL":"https://github.com/slorber.png"}],"prevItem":{"title":"MDX Blog Post","permalink":"/learningdocusaurus/blog/mdx-blog-post"},"nextItem":{"title":"Long Blog Post","permalink":"/learningdocusaurus/blog/long-blog-post"}},"content":"Congratulations, you have made your first post!\\n\\nFeel free to play around and edit this post as much you like."},{"id":"long-blog-post","metadata":{"permalink":"/learningdocusaurus/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/learningdocusaurus/blog/tags/hello"},{"label":"docusaurus","permalink":"/learningdocusaurus/blog/tags/docusaurus"}],"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"prevItem":{"title":"Greetings!","permalink":"/learningdocusaurus/blog/greetings"},"nextItem":{"title":"First Blog Post","permalink":"/learningdocusaurus/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/learningdocusaurus/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/learningdocusaurus/blog/tags/hola"},{"label":"docusaurus","permalink":"/learningdocusaurus/blog/tags/docusaurus"}],"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"prevItem":{"title":"Long Blog Post","permalink":"/learningdocusaurus/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);
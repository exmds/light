window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams'                  // 可以是 'ams'、'none' 或 'all'，分别对应于'每个网页公式编号从1开始'、'不编号'和'从第一个出现的公式开始依次增加公式编号'
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})

/*特别要注意的是：在tex的选项配置时，每个选项配置结束后要加一个逗号！！！当然，最后一个除外
更多设置可参考：
https://mathjax.github.io/MathJax-demos-web/
*/
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'all'                  // 应该是 'ams'、'none' 或 'all'，分别对应自动方程式编号、不编号和全部编号
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
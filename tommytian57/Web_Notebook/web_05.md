---
title: 05-Web入门：Web，HTML，CSS，JavaScript
icon: network
time: 2022-10-05 22:25:29
author: 田浩良
isOriginal: true
category: 
    - Web 1v1
tag:
    - Web 1v1_class-03
sticky: false
star: false
password: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

# 那么，HTML到底是什么？

HTML不是一门编程语言，而是一种标记语言。

HTML必须要有编码格式，不然在浏览器打开的时候容易显示乱码。

HTML主要需要记住标签和属性，标签的话网上有资源库可以随时查看。

## HTML的标签和元素：

![image-20221005230144939](./web_05.assets/image-20221005230144939.png)

我们可以得出结论：一个完整的元素 = 开始标签+ 内容+ 结束标签。

## 元素的属性：

属性是元素的额外信息，这些信息不会出现在网页的内容中。

![image-20221005230616084](./web_05.assets/image-20221005230616084.png)

元素属性必须包含：

1. 空格：元素和属性之间必须有一个空格。如果一个元素同时具有多个属性，属性之间也要用空格隔开。

2. 符号： 属性后面紧跟着一个等号。

3. 值：`“=”`后面必须有一个属性值，由一对引号包围。

   a. 必须在英文状态下输入引号。

   b. 可以是用双引号也可以使用单引号，但是单引号和双引号不能在同一个属性值里混用。

## Class的用法：

![image-20221005232822009](./web_05.assets/image-20221005232822009.png)

class和id的区别：class可以多次使用，而id只能使用一次。

## `<strong></strong>`

在`<p></p>`，也就是段落之间使用，将想要加粗的部分放在`<strong></strong>`之间可以获得加粗字体。

### 层叠顺序错误：

<img src="./web_05.assets/image-20221006221256846.png" alt="image-20221006221256846" style="zoom:50%;" />

将`</strong>`放在`</p>`的外面的话，会将整个文本全部加粗，但是由于我们想要的只是部分加粗，所以这样是不可以的。

## `<em></em>:`

使用顺序同`<strong></strong>`，`<em></em>`的作用是展示写题文本。

strong和em均表示：着重阅读。

则我们可写出栗子：

`<p>惹红尘一身，<em>沐春风。</em></p>`

![image-20221006222948269](./web_05.assets/image-20221006222948269.png)



# 块级元素和内联元素：

块级元素：代码如块状显示，通常用于展示页面上层结构化的内容，如：进行，列表，导航菜单，页脚中，但是也可以嵌入在其他块级元素中。

内联元素：常出现在块级元素中并包裹着一小部分文档内容，形式上通常如行状显示

例：第一周杰伦是歌手，第二周杰伦是音乐制作人，第三周杰伦是电影导演。

​	`<em>周杰伦是歌手。</em><em>周杰伦是音乐制作人。</em><em>周杰伦是电影导演。</em>`

​	`<p>周杰伦是歌手。</p><p>周杰伦是音乐制作人。</p><p>周杰伦是电影导演。</p>`

![image-20221006225529039](./web_05.assets/image-20221006225529039.png)

# 空元素：

正常来说，一个完整的元素包括：开始标签+内容+结束标签；

但是这个公式并不适用所有的HTML元素。

一些元素只有一个标签，元素标签内服有一些额外信息，这样的元素叫做空元素，比如：`<img>`（照片）。



# 添加超链接

用`<a></a>`添加超链接

标准格式：

`<a href="https://twitter.com/binottomattia?lang=en"><img src="images/binotto_4.jpg" height="300px" width="250" alt="我图呢卧槽？！"></a>`

`点击进入小丑的<a href="https://www.ferrari.com/en-EN/formula1/mattia-binotto">官方介绍</a><br>`



# 列表

有序列表：1，2，3

无序列表：·，·，·


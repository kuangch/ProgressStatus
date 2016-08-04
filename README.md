# ProgressStatus
一个可以用于友好显示进度变化，状态变化的组件

## 使用方法

* 引入`k-status.css` 和 `k-status.js`文件
``` html
<link rel="stylesheet" href="k-status.css"/>
...
<script type="text/javascript" src="k-status.js"></script>

```
* 编写html文件
``` html
<!--在html里面定义一个div作为显示容器 建议div宽高大于150px-->
<div id="myStatus" class="myStatus"></div>

```
* 编写javascript文件
``` javascript
// 实例化组件
var kStatus = KStatus('myStatus');

// 调用changeState()方法传入指定状态即可变化状态，非常简单
kStatus.changeState(kStatus.state.LOADING);
kStatus.changeState(kStatus.state.SUCCESS);
kStatus.changeState(kStatus.state.ERROR);

```
## 效果
制作的gif图片质量效果较差
![image](https://github.com/kuangch/ProgressStatus/blob/master/k-status.gif)

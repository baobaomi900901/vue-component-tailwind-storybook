# Vue3 + TailwindCSS + StoryBook

## 安装与运行
### 安装依赖
```shell
yarn 
// or
npm i
```

### 运行
```shell
yarn storybook
// or
npm run storybook
```

### 初始化组件目录
当要新建组件的时候，可以用这个命令创建模板文件，以便于开发。
```shell
// xxx为组件名称，组件名称必须大写并且符合驼峰命名
yarn component xxx
// or
npm run component xxx
```

### 运行

## 已完成组件
- Button 按钮
- ButtonGroup 按钮组
- Radio 单选框
- RadioButton 按钮样式的单选框
- RadioGroup 单选框组

## 待完成的组件
- Transfer 穿梭框  阿鸭正在施工🛠

## 待开始组件
暂时根据ElementUI的组件功能作为基础功能来做，在此基础上再根据自己的需求删减功能。
### 表单组件
- CheckBox 复选框（我就看看安仔什么时候写）
- CheckBoxGroup 复选框组
- Cascader 级联选择器
- DatePicker 日期选择器
- DateTimePicker 日期时间选择器
- Form 表单 **（极度困难）**
- Input 输入框
- NumberInput 数字输入框
- Rate 评分
- Slider 滑块
- Switch 开关
- TimePicker 时间选择器

### 数据展示组件
- Avater 头像
- Badge 徽章
- Calendar 日历
- Card 卡片
- Select 选择器
- Carousel 轮播图
- Collapse 折叠面板
- Empty 空状态
- Image 图片
- Progress 进度条
- Skeleton 骨架屏
- Table 表格 **（极度困难）**
- Tag 标签
- Timeline 时间线

### 导航
- Backtop 回到顶部
- Breadcrumb 面包屑
- Dropdown 下拉菜单
- Menu 菜单
- Steps 步骤条
- Tabs 标签页
- PageHeader 页头
- Pagination 分页器

### 反馈组件
- Alert 提示
- Dialog 对话框
- Drawer 抽屉
- Loading 加载
- Message 消息提示
- MessageBox 弹框
- Notification 通知
- Popconfirm 气泡确认框
- Popover 气泡卡片
- Tooltip 文字提示

## 遇到的一些问题

### Unknown at rule @apply报错
在vscode中下载插件**PostCSS Language Support**。
---
category: Components
group: 数据录入
title: Select
subtitle: 选择器
description: 下拉选择器。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qGSbQJ0POEsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a6ggRInInJ4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio) 是更好的选择。
- 如果你正在寻找一个既可以输入又可以选择的控件，请使用 [AutoComplete](/components/auto-complete)。

## 示例 {#examples}

<demo-group>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| \{ clearIcon?: VueNode \} | false | - |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true | - |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record&lt;[SemanticDOM](#semantic-dom), string&gt; \| (info: \{ props \}) =&gt; Record&lt;[SemanticDOM](#semantic-dom), string&gt; | - | - |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true | - |
| disabled | 是否禁用 | boolean | false | - |
| dropdownClassName | 下拉菜单的 className 属性，**已废弃，请使用 `classes.popup.root` 替换** | string | - | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽，**已废弃，请使用 `popupMatchSelectWidth` 替换** | boolean \| number | - | - |
| dropdownRender | 自定义下拉框内容，**已废弃，请使用 `popupRender` 替换** | (originNode: VueNode) =&gt; VueNode | - | - |
| dropdownStyle | 下拉菜单的 style 属性，**已废弃，请使用 `styles.popup.root` 替换** | CSSProperties | - | - |
| fieldNames | 自定义节点 label、value、options、groupLabel 的字段 | object | \{ label: 'label', value: 'value', options: 'options', groupLabel: 'label' \} | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | boolean \| (inputValue: string, option?: Option) =&gt; boolean | true | - |
| filterSort | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)里的 compareFunction | (optionA: Option, optionB: Option, info: \{ searchValue: string \}) =&gt; number | - | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | (triggerNode: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `\{ value: string, label: VueNode \}` 的格式 | boolean | false | - |
| listHeight | 设置弹窗滚动高度 | number | 256 | - |
| loading | 加载中状态 | boolean | false | - |
| maxCount | 最多可选择的项目数，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | number | - | - |
| maxTagCount | 最多显示多少个 tag，`responsive` 会根据宽度自适应 | number \| 'responsive' | - | - |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | VueNode \| (omittedValues: LabeledValue[]) =&gt; VueNode | - | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | - |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | VueNode | - | - |
| mode | 设置 Select 的模式为多选或标签 | 'multiple' \| 'tags' | - | - |
| notFoundContent | 当下拉列表为空时显示的内容 | VueNode | `Not Found` | - |
| open | 是否展开下拉菜单 | boolean | - | - |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内置 `option` 的 `children` 进行搜索。若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。当为字符串数组时，会使用 OR 匹配多个字段 | string \| string[] | value | - |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | \{ label: VueNode; value: string \}[] | - | - |
| optionRender | 自定义渲染下拉选项 | (option: FlattenOptionData&lt;BaseOptionType&gt;, info: \{ index: number \}) =&gt; VueNode | - | - |
| placeholder | 选择框默认文本 | string | - | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft | - |
| popupClassName | 下拉菜单的 className 属性，使用 `classes.popup.root` 替换 | string | - | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean \| number | true | - |
| popupRender | 自定义下拉框内容 | (originNode: VueNode) =&gt; VueNode | - | - |
| prefix | 自定义前缀 | VueNode | - | - |
| removeIcon | 自定义的多选框清除图标 | VueNode | - | - |
| searchValue | 控制搜索文本 | string | - | - |
| showSearch | 配置是否可搜索 | boolean \| Object | 单选为 false，多选为 true | - |
| size | 选择框大小 | `large` \| `middle` \| `small` | - | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record&lt;[SemanticDOM](#semantic-dom), CSSProperties&gt; \| (info: \{ props \}) =&gt; Record&lt;[SemanticDOM](#semantic-dom), CSSProperties&gt; | - | - |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传 | VueNode | `<DownOutlined />` | - |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) =&gt; VueNode | - | - |
| labelRender | 自定义当前选中的 label 内容 render | (props: LabelInValueType) =&gt; VueNode | - | - |
| tokenSeparators | 自动分词的分隔符，仅在 `mode="tags"` 时生效 | string[] | - | - |
| value | 指定当前选中的条目，多选时为数组 | string \| string[] \| number \| number[] | - | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | - |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| active | 键盘和鼠标交互时触发 | (value: string \| number) =&gt; void | - |
| blur | 失去焦点时回调 | (event: FocusEvent) =&gt; void | - |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | (value, option: Option \| Array&lt;Option&gt;) =&gt; void | - |
| clear | 清除内容时回调 | () =&gt; void | - |
| deselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | (value: string \| number) =&gt; void | - |
| dropdownVisibleChange | 展开下拉菜单的回调，**已废弃，请使用 `openChange` 替换** | (open: boolean) =&gt; void | - |
| focus | 获得焦点时回调 | (event: FocusEvent) =&gt; void | - |
| inputKeydown | 按键按下时回调 | (event: KeyboardEvent) =&gt; void | - |
| openChange | 下拉框展开或收起时回调 | (open: boolean) =&gt; void | - |
| popupScroll | 下拉列表滚动时的回调 | (event: UIEvent) =&gt; void | - |
| search | 文本框值变化时回调 | (value: string) =&gt; void | - |
| select | 被选中时调用，参数为选中项的 value (或 key) 值 | (value: string \| number, option: Option) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| labelRender | 自定义当前选中的 label 内容 render | (props: LabelInValueType) =&gt; VueNode | - |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | (omittedValues: LabeledValue[]) =&gt; VueNode | - |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | VueNode | - |
| notFoundContent | 当下拉列表为空时显示的内容 | VueNode | - |
| optionRender | 自定义渲染下拉选项 | (option: FlattenOptionData&lt;BaseOptionType&gt;, info: \{ index: number \}) =&gt; VueNode | - |
| popupRender | 自定义下拉框内容 | (originNode: VueNode) =&gt; VueNode | - |
| prefix | 自定义前缀 | VueNode | - |
| removeIcon | 自定义的多选框清除图标 | VueNode | - |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传 | VueNode | - |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) =&gt; VueNode | - |

### Select 方法 {#methods}

| 名称 | 说明 | 版本 |
| --- | --- | --- |
| blur() | 取消焦点 | - |
| focus() | 获取焦点 | - |

### showSearch {#showsearch}

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | boolean \| (inputValue: string, option?: Option) =&gt; boolean | true | - |
| filterSort | 搜索时对筛选结果项的排序函数 | (optionA: Option, optionB: Option, info: \{ searchValue: string \}) =&gt; number | - | - |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内置 `option` 的 `children` 进行搜索。若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。当为字符串数组时，会使用 OR 匹配多个字段 | string \| string[] | value | - |
| searchValue | 控制搜索文本 | string | - | - |
| onSearch | 文本框值变化时回调 | (value: string) =&gt; void | - | - |

### Option props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false | - |
| title | 选中该 Option 后，Select 的 title | string | - | - |
| value | 默认根据此属性值进行筛选 | string \| number | - | - |

### OptGroup props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key | 分组的 key | string | - | - |
| label | 分组名 | string \| VueNode | - | - |
| title | title 属性 | string | - | - |

## 语义化 DOM {#semantic-dom}

| 语义 | 描述 | 版本 |
| --- | --- | --- |
| root | 根元素 | - |
| prefix | 前缀元素 | - |
| content | 多选容器 | - |
| placeholder | 占位符元素 | - |
| clear | 清除按钮 | - |
| input | 输入元素 | - |
| suffix | 后缀元素 | - |
| popup.root | 弹出层根元素 | - |
| popup.list | 弹出层列表 | - |
| popup.listItem | 弹出层列表项 | - |

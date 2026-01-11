---
category: Components
group: Data Entry
title: Select
description: A dropdown menu for displaying choices.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*qGSbQJ0POEsAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*a6ggRInInJ4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.
- Utilizing [Radio](/components/radio) is recommended when there are fewer total options (less than 5).
- You probably need [AutoComplete](/components/auto-complete) if you're looking for an input box that can be typed or selected.

## Examples {#examples}

<demo-group>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button | boolean \| \{ clearIcon?: VueNode \} | false | - |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags` | boolean | true | - |
| classes | Customize class for each semantic structure inside the component. Supports object or function | Record&lt;[SemanticDOM](#semantic-dom), string&gt; \| (info: \{ props \}) =&gt; Record&lt;[SemanticDOM](#semantic-dom), string&gt; | - | - |
| defaultActiveFirstOption | Whether active first option by default | boolean | true | - |
| disabled | Whether disabled select | boolean | false | - |
| dropdownClassName | The className of dropdown menu, **Deprecated. Use `classes.popup.root` instead** | string | - | - |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width, **Deprecated. Use `popupMatchSelectWidth` instead** | boolean \| number | - | - |
| dropdownRender | Customize dropdown content, **Deprecated. Use `popupRender` instead** | (originNode: VueNode) =&gt; VueNode | - | - |
| dropdownStyle | The style of dropdown menu, **Deprecated. Use `styles.popup.root` instead** | CSSProperties | - | - |
| fieldNames | Customize node label, value, options, groupLabel field name | object | \{ label: 'label', value: 'value', options: 'options', groupLabel: 'label' \} | - |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded | boolean \| (inputValue: string, option?: Option) =&gt; boolean | true | - |
| filterSort | Sort function for search options sorting, see Array.sort's compareFunction | (optionA: Option, optionB: Option, info: \{ searchValue: string \}) =&gt; number | - | - |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative | (triggerNode: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| labelInValue | Whether to embed label in value, turn the format of value from `string` to `\{ value: string, label: VueNode \}` | boolean | false | - |
| listHeight | Config popup height | number | 256 | - |
| loading | Indicate loading state | boolean | false | - |
| maxCount | The max number of items can be selected, only applies when `mode` is `multiple` or `tags` | number | - | - |
| maxTagCount | Max tag count to show. `responsive` will cost render performance | number \| 'responsive' | - | - |
| maxTagPlaceholder | Placeholder for not showing tags | VueNode \| (omittedValues: LabeledValue[]) =&gt; VueNode | - | - |
| maxTagTextLength | Max tag text length to show | number | - | - |
| menuItemSelectedIcon | The custom menuItemSelected icon with multiple options | VueNode | - | - |
| mode | Set mode of Select | 'multiple' \| 'tags' | - | - |
| notFoundContent | Specify content to show when no result matches | VueNode | `Not Found` | - |
| open | Controlled open state of dropdown | boolean | - | - |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label. When a string[] is provided, multiple fields are searched using OR matching | string \| string[] | value | - |
| options | Select options. Will get better perf than jsx definition | \{ label: VueNode; value: string \}[] | - | - |
| optionRender | Customize the rendering dropdown options | (option: FlattenOptionData&lt;BaseOptionType&gt;, info: \{ index: number \}) =&gt; VueNode | - | - |
| placeholder | The placeholder of select | string | - | - |
| placement | The position where the selection box pops up | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft | - |
| popupClassName | The className of dropdown menu, use `classes.popup.root` instead | string | - | - |
| popupMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number | true | - |
| popupRender | Customize dropdown content | (originNode: VueNode) =&gt; VueNode | - | - |
| prefix | The custom prefix | VueNode | - | - |
| removeIcon | The custom remove icon | VueNode | - | - |
| searchValue | The current input "search" text | string | - | - |
| showSearch | Whether select is searchable | boolean \| Object | single: false, multiple: true | - |
| size | Size of Select input | `large` \| `middle` \| `small` | - | - |
| status | Set validation status | 'error' \| 'warning' | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function | Record&lt;[SemanticDOM](#semantic-dom), CSSProperties&gt; \| (info: \{ props \}) =&gt; Record&lt;[SemanticDOM](#semantic-dom), CSSProperties&gt; | - | - |
| suffixIcon | The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use `pointer-events: none` style to bypass | VueNode | `<DownOutlined />` | - |
| tagRender | Customize tag render, only applies when `mode` is set to `multiple` or `tags` | (props) =&gt; VueNode | - | - |
| labelRender | Customize selected label render | (props: LabelInValueType) =&gt; VueNode | - | - |
| tokenSeparators | Separator used to tokenize, only applies when `mode="tags"` | string[] | - | - |
| value | Current selected option (considered as a immutable array) | string \| string[] \| number \| number[] | - | - |
| variant | Variants of selector | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | - |
| virtual | Disable virtual scroll when set to false | boolean | true | - |

### Events {#events}

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| active | Called when keyboard or mouse interaction occurs | (value: string \| number) =&gt; void | - |
| blur | Called when blur | (event: FocusEvent) =&gt; void | - |
| change | Called when select an option or input value change | (value, option: Option \| Array&lt;Option&gt;) =&gt; void | - |
| clear | Called when clear | () =&gt; void | - |
| deselect | Called when an option is deselected, param is the selected option's value. Only called for `multiple` or `tags`, effective in multiple or tags mode only | (value: string \| number) =&gt; void | - |
| dropdownVisibleChange | Called when dropdown open, **Deprecated. Use `openChange` instead** | (open: boolean) =&gt; void | - |
| focus | Called when focus | (event: FocusEvent) =&gt; void | - |
| inputKeydown | Called when key pressed | (event: KeyboardEvent) =&gt; void | - |
| openChange | Called when dropdown open | (open: boolean) =&gt; void | - |
| popupScroll | Called when dropdown scrolls | (event: UIEvent) =&gt; void | - |
| search | Callback function that is fired when input changed | (value: string) =&gt; void | - |
| select | Called when an option is selected, the params are option's value (or key) and option instance | (value: string \| number, option: Option) =&gt; void | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| labelRender | Customize selected label render | (props: LabelInValueType) =&gt; VueNode | - |
| maxTagPlaceholder | Placeholder for not showing tags | (omittedValues: LabeledValue[]) =&gt; VueNode | - |
| menuItemSelectedIcon | The custom menuItemSelected icon with multiple options | VueNode | - |
| notFoundContent | Specify content to show when no result matches | VueNode | - |
| optionRender | Customize the rendering dropdown options | (option: FlattenOptionData&lt;BaseOptionType&gt;, info: \{ index: number \}) =&gt; VueNode | - |
| popupRender | Customize dropdown content | (originNode: VueNode) =&gt; VueNode | - |
| prefix | The custom prefix | VueNode | - |
| removeIcon | The custom remove icon | VueNode | - |
| suffixIcon | The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use `pointer-events: none` style to bypass | VueNode | - |
| tagRender | Customize tag render, only applies when `mode` is set to `multiple` or `tags` | (props) =&gt; VueNode | - |

### Select Methods {#methods}

| Name | Description | Version |
| --- | --- | --- |
| blur() | Remove focus | - |
| focus() | Get focus | - |

### showSearch {#showsearch}

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags` | boolean | true | - |
| filterOption | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded | boolean \| (inputValue: string, option?: Option) =&gt; boolean | true | - |
| filterSort | Sort function for search options sorting, see Array.sort's compareFunction | (optionA: Option, optionB: Option, info: \{ searchValue: string \}) =&gt; number | - | - |
| optionFilterProp | Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label. When a string[] is provided, multiple fields are searched using OR matching | string \| string[] | value | - |
| searchValue | The current input "search" text | string | - | - |
| onSearch | Callback function that is fired when input changed | (value: string) =&gt; void | - | - |

### Option props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabled | Disable this option | boolean | false | - |
| title | title attribute of Select Option | string | - | - |
| value | Default to filter with this property | string \| number | - | - |

### OptGroup props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | Group key | string | - | - |
| label | Group label | string \| VueNode | - | - |
| title | title attribute of Select Option | string | - | - |

## Semantic DOM {#semantic-dom}

| Semantic | Description | Version |
| --- | --- | --- |
| root | Root element | - |
| prefix | Prefix element | - |
| content | Multiple selection container | - |
| placeholder | Placeholder element | - |
| clear | Clear button | - |
| input | Input element | - |
| suffix | Suffix element | - |
| popup.root | Popup root element | - |
| popup.list | Popup list | - |
| popup.listItem | Popup list item | - |

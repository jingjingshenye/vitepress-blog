# typescript

## 类型系统

```ts
const a1: string = "foobar";
const a2: string = 'foobar';
const a3: string = `foobar`;

// number也包含NaN、Infinity
let b: number = 10;

const c: boolean = true;

// const d: boolean = null // 严格模式下不支持赋值null

const e: void = undefined; // 函数没有返回值时的返回值类型

const f: null = null;

const g: undefined = undefined;

const title1 = Symbol("title");
const title2 = Symbol("title");
const info = {
  [title1]: "程序员",
  [title2]: "老师",
};
```
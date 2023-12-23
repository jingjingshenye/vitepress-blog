# typescript

## 类型系统

```ts
const a1: string = "foobar";
const a2: string = "foobar";
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

## 高级类型

### 交叉类型

```ts
interface A {
  a: string;
}

interface B {
  b: number;
}

const ab: A & B = {
  a: "a",
  b: 1,
};

// 类型断言
const a: A = ab as A;
```

### 联合类型

```ts
type T1 = "a" | "b";
type T2 = "c" | "d";

type T3 = T1 | T2;

const t3: T3 = "a";
```

### 类型别名

```ts
type T1 = "a" | "b";
type T2 = "c" | "d";

type T3 = T1 | T2;

type T4 = "a" | "b" | "c" | "d";

type T5 = "a" | "b" | "c" | "d" | "e";
```

### 类型约束

extend

## 容易混淆的点

你知道 interface 与 type 有什么区别吗？

1. interface 是 TypeScript 的一种类型声明，type 是 TypeScript 的一种类型别名，两者都可以用来定义类型。
2. interface 可以定义函数类型，type 不可以。
3. interface 可以定义类的类型，type 不可以。
4. interface 可以定义对象类型，type 不可以。
5. interface 可以定义泛型，type 不可以。
6. interface 可以定义命名空间，type 不可以。

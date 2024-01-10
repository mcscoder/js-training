# JS SCOPE

- JavaScript variables have 3 types of scope:

  - Block scope
  - Function scope
  - Global scope

## BLOCK SCOPE

- Variables declared with `var` doesn't have block scope
- Variables declared with `const` and `let` have block scope

### `var`

```js
{
  var a = 10;
}

console.log(a);
```

#### Output

```
10
```

### `let`

```js
{
  let a = 10;
}

console.log(a); // err
```

### `const`

```js
{
  const a = 10;
}

console.log(a); // err
```

## FUNCTION SCOPE

- Variables declared with `var`, `const` and `let` have function scope

## GLOBAL SCOPE

- Variables declared outside of function and block become global

```typescript
function greeter(fn: (a: number) => number) {
  console.log(fn(10));
}

greeter(Math.sqrt); // This works fine

//But this does not work, and it gives an error:  Argument of type '(x: number) => number' is not assignable to parameter of type '(a: number) => number'.
greeter((x) => Math.sqrt(x));
```
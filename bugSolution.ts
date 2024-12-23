```typescript
function greeter(fn: (a: number) => number) {
  console.log(fn(10));
}

greeter(Math.sqrt); // This works fine

// The solution is to explicitly annotate the function expression's parameter type:
greeter((x: number) => Math.sqrt(x)); 
```
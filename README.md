# TypeScript Type Error with Function Expression and Math.sqrt

This repository demonstrates a surprising type error in TypeScript when using a function expression with the `Math.sqrt` function.

## Bug Description

A function type alias is defined, and a function that conforms to the type alias is passed as an argument.  However, when using a function expression, the compiler flags an error.  This error doesn't occur when using the named function `Math.sqrt` directly.

## Reproduction Steps

1. Clone the repository.
2. Run `tsc bug.ts`.
3. Observe the type error reported by the compiler.

## Expected Behavior

The code should compile without error because the function expression adheres to the type alias.
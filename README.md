# util-compare

## Description

Missing compare of two values.

Second implementation can compare property of two object.

Third implementation can create compare function from custom getter function.

## Install

```bash
bun add @fightingdreamer/util-compare
```

## Usage

```js
import {compare} from '@fightingdreamer/util-compare'

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort((a, b) => compare(a.p, b.p))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    console.assert(result.at(index).p == value.p)
}
```

```js
import {compareReversed} from '@fightingdreamer/util-compare'

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort((a, b) => compareReversed(a.p, b.p))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    console.assert(result.at(index).p == value.p)
}
```

```js
import {compareFromProperty} from '@fightingdreamer/util-compare'

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort(compareFromProperty('p'))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    console.assert(result.at(index).p == value.p)
}
```

```js
import {compareFromPropertyReversed} from 'fightingdreamer/util-compare'

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort(compareFromPropertyReversed('p'))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    console.assert(result.at(index).p == value.p)
}
```

```js
import {compareFromFunction} from '@fightingdreamer/util-compare'

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort(compareFromFunction((o) => o.p))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
import {compareFromFunctionReversed} from '@fightingdreamer/util-compare'

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort(compareFromFunctionReversed((o) => o.p))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

## Usage (node / commonjs)

```js
const {compare} = require('@fightingdreamer/util-compare')

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort((a, b) => compare(a.p, b.p))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
const {compareReversed} = require('@fightingdreamer/util-compare')

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort((a, b) => compareReversed(a.p, b.p))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
const {compareFromProperty} = require('@fightingdreamer/util-compare')

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort(compareFromProperty('p'))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
const {compareFromPropertyReversed} = require('@fightingdreamer/util-compare')

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort(compareFromPropertyReversed('p'))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
const {compareFromFunction} = require('@fightingdreamer/util-compare')

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort(compareFromFunction((o) => o.p))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
const {compareFromFunctionReversed} = require('@fightingdreamer/util-compare')

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort(compareFromFunctionReversed((o) => o.p))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

## Functions
```js
function compare<T>(a: T, b: T): number
```
Will compare two values.

```js
function compareReversed<T>(a: T, b: T): number
```
Will compare two values in reversed order.

```js
function compareFromProperty<T>(name: keyof T): typeof compare<T>
```
Will return function that will compare property `name` of two object.

```js
function compareFromPropertyReversed<T>(name: keyof T): typeof compareReversed<T>
```
Will return function that will compare property `name` of two object in reversed order.

```js
function compareFromFunction<T, V>(callbackFn: (value: T) => V): typeof compare<T>
```
Will return function that will map two objects using `callbackFn` and compare results.

```js
function compareFromFunctionReversed<T, V>(callbackFn: (value: T) => V): typeof compare<T>
```
Will return function that will map two objects using `callbackFn` and compare results in reversed order.

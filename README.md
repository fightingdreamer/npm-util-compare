# util-compare

## Description

Missong compare of two values.

Second implementation can compare property of two object.

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
import {compareProperty} from '@fightingdreamer/util-compare'

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort(compareProperty('p'))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    console.assert(result.at(index).p == value.p)
}
```

```js
import {comparePropertyReversed} from 'fightingdreamer/util-compare'

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort(comparePropertyReversed('p'))
const expect = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
for (const [index, value] of expect.entries()) {
    console.assert(result.at(index).p == value.p)
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
const {compareProperty} = require('@fightingdreamer/util-compare')

const vector = [{p: 'c'}, {p: 'b'}, {p: 'a'}]
const result = Array.from(vector).sort(compareProperty('p'))
const expect = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
for (const [index, value] of expect.entries()) {
    assert(result.at(index).p == value.p)
}
```

```js
const {comparePropertyReversed} = require('@fightingdreamer/util-compare')

const vector = [{p: 'a'}, {p: 'b'}, {p: 'c'}]
const result = Array.from(vector).sort(comparePropertyReversed('p'))
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
function compareProperty<T>(name: keyof T): typeof compare<T>
```
Will return function that will compare property `name` of two object.

```js
function comparePropertyReversed<T>(name: keyof T,): typeof compareReversed<T>
```
Will return function that will compare property `name` of two object in reversed order.
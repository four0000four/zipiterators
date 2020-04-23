# zip-js

![GitHub repo size](https://img.shields.io/github/repo-size/four0000four/zip-js)

A utility function for zipping JavaScript iterables, since there's no
helper in the standard library.

### Usage

```javascript
import { zip } from 'zip-js';

// Instantiating the iterator for usage...

const first = [ 1, 2, 3 ];
const second = first.map(x => x * x);
const iterable = zip(first, second);

// Later...

const values = Array.from(iterable);
console.log(values);

/* Outputs:
 * [ [1, 1], [2, 4], [3, 9] ]
 */
```

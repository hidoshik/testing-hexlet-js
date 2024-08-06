import capitalize from '../src/capitalize.js';
import assert from 'assert';

const text = capitalize('hello');
const emptyStr = capitalize('')

assert.equal(text, 'Hello');

assert.equal(emptyStr, '');

console.log('Все тесты пройдены!');

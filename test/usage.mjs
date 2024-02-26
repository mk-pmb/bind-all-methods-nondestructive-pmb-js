// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import bindAllMethods from '../index.js';

const same = assert.strictEqual;


const greetingsApi = {
  hi() { return 'Hello ' + this.name + '!'; },
};

function keyList(o) { return Object.keys(o).sort().join(' '); }


const henry = { name: 'Henry' };
const jenny = { name: 'Jenny', chat: bindAllMethods(henry, greetingsApi) };
same(keyList(jenny), 'chat name'); // no leaked API methods here.
same(keyList(jenny.chat), 'hi');
same(jenny.chat.hi(), 'Hello Henry!');

// Origin object was not modified:
same(henry.hi, undefined);
same(keyList(henry), 'name');

// Install API onto Henry:
bindAllMethods.dest(henry, greetingsApi);
same(henry.hi(), 'Hello Henry!');












console.debug('+OK usage tests passed.');

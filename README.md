
<!--#echo json="package.json" key="name" underline="=" -->
bind-all-methods-nondestructive-pmb
===================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Flat-copy an object except all methods are bound to a given context. Do not
modify the origin object.
<!--/#echo -->



API
---

This module exports one function that holds some methods:

### bindAllMethods(context, origin)

Alias for `bindAllMethods.onto({}, context, origin)`.



### bindAllMethods.dest(dest, origin)

Alias for `bindAllMethods.onto(dest, dest, origin)`.

May be used to install additional APIs onto an existing object
without affecting unrelated methods.



### bindAllMethods.onto(dest, context[, origin])

If `origin` is false-y, `context` is used instead.

Copy all properties of `origin` onto `dest`, except methods.
For methods, instead, assign a version that is bound to `context`.
Return `dest`.









Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->

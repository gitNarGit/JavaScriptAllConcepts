//The import statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc.
//Always use modules (import/export) over a non-standard module system. You can always transpile to your preferred module system.

import * as myModule from 'my-module';

import {myMember} from 'my-module';

import {imp_1, imp_2} from 'my-module';

import {reallyReallyLongModuleMemberName as shortName}
  from 'my-module';

import 'my-module';

import {
  reallyReallyLongModuleMemberName as shortName,
  anotherLongModuleName as short
} from 'my-module';

//Do not export mutable bindings.
//Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. 
//While this technique may be needed for some special cases, in general, only constant references should be exported.

// bad
let imp_1 = 3;
export { imp_1 };

// good
const imp_1 = 3;
export { imp_1 };

// In modules with a single export, prefer default export over named export.
// bad
export function imp_1() {}

// good
export default function imp_1() {}

//Put all imports above non-import statements.
// bad
import imp_1 from 'foo';
imp_1.init();

import imp_2 from 'bar';

// good
import imp_1 from 'foo';
import imp_2 from 'bar';

imp_1.init();
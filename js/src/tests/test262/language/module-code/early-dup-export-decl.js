// |reftest| error:SyntaxError module
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 15.2.1.1
description: >
    It is a Syntax Error if the ExportedNames of ModuleItemList contains any
    duplicate entries.
flags: [module]
negative:
  phase: early
  type: SyntaxError
features: [generators]
---*/

throw "Test262: This statement should not be evaluated.";

export function f() {}
export function *f() {}

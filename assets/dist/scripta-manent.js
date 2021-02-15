// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/diff-match-patch/index.js":[function(require,module,exports) {
/**
 * Diff Match and Patch
 * Copyright 2018 The diff-match-patch Authors.
 * https://github.com/google/diff-match-patch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Computes the difference between two texts to create a patch.
 * Applies the patch onto another text, allowing for errors.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * Class containing the diff, match and patch methods.
 * @constructor
 */
var diff_match_patch = function() {

  // Defaults.
  // Redefine these in your program to override the defaults.

  // Number of seconds to map a diff before giving up (0 for infinity).
  this.Diff_Timeout = 1.0;
  // Cost of an empty edit operation in terms of edit characters.
  this.Diff_EditCost = 4;
  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
  this.Match_Threshold = 0.5;
  // How far to search for a match (0 = exact location, 1000+ = broad match).
  // A match this many characters away from the expected location will add
  // 1.0 to the score (0.0 is a perfect match).
  this.Match_Distance = 1000;
  // When deleting a large block of text (over ~64 characters), how close do
  // the contents have to be to match the expected contents. (0.0 = perfection,
  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
  // end points of a delete need to match.
  this.Patch_DeleteThreshold = 0.5;
  // Chunk size for context length.
  this.Patch_Margin = 4;

  // The number of bits in an int.
  this.Match_MaxBits = 32;
};


//  DIFF FUNCTIONS


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;

/**
 * Class representing one diff tuple.
 * ~Attempts to look like a two-element array (which is what this used to be).~
 * Constructor returns an actual two-element array, to allow destructing @JackuB
 * See https://github.com/JackuB/diff-match-patch/issues/14 for details
 * @param {number} op Operation, one of: DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL.
 * @param {string} text Text to be deleted, inserted, or retained.
 * @constructor
 */
diff_match_patch.Diff = function(op, text) {
  return [op, text];
};

/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
 *     then don't run a line-level diff first to identify the changed areas.
 *     Defaults to true, which does a faster, slightly less optimal diff.
 * @param {number=} opt_deadline Optional time when the diff should be complete
 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
 *     instead.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 */
diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
    opt_deadline) {
  // Set a deadline by which time the diff must be complete.
  if (typeof opt_deadline == 'undefined') {
    if (this.Diff_Timeout <= 0) {
      opt_deadline = Number.MAX_VALUE;
    } else {
      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
    }
  }
  var deadline = opt_deadline;

  // Check for null inputs.
  if (text1 == null || text2 == null) {
    throw new Error('Null input. (diff_main)');
  }

  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [new diff_match_patch.Diff(DIFF_EQUAL, text1)];
    }
    return [];
  }

  if (typeof opt_checklines == 'undefined') {
    opt_checklines = true;
  }
  var checklines = opt_checklines;

  // Trim off common prefix (speedup).
  var commonlength = this.diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = this.diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = this.diff_compute_(text1, text2, checklines, deadline);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, commonprefix));
  }
  if (commonsuffix) {
    diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, commonsuffix));
  }
  this.diff_cleanupMerge(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean} checklines Speedup flag.  If false, then don't run a
 *     line-level diff first to identify the changed areas.
 *     If true, then run a faster, slightly less optimal diff.
 * @param {number} deadline Time when the diff should be complete by.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
    deadline) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [new diff_match_patch.Diff(DIFF_INSERT, text2)];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [new diff_match_patch.Diff(DIFF_DELETE, text1)];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [new diff_match_patch.Diff(DIFF_INSERT, longtext.substring(0, i)),
             new diff_match_patch.Diff(DIFF_EQUAL, shorttext),
             new diff_match_patch.Diff(DIFF_INSERT,
                 longtext.substring(i + shorttext.length))];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [new diff_match_patch.Diff(DIFF_DELETE, text1),
            new diff_match_patch.Diff(DIFF_INSERT, text2)];
  }

  // Check to see if the problem can be split in two.
  var hm = this.diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
    // Merge the results.
    return diffs_a.concat([new diff_match_patch.Diff(DIFF_EQUAL, mid_common)],
                          diffs_b);
  }

  if (checklines && text1.length > 100 && text2.length > 100) {
    return this.diff_lineMode_(text1, text2, deadline);
  }

  return this.diff_bisect_(text1, text2, deadline);
};


/**
 * Do a quick line-level diff on both strings, then rediff the parts for
 * greater accuracy.
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} deadline Time when the diff should be complete by.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
  // Scan the text on a line-by-line basis first.
  var a = this.diff_linesToChars_(text1, text2);
  text1 = a.chars1;
  text2 = a.chars2;
  var linearray = a.lineArray;

  var diffs = this.diff_main(text1, text2, false, deadline);

  // Convert the diff back to original text.
  this.diff_charsToLines_(diffs, linearray);
  // Eliminate freak matches (e.g. blank lines)
  this.diff_cleanupSemantic(diffs);

  // Rediff any replacement blocks, this time character-by-character.
  // Add a dummy entry at the end.
  diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ''));
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete >= 1 && count_insert >= 1) {
          // Delete the offending records and add the merged ones.
          diffs.splice(pointer - count_delete - count_insert,
                       count_delete + count_insert);
          pointer = pointer - count_delete - count_insert;
          var subDiff =
              this.diff_main(text_delete, text_insert, false, deadline);
          for (var j = subDiff.length - 1; j >= 0; j--) {
            diffs.splice(pointer, 0, subDiff[j]);
          }
          pointer = pointer + subDiff.length;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
    pointer++;
  }
  diffs.pop();  // Remove the dummy entry at the end.

  return diffs;
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} deadline Time at which to bail if not yet complete.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Bail out if deadline is reached.
    if ((new Date()).getTime() > deadline) {
      break;
    }

    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [new diff_match_patch.Diff(DIFF_DELETE, text1),
          new diff_match_patch.Diff(DIFF_INSERT, text2)];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @param {number} deadline Time at which to bail if not yet complete.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
    deadline) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = this.diff_main(text1a, text2a, false, deadline);
  var diffsb = this.diff_main(text1b, text2b, false, deadline);

  return diffs.concat(diffsb);
};


/**
 * Split two texts into an array of strings.  Reduce the texts to a string of
 * hashes where each Unicode character represents one line.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
 *     An object containing the encoded text1, the encoded text2 and
 *     the array of unique strings.
 *     The zeroth element of the array of unique strings is intentionally blank.
 * @private
 */
diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4

  // '\x00' is a valid character, but various debuggers don't like it.
  // So we'll insert a junk entry to avoid generating a null character.
  lineArray[0] = '';

  /**
   * Split a text into an array of strings.  Reduce the texts to a string of
   * hashes where each Unicode character represents one line.
   * Modifies linearray and linehash through being a closure.
   * @param {string} text String to encode.
   * @return {string} Encoded string.
   * @private
   */
  function diff_linesToCharsMunge_(text) {
    var chars = '';
    // Walk the text, pulling out a substring for each line.
    // text.split('\n') would would temporarily double our memory footprint.
    // Modifying text would create many large strings to garbage collect.
    var lineStart = 0;
    var lineEnd = -1;
    // Keeping our own length variable is faster than looking it up.
    var lineArrayLength = lineArray.length;
    while (lineEnd < text.length - 1) {
      lineEnd = text.indexOf('\n', lineStart);
      if (lineEnd == -1) {
        lineEnd = text.length - 1;
      }
      var line = text.substring(lineStart, lineEnd + 1);

      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
          (lineHash[line] !== undefined)) {
        chars += String.fromCharCode(lineHash[line]);
      } else {
        if (lineArrayLength == maxLines) {
          // Bail out at 65535 because
          // String.fromCharCode(65536) == String.fromCharCode(0)
          line = text.substring(lineStart);
          lineEnd = text.length;
        }
        chars += String.fromCharCode(lineArrayLength);
        lineHash[line] = lineArrayLength;
        lineArray[lineArrayLength++] = line;
      }
      lineStart = lineEnd + 1;
    }
    return chars;
  }
  // Allocate 2/3rds of the space for text1, the rest for text2.
  var maxLines = 40000;
  var chars1 = diff_linesToCharsMunge_(text1);
  maxLines = 65535;
  var chars2 = diff_linesToCharsMunge_(text2);
  return {chars1: chars1, chars2: chars2, lineArray: lineArray};
};


/**
 * Rehydrate the text in a diff from a string of line hashes to real lines of
 * text.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {!Array.<string>} lineArray Array of unique strings.
 * @private
 */
diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
  for (var i = 0; i < diffs.length; i++) {
    var chars = diffs[i][1];
    var text = [];
    for (var j = 0; j < chars.length; j++) {
      text[j] = lineArray[chars.charCodeAt(j)];
    }
    diffs[i][1] = text.join('');
  }
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: https://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */
diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  // Eliminate the null case.
  if (text1_length == 0 || text2_length == 0) {
    return 0;
  }
  // Truncate the longer string.
  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }
  var text_length = Math.min(text1_length, text2_length);
  // Quick check for the worst case.
  if (text1 == text2) {
    return text_length;
  }

  // Start by looking for a single character match
  // and increase length until no match is found.
  // Performance analysis: https://neil.fraser.name/news/2010/11/04/
  var best = 0;
  var length = 1;
  while (true) {
    var pattern = text1.substring(text_length - length);
    var found = text2.indexOf(pattern);
    if (found == -1) {
      return best;
    }
    length += found;
    if (found == 0 || text1.substring(text_length - length) ==
        text2.substring(0, length)) {
      best = length;
      length++;
    }
  }
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 * @private
 */
diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
  if (this.Diff_Timeout <= 0) {
    // Don't risk returning a non-optimal diff if we have unlimited time.
    return null;
  }
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }
  var dmp = this;  // 'this' becomes 'window' in a closure.

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
                                               shorttext.substring(j));
      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
                                               shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastEquality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0;  // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_insertions1 = 0;
  var length_deletions1 = 0;
  // Number of characters that changed after the equality.
  var length_insertions2 = 0;
  var length_deletions2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastEquality = diffs[pointer][1];
    } else {  // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      }
      // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.
      if (lastEquality && (lastEquality.length <=
          Math.max(length_insertions1, length_deletions1)) &&
          (lastEquality.length <= Math.max(length_insertions2,
                                           length_deletions2))) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     new diff_match_patch.Diff(DIFF_DELETE, lastEquality));
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0;  // Reset the counters.
        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastEquality = null;
        changes = true;
      }
    }
    pointer++;
  }

  // Normalize the diff.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
  this.diff_cleanupSemanticLossless(diffs);

  // Find any overlaps between deletions and insertions.
  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
  //   -> <del>abc</del>xxx<ins>def</ins>
  // e.g: <del>xxxabc</del><ins>defxxx</ins>
  //   -> <ins>def</ins>xxx<del>abc</del>
  // Only extract an overlap if it is as big as the edit ahead or behind it.
  pointer = 1;
  while (pointer < diffs.length) {
    if (diffs[pointer - 1][0] == DIFF_DELETE &&
        diffs[pointer][0] == DIFF_INSERT) {
      var deletion = diffs[pointer - 1][1];
      var insertion = diffs[pointer][1];
      var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
      if (overlap_length1 >= overlap_length2) {
        if (overlap_length1 >= deletion.length / 2 ||
            overlap_length1 >= insertion.length / 2) {
          // Overlap found.  Insert an equality and trim the surrounding edits.
          diffs.splice(pointer, 0, new diff_match_patch.Diff(DIFF_EQUAL,
              insertion.substring(0, overlap_length1)));
          diffs[pointer - 1][1] =
              deletion.substring(0, deletion.length - overlap_length1);
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (overlap_length2 >= deletion.length / 2 ||
            overlap_length2 >= insertion.length / 2) {
          // Reverse overlap found.
          // Insert an equality and swap and trim the surrounding edits.
          diffs.splice(pointer, 0, new diff_match_patch.Diff(DIFF_EQUAL,
              deletion.substring(0, overlap_length2)));
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] =
              insertion.substring(0, insertion.length - overlap_length2);
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] =
              deletion.substring(overlap_length2);
          pointer++;
        }
      }
      pointer++;
    }
    pointer++;
  }
};


/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 6 (best) to 0 (worst).
   * Closure, but does not reference any external variables.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 6;
    }

    // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.
    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 &&
        char1.match(diff_match_patch.whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 &&
        char2.match(diff_match_patch.whitespaceRegex_);
    var lineBreak1 = whitespace1 &&
        char1.match(diff_match_patch.linebreakRegex_);
    var lineBreak2 = whitespace2 &&
        char2.match(diff_match_patch.linebreakRegex_);
    var blankLine1 = lineBreak1 &&
        one.match(diff_match_patch.blanklineEndRegex_);
    var blankLine2 = lineBreak2 &&
        two.match(diff_match_patch.blanklineStartRegex_);

    if (blankLine1 || blankLine2) {
      // Five points for blank lines.
      return 5;
    } else if (lineBreak1 || lineBreak2) {
      // Four points for line breaks.
      return 4;
    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
      // Three points for end of sentences.
      return 3;
    } else if (whitespace1 || whitespace2) {
      // Two points for whitespace.
      return 2;
    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
      // One point for non-alphanumeric.
      return 1;
    }
    return 0;
  }

  var pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1];

      // First, shift the edit as far left as possible.
      var commonOffset = this.diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }

      // Second, step character by character right, looking for the best fit.
      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
          diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore_(equality1, edit) +
            diff_cleanupSemanticScore_(edit, equality2);
        // The >= encourages trailing rather than leading whitespace on edits.
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }
        diffs[pointer][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }
    pointer++;
  }
};

// Define some regex patterns for matching boundaries.
diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
diff_match_patch.whitespaceRegex_ = /\s/;
diff_match_patch.linebreakRegex_ = /[\r\n]/;
diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;

/**
 * Reduce the number of edits by eliminating operationally trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastEquality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0;  // Index of current position.
  // Is there an insertion operation before the last equality.
  var pre_ins = false;
  // Is there a deletion operation before the last equality.
  var pre_del = false;
  // Is there an insertion operation after the last equality.
  var post_ins = false;
  // Is there a deletion operation after the last equality.
  var post_del = false;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
      if (diffs[pointer][1].length < this.Diff_EditCost &&
          (post_ins || post_del)) {
        // Candidate found.
        equalities[equalitiesLength++] = pointer;
        pre_ins = post_ins;
        pre_del = post_del;
        lastEquality = diffs[pointer][1];
      } else {
        // Not a candidate, and can never become one.
        equalitiesLength = 0;
        lastEquality = null;
      }
      post_ins = post_del = false;
    } else {  // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_DELETE) {
        post_del = true;
      } else {
        post_ins = true;
      }
      /*
       * Five types to be split:
       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
       * <ins>A</ins>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<ins>C</ins>
       * <ins>A</del>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<del>C</del>
       */
      if (lastEquality && ((pre_ins && pre_del && post_ins && post_del) ||
                           ((lastEquality.length < this.Diff_EditCost / 2) &&
                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     new diff_match_patch.Diff(DIFF_DELETE, lastEquality));
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--;  // Throw away the equality we just deleted;
        lastEquality = null;
        if (pre_ins && pre_del) {
          // No changes made which could affect previous entry, keep going.
          post_ins = post_del = true;
          equalitiesLength = 0;
        } else {
          equalitiesLength--;  // Throw away the previous equality.
          pointer = equalitiesLength > 0 ?
              equalities[equalitiesLength - 1] : -1;
          post_ins = post_del = false;
        }
        changes = true;
      }
    }
    pointer++;
  }

  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
  // Add a dummy entry at the end.
  diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, ''));
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = this.diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, new diff_match_patch.Diff(DIFF_EQUAL,
                    text_insert.substring(0, commonlength)));
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = this.diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          pointer -= count_delete + count_insert;
          diffs.splice(pointer, count_delete + count_insert);
          if (text_delete.length) {
            diffs.splice(pointer, 0,
                new diff_match_patch.Diff(DIFF_DELETE, text_delete));
            pointer++;
          }
          if (text_insert.length) {
            diffs.splice(pointer, 0,
                new diff_match_patch.Diff(DIFF_INSERT, text_insert));
            pointer++;
          }
          pointer++;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};


/**
 * loc is a location in text1, compute and return the equivalent location in
 * text2.
 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {number} loc Location within text1.
 * @return {number} Location within text2.
 */
diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
  var chars1 = 0;
  var chars2 = 0;
  var last_chars1 = 0;
  var last_chars2 = 0;
  var x;
  for (x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
      chars1 += diffs[x][1].length;
    }
    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
      chars2 += diffs[x][1].length;
    }
    if (chars1 > loc) {  // Overshot the location.
      break;
    }
    last_chars1 = chars1;
    last_chars2 = chars2;
  }
  // Was the location was deleted?
  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
    return last_chars2;
  }
  // Add the remaining character length.
  return last_chars2 + (loc - last_chars1);
};


/**
 * Convert a diff array into a pretty HTML report.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} HTML representation.
 */
diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
  var html = [];
  var pattern_amp = /&/g;
  var pattern_lt = /</g;
  var pattern_gt = />/g;
  var pattern_para = /\n/g;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];    // Operation (insert, delete, equal)
    var data = diffs[x][1];  // Text of change.
    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
    switch (op) {
      case DIFF_INSERT:
        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
        break;
      case DIFF_DELETE:
        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
        break;
      case DIFF_EQUAL:
        html[x] = '<span>' + text + '</span>';
        break;
    }
  }
  return html.join('');
};


/**
 * Compute and return the source text (all equalities and deletions).
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Source text.
 */
diff_match_patch.prototype.diff_text1 = function(diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};


/**
 * Compute and return the destination text (all equalities and insertions).
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Destination text.
 */
diff_match_patch.prototype.diff_text2 = function(diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_DELETE) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};


/**
 * Compute the Levenshtein distance; the number of inserted, deleted or
 * substituted characters.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {number} Number of changes.
 */
diff_match_patch.prototype.diff_levenshtein = function(diffs) {
  var levenshtein = 0;
  var insertions = 0;
  var deletions = 0;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];
    var data = diffs[x][1];
    switch (op) {
      case DIFF_INSERT:
        insertions += data.length;
        break;
      case DIFF_DELETE:
        deletions += data.length;
        break;
      case DIFF_EQUAL:
        // A deletion and an insertion is one substitution.
        levenshtein += Math.max(insertions, deletions);
        insertions = 0;
        deletions = 0;
        break;
    }
  }
  levenshtein += Math.max(insertions, deletions);
  return levenshtein;
};


/**
 * Crush the diff into an encoded string which describes the operations
 * required to transform text1 into text2.
 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Delta text.
 */
diff_match_patch.prototype.diff_toDelta = function(diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    switch (diffs[x][0]) {
      case DIFF_INSERT:
        text[x] = '+' + encodeURI(diffs[x][1]);
        break;
      case DIFF_DELETE:
        text[x] = '-' + diffs[x][1].length;
        break;
      case DIFF_EQUAL:
        text[x] = '=' + diffs[x][1].length;
        break;
    }
  }
  return text.join('\t').replace(/%20/g, ' ');
};


/**
 * Given the original text1, and an encoded string which describes the
 * operations required to transform text1 into text2, compute the full diff.
 * @param {string} text1 Source string for the diff.
 * @param {string} delta Delta text.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @throws {!Error} If invalid input.
 */
diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
  var diffs = [];
  var diffsLength = 0;  // Keeping our own length var is faster in JS.
  var pointer = 0;  // Cursor in text1
  var tokens = delta.split(/\t/g);
  for (var x = 0; x < tokens.length; x++) {
    // Each token begins with a one character parameter which specifies the
    // operation of this token (delete, insert, equality).
    var param = tokens[x].substring(1);
    switch (tokens[x].charAt(0)) {
      case '+':
        try {
          diffs[diffsLength++] =
              new diff_match_patch.Diff(DIFF_INSERT, decodeURI(param));
        } catch (ex) {
          // Malformed URI sequence.
          throw new Error('Illegal escape in diff_fromDelta: ' + param);
        }
        break;
      case '-':
        // Fall through.
      case '=':
        var n = parseInt(param, 10);
        if (isNaN(n) || n < 0) {
          throw new Error('Invalid number in diff_fromDelta: ' + param);
        }
        var text = text1.substring(pointer, pointer += n);
        if (tokens[x].charAt(0) == '=') {
          diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_EQUAL, text);
        } else {
          diffs[diffsLength++] = new diff_match_patch.Diff(DIFF_DELETE, text);
        }
        break;
      default:
        // Blank tokens are ok (from a trailing \t).
        // Anything else is an error.
        if (tokens[x]) {
          throw new Error('Invalid diff operation in diff_fromDelta: ' +
                          tokens[x]);
        }
    }
  }
  if (pointer != text1.length) {
    throw new Error('Delta length (' + pointer +
        ') does not equal source text length (' + text1.length + ').');
  }
  return diffs;
};


//  MATCH FUNCTIONS


/**
 * Locate the best instance of 'pattern' in 'text' near 'loc'.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 */
diff_match_patch.prototype.match_main = function(text, pattern, loc) {
  // Check for null inputs.
  if (text == null || pattern == null || loc == null) {
    throw new Error('Null input. (match_main)');
  }

  loc = Math.max(0, Math.min(loc, text.length));
  if (text == pattern) {
    // Shortcut (potentially not guaranteed by the algorithm)
    return 0;
  } else if (!text.length) {
    // Nothing to match.
    return -1;
  } else if (text.substring(loc, loc + pattern.length) == pattern) {
    // Perfect match at the perfect spot!  (Includes case of null pattern)
    return loc;
  } else {
    // Do a fuzzy compare.
    return this.match_bitap_(text, pattern, loc);
  }
};


/**
 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
 * Bitap algorithm.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 * @private
 */
diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
  if (pattern.length > this.Match_MaxBits) {
    throw new Error('Pattern too long for this browser.');
  }

  // Initialise the alphabet.
  var s = this.match_alphabet_(pattern);

  var dmp = this;  // 'this' becomes 'window' in a closure.

  /**
   * Compute and return the score for a match with e errors and x location.
   * Accesses loc and pattern through being a closure.
   * @param {number} e Number of errors in match.
   * @param {number} x Location of match.
   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
   * @private
   */
  function match_bitapScore_(e, x) {
    var accuracy = e / pattern.length;
    var proximity = Math.abs(loc - x);
    if (!dmp.Match_Distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy;
    }
    return accuracy + (proximity / dmp.Match_Distance);
  }

  // Highest score beyond which we give up.
  var score_threshold = this.Match_Threshold;
  // Is there a nearby exact match? (speedup)
  var best_loc = text.indexOf(pattern, loc);
  if (best_loc != -1) {
    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
    // What about in the other direction? (speedup)
    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
    if (best_loc != -1) {
      score_threshold =
          Math.min(match_bitapScore_(0, best_loc), score_threshold);
    }
  }

  // Initialise the bit arrays.
  var matchmask = 1 << (pattern.length - 1);
  best_loc = -1;

  var bin_min, bin_mid;
  var bin_max = pattern.length + text.length;
  var last_rd;
  for (var d = 0; d < pattern.length; d++) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from 'loc' we can stray at this
    // error level.
    bin_min = 0;
    bin_mid = bin_max;
    while (bin_min < bin_mid) {
      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
        bin_min = bin_mid;
      } else {
        bin_max = bin_mid;
      }
      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
    }
    // Use the result from this iteration as the maximum for the next.
    bin_max = bin_mid;
    var start = Math.max(1, loc - bin_mid + 1);
    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

    var rd = Array(finish + 2);
    rd[finish + 1] = (1 << d) - 1;
    for (var j = finish; j >= start; j--) {
      // The alphabet (s) is a sparse hash, so the following line generates
      // warnings.
      var charMatch = s[text.charAt(j - 1)];
      if (d === 0) {  // First pass: exact match.
        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
      } else {  // Subsequent passes: fuzzy match.
        rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
                last_rd[j + 1];
      }
      if (rd[j] & matchmask) {
        var score = match_bitapScore_(d, j - 1);
        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (score <= score_threshold) {
          // Told you so.
          score_threshold = score;
          best_loc = j - 1;
          if (best_loc > loc) {
            // When passing loc, don't exceed our current distance from loc.
            start = Math.max(1, 2 * loc - best_loc);
          } else {
            // Already passed loc, downhill from here on in.
            break;
          }
        }
      }
    }
    // No hope for a (better) match at greater error levels.
    if (match_bitapScore_(d + 1, loc) > score_threshold) {
      break;
    }
    last_rd = rd;
  }
  return best_loc;
};


/**
 * Initialise the alphabet for the Bitap algorithm.
 * @param {string} pattern The text to encode.
 * @return {!Object} Hash of character locations.
 * @private
 */
diff_match_patch.prototype.match_alphabet_ = function(pattern) {
  var s = {};
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] = 0;
  }
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
  }
  return s;
};


//  PATCH FUNCTIONS


/**
 * Increase the context until it is unique,
 * but don't let the pattern expand beyond Match_MaxBits.
 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
 * @param {string} text Source text.
 * @private
 */
diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
  if (text.length == 0) {
    return;
  }
  if (patch.start2 === null) {
    throw Error('patch not initialized');
  }
  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
  var padding = 0;

  // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.
  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
         pattern.length < this.Match_MaxBits - this.Patch_Margin -
         this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding,
                             patch.start2 + patch.length1 + padding);
  }
  // Add one chunk for good luck.
  padding += this.Patch_Margin;

  // Add the prefix.
  var prefix = text.substring(patch.start2 - padding, patch.start2);
  if (prefix) {
    patch.diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, prefix));
  }
  // Add the suffix.
  var suffix = text.substring(patch.start2 + patch.length1,
                              patch.start2 + patch.length1 + padding);
  if (suffix) {
    patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, suffix));
  }

  // Roll back the start points.
  patch.start1 -= prefix.length;
  patch.start2 -= prefix.length;
  // Extend the lengths.
  patch.length1 += prefix.length + suffix.length;
  patch.length2 += prefix.length + suffix.length;
};


/**
 * Compute a list of patches to turn text1 into text2.
 * Use diffs if provided, otherwise compute it ourselves.
 * There are four ways to call this function, depending on what data is
 * available to the caller:
 * Method 1:
 * a = text1, b = text2
 * Method 2:
 * a = diffs
 * Method 3 (optimal):
 * a = text1, b = diffs
 * Method 4 (deprecated, use method 3):
 * a = text1, b = text2, c = diffs
 *
 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
 * Array of diff tuples for text1 to text2 (method 2).
 * @param {string|!Array.<!diff_match_patch.Diff>=} opt_b text2 (methods 1,4) or
 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
 * @param {string|!Array.<!diff_match_patch.Diff>=} opt_c Array of diff tuples
 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 */
diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
  var text1, diffs;
  if (typeof a == 'string' && typeof opt_b == 'string' &&
      typeof opt_c == 'undefined') {
    // Method 1: text1, text2
    // Compute diffs from text1 and text2.
    text1 = /** @type {string} */(a);
    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
    if (diffs.length > 2) {
      this.diff_cleanupSemantic(diffs);
      this.diff_cleanupEfficiency(diffs);
    }
  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
      typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
      typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = /** @type {string} */(a);
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
      opt_c && typeof opt_c == 'object') {
    // Method 4: text1, text2, diffs
    // text2 is not used.
    text1 = /** @type {string} */(a);
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
  } else {
    throw new Error('Unknown call format to patch_make.');
  }

  if (diffs.length === 0) {
    return [];  // Get rid of the null case.
  }
  var patches = [];
  var patch = new diff_match_patch.patch_obj();
  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
  var char_count1 = 0;  // Number of characters into the text1 string.
  var char_count2 = 0;  // Number of characters into the text2 string.
  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
  // text2 (postpatch_text).  We recreate the patches one by one to determine
  // context info.
  var prepatch_text = text1;
  var postpatch_text = text1;
  for (var x = 0; x < diffs.length; x++) {
    var diff_type = diffs[x][0];
    var diff_text = diffs[x][1];

    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
      // A new patch starts here.
      patch.start1 = char_count1;
      patch.start2 = char_count2;
    }

    switch (diff_type) {
      case DIFF_INSERT:
        patch.diffs[patchDiffLength++] = diffs[x];
        patch.length2 += diff_text.length;
        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
                         postpatch_text.substring(char_count2);
        break;
      case DIFF_DELETE:
        patch.length1 += diff_text.length;
        patch.diffs[patchDiffLength++] = diffs[x];
        postpatch_text = postpatch_text.substring(0, char_count2) +
                         postpatch_text.substring(char_count2 +
                             diff_text.length);
        break;
      case DIFF_EQUAL:
        if (diff_text.length <= 2 * this.Patch_Margin &&
            patchDiffLength && diffs.length != x + 1) {
          // Small equality inside a patch.
          patch.diffs[patchDiffLength++] = diffs[x];
          patch.length1 += diff_text.length;
          patch.length2 += diff_text.length;
        } else if (diff_text.length >= 2 * this.Patch_Margin) {
          // Time for a new patch.
          if (patchDiffLength) {
            this.patch_addContext_(patch, prepatch_text);
            patches.push(patch);
            patch = new diff_match_patch.patch_obj();
            patchDiffLength = 0;
            // Unlike Unidiff, our patch lists have a rolling context.
            // https://github.com/google/diff-match-patch/wiki/Unidiff
            // Update prepatch text & pos to reflect the application of the
            // just completed patch.
            prepatch_text = postpatch_text;
            char_count1 = char_count2;
          }
        }
        break;
    }

    // Update the current character count.
    if (diff_type !== DIFF_INSERT) {
      char_count1 += diff_text.length;
    }
    if (diff_type !== DIFF_DELETE) {
      char_count2 += diff_text.length;
    }
  }
  // Pick up the leftover patch if not empty.
  if (patchDiffLength) {
    this.patch_addContext_(patch, prepatch_text);
    patches.push(patch);
  }

  return patches;
};


/**
 * Given an array of patches, return another array that is identical.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 */
diff_match_patch.prototype.patch_deepCopy = function(patches) {
  // Making deep copies is hard in JavaScript.
  var patchesCopy = [];
  for (var x = 0; x < patches.length; x++) {
    var patch = patches[x];
    var patchCopy = new diff_match_patch.patch_obj();
    patchCopy.diffs = [];
    for (var y = 0; y < patch.diffs.length; y++) {
      patchCopy.diffs[y] =
          new diff_match_patch.Diff(patch.diffs[y][0], patch.diffs[y][1]);
    }
    patchCopy.start1 = patch.start1;
    patchCopy.start2 = patch.start2;
    patchCopy.length1 = patch.length1;
    patchCopy.length2 = patch.length2;
    patchesCopy[x] = patchCopy;
  }
  return patchesCopy;
};


/**
 * Merge a set of patches onto the text.  Return a patched text, as well
 * as a list of true/false values indicating which patches were applied.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @param {string} text Old text.
 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
 *      new text and an array of boolean values.
 */
diff_match_patch.prototype.patch_apply = function(patches, text) {
  if (patches.length == 0) {
    return [text, []];
  }

  // Deep copy the patches so that no changes are made to originals.
  patches = this.patch_deepCopy(patches);

  var nullPadding = this.patch_addPadding(patches);
  text = nullPadding + text + nullPadding;

  this.patch_splitMax(patches);
  // delta keeps track of the offset between the expected and actual location
  // of the previous patch.  If there are patches expected at positions 10 and
  // 20, but the first patch was found at 12, delta is 2 and the second patch
  // has an effective expected position of 22.
  var delta = 0;
  var results = [];
  for (var x = 0; x < patches.length; x++) {
    var expected_loc = patches[x].start2 + delta;
    var text1 = this.diff_text1(patches[x].diffs);
    var start_loc;
    var end_loc = -1;
    if (text1.length > this.Match_MaxBits) {
      // patch_splitMax will only provide an oversized pattern in the case of
      // a monster delete.
      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
                                  expected_loc);
      if (start_loc != -1) {
        end_loc = this.match_main(text,
            text1.substring(text1.length - this.Match_MaxBits),
            expected_loc + text1.length - this.Match_MaxBits);
        if (end_loc == -1 || start_loc >= end_loc) {
          // Can't find valid trailing context.  Drop this patch.
          start_loc = -1;
        }
      }
    } else {
      start_loc = this.match_main(text, text1, expected_loc);
    }
    if (start_loc == -1) {
      // No match found.  :(
      results[x] = false;
      // Subtract the delta for this failed patch from subsequent patches.
      delta -= patches[x].length2 - patches[x].length1;
    } else {
      // Found a match.  :)
      results[x] = true;
      delta = start_loc - expected_loc;
      var text2;
      if (end_loc == -1) {
        text2 = text.substring(start_loc, start_loc + text1.length);
      } else {
        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
      }
      if (text1 == text2) {
        // Perfect match, just shove the replacement text in.
        text = text.substring(0, start_loc) +
               this.diff_text2(patches[x].diffs) +
               text.substring(start_loc + text1.length);
      } else {
        // Imperfect match.  Run a diff to get a framework of equivalent
        // indices.
        var diffs = this.diff_main(text1, text2, false);
        if (text1.length > this.Match_MaxBits &&
            this.diff_levenshtein(diffs) / text1.length >
            this.Patch_DeleteThreshold) {
          // The end points match, but the content is unacceptably bad.
          results[x] = false;
        } else {
          this.diff_cleanupSemanticLossless(diffs);
          var index1 = 0;
          var index2;
          for (var y = 0; y < patches[x].diffs.length; y++) {
            var mod = patches[x].diffs[y];
            if (mod[0] !== DIFF_EQUAL) {
              index2 = this.diff_xIndex(diffs, index1);
            }
            if (mod[0] === DIFF_INSERT) {  // Insertion
              text = text.substring(0, start_loc + index2) + mod[1] +
                     text.substring(start_loc + index2);
            } else if (mod[0] === DIFF_DELETE) {  // Deletion
              text = text.substring(0, start_loc + index2) +
                     text.substring(start_loc + this.diff_xIndex(diffs,
                         index1 + mod[1].length));
            }
            if (mod[0] !== DIFF_DELETE) {
              index1 += mod[1].length;
            }
          }
        }
      }
    }
  }
  // Strip the padding off.
  text = text.substring(nullPadding.length, text.length - nullPadding.length);
  return [text, results];
};


/**
 * Add some padding on text start and end so that edges can match something.
 * Intended to be called only from within patch_apply.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {string} The padding string added to each side.
 */
diff_match_patch.prototype.patch_addPadding = function(patches) {
  var paddingLength = this.Patch_Margin;
  var nullPadding = '';
  for (var x = 1; x <= paddingLength; x++) {
    nullPadding += String.fromCharCode(x);
  }

  // Bump all the patches forward.
  for (var x = 0; x < patches.length; x++) {
    patches[x].start1 += paddingLength;
    patches[x].start2 += paddingLength;
  }

  // Add some padding on start of first diff.
  var patch = patches[0];
  var diffs = patch.diffs;
  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.unshift(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
    patch.start1 -= paddingLength;  // Should be 0.
    patch.start2 -= paddingLength;  // Should be 0.
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[0][1].length) {
    // Grow first equality.
    var extraLength = paddingLength - diffs[0][1].length;
    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
    patch.start1 -= extraLength;
    patch.start2 -= extraLength;
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  // Add some padding on end of last diff.
  patch = patches[patches.length - 1];
  diffs = patch.diffs;
  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, nullPadding));
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
    // Grow last equality.
    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  return nullPadding;
};


/**
 * Look through the patches and break up any which are longer than the maximum
 * limit of the match algorithm.
 * Intended to be called only from within patch_apply.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 */
diff_match_patch.prototype.patch_splitMax = function(patches) {
  var patch_size = this.Match_MaxBits;
  for (var x = 0; x < patches.length; x++) {
    if (patches[x].length1 <= patch_size) {
      continue;
    }
    var bigpatch = patches[x];
    // Remove the big old patch.
    patches.splice(x--, 1);
    var start1 = bigpatch.start1;
    var start2 = bigpatch.start2;
    var precontext = '';
    while (bigpatch.diffs.length !== 0) {
      // Create one of several smaller patches.
      var patch = new diff_match_patch.patch_obj();
      var empty = true;
      patch.start1 = start1 - precontext.length;
      patch.start2 = start2 - precontext.length;
      if (precontext !== '') {
        patch.length1 = patch.length2 = precontext.length;
        patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, precontext));
      }
      while (bigpatch.diffs.length !== 0 &&
             patch.length1 < patch_size - this.Patch_Margin) {
        var diff_type = bigpatch.diffs[0][0];
        var diff_text = bigpatch.diffs[0][1];
        if (diff_type === DIFF_INSERT) {
          // Insertions are harmless.
          patch.length2 += diff_text.length;
          start2 += diff_text.length;
          patch.diffs.push(bigpatch.diffs.shift());
          empty = false;
        } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
                   patch.diffs[0][0] == DIFF_EQUAL &&
                   diff_text.length > 2 * patch_size) {
          // This is a large deletion.  Let it pass in one chunk.
          patch.length1 += diff_text.length;
          start1 += diff_text.length;
          empty = false;
          patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
          bigpatch.diffs.shift();
        } else {
          // Deletion or equality.  Only take as much as we can stomach.
          diff_text = diff_text.substring(0,
              patch_size - patch.length1 - this.Patch_Margin);
          patch.length1 += diff_text.length;
          start1 += diff_text.length;
          if (diff_type === DIFF_EQUAL) {
            patch.length2 += diff_text.length;
            start2 += diff_text.length;
          } else {
            empty = false;
          }
          patch.diffs.push(new diff_match_patch.Diff(diff_type, diff_text));
          if (diff_text == bigpatch.diffs[0][1]) {
            bigpatch.diffs.shift();
          } else {
            bigpatch.diffs[0][1] =
                bigpatch.diffs[0][1].substring(diff_text.length);
          }
        }
      }
      // Compute the head context for the next patch.
      precontext = this.diff_text2(patch.diffs);
      precontext =
          precontext.substring(precontext.length - this.Patch_Margin);
      // Append the end context for this patch.
      var postcontext = this.diff_text1(bigpatch.diffs)
                            .substring(0, this.Patch_Margin);
      if (postcontext !== '') {
        patch.length1 += postcontext.length;
        patch.length2 += postcontext.length;
        if (patch.diffs.length !== 0 &&
            patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
          patch.diffs[patch.diffs.length - 1][1] += postcontext;
        } else {
          patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, postcontext));
        }
      }
      if (!empty) {
        patches.splice(++x, 0, patch);
      }
    }
  }
};


/**
 * Take a list of patches and return a textual representation.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {string} Text representation of patches.
 */
diff_match_patch.prototype.patch_toText = function(patches) {
  var text = [];
  for (var x = 0; x < patches.length; x++) {
    text[x] = patches[x];
  }
  return text.join('');
};


/**
 * Parse a textual representation of patches and return a list of Patch objects.
 * @param {string} textline Text representation of patches.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 * @throws {!Error} If invalid input.
 */
diff_match_patch.prototype.patch_fromText = function(textline) {
  var patches = [];
  if (!textline) {
    return patches;
  }
  var text = textline.split('\n');
  var textPointer = 0;
  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
  while (textPointer < text.length) {
    var m = text[textPointer].match(patchHeader);
    if (!m) {
      throw new Error('Invalid patch string: ' + text[textPointer]);
    }
    var patch = new diff_match_patch.patch_obj();
    patches.push(patch);
    patch.start1 = parseInt(m[1], 10);
    if (m[2] === '') {
      patch.start1--;
      patch.length1 = 1;
    } else if (m[2] == '0') {
      patch.length1 = 0;
    } else {
      patch.start1--;
      patch.length1 = parseInt(m[2], 10);
    }

    patch.start2 = parseInt(m[3], 10);
    if (m[4] === '') {
      patch.start2--;
      patch.length2 = 1;
    } else if (m[4] == '0') {
      patch.length2 = 0;
    } else {
      patch.start2--;
      patch.length2 = parseInt(m[4], 10);
    }
    textPointer++;

    while (textPointer < text.length) {
      var sign = text[textPointer].charAt(0);
      try {
        var line = decodeURI(text[textPointer].substring(1));
      } catch (ex) {
        // Malformed URI sequence.
        throw new Error('Illegal escape in patch_fromText: ' + line);
      }
      if (sign == '-') {
        // Deletion.
        patch.diffs.push(new diff_match_patch.Diff(DIFF_DELETE, line));
      } else if (sign == '+') {
        // Insertion.
        patch.diffs.push(new diff_match_patch.Diff(DIFF_INSERT, line));
      } else if (sign == ' ') {
        // Minor equality.
        patch.diffs.push(new diff_match_patch.Diff(DIFF_EQUAL, line));
      } else if (sign == '@') {
        // Start of next patch.
        break;
      } else if (sign === '') {
        // Blank line?  Whatever.
      } else {
        // WTF?
        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
      }
      textPointer++;
    }
  }
  return patches;
};


/**
 * Class representing one patch operation.
 * @constructor
 */
diff_match_patch.patch_obj = function() {
  /** @type {!Array.<!diff_match_patch.Diff>} */
  this.diffs = [];
  /** @type {?number} */
  this.start1 = null;
  /** @type {?number} */
  this.start2 = null;
  /** @type {number} */
  this.length1 = 0;
  /** @type {number} */
  this.length2 = 0;
};


/**
 * Emulate GNU diff's format.
 * Header: @@ -382,8 +481,9 @@
 * Indices are printed as 1-based, not 0-based.
 * @return {string} The GNU diff string.
 */
diff_match_patch.patch_obj.prototype.toString = function() {
  var coords1, coords2;
  if (this.length1 === 0) {
    coords1 = this.start1 + ',0';
  } else if (this.length1 == 1) {
    coords1 = this.start1 + 1;
  } else {
    coords1 = (this.start1 + 1) + ',' + this.length1;
  }
  if (this.length2 === 0) {
    coords2 = this.start2 + ',0';
  } else if (this.length2 == 1) {
    coords2 = this.start2 + 1;
  } else {
    coords2 = (this.start2 + 1) + ',' + this.length2;
  }
  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
  var op;
  // Escape the body of the patch with %xx notation.
  for (var x = 0; x < this.diffs.length; x++) {
    switch (this.diffs[x][0]) {
      case DIFF_INSERT:
        op = '+';
        break;
      case DIFF_DELETE:
        op = '-';
        break;
      case DIFF_EQUAL:
        op = ' ';
        break;
    }
    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
  }
  return text.join('').replace(/%20/g, ' ');
};


// The following export code was added by @ForbesLindesay
module.exports = diff_match_patch;
module.exports['diff_match_patch'] = diff_match_patch;
module.exports['DIFF_DELETE'] = DIFF_DELETE;
module.exports['DIFF_INSERT'] = DIFF_INSERT;
module.exports['DIFF_EQUAL'] = DIFF_EQUAL;
},{}],"node_modules/@solid-js/nanostache/dist/_index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nanostache = Nanostache;
exports.delimitersRegex = void 0;

/**
 * Delimiters regex.
 * Override it to change templating delimiters.
 */
let delimitersRegex = new RegExp('{{(.*?)}}', 'gm');
/**
 * Get processed value from values bag.
 * Can return string / number / boolean ... Value is not casted to string.
 * Will call function if value is a function, and will return function result.
 * @param valueName Property name of the value to get from value bag
 * @param values One level deep value bag containing properties and values as scalar or functions
 */

exports.delimitersRegex = delimitersRegex;

function processValue(valueName, values) {
  // Silently fail as empty string if value is not found
  if (!(valueName in values)) return ''; // Get raw value

  const value = values[valueName]; // Call function or return value

  return typeof value === 'function' ? value.call(values, values) : value;
}
/**
 * Called each time the regex find an mustache delimited variable
 * @param match Detected mustache match ( without delimiters )
 * @param values One level deep value bag containing properties and values as scalar or functions
 */


function matcher(match, values) {
  // Removed spaces
  const trimmed = match.trim(); // Try to detect ternaries

  const ternaryDelimiter0 = trimmed.indexOf('?');
  const ternaryDelimiter1 = trimmed.indexOf(':');

  if (ternaryDelimiter0 > 0) {
    // Get value name from ternary ( valueName ? truePart : falsePart ) and then get processed value
    const ternaryValueName = trimmed.substring(0, ternaryDelimiter0).trim();
    const ternaryCondition = processValue(ternaryValueName, values); // Execute condition and return trimmed truePart or trimmed falsePart

    return (// Truthy
      ternaryCondition ? trimmed.substring(ternaryDelimiter0 + 1, ternaryDelimiter1).trim() // Falsy
      : // Show second par after semicolon if falsy
      // Or show empty string if there is no semicolon
      ternaryDelimiter1 > 0 ? trimmed.substring(ternaryDelimiter1 + 1, trimmed.length).trim() : ''
    );
  } // No ternary, process value


  return processValue(trimmed, values);
}
/**
 * Process a template as string with values.
 * Values needs to be a one level deep associative object ( key : value ).
 * Why do you need Nanostache since literal template strings are available in ES6+ ?
 * Nanostache can be useful when any templating is needed when the template source is not coming
 * from javascript itself. For example, if you need to process a template from a file, or
 * any other kind of input.
 *
 * Example :
 * Nanostache('Hello {{username}}', {
 *   username: 'James Bond'
 * });
 * -> 'Hello James Bond'
 *
 * Values can be functions :
 * const user = { balance : 12 };
 * Nanostache('Your current balance is {{balance}}€', {
 *   balance: () => user.balance
 * });
 * -> 'Your current balance is 12€'
 *
 * Ternary conditions can be used :
 * Nanostache('Condition is {{test ? truthy : falsy}}', {
 *   test: 0
 * });
 * -> 'Condition is falsy'
 *
 * Or, with the help of functions :
 * Nanostache('{{name}} is {{age}} {{isAgePlural ? years : year}} old', {
 *    name: 'Brad Pitt',
 *    age: 55,
 *    // Note that v here is the current value object
 *    // So we can access dynamically to the age property
 *    isAgePlural: v => v.age > 1
 * });
 * -> 'Brad Pitt is 55 years old'
 *
 * Complex example mixing functions and ternaries :
 * const user = {
 *     name: 'James Bond',
 *     gender: 'male',
 *     balance: 15
 * }
 * Nanostache('Hello {{ isMale ? mr : mrs }} {{ getLastName }}. Your balance is {{ balance }}€.', {
 *   ...user,
 *   isMale: v => v.gender == 'male',
 *   getLastName: v => v.name.split(' ')[1]
 * });
 * -> 'Hello mr Bond. Your balance is 15€.'
 *
 * @param template Template to process with delimiters and values.
 * @param values One level deep value bag containing properties and values as scalar or functions
 */


function Nanostache(template, values) {
  return template.replace(delimitersRegex, (i, m) => matcher(m, values));
}
},{}],"node_modules/better-dom/dist/better-dom.js":[function(require,module,exports) {
/**
 * better-dom: Live extension playground
 * @version 4.1.0 Tue, 24 Mar 2020 09:55:50 GMT
 * @link https://github.com/chemerisuk/better-dom
 * @copyright 2020 Maksim Chemerisuk
 * @license MIT
 */
(function () {
  "use strict";

  var WINDOW = window;
  var DOCUMENT = document;
  var HTML = DOCUMENT.documentElement;
  var UNKNOWN_NODE = 0;
  var ELEMENT_NODE = DOCUMENT.ELEMENT_NODE;
  var DOCUMENT_NODE = DOCUMENT.DOCUMENT_NODE;
  var VENDOR_PREFIXES = ["Webkit", "O", "Moz", "ms"];
  var FAKE_ANIMATION_NAME = "v__40100__";
  var SHEET_PROP_NAME = "__40100__sheet";
  var WEBKIT_PREFIX = WINDOW.WebKitAnimationEvent ? "-webkit-" : "";
  var util$index$$arrayProto = Array.prototype;
  var util$index$$every = util$index$$arrayProto.every;
  var util$index$$each = util$index$$arrayProto.forEach;
  var util$index$$filter = util$index$$arrayProto.filter;
  var util$index$$map = util$index$$arrayProto.map;
  var util$index$$slice = util$index$$arrayProto.slice;
  var util$index$$isArray = Array.isArray;
  var util$index$$keys = Object.keys;
  var util$index$$raf = WINDOW.requestAnimationFrame;

  function util$index$$computeStyle(node) {
    return node.ownerDocument.defaultView.getComputedStyle(node);
  }

  function util$index$$injectElement(node) {
    if (node && node.nodeType === ELEMENT_NODE) {
      return node.ownerDocument.getElementsByTagName("head")[0].appendChild(node);
    }
  }

  function MethodError(methodName, args, type) {
    if (type === void 0) {
      type = "$Element";
    }

    var url = "http://chemerisuk.github.io/better-dom/" + type + ".html#" + methodName,
        line = "invalid call `" + type + (type === "DOM" ? "." : "#") + methodName + "(";
    line += util$index$$map.call(args, String).join(", ") + ")`. ";
    this.message = line + "Check " + url + " to verify the arguments";
  }

  MethodError.prototype = new TypeError();

  function StaticMethodError(methodName, args) {
    MethodError.call(this, methodName, args, "DOM");
  }

  StaticMethodError.prototype = new TypeError();

  function DocumentTypeError(methodName, args) {
    MethodError.call(this, methodName, args, "$Document");
  }

  DocumentTypeError.prototype = new TypeError();

  function $Node(node) {
    if (node) {
      this[0] = node; // use a generated property to store a reference
      // to the wrapper for circular object binding

      node["__40100__"] = this;
    }
  }

  $Node.prototype = {
    toString: function toString() {
      return "";
    },
    valueOf: function valueOf() {
      return UNKNOWN_NODE;
    } // undefined

  }; // fake animation for live extensions

  var STYLE_NODE_HTML = "@" + WEBKIT_PREFIX + "keyframes " + FAKE_ANIMATION_NAME + " {from {opacity:.99} to {opacity:1}}";

  function $Document(node) {
    if (this instanceof $Document) {
      // initialize state and all internal properties
      $Node.call(this, node); // add style element to append required css

      var styleNode = node.createElement("style");
      styleNode.innerHTML = STYLE_NODE_HTML;
      util$index$$injectElement(styleNode); // store sheet object internally to use in importStyles later

      node[SHEET_PROP_NAME] = styleNode.sheet || styleNode.styleSheet;
    } else if (node) {
      // create a new wrapper or return existing object
      return node["__40100__"] || new $Document(node);
    } else {
      return new $Document();
    }
  }

  var DocumentProto = new $Node();
  $Document.prototype = DocumentProto;

  DocumentProto.valueOf = function () {
    var node = this[0];
    return node ? DOCUMENT_NODE : UNKNOWN_NODE;
  };

  DocumentProto.toString = function () {
    return "#document";
  };

  function $Element(node) {
    if (this instanceof $Element) {
      $Node.call(this, node);
    } else if (node) {
      // create a new wrapper or return existing object
      return node["__40100__"] || new $Element(node);
    } else {
      return new $Element();
    }
  }

  var ElementProto = new $Node();
  $Element.prototype = ElementProto;

  ElementProto.valueOf = function () {
    var node = this[0];
    return node ? ELEMENT_NODE : UNKNOWN_NODE;
  };

  ElementProto.toString = function () {
    var node = this[0];
    return node ? "<" + node.tagName.toLowerCase() + ">" : "#unknown";
  };

  var index$$DOM = new $Document(WINDOW.document);
  var index$$_DOM = WINDOW.DOM;

  index$$DOM.constructor = function (node) {
    var nodeType = node && node.nodeType;

    if (nodeType === ELEMENT_NODE) {
      return $Element(node);
    } else if (nodeType === DOCUMENT_NODE) {
      return $Document(node);
    } else {
      return new $Node(node);
    }
  };

  index$$DOM.noConflict = function () {
    if (WINDOW.DOM === index$$DOM) {
      WINDOW.DOM = index$$_DOM;
    }

    return index$$DOM;
  };

  WINDOW.DOM = index$$DOM;
  var document$create$$reQuick = /^<([a-zA-Z-]+)\/?>$/;
  var document$create$$sandbox = DOCUMENT.createElement("body");

  function document$create$$makeMethod(all) {
    return function (value) {
      var node = this[0];

      if (!node || typeof value !== "string") {
        throw new MethodError("create" + all, arguments);
      }

      var result = all ? [] : null;
      var quickMatch = !result && document$create$$reQuick.exec(value);

      if (quickMatch) {
        return new $Element(node.createElement(quickMatch[1]));
      }

      document$create$$sandbox.innerHTML = value.trim(); // parse HTML string

      for (var it; it = document$create$$sandbox.firstElementChild;) {
        document$create$$sandbox.removeChild(it); // detach element from the sandbox

        if (node !== DOCUMENT) {
          // adopt node for external documents
          it = node.adoptNode(it);
        }

        if (result) {
          result.push(new $Element(it));
        } else {
          result = new $Element(it); // need only the first element

          break;
        }
      }

      return result || new $Element();
    };
  }

  $Document.prototype.create = document$create$$makeMethod("");
  $Document.prototype.createAll = document$create$$makeMethod("All"); // Helper for css selectors

  var util$selectormatcher$$rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\[([\w\-\=]+)\])?(?:\.([\w\-]+))?$/,
      util$selectormatcher$$propName = VENDOR_PREFIXES.concat(null).map(function (p) {
    return (p ? p.toLowerCase() + "M" : "m") + "atchesSelector";
  }).reduceRight(function (propName, p) {
    return propName || p in HTML && p;
  }, null);

  var util$selectormatcher$$default = function util$selectormatcher$$default(selector, context) {
    if (typeof selector !== "string") return null;
    var quick = util$selectormatcher$$rquickIs.exec(selector);

    if (quick) {
      // Quick matching is inspired by jQuery:
      //   0  1    2   3          4
      // [ _, tag, id, attribute, class ]
      if (quick[1]) quick[1] = quick[1].toLowerCase();
      if (quick[3]) quick[3] = quick[3].split("=");
      if (quick[4]) quick[4] = " " + quick[4] + " ";
    }

    return function (node) {
      var result, found;

      if (!quick && !util$selectormatcher$$propName) {
        found = (context || node.ownerDocument).querySelectorAll(selector);
      }

      for (; node && node.nodeType === 1; node = node.parentNode) {
        if (quick) {
          result = (!quick[1] || node.nodeName.toLowerCase() === quick[1]) && (!quick[2] || node.id === quick[2]) && (!quick[3] || (quick[3][1] ? node.getAttribute(quick[3][0]) === quick[3][1] : node.hasAttribute(quick[3][0]))) && (!quick[4] || (" " + node.className + " ").indexOf(quick[4]) >= 0);
        } else {
          if (util$selectormatcher$$propName) {
            result = node[util$selectormatcher$$propName](selector);
          } else {
            for (var i = 0, n = found.length; i < n; ++i) {
              var n = found[i];
              if (n === node) return n;
            }
          }
        }

        if (result || !context || node === context) break;
      }

      return result && node;
    };
  }; // Inspired by trick discovered by Daniel Buchner:
  // https://github.com/csuwldcat/SelectorListener


  var document$extend$$extensions = [];
  var document$extend$$EVENT_TYPE = WEBKIT_PREFIX ? "webkitAnimationStart" : "animationstart";
  var document$extend$$CSS_IMPORT_TEXT = [WEBKIT_PREFIX + "animation-name:" + FAKE_ANIMATION_NAME + " !important", WEBKIT_PREFIX + "animation-duration:1ms !important"].join(";");

  function document$extend$$applyLiveExtension(definition, node) {
    var el = $Element(node);
    var ctr = definition.constructor; // apply all element mixins

    Object.keys(definition).forEach(function (mixinName) {
      var mixinProperty = definition[mixinName];

      if (mixinProperty !== ctr) {
        el[mixinName] = mixinProperty;
      }
    });
    if (ctr) ctr.call(el);
  }

  $Document.prototype.extend = function (selector, definition) {
    var node = this[0];
    if (!node) return this;

    if (arguments.length === 1 && typeof selector === "object") {
      // handle case when $Document protytype is extended
      util$index$$keys(selector).forEach(function (key) {
        $Document.prototype[key] = selector[key];
      });
      return this;
    } else if (selector === "*") {
      // handle case when $Element protytype is extended
      util$index$$keys(definition).forEach(function (key) {
        $Element.prototype[key] = definition[key];
      });
      return this;
    }

    if (typeof definition === "function") {
      definition = {
        constructor: definition
      };
    }

    if (!definition || typeof definition !== "object") {
      throw new DocumentTypeError("extend", arguments);
    }

    var matcher = util$selectormatcher$$default(selector);
    document$extend$$extensions.push([matcher, definition]); // use capturing to suppress internal animationstart events

    node.addEventListener(document$extend$$EVENT_TYPE, function (e) {
      var node = e.target;

      if (e.animationName === FAKE_ANIMATION_NAME && matcher(node)) {
        e.stopPropagation(); // this is an internal event
        // prevent any future events

        node.style.setProperty(WEBKIT_PREFIX + "animation-name", "none", "important");
        document$extend$$applyLiveExtension(definition, node);
      }
    }, true); // initialize extension manually to make sure that all elements
    // have appropriate methods before they are used in other DOM.extend
    // also fix cases when a matched element already has another LE

    util$index$$each.call(node.querySelectorAll(selector), function (node) {
      // prevent any future events
      node.style.setProperty(WEBKIT_PREFIX + "animation-name", "none", "important"); // use timeout to invoke constructor safe and async

      WINDOW.setTimeout(function () {
        document$extend$$applyLiveExtension(definition, node);
      }, 0);
    }); // subscribe selector to a fake animation

    this.importStyles(selector, document$extend$$CSS_IMPORT_TEXT);
  };

  $Document.prototype.mock = function (content) {
    if (!content) return new $Element();

    var result = this.create(content),
        applyExtensions = function applyExtensions(node) {
      document$extend$$extensions.forEach(function (args) {
        var matcher = args[0];
        var definition = args[1];

        if (matcher(node)) {
          document$extend$$applyLiveExtension(definition, node);
        }
      });
      util$index$$each.call(node.children, applyExtensions);
    };

    if (document$extend$$extensions.length) {
      applyExtensions(result[0]);
    }

    return result;
  };

  $Document.prototype.importScripts = function () {
    var _this = this,
        _arguments = arguments;

    for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
      urls[_key] = arguments[_key];
    }

    var callback = function callback() {
      var node = _this[0];
      if (!node) return;
      var arg = urls.shift(),
          argType = typeof arg,
          script;

      if (argType === "string") {
        script = node.createElement("script");
        script.src = arg;
        script.onload = callback;
        script.async = true;
        util$index$$injectElement(script);
      } else if (argType === "function") {
        arg();
      } else if (arg) {
        throw new DocumentTypeError("importScripts", _arguments);
      }
    };

    callback();
  };

  $Document.prototype.importStyles = function (selector, cssText) {
    var node = this[0];
    if (!node) return;

    if (!cssText && typeof selector === "string") {
      cssText = selector;
      selector = "@media screen";
    }

    if (typeof selector !== "string" || typeof cssText !== "string") {
      throw new DocumentTypeError("importStyles", arguments);
    }

    var styleSheet = node[SHEET_PROP_NAME];
    var lastIndex = styleSheet.cssRules.length; // insert rules one by one:
    // failed selector does not break others

    selector.split(",").forEach(function (selector) {
      try {
        lastIndex = styleSheet.insertRule(selector + "{" + cssText + "}", lastIndex);
      } catch (err) {// silently ignore invalid rules
      }
    });
  };

  function element$children$$makeMethod(methodName, validSelectorType) {
    return function (selector) {
      if (selector && typeof selector !== validSelectorType) {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];
      var matcher = util$selectormatcher$$default(selector);
      var children = node ? node.children : [];

      if (typeof selector === "number") {
        if (selector < 0) {
          selector = children.length + selector;
        }

        return $Element(children[selector]);
      } else {
        if (matcher) {
          return util$index$$filter.call(children, matcher).map($Element);
        } else {
          return util$index$$map.call(children, $Element);
        }
      }
    };
  }

  $Element.prototype.child = element$children$$makeMethod("child", "number");
  $Element.prototype.children = element$children$$makeMethod("children", "string");
  var element$classes$$REGEXP_SPACE = /[\n\t\r]/g;

  var element$classes$$normalizedClass = function element$classes$$normalizedClass(node) {
    return (" " + node.className + " ").replace(element$classes$$REGEXP_SPACE, " ");
  };

  $Element.prototype.hasClass = function (className) {
    if (typeof className !== "string") {
      throw new MethodError("hasClass", arguments);
    }

    var node = this[0];
    if (!node) return false;

    if (node.classList) {
      return node.classList.contains(className);
    } else {
      return element$classes$$normalizedClass(node).indexOf(" " + className + " ") >= 0;
    }
  };

  $Element.prototype.addClass = function () {
    var _this2 = this,
        _arguments2 = arguments;

    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    var node = this[0];

    if (node) {
      classNames.forEach(function (className) {
        if (typeof className !== "string") {
          throw new MethodError("addClass", _arguments2);
        }

        if (node.classList) {
          node.classList.add(className);
        } else if (!_this2.hasClass(className)) {
          _this2[0].className += " " + className;
        }
      });
    }

    return this;
  };

  $Element.prototype.removeClass = function () {
    var _arguments3 = arguments;

    for (var _len3 = arguments.length, classNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classNames[_key3] = arguments[_key3];
    }

    var node = this[0];

    if (node) {
      classNames.forEach(function (className) {
        if (typeof className !== "string") {
          throw new MethodError("removeClass", _arguments3);
        }

        if (node.classList) {
          node.classList.remove(className);
        } else {
          node.className = element$classes$$normalizedClass(node).replace(" " + className + " ", " ").trim();
        }
      });
    }

    return this;
  };

  $Element.prototype.toggleClass = function (className, force) {
    if (typeof className !== "string") {
      throw new MethodError("toggleClass", arguments);
    }

    if (typeof force !== "boolean") {
      force = !this.hasClass(className);
    }

    var node = this[0];

    if (node) {
      if (force) {
        this.addClass(className);
      } else {
        this.removeClass(className);
      }
    }

    return force;
  }; // Helper for CSS properties access


  var util$stylehooks$$reDash = /\-./g,
      util$stylehooks$$hooks = {
    get: {},
    set: {},
    find: function find(name, style) {
      var propName = name.replace(util$stylehooks$$reDash, function (str) {
        return str[1].toUpperCase();
      });

      if (!(propName in style)) {
        propName = VENDOR_PREFIXES.map(function (prefix) {
          return prefix + propName[0].toUpperCase() + propName.slice(1);
        }).filter(function (prop) {
          return prop in style;
        })[0];
      }

      return this.get[name] = this.set[name] = propName;
    }
  },
      util$stylehooks$$directions = ["Top", "Right", "Bottom", "Left"],
      util$stylehooks$$shortCuts = {
    font: ["fontStyle", "fontSize", "/", "lineHeight", "fontFamily"],
    padding: util$stylehooks$$directions.map(function (dir) {
      return "padding" + dir;
    }),
    margin: util$stylehooks$$directions.map(function (dir) {
      return "margin" + dir;
    }),
    "border-width": util$stylehooks$$directions.map(function (dir) {
      return "border" + dir + "Width";
    }),
    "border-style": util$stylehooks$$directions.map(function (dir) {
      return "border" + dir + "Style";
    })
  }; // normalize float css property

  util$stylehooks$$hooks.get.float = util$stylehooks$$hooks.set.float = "cssFloat"; // Exclude the following css properties from adding suffix 'px'

  "fill-opacity font-weight line-height opacity orphans widows z-index zoom".split(" ").forEach(function (propName) {
    var stylePropName = propName.replace(util$stylehooks$$reDash, function (str) {
      return str[1].toUpperCase();
    });
    util$stylehooks$$hooks.get[propName] = stylePropName;

    util$stylehooks$$hooks.set[propName] = function (value, style) {
      style[stylePropName] = value.toString();
    };
  }); // normalize property shortcuts

  util$index$$keys(util$stylehooks$$shortCuts).forEach(function (key) {
    var props = util$stylehooks$$shortCuts[key];

    util$stylehooks$$hooks.get[key] = function (style) {
      var result = [],
          hasEmptyStyleValue = function hasEmptyStyleValue(prop, index) {
        result.push(prop === "/" ? prop : style[prop]);
        return !result[index];
      };

      return props.some(hasEmptyStyleValue) ? "" : result.join(" ");
    };

    util$stylehooks$$hooks.set[key] = function (value, style) {
      if (value && "cssText" in style) {
        // normalize setting a complex property across browsers
        style.cssText += ";" + key + ":" + value;
      } else {
        props.forEach(function (name) {
          return style[name] = typeof value === "number" ? value + "px" : value.toString();
        });
      }
    };
  });
  var util$stylehooks$$default = util$stylehooks$$hooks;

  $Element.prototype.css = function (name, value) {
    var _this3 = this;

    var len = arguments.length;
    var node = this[0];

    if (!node) {
      if (len === 1 && util$index$$isArray(name)) {
        return {};
      }

      if (len !== 1 || typeof name !== "string") {
        return this;
      }

      return;
    }

    var style = node.style;
    var computed;

    if (len === 1 && (typeof name === "string" || util$index$$isArray(name))) {
      var strategy = function strategy(name) {
        var getter = util$stylehooks$$default.get[name] || util$stylehooks$$default.find(name, style),
            value = typeof getter === "function" ? getter(style) : style[getter];

        if (!value) {
          if (!computed) computed = util$index$$computeStyle(node);
          value = typeof getter === "function" ? getter(computed) : computed[getter];
        }

        return value;
      };

      if (typeof name === "string") {
        return strategy(name);
      } else {
        return name.map(strategy).reduce(function (memo, value, index) {
          memo[name[index]] = value;
          return memo;
        }, {});
      }
    }

    if (len === 2 && typeof name === "string") {
      var setter = util$stylehooks$$default.set[name] || util$stylehooks$$default.find(name, style);

      if (typeof value === "function") {
        value = value(this);
      }

      if (value == null) value = "";

      if (typeof setter === "function") {
        setter(value, style);
      } else {
        style[setter] = typeof value === "number" ? value + "px" : value.toString();
      }
    } else if (len === 1 && name && typeof name === "object") {
      util$index$$keys(name).forEach(function (key) {
        _this3.css(key, name[key]);
      });
    } else {
      throw new MethodError("css", arguments);
    }

    return this;
  };

  function element$manipulation$$makeMethod(fastStrategy, requiresParent, strategy) {
    return function () {
      var _this4 = this;

      var node = this[0];
      if (!node || requiresParent && !node.parentNode) return this; // the idea of the algorithm is to construct HTML string
      // when possible or use document fragment as a fallback to
      // invoke manipulation using a single method call

      var fragment = fastStrategy ? "" : node.ownerDocument.createDocumentFragment();

      for (var _len4 = arguments.length, contents = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        contents[_key4] = arguments[_key4];
      }

      contents.forEach(function (content) {
        if (typeof content === "function") {
          content = content(_this4);
        }

        if (typeof content === "string") {
          if (typeof fragment === "string") {
            fragment += content.trim();
          } else {
            content = $Document(node.ownerDocument).createAll(content);
          }
        } else if (content instanceof $Element) {
          content = [content];
        }

        if (util$index$$isArray(content)) {
          if (typeof fragment === "string") {
            // append existing string to fragment
            content = $Document(node.ownerDocument).createAll(fragment).concat(content); // fallback to document fragment strategy

            fragment = node.ownerDocument.createDocumentFragment();
          }

          content.forEach(function (el) {
            fragment.appendChild(el[0]);
          });
        }
      });

      if (typeof fragment === "string") {
        node.insertAdjacentHTML(fastStrategy, fragment);
      } else {
        strategy(node, fragment);
      }

      return this;
    };
  }

  $Element.prototype.after = element$manipulation$$makeMethod("afterend", true, function (node, relatedNode) {
    node.parentNode.insertBefore(relatedNode, node.nextSibling);
  });
  $Element.prototype.before = element$manipulation$$makeMethod("beforebegin", true, function (node, relatedNode) {
    node.parentNode.insertBefore(relatedNode, node);
  });
  $Element.prototype.prepend = element$manipulation$$makeMethod("afterbegin", false, function (node, relatedNode) {
    node.insertBefore(relatedNode, node.firstChild);
  });
  $Element.prototype.append = element$manipulation$$makeMethod("beforeend", false, function (node, relatedNode) {
    node.appendChild(relatedNode);
  });
  $Element.prototype.replace = element$manipulation$$makeMethod("", true, function (node, relatedNode) {
    node.parentNode.replaceChild(relatedNode, node);
  });
  $Element.prototype.remove = element$manipulation$$makeMethod("", true, function (node) {
    node.parentNode.removeChild(node);
  });
  var util$selectorhooks$$default = {
    ":focus": function focus(node) {
      return node === node.ownerDocument.activeElement;
    } // ":visible": (node) => !isHidden(node),
    // ":hidden": isHidden

  };

  $Element.prototype.matches = function (selector) {
    if (!selector || typeof selector !== "string") {
      throw new MethodError("matches", arguments);
    }

    var checker = util$selectorhooks$$default[selector] || util$selectormatcher$$default(selector);
    return !!checker(this[0]);
  };

  $Element.prototype.offset = function () {
    var node = this[0];
    var result = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    };

    if (node) {
      var docEl = (node.ownerDocument || node).documentElement;
      var clientTop = docEl.clientTop;
      var clientLeft = docEl.clientLeft;
      var scrollTop = WINDOW.pageYOffset || docEl.scrollTop;
      var scrollLeft = WINDOW.pageXOffset || docEl.scrollLeft;
      var boundingRect = node.getBoundingClientRect();
      result.top = boundingRect.top + scrollTop - clientTop;
      result.left = boundingRect.left + scrollLeft - clientLeft;
      result.right = boundingRect.right + scrollLeft - clientLeft;
      result.bottom = boundingRect.bottom + scrollTop - clientTop;
      result.width = boundingRect.right - boundingRect.left;
      result.height = boundingRect.bottom - boundingRect.top;
    }

    return result;
  };

  function element$traversing$$makeMethod(methodName, propertyName, all) {
    return function (selector) {
      if (selector && typeof selector !== "string") {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];
      var result = all ? [] : null;

      if (node) {
        var matcher = util$selectormatcher$$default(selector); // method closest starts traversing from the element itself
        // except no selector was specified where it returns parent

        if (node && (!matcher || methodName !== "closest")) {
          node = node[propertyName];
        }

        for (var it = node; it; it = it[propertyName]) {
          if (!matcher || matcher(it)) {
            if (result) {
              result.push($Element(it));
            } else {
              result = $Element(it); // need only the first element

              break;
            }
          }
        }
      }

      return result || new $Element();
    };
  }

  $Element.prototype.next = element$traversing$$makeMethod("next", "nextElementSibling");
  $Element.prototype.prev = element$traversing$$makeMethod("prev", "previousElementSibling");
  $Element.prototype.nextAll = element$traversing$$makeMethod("nextAll", "nextElementSibling", true);
  $Element.prototype.prevAll = element$traversing$$makeMethod("prevAll", "previousElementSibling", true);
  $Element.prototype.closest = element$traversing$$makeMethod("closest", "parentNode");

  $Element.prototype.value = function (content) {
    var node = this[0];
    if (!node) return content ? this : void 0;
    var tagName = node.tagName;

    if (content === void 0) {
      if (tagName === "SELECT") {
        return ~node.selectedIndex ? node.options[node.selectedIndex].value : "";
      } else if (tagName === "OPTION") {
        return node.hasAttribute("value") ? node.value : node.text;
      } else if (tagName === "INPUT" || tagName === "TEXTAREA") {
        return node.value;
      } else {
        return node.textContent;
      }
    } else {
      switch (tagName) {
        case "INPUT":
        case "OPTION":
        case "TEXTAREA":
          if (typeof content === "function") {
            content = content(node.value);
          }

          node.value = content;
          break;

        case "SELECT":
          if (typeof content === "function") {
            content = content(node.value);
          }

          if (util$index$$every.call(node.options, function (o) {
            return !(o.selected = o.value === content);
          })) {
            node.selectedIndex = -1;
          }

          break;

        default:
          if (typeof content === "function") {
            content = content(node.textContent);
          }

          node.textContent = content;
      }

      return this;
    }
  };

  $Element.prototype.empty = function () {
    return this.value("");
  };

  var util$animationhandler$$TRANSITION_EVENT_TYPE = WEBKIT_PREFIX ? "webkitTransitionEnd" : "transitionend";
  var util$animationhandler$$ANIMATION_EVENT_TYPE = WEBKIT_PREFIX ? "webkitAnimationEnd" : "animationend";

  function util$animationhandler$$AnimationHandler(node, animationName) {
    this.node = node;
    this.style = node.style;
    this.eventType = animationName ? util$animationhandler$$ANIMATION_EVENT_TYPE : util$animationhandler$$TRANSITION_EVENT_TYPE;
    this.animationName = animationName;
  }

  util$animationhandler$$AnimationHandler.prototype = {
    handleEvent: function handleEvent(e) {
      if (!this.animationName || e.animationName === this.animationName) {
        if (this.animationName) {
          this.style.animationName = "";
          this.style.animationDirection = "";
        }

        this.node.removeEventListener(this.eventType, this, true);

        if (typeof this.callback === "function") {
          this.callback();
        }
      }
    },
    start: function start(callback, animationDirection) {
      this.callback = callback;

      if (this.animationName) {
        this.style.animationName = this.animationName;
        this.style.animationDirection = animationDirection;
      }

      this.node.addEventListener(this.eventType, this, true);
    }
  };
  var util$animationhandler$$default = util$animationhandler$$AnimationHandler;

  function element$visibility$$makeMethod(methodName, condition) {
    return function (animationName, callback) {
      var _this5 = this;

      if (typeof animationName !== "string") {
        callback = animationName;
        animationName = null;
      }

      if (callback && typeof callback !== "function") {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];
      if (!node) return this;
      var computed = util$index$$computeStyle(node); // Determine of we need animation by checking if an element
      // has non-zero width. Triggers reflow but fixes animation
      // for new elements inserted into the DOM in some browsers

      if (node && computed.width) {
        var complete = function complete() {
          node.style.visibility = condition ? "hidden" : "inherit";

          if (typeof callback === "function") {
            callback(_this5);
          }
        };

        if (!node.ownerDocument.documentElement.contains(node)) {
          util$index$$raf(complete); // skip animating of detached elements
        } else if (!animationName && parseFloat(computed["transition-duration"]) === 0) {
          util$index$$raf(complete); // skip animating with zero transition duration
        } else if (animationName && parseFloat(computed["animation-duration"]) === 0) {
          util$index$$raf(complete); // skip animating with zero animation duration
        } else {
          // always make an element visible before animation start
          node.style.visibility = "visible";
          new util$animationhandler$$default(node, animationName).start(complete, condition ? "normal" : "reverse");
        }
      } // trigger CSS3 transition if it exists


      return this.set("aria-hidden", String(condition));
    };
  }

  $Element.prototype.show = element$visibility$$makeMethod("show", false);
  $Element.prototype.hide = element$visibility$$makeMethod("hide", true);

  $Node.prototype.clone = function (deepCopy) {
    if (typeof deepCopy !== "boolean") {
      throw new MethodError("clone", arguments);
    }

    var node = this[0];

    if (node) {
      var clonedNode = node.cloneNode(deepCopy);

      if (this instanceof $Element) {
        return new $Element(clonedNode);
      } else if (this instanceof $Document) {
        return new $Document(clonedNode);
      }
    }

    return new $Node();
  };

  $Node.prototype.contains = function (element) {
    var node = this[0];
    if (!node) return false;

    if (element instanceof $Element) {
      var otherNode = element[0];
      if (otherNode === node) return true;

      if (node.contains) {
        return node.contains(otherNode);
      } else {
        return node.compareDocumentPosition(otherNode) & 16;
      }
    }

    throw new MethodError("contains", arguments);
  }; // big part of code inspired by Sizzle:
  // https://github.com/jquery/sizzle/blob/master/sizzle.js


  var node$find$$REGEXP_QUICK = /^(?:(\w+)|\.([\w\-]+))$/;
  var node$find$$REGEXP_ESCAPE = /'|\\/g;

  function node$find$$makeMethod(methodName, all) {
    return function (selector) {
      if (typeof selector !== "string") {
        throw new MethodError(methodName, arguments);
      }

      var node = this[0];
      if (!node) return all ? [] : new $Node();
      var result;

      if (this instanceof $Document || this instanceof $Element) {
        var quickMatch = node$find$$REGEXP_QUICK.exec(selector);

        if (quickMatch) {
          if (quickMatch[1]) {
            // speed-up: "TAG"
            result = node.getElementsByTagName(selector);
          } else {
            // speed-up: ".CLASS"
            result = node.getElementsByClassName(quickMatch[2]);
          }

          if (result && !all) result = result[0];
        } else if (this instanceof $Element) {
          var id = node.getAttribute("id"); // qSA works strangely on Element-rooted queries
          // We can work around this by specifying an extra ID on the root
          // and working up from there (Thanks to Andrew Dupont for the technique)

          var prefix;

          if (id) {
            prefix = id.replace(node$find$$REGEXP_ESCAPE, "\\$&");
          } else {
            prefix = "___40100__"; // set fake id attribute value

            node.setAttribute("id", prefix);
          }

          prefix = "[id='" + prefix + "'] ";
          selector = prefix + selector.split(",").join("," + prefix);
          result = node["querySelector" + all](selector); // cleanup fake id attribute value

          if (!id) node.removeAttribute("id");
        } else {
          result = node["querySelector" + all](selector);
        }
      } else {
        result = node["querySelector" + all](selector);
      }

      return all ? util$index$$map.call(result, $Element) : $Element(result);
    };
  }

  $Node.prototype.find = node$find$$makeMethod("find", "");
  $Node.prototype.findAll = node$find$$makeMethod("findAll", "All");
  var util$eventhooks$$hooks = {};

  if ("onfocusin" in HTML) {
    util$eventhooks$$hooks.focus = function (handler) {
      handler._type = "focusin";
    };

    util$eventhooks$$hooks.blur = function (handler) {
      handler._type = "focusout";
    };
  } else {
    // firefox doesn't support focusin/focusout events
    util$eventhooks$$hooks.focus = util$eventhooks$$hooks.blur = function (handler) {
      handler.options.capture = true;
    };
  }

  if (DOCUMENT.createElement("input").validity) {
    util$eventhooks$$hooks.invalid = function (handler) {
      handler.options.capture = true;
    };
  }

  var util$eventhooks$$default = util$eventhooks$$hooks; // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection

  var util$eventhandler$$supportsPassive = false;

  try {
    var util$eventhandler$$opts = Object.defineProperty({}, "passive", {
      get: function get() {
        util$eventhandler$$supportsPassive = true;
      }
    });
    WINDOW.addEventListener("test", null, util$eventhandler$$opts);
  } catch (e) {}

  function util$eventhandler$$EventHandler(context, node, options, args) {
    this.context = context;
    this.node = node;
    this.options = options;
    this.args = args;

    if (options.selector) {
      this.matcher = util$selectormatcher$$default(options.selector, node);
    }
  }

  util$eventhandler$$EventHandler.prototype = {
    handleEvent: function handleEvent(e) {
      this.event = e; // update value of currentTarget if selector exists

      this.currentTarget = this.matcher ? this.matcher(e.target) : this.node; // early stop when target doesn't match selector

      if (this.currentTarget) {
        if (this.options.once === true) {
          this.unsubscribe();
        }

        var args = this.args.map(this.getEventProperty, this); // prevent default if handler returns false

        if (this.callback.apply(this.context, args) === false) {
          e.preventDefault();
        }
      }
    },
    getEventProperty: function getEventProperty(name) {
      var _arguments4 = arguments;
      var e = this.event;

      if (name === "type") {
        return this.type;
      } else if (name === "target" || name === "relatedTarget") {
        return $Element(e[name]);
      } else if (name === "currentTarget") {
        return $Element(this.currentTarget);
      }

      var value = e[name];

      if (typeof value === "function") {
        return function () {
          return value.apply(e, _arguments4);
        };
      } else {
        return value;
      }
    },
    subscribe: function subscribe(type, callback) {
      var hook = util$eventhooks$$default[type];
      this.type = type;
      this.callback = callback;
      if (hook) hook(this);
      this.node.addEventListener(this._type || this.type, this, this.getLastArgument());
    },
    unsubscribe: function unsubscribe() {
      this.node.removeEventListener(this._type || this.type, this, this.getLastArgument());
    },
    getLastArgument: function getLastArgument() {
      var lastArg = !!this.options.capture;

      if (this.options.passive && util$eventhandler$$supportsPassive) {
        lastArg = {
          passive: true,
          capture: lastArg
        };
      }

      return lastArg;
    }
  };
  var util$eventhandler$$default = util$eventhandler$$EventHandler;

  $Node.prototype.fire = function (type, detail) {
    var node = this[0];
    var e, eventType, canContinue;

    if (typeof type === "string") {
      var hook = util$eventhooks$$default[type],
          handler = {
        options: {}
      };
      if (hook) handler = hook(handler) || handler;
      eventType = handler._type || type;
    } else {
      throw new MethodError("fire", arguments);
    }

    if (!node) return true;
    e = (node.ownerDocument || node).createEvent("CustomEvent");
    e.initCustomEvent(eventType, true, true, detail);
    canContinue = node.dispatchEvent(e); // call native function to trigger default behavior

    if (canContinue && node[type]) {
      var _handleEvent = util$eventhandler$$default.prototype.handleEvent; // intercept handleEvent to prevent double event callbacks

      util$eventhandler$$default.prototype.handleEvent = function (e) {
        // prevent re-triggering of the current event
        if (this.type !== type) {
          return _handleEvent.call(this, e);
        }
      };

      node[type](); // restore original method

      util$eventhandler$$default.prototype.handleEvent = _handleEvent;
    }

    return canContinue;
  };

  var util$accessorhooks$$hooks = {
    get: {},
    set: {}
  }; // fix camel cased attributes

  "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" ").forEach(function (key) {
    util$accessorhooks$$hooks.get[key.toLowerCase()] = function (node) {
      return node[key];
    };
  }); // style hook

  util$accessorhooks$$hooks.get.style = function (node) {
    return node.style.cssText;
  };

  util$accessorhooks$$hooks.set.style = function (node, value) {
    node.style.cssText = value;
  }; // some browsers don't recognize input[type=email] etc.


  util$accessorhooks$$hooks.get.type = function (node) {
    return node.getAttribute("type") || node.type;
  };

  var util$accessorhooks$$default = util$accessorhooks$$hooks;

  $Node.prototype.get = function (name, defaultValue) {
    var _this6 = this;

    var node = this[0];
    var hook = util$accessorhooks$$default.get[name];
    var value;
    if (!node) return value;

    if (arguments.length === 0) {
      return node.innerHTML;
    }

    if (hook) {
      value = hook(node, name);
    } else if (typeof name === "string") {
      if (name in node) {
        value = node[name];
      } else if (this instanceof $Element) {
        value = node.getAttribute(name);
      } else {
        value = null;
      }
    } else if (util$index$$isArray(name)) {
      value = name.reduce(function (memo, key) {
        return memo[key] = _this6.get(key), memo;
      }, {});
    } else {
      throw new MethodError("get", arguments);
    }

    return value != null ? value : defaultValue;
  };

  $Node.prototype.on = function (type, options, args, callback) {
    if (typeof type === "string") {
      if (typeof options === "string") {
        options = {
          selector: options
        };
      } else if (typeof options === "function") {
        callback = options;
        options = {};
        args = [];
      } else if (typeof options === "object") {
        if (util$index$$isArray(options)) {
          callback = args;
          args = options;
          options = {};
        }
      }

      if (typeof args === "function") {
        callback = args;
        args = [];
      }

      if (options && typeof options === "object" && typeof callback === "function") {
        var node = this[0];
        if (!node) return function () {};
        var handler = new util$eventhandler$$default(this, node, options, args);
        handler.subscribe(type, callback);
        return function () {
          return handler.unsubscribe();
        };
      }
    }

    throw new MethodError("on", arguments);
  };

  $Node.prototype.set = function (name, value) {
    var _this7 = this;

    var node = this[0];
    var len = arguments.length;
    var hook = util$accessorhooks$$default.set[name];

    if (node) {
      if (typeof name === "string") {
        if (len === 1) {
          // innerHTML shortcut
          value = name;
          name = "innerHTML";
        }

        if (typeof value === "function") {
          value = value(this.get(name));
        }

        if (hook) {
          hook(node, value);
        } else if (value == null && this instanceof $Element) {
          node.removeAttribute(name);
        } else if (name in node) {
          node[name] = value;
        } else if (this instanceof $Element) {
          node.setAttribute(name, value);
        }
      } else if (util$index$$isArray(name)) {
        if (len === 1) {
          node.textContent = ""; // clear node children

          this.append.apply(this, name);
        } else {
          name.forEach(function (key) {
            _this7.set(key, value);
          });
        }
      } else if (typeof name === "object") {
        util$index$$keys(name).forEach(function (key) {
          _this7.set(key, name[key]);
        });
      } else {
        throw new MethodError("set", arguments);
      }
    }

    return this;
  };
})();
},{}],"node_modules/better-dateinput-polyfill/dist/better-dateinput-polyfill.js":[function(require,module,exports) {
/**
 * better-dateinput-polyfill: input[type=date] polyfill for better-dom
 * @version 3.3.1 Thu, 03 Sep 2020 09:59:12 GMT
 * @link https://github.com/chemerisuk/better-dateinput-polyfill
 * @copyright 2020 Maksim Chemerisuk
 * @license MIT
 */
(function () {
  "use strict";

  /* globals html:false */
  var MAIN_CSS = "dateinput-picker{display:inline-block;vertical-align:bottom;overflow:hidden;position:absolute;z-index:1000;width:336px;height:320px;max-height:320px;box-shadow:0 8px 24px #888;background:#fff;opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transform-origin:0 0;transform-origin:0 0;transition:.1s ease-out}dateinput-picker[aria-hidden=true]{opacity:0;-webkit-transform:skew(-25deg) scaleX(.75);transform:skew(-25deg) scaleX(.75);visibility:hidden;height:0}dateinput-picker[aria-expanded=true]{height:220px;max-height:220px}dateinput-picker+input{color:transparent!important;caret-color:transparent!important}dateinput-picker+input::selection{color:rgba(0,0,0,.01);background:none}dateinput-picker+input::-moz-selection{background:none}";
  var HTML = DOM.find("html");
  var DEFAULT_LANGUAGE = HTML.get("lang") || void 0;
  var DEVICE_TYPE = "orientation" in window ? "mobile" : "desktop";

  var TYPE_SUPPORTED = function () {
    // use a stronger type support detection that handles old WebKit browsers:
    // http://www.quirksmode.org/blog/archives/2015/03/better_modern_i.html
    return DOM.create("<input type='date'>").value("_").value() !== "_";
  }();

  function formatLocalDate(date) {
    return [date.getFullYear(), ("0" + (date.getMonth() + 1)).slice(-2), ("0" + date.getDate()).slice(-2)].join("-");
  }

  function parseLocalDate(value) {
    var parts = (value || "?").split(/\D/).map(function (s) {
      return parseInt(s);
    });
    var dateValue = new Date(parts[0], parts[1] - 1, parts[2], 0, 0);
    return isNaN(dateValue.getTime()) ? null : dateValue;
  }

  var globalFormatters = DOM.findAll("meta[name^='data-format:']").reduce(function (globalFormatters, meta) {
    var key = meta.get("name").split(":")[1].trim();
    var formatOptions = JSON.parse(meta.get("content"));

    if (key) {
      try {
        globalFormatters[key] = new window.Intl.DateTimeFormat(DEFAULT_LANGUAGE, formatOptions);
      } catch (err) {}
    }

    return globalFormatters;
  }, {});
  DOM.extend("input[type=date]", {
    constructor: function constructor() {
      if (this._isPolyfillEnabled()) return false;
      var svgTextOptions = this.css(["color", "font-size", "font-family", "font-style", "line-height", "padding-left", "border-left-width", "text-indent"]);
      svgTextOptions.dx = ["padding-left", "border-left-width", "text-indent"].map(function (p) {
        return parseFloat(svgTextOptions[p]);
      }).reduce(function (a, b) {
        return a + b;
      });
      svgTextOptions.css = ["font-family", "font-style", "line-height", "font-size"].map(function (p) {
        return p + ":" + svgTextOptions[p];
      }).join(";").replace(/"/g, ""); // FIXME: fix issue in html helper and drop replace below

      this._backgroundTemplate = ("<svg xmlns=\"http://www.w3.org/2000/svg\"><text x=\"" + svgTextOptions.dx + "\" y=\"50%\" dy=\".35em\" fill=\"" + svgTextOptions.color + "\"></text></svg>").replace("></", " style=\"" + svgTextOptions.css + "\"></");
      var picker = DOM.create("<dateinput-picker tabindex='-1'>"); // store reference to the input

      picker._parentInput = this; // add <dateinput-picker> to the document

      this.before(picker.hide()); // store reference to the picker

      this._picker = picker;

      var resetDisplayedText = this._syncDisplayedText.bind(this, "defaultValue");

      var updateDisplayedText = this._syncDisplayedText.bind(this, "value"); // patch value property for the input element


      var valueDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
      Object.defineProperty(this[0], "value", {
        configurable: false,
        enumerable: true,
        get: valueDescriptor.get,
        set: this._setValue.bind(this, valueDescriptor.set, updateDisplayedText)
      });
      Object.defineProperty(this[0], "valueAsDate", {
        configurable: false,
        enumerable: true,
        get: this._getValueAsDate.bind(this),
        set: this._setValueAsDate.bind(this)
      }); // sync picker visibility on focus/blur

      this.on("change", updateDisplayedText);
      this.on("focus", this._focusInput.bind(this));
      this.on("blur", this._blurInput.bind(this));
      this.on("keydown", ["which"], this._keydownInput.bind(this));
      this.on("click", this._focusInput.bind(this)); // form events do not trigger any state change

      this.closest("form").on("reset", resetDisplayedText);
      resetDisplayedText(); // present initial value
    },
    _isPolyfillEnabled: function _isPolyfillEnabled() {
      var polyfillType = this.get("data-polyfill");
      if (polyfillType === "none") return true;

      if (polyfillType && (polyfillType === DEVICE_TYPE || polyfillType === "all")) {
        // remove native browser implementation
        this.set("type", "text"); // force applying the polyfill

        return false;
      }

      return TYPE_SUPPORTED;
    },
    _setValue: function _setValue(setter, updateDisplayedText, value) {
      var dateValue = parseLocalDate(value);

      if (!dateValue) {
        value = "";
      } else {
        var min = parseLocalDate(this.get("min"));
        var max = parseLocalDate(this.get("max"));

        if (min && dateValue < min) {
          value = formatLocalDate(min);
        } else if (max && dateValue > max) {
          value = formatLocalDate(max);
        }
      }

      setter.call(this[0], value);
      updateDisplayedText();
    },
    _getValueAsDate: function _getValueAsDate() {
      return parseLocalDate(this.value());
    },
    _setValueAsDate: function _setValueAsDate(dateValue) {
      if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
        this.value(formatLocalDate(dateValue));
      }
    },
    _syncDisplayedText: function _syncDisplayedText(propName) {
      var displayText = this.get(propName);
      var dateValue = parseLocalDate(displayText);

      if (dateValue) {
        var formatOptions = this.get("data-format");
        var formatter = globalFormatters[formatOptions];

        try {
          // set hours to '12' to fix Safari bug in Date#toLocaleString
          var presentedDate = new Date(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate(), 12);

          if (formatter) {
            displayText = formatter.format(presentedDate);
          } else {
            displayText = presentedDate.toLocaleDateString(DEFAULT_LANGUAGE, formatOptions ? JSON.parse(formatOptions) : {});
          }
        } catch (err) {}
      }

      this.css("background-image", "url('data:image/svg+xml," + encodeURIComponent(this._backgroundTemplate.replace("></", ">" + displayText + "</")) + "')");
    },
    _keydownInput: function _keydownInput(which) {
      if (which === 13 && this._picker.get("aria-hidden") === "true") {
        // ENTER key should submit form if calendar is hidden
        return true;
      }

      if (which === 32) {
        // SPACE key toggles calendar visibility
        if (!this.get("readonly")) {
          this._picker.toggleState(false);

          this._picker.invalidateState();

          if (this._picker.get("aria-hidden") === "true") {
            this._picker.show();
          } else {
            this._picker.hide();
          }
        }
      } else if (which === 27 || which === 9 || which === 13) {
        this._picker.hide(); // ESC, TAB or ENTER keys hide calendar

      } else if (which === 8 || which === 46) {
        this.empty().fire("change"); // BACKSPACE, DELETE clear value
      } else if (which === 17) {
        // CONTROL toggles calendar mode
        this._picker.toggleState();

        this._picker.invalidateState();
      } else {
        var delta;

        if (which === 74 || which === 40) {
          delta = 7;
        } else if (which === 75 || which === 38) {
          delta = -7;
        } else if (which === 76 || which === 39) {
          delta = 1;
        } else if (which === 72 || which === 37) {
          delta = -1;
        }

        if (delta) {
          var currentDate = this.get("valueAsDate") || new Date();
          var expanded = this._picker.get("aria-expanded") === "true";

          if (expanded && (which === 40 || which === 38)) {
            currentDate.setMonth(currentDate.getMonth() + (delta > 0 ? 4 : -4));
          } else if (expanded && (which === 37 || which === 39)) {
            currentDate.setMonth(currentDate.getMonth() + (delta > 0 ? 1 : -1));
          } else {
            currentDate.setDate(currentDate.getDate() + delta);
          }

          this.value(formatLocalDate(currentDate)).fire("change");
        }
      } // prevent default action except if it was TAB so
      // do not allow to change the value manually


      return which === 9;
    },
    _blurInput: function _blurInput() {
      this._picker.hide();
    },
    _focusInput: function _focusInput() {
      if (this.get("readonly")) return false;
      var offset = this.offset();

      var pickerOffset = this._picker.offset();

      var marginTop = offset.height; // #3: move calendar to the top when passing cross browser window bounds

      if (HTML.get("clientHeight") < offset.bottom + pickerOffset.height) {
        marginTop = -pickerOffset.height;
      } // always reset picker mode to the default


      this._picker.toggleState(false);

      this._picker.invalidateState(); // always recalculate picker top position


      this._picker.css("margin-top", marginTop).show();
    }
  });
  DOM.importStyles(MAIN_CSS);
})();
(function () {
  "use strict";

  /* globals html:false */
  var PICKER_CSS = "body{overflow:hidden}*{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:2.5rem;text-align:center;cursor:default;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:0}a{position:absolute;width:3rem;height:2.5rem}a[rel=prev]{left:0}a[rel=next]{right:0}b{display:block;cursor:pointer}table{width:100%;table-layout:fixed;border-spacing:0;border-collapse:collapse;text-align:center;line-height:2.5rem}table+table{position:absolute;top:2.5rem;left:0;opacity:1;transition:.1s ease-out;background:#fff}table+table td{line-height:3.75rem}table+table[aria-hidden=true]{visibility:hidden!important;opacity:0}td,th{padding:0}thead{background:#ddd;font-size:smaller;font-weight:700}[aria-selected=false],[aria-disabled=true]{color:#888}[aria-selected=true]{box-shadow:inset 0 0 0 1px #888}a:hover,td:hover,[aria-disabled=true],[aria-selected=true]{background-color:#f5f5f5}";
  var HTML = DOM.find("html");
  var DEFAULT_LANGUAGE = HTML.get("lang") || void 0;
  var CLICK_EVENT_TYPE = "orientation" in window ? "touchend" : "mousedown";
  var SHADOW_DOM_SUPPORTED = !!HTMLElement.prototype.attachShadow;

  var INTL_SUPPORTED = function () {
    try {
      new Date().toLocaleString("_");
    } catch (err) {
      return err instanceof RangeError;
    }

    return false;
  }();

  function repeat(times, fn) {
    if (typeof fn === "string") {
      return Array(times + 1).join(fn);
    } else {
      return Array.apply(null, Array(times)).map(fn).join("");
    }
  }

  function ampm(pos, neg) {
    return DEFAULT_LANGUAGE === "en-US" ? pos : neg;
  }

  function localeWeekday(index) {
    var date = new Date();
    date.setDate(date.getDate() - date.getDay() + index + ampm(0, 1));
    /* istanbul ignore else */

    if (INTL_SUPPORTED) {
      try {
        return date.toLocaleDateString(DEFAULT_LANGUAGE, {
          weekday: "short"
        });
      } catch (err) {}
    }

    return date.toUTCString().split(",")[0].slice(0, 2);
  }

  function localeMonth(index) {
    var date = new Date(25e8 * (index + 1));
    /* istanbul ignore else */

    if (INTL_SUPPORTED) {
      try {
        return date.toLocaleDateString(DEFAULT_LANGUAGE, {
          month: "short"
        });
      } catch (err) {}
    }

    return date.toUTCString().split(" ")[2];
  }

  function localeMonthYear(dateValue) {
    // set hours to '12' to fix Safari bug in Date#toLocaleString
    var date = new Date(dateValue.getFullYear(), dateValue.getMonth(), 12);
    /* istanbul ignore else */

    if (INTL_SUPPORTED) {
      try {
        return date.toLocaleDateString(DEFAULT_LANGUAGE, {
          month: "long",
          year: "numeric"
        });
      } catch (err) {}
    }

    return date.toUTCString().split(" ").slice(2, 4).join(" ");
  }

  var PICKER_BODY_HTML = "<a rel=\"prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"100%\" viewBox=\"0 0 16 16\"><path d=\"M11.5 14.06L1 8L11.5 1.94z\"/></svg></a><a rel=\"next\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"100%\" viewBox=\"0 0 16 16\"><path d=\"M15 8L4.5 14.06L4.5 1.94z\"/></svg></a><b></b><table><thead>" + repeat(7, function (_, i) {
    return "<th>" + localeWeekday(i);
  }) + "</thead><tbody>" + repeat(7, "<tr>" + repeat(7, "<td>") + "</tr>") + "</tbody></table><table><tbody>" + repeat(3, function (_, i) {
    return "<tr>" + repeat(4, function (_, j) {
      return "<td>" + localeMonth(i * 4 + j);
    });
  }) + "</tbody></table>";
  DOM.extend("dateinput-picker", {
    constructor: function constructor() {
      var _this = this;

      if (SHADOW_DOM_SUPPORTED) {
        var shadowRoot = this[0].attachShadow({
          mode: "closed"
        }); // use set timeout to make sure _parentInput is set

        setTimeout(function () {
          _this._initContent(DOM.constructor(shadowRoot));
        }, 0);
      } else {
        var IE = "ScriptEngineMajorVersion" in window;
        var object = DOM.create("<object type='text/html' width='100%' height='100%'>"); // non-IE: must be BEFORE the element added to the document

        if (!IE) {
          object.set("data", "about:blank");
        } // load content when <object> is ready


        this.on("load", {
          capture: true,
          once: true
        }, ["target"], function (object) {
          var pickerRoot = DOM.constructor(object.get("contentDocument"));

          _this._initContent(pickerRoot.find("body"));
        }); // add object element to the document

        this.append(object); // IE: must be AFTER the element added to the document

        if (IE) {
          object.set("data", "about:blank");
        }
      }
    },
    _initContent: function _initContent(pickerBody) {
      pickerBody.set("<style>" + PICKER_CSS + "</style>" + PICKER_BODY_HTML); // internal references

      this._calendarDays = pickerBody.find("table");
      this._calendarMonths = pickerBody.find("table+table");
      this._calendarCaption = pickerBody.find("b"); // picker invalidate handlers

      this._calendarDays.on("picker:invalidate", ["detail"], this._invalidateDays.bind(this));

      this._calendarMonths.on("picker:invalidate", ["detail"], this._invalidateMonths.bind(this));

      pickerBody.on("picker:invalidate", ["detail"], this._invalidateCaption.bind(this)); // picker click handlers

      pickerBody.on(CLICK_EVENT_TYPE, "a", ["currentTarget"], this._clickPickerButton.bind(this));
      pickerBody.on(CLICK_EVENT_TYPE, "td", ["target"], this._clickPickerDay.bind(this));

      this._calendarCaption.on(CLICK_EVENT_TYPE, this._clickCaption.bind(this)); // prevent input from loosing the focus outline


      pickerBody.on(CLICK_EVENT_TYPE, function () {
        return false;
      });

      this._parentInput.on("change", this.invalidateState.bind(this)); // display calendar for autofocused elements


      if (DOM.get("activeElement") === this._parentInput[0]) {
        this.show();
      }
    },
    _invalidateDays: function _invalidateDays(dateValue) {
      var month = dateValue.getMonth();
      var date = dateValue.getDate();
      var year = dateValue.getFullYear();
      var min = new Date((this._parentInput.get("min") || "?") + "T00:00");
      var max = new Date((this._parentInput.get("max") || "?") + "T00:00");
      var iterDate = new Date(year, month, 1); // move to beginning of the first week in current month

      iterDate.setDate(1 - iterDate.getDay() - ampm(1, iterDate.getDay() === 0 ? 7 : 0)); // update days picker

      this._calendarDays.findAll("td").forEach(function (day) {
        iterDate.setDate(iterDate.getDate() + 1);
        var mDiff = month - iterDate.getMonth(),
            selectedValue = null,
            disabledValue = null;
        if (year !== iterDate.getFullYear()) mDiff *= -1;

        if (iterDate < min || iterDate > max) {
          disabledValue = "true";
        } else if (mDiff > 0 || mDiff < 0) {
          selectedValue = "false";
        } else if (date === iterDate.getDate()) {
          selectedValue = "true";
        }

        day._ts = iterDate.getTime();
        day.set("aria-selected", selectedValue);
        day.set("aria-disabled", disabledValue);
        day.value(iterDate.getDate());
      });
    },
    _invalidateMonths: function _invalidateMonths(dateValue) {
      var month = dateValue.getMonth();
      var year = dateValue.getFullYear();
      var min = new Date((this._parentInput.get("min") || "?") + "T00:00");
      var max = new Date((this._parentInput.get("max") || "?") + "T00:00");
      var iterDate = new Date(year, month, 1);

      this._calendarMonths.findAll("td").forEach(function (day, index) {
        iterDate.setMonth(index);
        var mDiff = month - iterDate.getMonth(),
            selectedValue = null;

        if (iterDate < min || iterDate > max) {
          selectedValue = "false";
        } else if (!mDiff) {
          selectedValue = "true";
        }

        day._ts = iterDate.getTime();
        day.set("aria-selected", selectedValue);
      });
    },
    _invalidateCaption: function _invalidateCaption(dateValue) {
      var captionText = dateValue.getFullYear();

      if (this.get("aria-expanded") !== "true") {
        captionText = localeMonthYear(dateValue);
      } // update calendar caption


      this._calendarCaption.value(captionText);
    },
    _clickCaption: function _clickCaption() {
      this.toggleState();
      this.invalidateState();
    },
    _clickPickerButton: function _clickPickerButton(btn) {
      var sign = btn.get("rel") === "next" ? 1 : -1;
      var targetDate = this._parentInput.get("valueAsDate") || new Date();

      if (this.get("aria-expanded") === "true") {
        targetDate.setFullYear(targetDate.getFullYear() + sign);
      } else {
        targetDate.setMonth(targetDate.getMonth() + sign);
      }

      this._parentInput.set("valueAsDate", targetDate).fire("change");
    },
    _clickPickerDay: function _clickPickerDay(target) {
      var targetDate;

      if (this.get("aria-expanded") === "true") {
        if (isNaN(target._ts)) {
          targetDate = new Date();
        } else {
          targetDate = new Date(target._ts);
        } // switch to date calendar mode


        this.toggleState(false);
      } else {
        if (!isNaN(target._ts)) {
          targetDate = new Date(target._ts);
          this.hide();
        }
      }

      if (targetDate != null) {
        this._parentInput.set("valueAsDate", targetDate).fire("change");
      }
    },
    toggleState: function toggleState(expanded) {
      if (typeof expanded !== "boolean") {
        expanded = this.get("aria-expanded") !== "true";
      }

      this.set("aria-expanded", expanded);
    },
    invalidateState: function invalidateState() {
      var expanded = this.get("aria-expanded") === "true";
      var target = expanded ? this._calendarMonths : this._calendarDays;
      var dateValue = this._parentInput.get("valueAsDate") || new Date(); // refresh current picker

      target.fire("picker:invalidate", dateValue);

      if (expanded) {
        this._calendarMonths.show();
      } else {
        this._calendarMonths.hide();
      }
    }
  });
})();
},{}],"scripta-manent.js":[function(require,module,exports) {
"use strict";

require("regenerator-runtime/runtime");

var _diffMatchPatch = _interopRequireDefault(require("diff-match-patch"));

var _nanostache = require("@solid-js/nanostache");

require("better-dom/dist/better-dom");

require("better-dateinput-polyfill/dist/better-dateinput-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var requestHeaders = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};
var APIBaseURL = 'https://disinfo.quaidorsay.fr/api/open-terms-archive';
document.addEventListener("DOMContentLoaded", function () {
  var $form_explorer = document.getElementById('form_explorer');
  var $form_services = document.getElementById('form_services');
  var $form_typeofdocuments = document.getElementById('form_typeofdocuments');
  var $form_firstdocumentdate = document.getElementById('form_firstdocumentdate');
  var $form_seconddocumentdate = document.getElementById('form_seconddocumentdate');
  var $inputDates = document.querySelectorAll('input[type=date]');

  if (window.fetch) {
    init();
  } else {
    showNotification('error', notificationsMsgs.browserSupport);
  }

  function init() {
    return _init.apply(this, arguments);
  }

  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getServices().then(function (data) {
                //Init form control and listen form change
                setMaxInputDateToNow();
                initFormEventListener(); //Populate form with data

                populateServices(data);
                populateTypeOfDocuments(); //If no query string asked in URL
                //Select default service and documents

                var queryStringData = getQueryStringData();

                if (Object.keys(queryStringData).length === 0) {
                  addInURL('service', $form_services.selectedOptions.item(0).value);
                  addInURL('typeofdocument', $form_typeofdocuments.selectedOptions.item(0).value);
                } //Update form with current state


                window.addEventListener("popstate", popStateHandler);
                popStateHandler();
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }

  function async_fetch(_x) {
    return _async_fetch.apply(this, arguments);
  }

  function _async_fetch() {
    _async_fetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
      var response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(url);

            case 2:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", response.json());

            case 5:
              throw new Error(response.status);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _async_fetch.apply(this, arguments);
  }

  function getServices() {
    return _getServices.apply(this, arguments);
  }

  function _getServices() {
    _getServices = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var request;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              request = new Request(APIBaseURL + '/list_services/v1/?multiple_versions_only=true', requestHeaders);
              return _context3.abrupt("return", async_fetch(request));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getServices.apply(this, arguments);
  }

  function loadDocs() {
    return _loadDocs.apply(this, arguments);
  }

  function _loadDocs() {
    _loadDocs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var formData, doc1, doc2;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              formData = getFormData();
              _context4.next = 3;
              return getDoc(formData.service, formData.type, formData.firstDocumentDate);

            case 3:
              doc1 = _context4.sent;
              _context4.next = 6;
              return getDoc(formData.service, formData.type, formData.secondDocumentDate);

            case 6:
              doc2 = _context4.sent;
              return _context4.abrupt("return", Array(doc1, doc2));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _loadDocs.apply(this, arguments);
  }

  function getDoc(_x2, _x3, _x4) {
    return _getDoc.apply(this, arguments);
  }

  function _getDoc() {
    _getDoc = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(service, type, date) {
      var route, request, response, data;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              route = encodeURI(APIBaseURL + '/get_version_at_date/v1/' + service + '/' + type + '/' + date);
              request = new Request(route, requestHeaders);
              _context5.next = 4;
              return fetch(request);

            case 4:
              response = _context5.sent;

              if (!response.ok) {
                _context5.next = 20;
                break;
              }

              _context5.next = 8;
              return response.json();

            case 8:
              data = _context5.sent;

              if (!data.error) {
                _context5.next = 11;
                break;
              }

              throw new Error(data.error);

            case 11:
              if (!(data.data == '')) {
                _context5.next = 17;
                break;
              }

              _context5.next = 14;
              return getDoc(service, type, data.next_version.substr(0, 10));

            case 14:
              return _context5.abrupt("return", _context5.sent);

            case 17:
              return _context5.abrupt("return", data);

            case 18:
              _context5.next = 21;
              break;

            case 20:
              throw new Error(response.status);

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _getDoc.apply(this, arguments);
  }

  function initFormEventListener() {
    $form_explorer && $form_explorer.addEventListener('submit', submitHandler);
    $form_services && $form_services.addEventListener('change', onServiceChangeHandler);
    $form_typeofdocuments && $form_typeofdocuments.addEventListener('change', onTypeOfDocumentChangeHandler);
    $form_firstdocumentdate && $form_firstdocumentdate.addEventListener('change', onDateChange);
    $form_seconddocumentdate && $form_seconddocumentdate.addEventListener('change', onDateChange);
  }

  function populateServices(services) {
    var servicesArray = Object.entries(services);
    var sortedServices = sortAlphabeticallyServices(servicesArray);
    sortedServices && sortedServices.forEach(function (element) {
      var option = new Option(element[0], element[0]);
      option.classList.add('font-marianne');
      option.dataset.typeofdocuments = sortAlphabeticallyTypeOfDocuments(element[1]);
      $form_services.add(option);
    });
  }

  function populateTypeOfDocuments() {
    $form_typeofdocuments.innerHTML = '';
    var typesofdocuments = $form_services.selectedOptions.item(0).dataset.typeofdocuments.split(',');

    if (typesofdocuments) {
      var sortedTypeOfDocuments = sortAlphabeticallyTypeOfDocuments(typesofdocuments);
      sortedTypeOfDocuments && sortedTypeOfDocuments.forEach(function (type) {
        $form_typeofdocuments.add(new Option(type, type));
      });
    }
  }

  function popStateHandler(event) {
    var queryStringData = getQueryStringData();
    removeDiff();
    removeLegend();
    removeNotification();
    updateFormValues(); //If action submit asked

    if (queryStringData.action == "submit") {
      //https://stackoverflow.com/questions/49587933/firefox-doesnt-preventing-dispatched-submit-event
      $form_explorer.dispatchEvent(new Event('submit', {
        cancelable: true
      }));
    }
  }

  function getQueryStringData() {
    var urlParams = new URLSearchParams(window.location.search);
    var queryStringData = Object.fromEntries(urlParams);
    return queryStringData;
  }

  function updateFormValues() {
    var queryStringData = getQueryStringData();
    var errogMsg = ''; //Update service

    if (queryStringData.service) {
      if ($form_services) {
        var option = isSelectOptionExist($form_services, queryStringData.service);

        if (option) {
          option.setAttribute('selected', 'selected');
          populateTypeOfDocuments();
        } else {
          errogMsg = errogMsg.concat('This service is not available');
        }
      }
    } //Update type of document


    if (queryStringData.typeofdocument) {
      if ($form_typeofdocuments) {
        var _option = isSelectOptionExist($form_typeofdocuments, queryStringData.typeofdocument);

        if (_option) {
          _option.setAttribute('selected', 'selected');
        } else {
          console.log('Type of document is not valid for this service');
        }
      }
    } //Update date1


    if (queryStringData.date1) {
      if ($form_firstdocumentdate) {
        $form_firstdocumentdate.value = queryStringData.date1;
      }
    } //Update date2


    if (queryStringData.date2) {
      if ($form_seconddocumentdate) {
        $form_seconddocumentdate.value = queryStringData.date2;
      }
    } //If error msg to display


    if (errogMsg != '') showNotification('error', errogMsg);
  }

  function isSelectOptionExist($target, value) {
    return $target.querySelector('[value="' + value + '"]');
  }

  function addInURL(key, value) {
    var queryStringData = getQueryStringData();
    var url = new URL(window.location);

    if (url.searchParams.get(key) != null || url.searchParams.get(key) != value || Object.keys(queryStringData).length == 0) {
      url.searchParams.set(key, value);
      window.history.pushState({}, '', url);
      window.dispatchEvent(new Event('popstate'));
    }
  }

  function removeInURL(key) {
    var url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
    window.dispatchEvent(new Event('popstate'));
  }

  function onServiceChangeHandler(event) {
    populateTypeOfDocuments();
    addInURL('service', $form_services.selectedOptions.item(0).value);
    onTypeOfDocumentChangeHandler();
  }

  function onTypeOfDocumentChangeHandler(event) {
    addInURL('typeofdocument', $form_typeofdocuments.selectedOptions.item(0).value);
  }

  function sortAlphabeticallyTypeOfDocuments(types) {
    return types.sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  function sortAlphabeticallyServices(services) {
    return services.sort(function (a, b) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    });
  }

  function onDateChange(event) {
    var currentDateKey = event.target.id == 'form_firstdocumentdate' ? 'date1' : 'date2';
    addInURL(currentDateKey, event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    var formData = getFormData();

    if (isValidForm()) {
      loadDocs().then(function (docs) {
        showDiff(docs);
        showLegend();
        showDatesInfos(docs);
      });
    }
  }

  function getFormData() {
    var formData = new FormData($form_explorer);
    var service = formData.get('form_services');
    var type = formData.get('form_typeofdocuments');
    var firstDocumentDate = formData.get('form_firstdocumentdate');
    var secondDocumentDate = formData.get('form_seconddocumentdate');
    return {
      service: service,
      type: type,
      firstDocumentDate: firstDocumentDate,
      secondDocumentDate: secondDocumentDate
    };
  }

  function isValidForm() {
    var formData = getFormData();
    if (formData.service && formData.type && formData.firstDocumentDate && formData.secondDocumentDate) return true;
    return false;
  }

  function showDatesInfos(docs) {
    var formData = getFormData();
    var firstDocumentDate = dateToDMY(formData.firstDocumentDate);
    var secondDocumentDate = dateToDMY(formData.secondDocumentDate);
    var firstDocumentVersionAtDate = dateToDMY(docs[0].version_at_date.substr(0, 10));
    var secondDocumentVersionAtDate = dateToDMY(docs[1].version_at_date.substr(0, 10));
    var msg = (0, _nanostache.Nanostache)(notificationsMsgs.dateClosest, {
      firstDocumentDate: firstDocumentDate,
      secondDocumentDate: secondDocumentDate,
      firstDocumentVersionAtDate: firstDocumentVersionAtDate,
      secondDocumentVersionAtDate: secondDocumentVersionAtDate,
      Date: Date
    }); //If dates are the equals

    if (docs[0].version_at_date == docs[1].version_at_date) {
      msg = (0, _nanostache.Nanostache)(notificationsMsgs.nothingToCompare, {
        onlyDocumentDate: firstDocumentDate
      });
      ;
    }

    showNotification('info', msg);
  }

  function showDiff(_x5) {
    return _showDiff.apply(this, arguments);
  }

  function _showDiff() {
    _showDiff = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(docs) {
      var dmp, diff, diffPrettyHtml, $diffContent, $diffviewer;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dmp = new _diffMatchPatch.default();
              diff = dmp.diff_main(docs[0].data, docs[1].data);
              diffPrettyHtml = prettyHTMLDiff(diff);
              $diffContent = document.createElement('DIV');
              $diffContent.classList.add('diffviewer_content');
              $diffContent.innerHTML = diffPrettyHtml;
              $diffviewer = document.createElement('DIV');
              $diffviewer.classList.add('diffviewer');
              $diffviewer.append($diffContent);
              if ($form_explorer) insertAfter($diffviewer, $form_explorer);

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _showDiff.apply(this, arguments);
  }

  function showLegend() {
    removeLegend();
    var $legend = document.createElement('DIV');
    $legend.classList.add('legend');
    var $legend_item1 = document.createElement('DIV');
    var $legend_item2 = document.createElement('DIV');
    $legend_item1.classList.add('legend_item');
    $legend_item2.classList.add('legend_item');
    $legend_item1.innerHTML = legendMsg.add;
    $legend_item2.innerHTML = legendMsg.remove;
    $legend.append($legend_item1);
    $legend.append($legend_item2);
    if ($form_explorer) insertAfter($legend, $form_explorer);
  }

  function removeLegend() {
    _toConsumableArray(document.getElementsByClassName("legend")).map(function (n) {
      return n && n.remove();
    });
  }

  function removeDiff() {
    _toConsumableArray(document.getElementsByClassName("diffviewer")).map(function (n) {
      return n && n.remove();
    });
  }

  function showNotification(type, msg) {
    removeNotification();
    var $notification = document.createElement('DIV');
    $notification.classList.add('notification');
    $notification.classList.add('notification-' + type);
    var $notification_content = document.createElement('DIV');
    $notification_content.classList.add('notification_content');
    $notification_content.innerHTML = msg;
    $notification.append($notification_content);
    if ($form_explorer) insertAfter($notification, $form_explorer);
  }

  function removeNotification() {
    _toConsumableArray(document.getElementsByClassName("notification")).map(function (n) {
      return n && n.remove();
    });
  }

  function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  function prettyHTMLDiff(diff) {
    var DIFF_DEconstE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    var html = [];
    var pattern_amp = /&/g;
    var pattern_lt = /</g;
    var pattern_gt = />/g;
    var pattern_para = /\n/g;

    for (var x = 0; x < diff.length; x++) {
      var op = diff[x][0]; // Operation (insert, deconste, equal)

      var data = diff[x][1]; // Text of change.

      var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;').replace(pattern_gt, '&gt;').replace(pattern_para, '<br>');

      switch (op) {
        case DIFF_INSERT:
          html[x] = '<ins>' + text + '</ins>';
          break;

        case DIFF_DEconstE:
          html[x] = '<del>' + text + '</del>';
          break;

        case DIFF_EQUAL:
          html[x] = '<span>' + text + '</span>';
          break;
      }
    }

    return html.join('');
  }

  function setMaxInputDateToNow() {
    $inputDates.forEach(function ($inputDate) {
      $inputDate.setAttribute('max', new Date().toISOString().split("T")[0]);
    });
  }

  function dateToDMY(dateToFormat) {
    var date = new Date(dateToFormat);
    return date.toLocaleString('default', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
});
},{"regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","diff-match-patch":"node_modules/diff-match-patch/index.js","@solid-js/nanostache":"node_modules/@solid-js/nanostache/dist/_index.mjs","better-dom/dist/better-dom":"node_modules/better-dom/dist/better-dom.js","better-dateinput-polyfill/dist/better-dateinput-polyfill":"node_modules/better-dateinput-polyfill/dist/better-dateinput-polyfill.js"}],"C:/Users/super/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54850" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/super/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripta-manent.js"], null)
//# sourceMappingURL=/scripta-manent.js.map
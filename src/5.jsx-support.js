import "./style.css";
import { createElement, render } from "./utils";

const React = (function() {
  let hooks = [];
  let idx = 0;
  function useState(originalState) {
    const _idx = idx; // setState called async - must close over
    let state = hooks[_idx] || originalState;
    const setState = newState => {
      hooks[_idx] = newState;
    };
    idx++;
    return [state, setState];
  }
  function useEffect(cb, depArray) {
    let hasChanged = true;
    let prevDeps = hooks[idx];
    if (prevDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, prevDeps[i]));
    }
    if (hasChanged) {
      cb();
    }
    hooks[idx] = depArray;
    idx++;
  }
  return { useState, useEffect, render: render(hooks), createElement };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("foo");
  React.useEffect(() => {
    console.log("Boom!");
  }, []);
  return <h1>Hello World!</h1>;
}

var App;

// App = React.render(Component);
// App.click();
// App = React.render(Component);
// App.type("bar");
// App = React.render(Component);

App = React.render(<Component />, document.getElementById("root"));

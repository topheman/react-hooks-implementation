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
  function render(Component) {
    idx = 0; // prevent from indefinitly increment hooks index
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("foo");
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: text => setText(text)
  };
}

var App;

App = React.render(Component);
App.click();
App = React.render(Component);
App.type("bar");
App = React.render(Component);

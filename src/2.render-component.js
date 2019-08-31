const React = (function() {
  let _val;
  function useState(originalState) {
    let state = _val || originalState;
    const setState = newState => {
      _val = newState;
    };
    return [state, setState];
  }
  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1)
  };
}

var App;

App = React.render(Component);
App.click();
App = React.render(Component);
App.click();

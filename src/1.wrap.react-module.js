const React = (function() {
  function useState(originalState) {
    let _val = originalState;
    let state = () => _val;
    const setState = newState => {
      _val = newState;
    };
    return [state, setState];
  }
  return { useState };
})();

const [count, setCount] = React.useState(1);
console.log(count());
setCount(2);
console.log(count());

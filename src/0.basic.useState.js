function useState(originalState) {
  let _val = originalState;
  let state = () => _val;
  const setState = newState => {
    _val = newState;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count());
setCount(2);
console.log(count());

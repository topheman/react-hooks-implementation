/* eslint-disable */

function useDogs(count) {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dogceo.netlify.com/.netlify/functions/pics?count=" + count)
      .then(x => x.json())
      .then(x => setList(x));
  }, [count]);
  return list;
}

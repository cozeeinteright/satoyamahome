import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const { name } = await( await fetch(`/api/message`)).json();
        console.log(name)
        setData(name)
        console.log("fetch succes")
      } catch(err) {
        console.log("fetch error")
        console.log(err)
      }
    })();
  });

  return (
    <>
      <div>satoyama</div>
      <div>{data}</div>;
    </>
  )
}

export default App;
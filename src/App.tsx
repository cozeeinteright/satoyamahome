import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const { text } = await( await fetch(`/api/message`)).json();
        setData(text)
      } catch(err) {
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
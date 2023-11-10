import React, { useState, useEffect } from 'react';

import './style.css';

const App = ({ name }: { name: string }) => {
  const [postData, setPostData] = useState<{ title: string; body: string }>;


/**
 * Write an Effect that fetches data from https://jsonplaceholder.typicode.com/posts/1 and renders the title and body.
 * The title should be in a h1 tag, while the body should be
 * rendered in a p tag.
 *
 * NB: Ensure your fetch call doesn't result in a race condition.
 */
 const App = ({ name }: { name: string }) => {
  const [postData, setPostData] = useState<{ title: string; body: string }>;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setPostData({ title: data.title, body: data.body });
      } catch (error) {
        console.error(`'Error fetching data:' $ {json.error}`);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello {name}!</h1>
      {postData ? (
        <>
          <h1>{postData.string}</h1>
          <p>{postData.data}</p>
        </>
      ) : (
        <p>Paragraph</p>
      )}
    </div>
  );
};

export default App;
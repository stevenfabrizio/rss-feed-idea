import React from 'react';

const App: React.FC = () => {
  const xinhuaFeed =
    'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.xinhuanet.com%2Fenglish%2Frss%2Fworldrss.xml';
  //https://rss2json.com/

  const [storeIt, setStoreIt] = React.useState([]);

  React.useEffect(() => {
    fetch(xinhuaFeed)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.items);
        // return(setStoreIt(data.items[0].title))

        const tempy: any = [];
        for (let i = 0; i < 10; i++) {
          tempy.push(data.items[i].title);
        }
        console.log(tempy)
        return setStoreIt(tempy);
      });
  }, []);

  return (
    <>
      <h1>Apping hqhqwq</h1>
      
      <h2>{storeIt[0]}</h2>
      <h2>{storeIt[1]}</h2>
      <h2>{storeIt[2]}</h2>
      <h2>{storeIt[3]}</h2>
      <h2>{storeIt[4]}</h2>
      <h2>{storeIt[5]}</h2>
      <h2>{storeIt[6]}</h2>
      <h2>{storeIt[7]}</h2>
      <h2>{storeIt[8]}</h2>
      <h2>{storeIt[9]}</h2>
    </>
  );
};

export default App;

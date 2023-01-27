import React from 'react';

const App: React.FC = () => {
  const xinhuaFeed =
    ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeedpress.me%2Fdrudgereportfeed';
    // 'https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Ffeedpress.me%2Fdrudgereportfeed&minify=on';
  //https://rss2json.com/
  //https://feedpress.me/drudgereportfeed
  //http://www.ecns.cn/rss/rss.xml
  //http://chinadigitaltimes.net/feed

  const regex = /.*">/;
  const [storeTitles, setStoreTitles] = React.useState([]);
  const [storeDateTimes, setStoreDateTimes] = React.useState([]);
  const [storeDescriptions, setStoreDescriptions] = React.useState([]);
  const [storeLinks, setStoreLinks] = React.useState([]);

  React.useEffect(() => {
    fetch(xinhuaFeed)
      .then((response) => response.json())
      .then((data) => {

        const tempTitles: any = [];
        const tempDateTimes: any = [];
        const tempDescriptions: any = [];
        const tempStoreLinks: any = [];

        for (let i = 0; i < 10; i++) {
          const tempdata = data.items[i];

          tempTitles.push(data.items[i].title);
          tempDateTimes.push(data.items[i].pubDate);

          const theDescription = data.items[i].description;
          tempDescriptions.push(theDescription.replace(regex, ''));

          tempStoreLinks.push(data.items[i].guid);

          console.log(tempdata);
        }

        return (
          setStoreTitles(tempTitles),
          setStoreDateTimes(tempDateTimes),
          setStoreDescriptions(tempDescriptions),
          setStoreLinks(tempStoreLinks)
        );

        // console.log(data.items)
        // return setStoreIt({...storeIt, data});
      });
  }, []);

  // const [storeIt, setStoreIt] = React.useState([]);

  // React.useEffect(() => {
  //   fetch(xinhuaFeed)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data.items);
  //       // return(setStoreIt(data.items[0].title))

  //       const tempy: any = [];
  //       for (let i = 0; i < 10; i++) {
  //         tempy.push(data.items[i].title);
  //         console.log(data.items[i]);
  //       }

  //       return setStoreIt(tempy);
  //     });
  // }, []);

  return (
    <>
      <h3>
        <a href={storeLinks[0]} target="_blank">
          {storeTitles[0]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[1]} target="_blank">
          {storeTitles[1]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[2]} target="_blank">
          {storeTitles[2]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[3]} target="_blank">
          {storeTitles[3]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[4]} target="_blank">
          {storeTitles[4]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[5]} target="_blank">
          {storeTitles[5]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[6]} target="_blank">
          {storeTitles[6]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[7]} target="_blank">
          {storeTitles[7]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[8]} target="_blank">
          {storeTitles[8]}
        </a>
      </h3>
      <h3>
        <a href={storeLinks[9]} target="_blank">
          {storeTitles[9]}
        </a>
      </h3>
    </>
  );
};

export default App;

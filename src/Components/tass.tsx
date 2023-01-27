import React from 'react';
const { parse } = require('rss-to-json');

const TASS: React.FC = () => {
  const tassFeed = 'https://feedpress.me/beatsme';
  // const chinaDigitalTimesFeed = 'http://chinadigitaltimes.net/feed'
  // const rss2JSONLink = 'https://rss2json.com/'
  // const chinaNewsServiceFeed = 'http://www.ecns.cn/rss/rss.xml'

  const [storeTitles, setStoreTitles] = React.useState([]);
  const [storeLinks, setStoreLinks] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const rss = await parse(tassFeed);

      console.log(rss);

      const tempTitles: any = [];
      const tempStoreLinks: any = [];
      for (let i = 0; i < rss.item.length; i++) {
        tempTitles.push(rss.item[i].title);
        tempStoreLinks.push(rss.item[i].link);
      }

      return setStoreTitles(tempTitles), setStoreLinks(tempStoreLinks);
    })();
  }, []);

  return (
    <>
      <h2>
        {storeTitles.map((title, id) => {
          return (
            <>
              <a href={storeLinks[id]} target="_blank">
                {storeTitles[id]}
              </a>
              <br />
              <br />
            </>
          );
        })}
      </h2>
    </>
  );
};

export default TASS;

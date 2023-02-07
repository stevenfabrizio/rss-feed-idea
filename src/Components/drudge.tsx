import React from 'react';
const { parse } = require('rss-to-json');

const Drudge: React.FC = () => {
  const drudgeReportFeed = 'https://feedpress.me/drudgereportfeed';
  // const chinaDigitalTimesFeed = 'http://chinadigitaltimes.net/feed'
  // const rss2JSONLink = 'https://rss2json.com/'
  // const chinaNewsServiceFeed = 'http://www.ecns.cn/rss/rss.xml'

  const [storeTitles, setStoreTitles] = React.useState([]);
  const [storeLinks, setStoreLinks] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const rss = await parse(drudgeReportFeed);

      // console.log(rss.items);

      const tempTitles: any = [];
      const tempStoreLinks: any = [];
      for (let i = 0; i < rss.items.length; i++) {
        tempTitles.push(rss.items[i].title);
        tempStoreLinks.push(rss.items[i].link);
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

export default Drudge;

let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('https://rssnovelupdates.com/rss.php?uid=379855&unq=60edaf9617797&type=read');
    
    console.log(feed.title);

    feed.items.forEach(item => {
		    console.log(item.title);
    });

})();

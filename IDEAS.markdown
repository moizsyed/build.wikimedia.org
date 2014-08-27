# Site outline

 - Homepage
 	- Navigation: showcase, sandbox, documentation, data
 	- List of visually compelling example projects
 	- List of documented data sources

 - Data sources
 	- RC stream API: We could document some mixture of Ori's new SocketIO API, the IRC feed (yuck), the [wikimon client](https://github.com/hatnote/wikimon) (python), or [wikichanges](https://github.com/edsu/wikichanges) (node)
 		- State of the docs: [current docs](https://wikitech.wikimedia.org/wiki/RCStream)
 		- Potential demos: [wikistream](http://wikistream.wmflabs.org/), [rcmap](http://rcmap.hatnote.com/#en), [wikipulse](http://wikipulse.herokuapp.com/)
 		- Potential sandbox: [test client](http://alpha.hatnote.com/wikimon-test/index.html)
 		- Libraries: test client?
 	- Some component of the Wikipedia API: probably `action=query`, focusing on the props/lists/generators that are relevant for articles (and only require read rights).
 		- State of the docs: [raw docs](http://en.wikipedia.org/w/api.php), [general wiki docs](https://www.mediawiki.org/wiki/API:Main_page), [general tutorial](https://www.mediawiki.org/wiki/API:Tutorial), [old php-focused tutorial](https://www.ibm.com/developerworks/xml/library/x-phpwikipedia/index.html)
 		- Potential demos: [wikichanges](http://sergionunes.com/p/wikichanges/), [wikipedia gender](http://moebio.com/research/wikipediagender/#tv_programs&films&books&emotions&cities&sports&from_list) -- something simple based on the coordinates / geosearch API?
 		- Potential sandbox: [API sandbox](https://en.wikipedia.org/wiki/Special:ApiSandbox)
 		- Links to the [client list](https://www.mediawiki.org/wiki/API:Client_code)
 	- Include short examples throughout (js/python/php/ruby?)

- Showcase
	- Organized by data source/author. Preference for open source code, especially if it can serve as a tutorial example.

- Sandbox
	- Interactive area to experiment with the API. Not crucial for a minimal prototype.

- Data
	- Links to the [bulk downloads](http://dumps.wikimedia.org/) and other interesting material (like [pageview data](http://stats.grok.se/)). This should be an unramp to key points on mediawiki.org

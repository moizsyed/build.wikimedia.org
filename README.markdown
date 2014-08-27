# Wikimedia Data and Developer Hub

![hub](https://upload.wikimedia.org/wikipedia/commons/5/5b/Wikimedia_Developer_Hub.jpg "join us and build!")

This hub is a an [example-driven](http://seealso.org/) introduction to the incredible amounts of open data available on Wikipedia (and other Wikimedia projects, like Wikidata). [Our plan](https://www.mediawiki.org/wiki/Dev.wikimedia.org) is to include a showcase of visually compelling uses of Wikipedia data, documenting their data sources, and providing an interactive sandbox for exploring data.

[Read more](IDEAS.markdown, or see a (rough!) [demo](http://juliuszgonera.com/wddh).

## Building the mock site

You need Ruby, preferably with [RVM](http://rvm.io/). After cloning the
repository, when you enter the directory RVM should activate the proper
version of Ruby and create an empty gemset.

To install dependencies run:

    bundle install

To start local development server run:

    middleman server

To publish an updated version to GitHub pages run:

    rake publish

(you'll need access to the repository).
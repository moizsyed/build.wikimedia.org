# Introduction

The recent changes stream is a live, public feed of activity on all Wikimedia wikis, including Wikipedia, available in over 270 languages. Using the recent changes stream, you can build applications on top of the massive amount of realtime data from Wikipedia. This data powers projects that [identify trending news topics](http://wikipedia-irc.herokuapp.com/), [sonify and visualize Wikipedia edits](http://listen.hatnote.com), [monitor edits from US Congress](https://twitter.com/congressedits), and more.

# Connecting

An application can connect to the recent changes stream with a [SocketIO client](http://socket.io/docs/client-api/). First, connect to `stream.wikimedia.org/rc`. Then, subscribe to any Wikimedia wiki in the format `[language code].[wiki].org`.

For example, to connect and subscribe to English Wikipedia:

```javascript
var socket = io.connect('stream.wikimedia.org/rc');
 
socket.on('connect', function () {
  socket.emit('subscribe', 'en.wikipedia.org');
});
````

You can also subscribe to a list of wikis:

```javascript
socket.emit('subscribe', ['en.wikipedia.org', 'de.wikipedia.org', 'es.wikinews.org']);
````

Or subscribe to all wikis, with `*`:

```javascript
socket.emit('subscribe', '*');
````

See a [full list of available wikis and languages](https://meta.wikimedia.org/wiki/Complete_list_of_Wikimedia_projects). 

# Using the recent changes stream

Each action is delivered as a change event. A change event may describe an edit to a Wikipedia article, a new page creation, a user registration, or other various log actions. 

```javascript
var socket = io.connect('stream.wikimedia.org/rc');
 
socket.on('connect', function () {
  socket.emit('subscribe', '*');
});

socket.on('change', function (data) {
  // Handle each change...
  console.log(data);
});
```

TODO: add a live widget, such as: http://jsfiddle.net/7rgxxkok/11/

## Change event details

| Parameter | Description |
|-----------|-------------|
| comment | A description of the action. For edits, this is the value of the user's edit summary.
| wiki | The source wiki's shorthand name.
| server_name | The source wiki's server name.
| title | The page title for the action.
| timestamp | Timestamp, in seconds.
| server\_script\_path | The source wiki's path, which is helpful for finding `api.php` for other queries.
| namespace | The [MediaWiki namespace](https://www.mediawiki.org/wiki/Help:Namespaces) for this action.
| server_url | The source wiki's URL.
| length | For an `edit` action, this is an array with the byte size of the `new` and `old` version of the page. For a `new` action, the `old` value is `null`. 
| user | The username of the user who submitted this change. For unregistered users, this is their IP address.
| bot | Whether the user who submitted this action has a [bot flag](https://meta.wikimedia.org/wiki/Bot).
| type | Values may include `edit`, `log`, or `new`.
| id | The id for the action within the source wiki's [recent changes table](https://www.mediawiki.org/wiki/Manual:Recentchanges_table) (TODO: verify?)
| minor | Whether the action has a minor flag.
| revision | For an `edit` action, this is an array with the revision id for the `new` and `old` version of the page.
| patrolled | Whether the action has a [patrolled flag](https://www.mediawiki.org/wiki/Help:Patrolled_edits). Only present for `new` and `edit` actions. (TODO: verify?)

The following parameters are only present for `log`-type actions:

| Parameter | Description |
|-----------|-------------|
| log\_action | Values may include `create` (new users), `move` (changing a page title), `hit` (triggering an abuse filter), or `delete` (removing a page).
| log\_action_comment | A description of a `log` action.
| log_id | TODO: What is this?
| log\_params | An array of additional params related to the `log_action`.
| log\_type | TODO: How is this different from `log_action`?

TODO: verify against [MachineReadableRCFeedFormatter.php](https://github.com/wikimedia/mediawiki-core/blob/master/includes/rcfeed/MachineReadableRCFeedFormatter.php) and the [RecentChanges table](https://www.mediawiki.org/wiki/Manual:Recentchanges_table).

## SocketIO client libraries

- Android: [socket.io-client.java](https://github.com/nkzawa/socket.io-client.java)
- iOS: [SIOSocket](https://github.com/MegaBits/SIOSocket)
- JavaScript (Node.js): [socket.io-client](https://github.com/Automattic/socket.io-client)
- Python: [Gevent-socketio](https://gevent-socketio.readthedocs.org/en/latest/)

# More information

Learn more about the setup and operations of the recent changes stream:

- [RCStream](https://wikitech.wikimedia.org/wiki/RCStream), which broadcasts socket.io events for each change
- MediaWiki's [$wgRCFeeds](https://www.mediawiki.org/wiki/Manual:$wgRCFeeds), which handles recent changes updates

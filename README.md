# Chat UI

This repo provides code for a GUI meant to display chat messages. There is no connection to a server. An Angular Service is used to provide some fake message data to demonstrate how the GUI works.

## Usage

1. Clone the repo: `git clone https://github.com/RebootJeff/chatUI.git`
2. Direct your terminal: `cd path/to/local/repo/chatUI`
3. Install dependencies: `bower install`
4. Run a local server: `python -m SimpleHTTPServer`

## Tech Stack

- AngularJS: front-end MVC framework
- Sass/Compass: CSS pre-processor
- Bootstrap: CSS framework
- Moment.js: date/time formatting library

### Tools

- Bower

## Development Decisions

### No Router
This is a simple GUI with only one true view. If a login page and all that good stuff were to be added, then I'd add a router.

### ngInclude
To inject some partials, I'm using ng-include. Due to CORS policies, ng-include and the `file://` protocol are incompatible. This means you can't play with Chat UI by simply opening `index.html` in your browser. Instead, you must use a local server such as the Python SimpleHTTPServer.

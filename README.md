Cumulus
=============

SoundCloud desktop application.


Quick start:
-----

###Install dependencies:

```npm install && bower install```

###Get node-webkit:

[https://github.com/rogerwang/node-webkit/](https://github.com/rogerwang/node-webkit/)

###Gulp
Gulp will compile the `scss` folder using libsass and spawn a watcher.

`gulp`


###Run
Run node-webkit on the git repo:

`[path/to/node-webkit/binary] . --debug`

**Flags:**

**optional** --debug

The node-webkit app will automatically reload when a file has changed. Gulp will pick up any changes in the `scss` folder and recompile your assets.

##Technology stack:

* [Node Webkit](https://github.com/rogerwang/node-webkit/)
* [Backbone](http://backbonejs.org/)
* [Bourbon](http://bourbon.io/)
* [Gulp](http://gulpjs.com/)
* [DOMtastic](http://webpro.github.io/DOMtastic/)
* [libsass](http://libsass.org)

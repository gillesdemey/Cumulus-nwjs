'use strict';

var App = {
  Root       : './',
  Controller : {},
  View       : {},
  Model      : {},
  Page       : {},
  Collection : {}
};

App.gui     = require('nw.gui');
App.isDebug = App.gui.App.argv.indexOf('--debug') > -1;
App.window  = App.gui.Window.get();

App.window.focus();

// initialize soundcloud SDK
SC.initialize({
  client_id: 'b7d0aa6f5eec5dc20b40fdaf7f70c6f6'
});
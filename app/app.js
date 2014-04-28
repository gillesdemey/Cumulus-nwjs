'use strict';

var Config = require(process.cwd() + '/app/config/config.json');

var App = {
  Root       : process.cwd() + '/app',
  Config     : Config,
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
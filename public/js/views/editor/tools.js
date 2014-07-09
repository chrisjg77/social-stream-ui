define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    , conf = require('conf')
    , _ = require('underscore')
    ;

  var ToolsView = Marionette.ItemView.extend({
    className: 'editor-tools clearfix',
    template: require('hbs!editor/tools'),

    // Load configuration file.
    templateHelpers: {'conf':conf},

    ui: {
      filterOptionsList: '.filters-list',
      filterOption: '.filters-list li',
      itemPreview: '.editor-preview',
      previewText: '.editor-preview .item-text',
      nextOptions: '#next-options',
      previousOptions: '#previous-options'
    },

    events: {
      'click @ui.filterOption': 'applyFilter',
      'focusin @ui.previewText': 'onTextFocus',
      'click @ui.nextOptions': 'showNextOptions',
      'click @ui.previousOptions': 'showPreviousOptions'
    },

    applyFilter: function(e) {
      var $el = $(e.currentTarget);
      var filter = $el.attr('data-filter');

      this.ui.filterOption.removeClass('filter-selected');
      $el.addClass('filter-selected');

      this.ui.itemPreview.attr('data-filter',filter);
    },

    onTextFocus: function() {
    },

    showNextOptions: function() {
      var self = this;

      this.ui.filterOptionsList.removeClass('bounceInRight fadeIn').addClass('animated fadeOut');
      setTimeout(function() {
        self.ui.filterOptionsList.removeClass('fadeOut').addClass('bounceInRight');
      },375);
    },

    showPreviousOptions: function() {
      var self = this;

      this.ui.filterOptionsList.removeClass('fadeIn bounceInRight').addClass('animated bounceOutRight');
      setTimeout(function() {
        self.ui.filterOptionsList.removeClass('bounceOutRight').addClass('fadeIn');
      },375);
    }

  });

  return ToolsView;

});

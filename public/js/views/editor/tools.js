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
      filterOption: '.filters-list li',
      itemPreview: '.editor-preview',
      previewText: '.editor-preview .item-text'
    },

    events: {
      'click @ui.filterOption': 'applyFilter',
      'focusin @ui.previewText': 'onTextFocus'
    },

    applyFilter: function(e) {
      var $el = $(e.currentTarget);
      var filter = $el.attr('data-filter');

      this.ui.filterOption.removeClass('filter-selected');
      $el.addClass('filter-selected');

      this.ui.itemPreview.attr('data-filter',filter);
    },

    onTextFocus: function() {
      // console.log('focus');
      // console.log(this.ui.previewText.text().toLowerCase());
      // if ( this.ui.previewText.text().toLowerCase() === 'text here') {
      //   this.ui.previewText.text('');
      // }
    }

  });

  return ToolsView;

});

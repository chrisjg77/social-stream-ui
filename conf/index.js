var conf = {
  site: {
    title: 'Stream',
    description: 'Description...'
  },
  styles: [
    {'path':'/css/app.css'}
  ],
  scripts: [
    {'path':'//use.typekit.net/mih2qyq.js'},
    {'path':'vendor/require.js'},
    {'path':'js/config.js'}
  ]
}
module.exports = function(mode) {
    return conf;
}

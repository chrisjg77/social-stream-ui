var conf = {
  site: {
    title: 'Social Stream',
    description: 'Description...'
  },
  styles: [
    {'path':'/css/app.css'}
  ],
  scripts: [
    {'path':'vendor/require.js'},
    {'path':'js/config.js'}
  ]
}
module.exports = function(mode) {
    return conf;
}

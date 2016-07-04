app.factory('Entry', function($resource) {
  return $resource('https://raw.githubusercontent.com/muthuraman393/webmail/c37e178dd978af03b09fddfc35b388a79d0e5cc6/data.json'); // Note the full endpoint address
});
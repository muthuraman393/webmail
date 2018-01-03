app.factory('Entry', ['$resource',function($resource) {
  /*return $resource('https://raw.githubusercontent.com/muthuraman393/webmail/c37e178dd978af03b09fddfc35b388a79d0e5cc6/data.json',{},*/
  return $resource('assets/api/data.json',{},
         {
          query:{
             method: 'GET',
             isArray:true}

          }); // Note the full endpoint address
}]);
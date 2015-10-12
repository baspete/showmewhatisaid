class MainController {
  constructor ($http) {
    'ngInject';

    this.isCollapsed = true;

    this.projects = [];

    $http.get('/projects/clients.json').success((response) => {

        this.clients = response.clients;

     }).then(() => {

        angular.forEach(this.clients, (client) => {
          $http.get('/projects/' + client + '/content.json')
               .success((response) => {
                  this.projects.push({
                    id: client,
                    title: response.title,
                    description: response.description,
                    role: response.role,
                  });
               });
        });

     });
  }

}

export default MainController;

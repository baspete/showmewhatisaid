class MainController {
  constructor ($http) {
    'ngInject';

    this.isCollapsed = true;

    this.projects = [];
    let clients = [
      'venovate',
      'venovate',
      'venovate',
      'venovate',
      'venovate',
      'venovate'
    ];

    angular.forEach(clients, (client) => {
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

  }

}

export default MainController;

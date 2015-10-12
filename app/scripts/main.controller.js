class MainController {
  constructor ($http) {
    'ngInject';

    this.isCollapsed = true;

    this.projects = [];

    $http.get('/projects/clients.json').success((response) => {

        this.clients = response.clients;

     }).then(() => {

        for(let i=0;i<this.clients.length;i++){
          $http.get('/projects/' + this.clients[i] + '/content.json')
               .success((response) => {
                  this.projects.push({
                    id: this.clients[i],
                    title: response.title,
                    description: response.description,
                    role: response.role,
                  });
               });
        }

     });
  }

}

export default MainController;

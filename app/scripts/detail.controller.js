class DetailController {
  constructor ($http, $stateParams) {
    'ngInject';
    this.id = $stateParams.id;
    $http.get('/projects/' + this.id + '/content.json')
         .success((response) => {
            this.sections = response.sections;
         });
  }

}
export default DetailController;

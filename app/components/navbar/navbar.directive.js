class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      templateUrl: 'components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor () {
    'ngInject';
  }
}

export default NavbarDirective;

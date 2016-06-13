//it follows the AngularJS Style Guide from John Papa (@John_Papa)
//https://github.com/johnpapa/angularjs-styleguide#angularjs-style-guide
var App = angular.module('App', []);

//using named functions instead of anonymous ones
//very helpful when debugging code
//https://github.com/johnpapa/angularjs-styleguide#controllers
App.controller('TasksCtrl', Tasks);

function Tasks() {
  //controllerAs with vm ("view model")
  //https://github.com/johnpapa/angularjs-styleguide#controllers
  var vm = this;
  
  vm.newTask = '';
  
  //bindable members up top (https://github.com/johnpapa/angularjs-styleguide#controllers)
  vm.add = add;
  vm.markAsComplete = markAsComplete;
  vm.markAsIncomplete = markAsIncomplete;
  vm.getTotalTasks = getTotalTasks;
  vm.calculatePercent = calculatePercent;
  
  vm.tasks = [
    'Feed the imaginary gold fish.',
    'Walk the non existant dog.',
    'Have a celebratory beer!'
  ];
  
  vm.completedTasks = [
    'Start writing an example AngularJS todo app.',
    'Add the ability to add new tasks.',
    'Add the ability to mark tasks as completed.',
    'Add the ability to undo completed tasks.',
    'Finish writing an example AngularJS todo app.',
    'Write my first CodePen.'
  ];
  
  function add(task) {
    if ( task === '' || typeof task === 'undefined' ) {
      return false;
    }
    
    vm.tasks.push(task);
    vm.newTask = '';
  }
  
  function markAsComplete(index) {
    var task = vm.tasks[index];
    vm.tasks.splice(index, 1);
    vm.completedTasks.push(task);
  }
  
  function markAsIncomplete(index) {
    var task = vm.completedTasks[index];
    vm.completedTasks.splice(index, 1);
    vm.tasks.push(task);
  }
  
  function getTotalTasks() {
    return vm.tasks.length + vm.completedTasks.length;
  }
  
  function calculatePercent(count) {
    var total = vm.getTotalTasks();
    return Math.round(100 / total * count);
  }
        
}
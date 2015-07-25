(function() {
	'use strict';

	angular
	.module('todomvc', [])
	.controller('TodoCtrl', function() {
		var vm = this;
		vm.todos = [];
		vm.addTodo = addTodo;

		function addTodo() {
			vm.todos.push({title: vm.newTodo});
			vm.newTodo = '';
		}
	});
})();
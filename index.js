(function() {
	'use strict';

	angular
	.module('todomvc', [])
	.controller('TodoCtrl', function() {
		var vm = this;
		vm.todos = [];
		vm.addTodo = addTodo;
		vm.removeTodo = removeTodo;

		function addTodo() {
			vm.todos.push({title: vm.newTodo});
			vm.newTodo = '';
		}

		function removeTodo(todo) {
			vm.todos.splice(vm.todos.indexOf(todo), 1);
		}
	});
})();
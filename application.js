// JavaScript source code
(
	function () 
	{
		"use strict";

		var toBuy = 
		[
			{ name: "Glass", quantity : 1 },
			{ name: "Cookies", quantity : 12 },
			{ name: "Books", quantity : 7 },
			{ name: "Eggs", quantity : 12 },
			{ name: "Milk", quantity : 1 },
		];

		angular.module("ngapp").controller("buyController", toBuyList).controller("boughtController", boughtAlready).service("listService", listService);

		buyController.$inject["listService"];
		function toBuyList(listService)
		{
			var toBuyList = this;

			toBuyList.items = listService.getItems();
		}

		boughtController.$inject["listService"];
		function boughtAlready(listService)
		{

		}

		function listService()
		{
			var service = this;

			// List of items to buy...
			var items = [];

			//service.addItem = function () 
			//{
			//	items.push(toBuy[0]);
			//	items.push(toBuy[1]);
			//	items.push(toBuy[2]);
			//	items.push(toBuy[3]);
			//	items.push(toBuy[4]);
			//};

			service.getItems = function () 
			{
				items.push(toBuy[0]);
				items.push(toBuy[1]);
				items.push(toBuy[2]);
				items.push(toBuy[3]);
				items.push(toBuy[4]);

				return items;
			};
		}
	}
)();
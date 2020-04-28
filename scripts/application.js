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

		angular.module("ngapp", []).controller("buyController", buyList).controller("boughtController", boughtAlready).service("serviceList", listService);

		buyList.$inject["serviceList"];
		function buyList(serviceList)
		{
			var buyList = this;
			buyList.items = serviceList.getItems();
		}

		boughtController.$inject["serviceList"];
		function boughtAlready(serviceList)
		{

		}

		function listService()
		{
			var service = this;

			// List of items to buy...
			//var items = [];

			//var item = {}

			//service.getItems = function () 
			//{
			//	item = 
			//	{
			//		name: toBuy[0].name, quantity : toBuy[0].quantity
			//	}
				
			//	items.push(item);

			//	item = 
			//	{
			//		name: toBuy[1].name, quantity : toBuy[1].quantity
			//	}
				
			//	items.push(item);

			//	item = 
			//	{
			//		name: toBuy[2].name, quantity : toBuy[2].quantity
			//	}
				
			//	items.push(item);

			//	item = 
			//	{
			//		name: toBuy[3].name, quantity : toBuy[3].quantity
			//	}
				
			//	items.push(item);

			//	item = 
			//	{
			//		name: toBuy[4].name, quantity : toBuy[4].quantity
			//	}

			//	items.push(item);

			//	return items;
			//};

			service.getItems = function ()
			{
				return toBuy;
			}
		}
	}
)();
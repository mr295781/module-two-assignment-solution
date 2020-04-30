// JavaScript source code
// Assignment two script code...
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

		angular.module("ngapp", []).controller("buyController", buyList).controller("boughtController", boughtList).service("serviceList", listService);		

		buyList.$inject = ["serviceList"];
		function buyList(serviceList)
		{
			var buyList = this;
			buyList.items = serviceList.getItems();
			
			buyList.boughtItem = function (index)
			{
				serviceList.moveItem(index);
			};
		}

		boughtList.$inject = ["serviceList"];
		function boughtList(serviceList)
		{
			var boughtList = this;
			boughtList.items = serviceList.showItems();
		}

		function listService()
		{
			var service = this;
			var bought = [];
						
			service.getItems = function ()
			{
				return toBuy;
			};

			service.showItems = function ()
			{
				return bought;
			}

			service.showBuyMessage = function(message)
			{
				return message;
			}

			service.showBoughtMessage = function(message)
			{
				return message;
			}

			service.moveItem = function (index)
			{												
				var item = {};
				if (bought.length <= 4)
				{							
					item = 
					{
						name: toBuy[index].name, 
						quantity : toBuy[index].quantity
					}

					bought.push(item);
					toBuy.splice(index, 1);					
				}				
			};			
		}
	}
)();
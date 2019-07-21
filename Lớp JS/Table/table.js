$(function() {
	let films = [
	{genre: "Animation", title: "Wildfood", duration: "3:47", date: "2014-07-16"},
	{genre: "Film", title: "The Deer", duration: "6:24", date: "2014-02-28"},
	{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
	{genre: "Film", title: "Animals", duration: "6:40", date: "2005-12-21"},
	{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
	];

	function renderContent(){
		for(var i = 0; i < films.length; i++)
			$('table').append(`
				<tr>
				<td>${films[i].genre}</td>
				<td>${films[i].title}</td>
				<td>${films[i].duration}</td>
				<td>${films[i].date}</td>
				</tr>
				`);
	}
	renderContent();

	function sortGenre_asc(a,b){
		if(a.genre < b.genre)	return -1
			else if(a.genre > b.genre) return 1
				else return 0;
		} 
		films.sort(sortGenre_asc);

		function sortGenre_des(a,b) {
			if(a.genre < b.genre) return 1; 
			else if(a.genre > b.genre) return -1;
			else return 0;
		}	
		films.sort(sortGenre_des);

		function sortTitle_asc(a,b){
			if(a.title < b.title)	return -1
				else if(a.title > b.title) return 1
					else return 0;
			} 
			films.sort(sortTitle_asc);

			function sortTitle_des(a,b){
				if(a.title < b.title) return 1; 
				else if(a.title > b.title) return -1;
				else return 0;
			}
			films.sort(sortTitle_des);

			function sortDuration_asc(a,b){
				return new Date('1970/01/01 ' + a.duration) - new Date('1970/01/01 ' + b.duration);
			}
			films.sort(sortDuration_asc);

			function sortDuration_des(a,b){
				return new Date('1970/01/01 ' + b.duration) - new Date('1970/01/01 ' + a.duration);
			}
			films.sort(sortDuration_des);

			function sortDate_asc(a,b){
				if(a.date < b.date)	return -1
					else if(a.date > b.date) return 1
						else return 0;
				}
				films.sort(sortDate_asc);

				function sortDate_des(a,b){
					if(a.date < b.date) return 1; 
					else if(a.date > b.date) return -1;
					else return 0;
				}
				films.sort(sortDate_des);

				let isSort = false;
				var icon = $('#icon');
				var icon2 = $('#icon-2');
				var icon3 = $('#icon-3');
				var icon4 = $('#icon-4');

				$('th:eq(0)').on('click', function(event) {		
					if(isSort == false){
						$('tr:gt(0)').remove();
						films.sort(sortGenre_asc);
						renderContent();
						isSort = true;
						icon.removeClass('fa-sort');
						icon.addClass('fa-sort-up');
						console.log(isSort);
					} else {
						console.log(isSort + 'else');
						$('tr:gt(0)').remove();
						films.sort(sortGenre_des);
						renderContent();
						isSort = false;
						icon.removeClass('fa-sort-up');
						icon.addClass('fa-sort-down');
					}

				});	

				$('th:eq(1)').on('click', function(event) {
					if(isSort == false){
						$('tr:gt(0)').remove();
						films.sort(sortTitle_asc);
						renderContent();
						isSort = true;
						icon2.removeClass('fa-sort');
						icon2.addClass('fa-sort-up');
						console.log(isSort);
					} else {
						console.log(isSort + 'else');
						$('tr:gt(0)').remove();
						films.sort(sortTitle_des);
						renderContent();
						isSort = false;
						icon2.removeClass('fa-sort-up');
						icon2.addClass('fa-sort-down');
					}
				});

				$('th:eq(2)').on("click",function(event) {
					if(isSort == false){
						$('tr:gt(0)').remove();
						films.sort(sortDuration_asc);
						renderContent();
						isSort = true;
						icon3.removeClass('fa-sort');
						icon3.addClass('fa-sort-up');
						console.log(isSort);
					} else {
						console.log(isSort + 'else');
						$('tr:gt(0)').remove();
						films.sort(sortDuration_des);
						renderContent();
						isSort = false;
						icon3.removeClass('fa-sort-up');
						icon3.addClass('fa-sort-down');
					}
				});

				$('th:eq(3)').on("click",function(event) {
					if(isSort == false){
						$('tr:gt(0)').remove();
						films.sort(sortDate_asc);
						renderContent();
						isSort = true;
						icon4.removeClass('fa-sort');
						icon4.addClass('fa-sort-up');
						console.log(isSort);
					} else {
						console.log(isSort + 'else');
						$('tr:gt(0)').remove();
						films.sort(sortDate_des);
						renderContent();
						isSort = false;
						icon4.removeClass('fa-sort-up');
						icon4.addClass('fa-sort-down');
					}
				});
			})			
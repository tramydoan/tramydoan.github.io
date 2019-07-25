let number = 0;
$('#b1').click(function() {
	$.ajax({
		url: 'https://minhducluong.github.io/db.json',
		type: 'GET',
		dataType: 'json',
		success: function(films) {
			let film = films.films
			let htmlContent = '';
			if(number < film.length -1) {
				htmlContent += `
				<tr>
				<td>${film[number].id}</td>
				<td>${film[number].genre}</td>
				<td>${film[number].title}</td>
				<td>${film[number].duration}</td>
				<td>${film[number].date}</td>
				</tr>
				<tr>
				<td>${film[number + 1].id}</td>
				<td>${film[number + 1].genre}</td>
				<td>${film[number + 1].title}</td>
				<td>${film[number + 1].duration}</td>
				<td>${film[number + 1].date}</td>
				</tr>
				`;	
				number+=2;
			} else if(number == film.length -1){
				htmlContent += `
				<tr>
				<td>${film[number].id}</td>
				<td>${film[number].genre}</td>
				<td>${film[number].title}</td>
				<td>${film[number].duration}</td>
				<td>${film[number].date}</td>
				</tr>
				`;	
				number++;
			}
			document.getElementById('my_table').innerHTML += htmlContent;
		}
	});
});
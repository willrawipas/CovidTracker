let new_cases = document.getElementById('new_case');
let new_death = document.getElementById('new_death');
let total_death = document.getElementById('total_death');
let total_recovered = document.getElementById('total_recovered');
let total_cases = document.getElementById('total_cases');
let table = document.getElementById('countries_stat');


//Fetcing the World Data

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a1a198cc7amshd29e181da75bb53p1aa8cajsna17739f5b2c0",
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com"
	}
})
.then(response => response.json().then(data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases; 
    new_cases.innerHTML = data.new_cases
    new_death.innerHTML = data.new_deaths
    total_death.innerHTML = data.total_deaths
    total_recovered.innerHTML = data.total_recovered
    
}))
.catch(err => {
	console.error(err);
});

// Fetching the case by country data

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a1a198cc7amshd29e181da75bb53p1aa8cajsna17739f5b2c0",
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com"
	}
})
.then(response => response.json().then(data => {
    console.log(data);
    let countries_stat = data.countries_stat;
    
    for (let i = 0; i < countries_stat.length; i++){
        console.log(countries_stat[i]);
        let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let recovered_per_country =row.insertCell(4);

        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered; 
        


    }
    
}))
.catch(err => {
	console.error(err);
});
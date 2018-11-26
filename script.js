var userId = '603214';
var apiKey = '865741651d7c73d7cd6988d4637a9e85';
var data = 'JSON Request Data';
var request = $.ajax({
url: "https://cors-anywhere.herokuapp.com/json.astrologyapi.com/v1/birth_details",
method: "POST",
dataType:'json',
headers: {
"authorization": "Basic " + btoa(userId+":"+apiKey),
"Content-Type":'application/json'
},
data:JSON.stringify(data)
});
// Returns A promiss



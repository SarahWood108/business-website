var userId = '';
// the userID and API keys didn't work :(
var apiKey = '';
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



// automatically find location and search

// var location1 = document.getElementById('location1')

// $(function(){
//     let url3 = 'https://fastah-ip.p.rapidapi.com/whereis/v1/json/auto'
//     $.ajax({
//         url: url3,
//         type: 'Get',
//         headers: {
//         'X-RapidAPI-Host': 'fastah-ip.p.rapidapi.com',
// 	       'X-RapidAPI-Key': '515a2898a9msh2f25577eb75a280p1a4b8cjsnb61a243f2616'
//         }
//     }) .done(function (data){
//         displayLocation(data)
//     })
//     var displayLocation = function (data){
//           console.log(data)
//         var justCity = data.locationData.cityName.split(',')
//         location1.textContent = data.locationData.cityName
//         var splitResult = justCity[0]
//         $(function() {

//             let result1 = '';
//             let url = 'https://api.valueserp.com/search?api_key=621401444E6F40F0AB557E3788926771&q=recycling&location='+ splitResult+'&num=3'
    
//             $.ajax({
//             url: url,
//             type: 'GET',
//             }).done(function(data){
//                 console.log(data)
//                 data.local_results.forEach(result =>{
//                 result1 = `<p>${result.title}</p>`
    
//                 $("#result").addClass("show")
//                 $("#result").append(result1)
//             })     
//             })  
//         })
//     }
    

// })

// search by asking for location 

const succussCallback = (position) => {
    console.log(position);
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var apiKey = 'e6c7145ef0589d5c1799b396e8bd2be3'

    let url = 'https://api.openweathermap.org/geo/1.0/reverse?lat='+latitude+'&lon='+longitude+'&limit=1&appid=' + apiKey
        $.ajax({
            url: url,
            type: 'get',
        }) .done(function (data){
            console.log(data)
            location1.textContent = data[0].name + ', ' + data[0].state
            city = data[0].name

            let result1 = '';
            let url3 = 'https://api.valueserp.com/search?api_key=621401444E6F40F0AB557E3788926771&q=recycling&location='+ city+'&num=3'

            $.ajax({
            url: url3,
            type: 'GET',
            }).done(function(data){
                console.log(data)
                data.local_results.forEach(result =>{
                result1 = `<p>${result.title}</p>`

                $("#result").append(result1)
                $("#result").addClass("show")
            })     
        })  
        })
}
const errorCallback = (error) =>{
    console.error(error)
}

navigator.geolocation.getCurrentPosition(succussCallback,errorCallback)
  

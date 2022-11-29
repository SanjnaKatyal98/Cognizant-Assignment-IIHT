navigator.geolocation.getCurrentPosition(updateLocation,handleLocationError);

function updateLocation(position){
    console.log('in updatelocation');
    console.log(JSON.stringify(position));
    var latitude =  position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy =  position.coords.accuracy;
    document.getElementById("lati").innerHTML=latitude;
    document.getElementById("long").innerHTML=longitude;
    document.getElementById("acc").innerHTML="this location is accurate with "+accuracy+"meters";
}
function  handleLocationError(err){
    switch(err.code){
        case 0:
            updateStatus('there was eror while retrieving location');
            break;
        case 1 :
            updateStatus('the user prevented this page from retreiving his/her location');
            break;
        case 2:
            updateStatus('the browser was unable in retreiving his/her location');
            break;
        case 3:
            updateStatus('time out prevented this page from retreiving his/her location');
            break;
    }
}
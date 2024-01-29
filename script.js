//About geolocation finding
var lat, lon, lang;
var full_link_for_local = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + lat + '&longitude=' + lon + '&localityLanguage=kk';
var geolocation_link = 'https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=kk';

//About IP address finding
var ip_v4_link = 'https://api.bigdatacloud.net/data/client-ip';
var ip_dual_link = 'https://api-bdc.net/data/client-ip';

//informations by IP
var ipV4InfLink = 'https://api.bigdatacloud.net/data/client-info';
var ipV6InfLink = 'https://api-bdc.net/data/client-info';



function geolocation() {
    fetch(geolocation_link).
        then((res) => res.json()).
        then((data) => {
            console.table("Data from goelocation checking:\n", data);
            document.getElementById("res").textContent += JSON.stringify(data);
            lat = data.lattitude;
            lon = data.longitude;
            fetch(full_link_for_local).then(response => response.json()).then(coord => {
                console.log("coord\n", coord);
            });
        });
}
geolocation();


function ip(){
    fetch(ip_v4_link).
    then((ip_res)=>ip_res.json()).
    then((ip_data)=>{
        console.log("IP data\n",ip_data);
        document.getElementById('ip').textContent += JSON.stringify(ip_data);
    });
    //dual
    fetch(ip_dual_link).then(res=>res.json()).then(dual=>{
        console.log("Dual IP: \n",dual);
        document.getElementById('ip').textContent += JSON.stringify(dual);
    })
}
ip();


function info_byIP(){
    //by ip v4
    fetch(ipV4InfLink).then(res=>res.json()).then(inf=>{
        console.log("Informations V4: \n",inf);
        document.getElementById('ip_inf').innerHTML += `<b>By ip-v4:</b> <br>${JSON.stringify(inf)}`;
    });
    //by ip v6
    fetch(ipV6InfLink).then(res=>res.json()).then(inf=>{
        console.log("Informations V6: \n",inf);
        document.getElementById('ip_inf').innerHTML +=`<b>By IP-V6:</b> <br>${JSON.stringify(inf)}`;
    });
}
info_byIP();


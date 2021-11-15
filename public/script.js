function getlocations() {
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=bf6511faeaea415792321186cb641f35')
        .then((res) => res.json())
        .then((datatimeuz) => {
            consleTimeData(datatimeuz)
        })
}
getlocations()

async function consleTimeData(datatimeuz) {
    let {
        current_time
    } = await datatimeuz.timezone
    document.querySelector(".hbs_d").innerHTML = current_time
    document.querySelector(".city_info_map").innerHTML = datatimeuz.city
} // ================================================================ // API kalitlari ochiq ,ma'lumotlar olindi // consule ...
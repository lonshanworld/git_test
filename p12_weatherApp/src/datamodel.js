class weatherdatamodel{
    constructor (city,country,image,title,description,temp,humitidy,pressure,ws,wd){
        this.city =city;
        this.country = country;
        this.image = image;
        this.title = title;
        this.description = description;
        this.temp = temp;
        this.humitidy = humitidy;
        this.pressure = pressure;
        this.ws = ws;
        this.wd = wd;
    }
}

class laglong{
    constructor(latitude,longitude){
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default weatherdatamodel;
export {laglong};
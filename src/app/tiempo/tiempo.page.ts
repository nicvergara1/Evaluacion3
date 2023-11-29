import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})

export class TiempoPage{
  weatherTemp: any;
  todayDate = new Date();
  nombreCiudad = "Melipilla";
  weatherIcon : any;
  weatherDetails : any;
  name="";

  constructor(public httpClient:HttpClient) { 
    this.loadData()
  }

  loadData(){
    this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nombreCiudad}&appid=2ab41b64df8b07e4edeb61216a145e85`).subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main']
      this.name = results['name']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails)
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`  
    })
      
      }

}

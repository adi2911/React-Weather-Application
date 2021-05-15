import React, { Component } from 'react'
import WeatherCards from './WeatherCards'
var bgStyle={
    backgroundRepeat:"no-repeat",
    backgroundImage:`url(${'https://cache.desktopnexus.com/thumbseg/2325/2325881-bigthumbnail.jpg'})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    height:"100vh"
}
var cityD="";

export default class WeatherRecords extends Component {
    state={
        allRec:[],
        perDay:[],
        city:"Delhi"
    }
    componentDidMount(){
        const weatherurl=`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=2cc60b9d293603c2b43f2b1162bababb`;//"http://api.openweathermap.org/data/2.5/weather?q=pune&units=imperial&appid=3259ca2352a03272fd199628704bd175";
        fetch(weatherurl)
        .then(res => res.json())
        .then(record => {
            console.log(record)
          const dailyRec = record.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({
            allRec: record.list,
            perDay: dailyRec
          }, () => console.log(this.state))
        })
        }
        componentDidUpdate(){
            const weatherurl=`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=2cc60b9d293603c2b43f2b1162bababb`;//"http://api.openweathermap.org/data/2.5/weather?q=pune&units=imperial&appid=3259ca2352a03272fd199628704bd175";
            fetch(weatherurl)
            .then(res => res.json())
            .then(record => {
              const dailyRec = record.list.filter(reading => reading.dt_txt.includes("18:00:00"))
              this.setState({
                allRec: record.list,
                perDay: dailyRec
              }, () => console.log(this.state))
            })
                
        }
       
    formatCards(){
     // this.state.perDay.map((reading,index)=>console.log(reading))
       return this.state.perDay.map((reading,index) => <WeatherCards  tempMax={reading.main.temp_max} 
       date={reading.dt} tempMin={reading.main.temp_min} weatherMain={reading.weather[0].main} pressure={reading.main.pressure}
       humidity={reading.main.humidity} weatherId={reading.weather[0].id} weatherDesc={reading.weather[0].description} key={index}/>)
    }
    searchClick=(e)=>{
        cityD=e.target.value
        console.log(cityD)
    }
    submitButton=(e)=>{
            this.setState({
            city:cityD
        })
        console.log(this.state.city)
    }
    render() {
        
        return (
            <div className="container-fluid" style={bgStyle}>
                <div className="row justify-content-center">
                   <div className="col-9">
                    <input className="form-control text-center"  onChange={this.searchClick} name="city" type="text" placeholder="CITY NAME" autoFocus/>
                    </div>
                    <div className="col-3">
                    <button className="btn btn-success" onClick={this.submitButton}>Search</button>
                    </div>
                </div>
                 <h1 className="text-white mt-5 font-weight-bold">{this.state.city}</h1>
                <div className="row justify-content-center mx-auto" >
                {this.formatCards()}   
                </div>
            </div>
        )
    }
}

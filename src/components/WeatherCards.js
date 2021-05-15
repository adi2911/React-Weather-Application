import React,{useState}from 'react'
import * as moment from 'moment';


export default function WeatherCards(props) {
    const imgURL = `owf owf-${props.weatherId} owf-5x`
    const [display,setDisplay]=useState(false)
    const [border,setBorder]=useState("card  border-info mr-2 mb-2 ")
    let date=new Date()
    const day=(props.date)*1000
    date.setTime(day)
    return (
        <div>
        <div className={border} onMouseEnter={()=>{setDisplay(true);setBorder("card border-danger bg-white mr-2 mb-2");}} onMouseLeave={()=>{setDisplay(false);setBorder("card border-info bg-transperant mr-2 mb-2");}}>
            <div className="card-body bg-transperant">
            <h5 className="card-title  font-weight-bold">{moment(date).format('dddd')}</h5>
            <p className="text-warning font-weight-italic">{moment(date).format('MMMM Do, h:mm a')}</p>
            <i className={imgURL}></i>
            <p><strong className="text-warning">{props.weatherDesc}</strong> </p>
            <p><b>Max temp:</b><span className="text-warning">{props.tempMax}</span></p>
            <p><b>Min temp:</b><span className="text-warning">{props.tempMin}</span></p>
        </div> 
        </div>

        {display && <div className="card bg-white border-danger mr-2">
             <p><b>Pressure:</b> <span className="text-warning">{props.pressure}</span></p>
            <p><b>Humidity</b><span className="text-warning"> {props.humidity}</span></p>
       </div>}
        </div>
    )
}
/*WeatherCards.defaultProps={
    reading:"1",
    key:0
}
*/
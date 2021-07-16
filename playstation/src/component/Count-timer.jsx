import React, { useState,useEffect } from 'react'


function Count_timer(){
    const [time,setTime]=useState("")
    useEffect(()=>{
        let countDownDate=new Date("Jan 01, 2022 00:00:00").getTime();
        
        //update every second
        let x=setInterval(function(){
            //Gets today date and time
            let now=new Date().getTime();

            // find the distance between now and the Count Time Date
            let distance=countDownDate-now;

            let days=Math.floor(distance/(1000 * 60 * 60 *24));
            let hours=Math.floor((distance % (1000 * 60 * 60 * 24))/(1000* 60 * 60));
            let minutes=Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
            let seconds=Math.floor((distance %(1000*60))/1000); 

            setTime(days +  "d" + hours + "h" + minutes + "m" +seconds+"s")

            if(distance<0){
                clearInterval(x);
                setTime("Wait for next tournment");
            }

        },1000)

    },[]);
   
    return <div style={style}>{time}</div>;
}
 
const style={
    fontSize:"3rem",
    textAlign:"center",
    marginTop:"170px",
    backgroundColor:"#38c8a8",
    padding:"20px",
}



export default Count_timer ;
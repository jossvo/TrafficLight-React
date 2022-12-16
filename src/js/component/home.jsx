import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color,setColor]=useState("red")
	const [lightState,setLightState]=useState("stop")
	const [lights,setLights]=useState(["red","yellow","green"])

	const changeColor = ()=>{
		if(color==="red")setColor("yellow")
		else if(color==="yellow")setColor("green")
		else if(color==="green"&&lights.length===3||color==="purple")setColor("red")
		else setColor("purple")
	};
	const addPurple = ()=>{if(lights.includes("purple")){
			setColor("red")
			setLights(["red","yellow","green"])}
			else setLights(lights.concat(["purple"]))
	};

	//setInterval(changeColor,1000);

	/*
	var globalTimer=""
	const startTimer = ()=>{
		if(lightState==="stop")globalTimer=setInterval(changeColor,2000)
		else{
			clearInterval(globalTimer);
			setLightState("stop")
		}
	};
	*/

	return (
		<div className="main">
			<div className="post"></div>
			<div className="stoplight">
				{lights.map((light,index)=>{
					return <div className={
						"light "+
						light+
						(color===light?" on":"")
					} key={index}></div>
				})
				}
				<button onClick={changeColor}>{lightState==="running"?"stop":"change"}</button>
				<button id="purple" onClick={addPurple}>{lights.includes("purple")?"remove":"add"}</button>
			</div>
		</div>
	);
};

export default Home;

import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState("red");
  const [lightState, setLightState] = useState("running");
  const [lights, setLights] = useState(["red", "yellow", "green"]);

  const changeColor = () => {
    if (lightState === "running") {
      if (color === "red") setColor("yellow");
      else if (color === "yellow") setColor("green");
      else if ((color === "green" && lights.length === 3) || color === "purple")
        setColor("red");
      else setColor("purple");
    }
  };
  const addPurple = () => {
    if (lights.includes("purple")) {
      setColor("red");
      setLights(["red", "yellow", "green"]);
    } else setLights(lights.concat(["purple"]));
  };

  useEffect(() => {
    let intervalid = setInterval(changeColor, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, [color,lightState]);

  return (
    <div className="main">
      <div className="post"></div>
      <div className="stoplight">
        {lights.map((light, index) => {
          return (
            <div
              className={"light " + light + (color === light ? " on" : "")}
              key={index}
            ></div>
          );
        })}
        <button
          onClick={() =>
            lightState === "running"
              ? setLightState("stopped")
              : setLightState("running")
          }
		  className={lightState === "running" ? "StartButton-on" : "StartButton-off"}
        >
          {lightState === "running" ? "stop" : "start"}
        </button>
        <button id="purple" onClick={addPurple}
		className={lights.includes("purple") ? "purpleButton-on" : "purpleButton"}>
          {lights.includes("purple") ? "remove" : "add"}
        </button>
      </div>
    </div>
  );
};

export default Home;

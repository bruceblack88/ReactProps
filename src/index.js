import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Bruce Black"
      img="https://media-exp1.licdn.com/dms/image/C5603AQHT45fEuUcwoQ/profile-displayphoto-shrink_800_800/0/1645673982820?e=1656547200&v=beta&t=R3xSwVS1oEIDrZClZfeu4u9opeuNEP0Y4dDi0HHLA5k"
      tel="555-5555"
      email="b@bruce.com"
    />
  </div>,
  document.getElementById("root")
);

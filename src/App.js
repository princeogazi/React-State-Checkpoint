import React, { Component } from "react";
import './App.css';
import Card from "react-bootstrap/Card";
import Princewill from './images/Princewill.jpg'; //imported image from the image folder

class App extends React.Component {
  state = {
    person: {
      fullName: "Princewill Ogazi",
      bio: "A graduate of Mass Communication from Imo State",
      imgSrc: Princewill,
      profession: "Junior Full Stack Developer",
    },
    show: true,
    timeSinceMount: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <Card className="cardbox" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} alt='photo' className="cardimage" />
            <Card.Body>
              <Card.Title><h2>{this.state.person.fullName}</h2></Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <Card.Text><b>{this.state.person.profession}</b></Card.Text>
            </Card.Body>
          </Card>
        )}
        <button className="tbutton" onClick={() => {
          this.setState({ show: !this.state.show });
        }}>Toggle Profile</button>
        <p>Time Since Mount: {this.state.timeSinceMount}</p>
      </div>
    );
  }
}

export default App;
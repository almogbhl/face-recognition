import React, { Component } from "react";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";

const particalsOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: 'd6cbad3270544fd1b3a9f15c6d145e07'
 });




class App extends Component {

  state = {
    input: "",
    img_url: "",
    box: {}
  }

  calc_face_location = data => {
    const face_1 = data.outputs[0].data.regions[0].region_info.bounding_box;

    const img = document.querySelector('#input_image');
    const width = Number(img.width);
    const height = Number(img.height);
    return {
      left_col: face_1.left_col * width,
      top_row: face_1.top_row * height,
      right_col: width - (face_1.right_col * width),
      bottom_row: height - (face_1.bottom_row * height)
    }
  }

  display_face_box = box => {
    this.setState({box: box})
  }

  on_input_change = event => {
    this.setState({
      input: event.target.value
    })
  }

  on_button_click = () => {
    this.setState({
      img_url: this.state.input
    })

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input
      )
      .then(response => this.display_face_box(this.calc_face_location(response)) )
      .catch(err => console.log(err));

  }

 


  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particalsOptions} />
        <ImageLinkForm on_input_change={this.on_input_change} on_button_click={this.on_button_click} />
        <FaceRecognition box={this.state.box} img_url={this.state.img_url} />
      </div>
    );
  }
}

export default App;

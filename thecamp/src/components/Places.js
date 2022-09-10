import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./Places.css"

class Places extends React.Component {
  render () {
    return (  
      <div className="places-container">
        <div class="container text-center">
          <div class="row">
            <div class="col-3">
              <img src={this.props.data[29].media.url} className="item"/>
              <p className="flex-name">{this.props.data[29].name}</p>

              <img src={this.props.data[28].media.url} className="item" />
              <p className="flex-name">{this.props.data[28].name}</p>

              <img src={this.props.data[22].media.url} className="item"/>
              <p>{this.props.data[22].name}</p>
              <img src={this.props.data[2].media.url} className="item"/>
              <p className="flex-name">{this.props.data[2].name}</p>

              <img src={this.props.data[8].media.url} className="item"/>
              <p className="flex-name">{this.props.data[8].name}</p>

              <img src={this.props.data[7].galerie[5].url} className="item"/>
              <p className="flex-name">{this.props.data[7].name}</p>

              <img src={this.props.data[6].galerie[2].url} className="item"/>
              <p className="flex-name">{this.props.data[6].name}</p>

              <img src={this.props.data[0].galerie[0].url} className="item"/>
              <p className="flex-name">{this.props.data[0].name}</p>

              <img src={this.props.data[12].media.url} className="item"/>
              <p className="flex-name">{this.props.data[12].name}</p>

              <img src={this.props.data[11].media.url} className="item"/>
              <p className="flex-name">{this.props.data[11].name}</p>
            </div>

            <div class="col-3">
              <img src={this.props.data[10].media.url} className="item"/>
              <p className="flex-name">{this.props.data[10].name}</p>

              <img src={this.props.data[13].media.url} className="item"/>
              <p className="flex-name">{this.props.data[13].name}</p>

              <img src={this.props.data[5].media.url} className="item"/>
              <p className="flex-name">{this.props.data[5].name}</p>

              <img src={this.props.data[4].media.url} className="item"/>
              <p className="flex-name">{this.props.data[4].name}</p>

              <img src={this.props.data[18].media.url} className="item"/>
              <p className="flex-name">{this.props.data[18].name}</p>

              <img src={this.props.data[14].media.url} className="item"/>
              <p className="flex-name">{this.props.data[14].name}</p>

              <img src={this.props.data[27].media.url} className="item"/>
              <p className="flex-name">{this.props.data[27].name}</p>

              <img src={this.props.data[3].media.url} className="item"/>
              <p className="flex-name">{this.props.data[3].name}</p>

              <img src={this.props.data[26].media.url} className="item"/>
              <p className="flex-name">{this.props.data[26].name}</p>

              <img src={this.props.data[15].media.url} className="item"/>
              <p className="flex-name">{this.props.data[15].name}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Places;

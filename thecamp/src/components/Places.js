import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Places.css'
import Card from './Card'

class Places extends React.Component {
  render () {
    return (
      <div className="places-container">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
        <div class="container text-center tab-pane toto">
          <div class="row">
            <div class="col-3">
              <Card data={this.props.data} nb="29"/>
              <Card data={this.props.data} nb="28"/>
              <Card data={this.props.data} nb="22"/>
              <Card data={this.props.data} nb="2"/>
              <Card data={this.props.data} nb="8"/>
              <Card data={this.props.data} nb="7"/>
              <Card data={this.props.data} nb="6"/>
              <Card data={this.props.data} nb="0"/>
              <Card data={this.props.data} nb="12"/>
              <Card data={this.props.data} nb="11"/>
            </div>

            <div class="col-3">
              <Card data={this.props.data} nb="10"/>
              <Card data={this.props.data} nb="13"/>
              <Card data={this.props.data} nb="5"/>
              <Card data={this.props.data} nb="4"/>
              <Card data={this.props.data} nb="18"/>
              <Card data={this.props.data} nb="14"/>
              <Card data={this.props.data} nb="27"/>
              <Card data={this.props.data} nb="3"/>
              <Card data={this.props.data} nb="26"/>
              <Card data={this.props.data} nb="15"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Places;

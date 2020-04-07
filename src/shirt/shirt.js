import React, { Component } from 'react';
import './shirt.css';
//import { Row, Col, Button, Form, Table } from 'react-bootstrap/';
import GenPDF from './GenPDF';
import { PDFDownloadLink } from "@react-pdf/renderer";
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



class Shirt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(this.state.formControls)

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }

    });
    

  }
  handleSubmit(event) {
    event.preventDefault();
    GenPDF(this.state.formControls)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Shirt:</legend>
            <label>
              one: <br />
              <input type="number" name="one" value={this.state.formControls.one} onChange={this.handleChange} />
            </label>
            <label>
              two: <br />
              <input type="number" name="two" value={this.state.formControls.two} onChange={this.handleChange} />
            </label>
            <label>
              three: <br />
              <input type="number" name="three" value={this.state.formControls.three} onChange={this.handleChange} />
            </label>
            <label>
              four: <br />
              <input type="number" name="four" value={this.state.formControls.four} onChange={this.handleChange} />
            </label>
            <label>
              five: <br />
              <input type="number" name="five" value={this.state.formControls.five} onChange={this.handleChange} />
            </label>
            <label>
              six: <br />
              <input type="number" name="six" value={this.state.formControls.six} onChange={this.handleChange} />
            </label>
            <label>
              seven: <br />
              <input type="number" name="seven" value={this.state.formControls.seven} onChange={this.handleChange} />
            </label>
            <label>
              eight: <br />
              <input type="number" name="eight" value={this.state.formControls.eight} onChange={this.handleChange} />
            </label>  <br />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      
        {<PDFDownloadLink
        document={<GenPDF data={this.state.formControls} />}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>}

      </div>
    );
  }
}

export default Shirt;
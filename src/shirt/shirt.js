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
      },
      show: false
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
    this.setState({ show: true })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h6 className="text-primary">Shirt Measurmets:</h6>
          <table>
            <tbody>
              <tr>
                <td className="ui header">One:</td>
                <td>
                  <input type="number" name="one" value={this.state.formControls.one} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Two:</td>
                <td>
                  <input type="number" name="two" value={this.state.formControls.two} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Three:</td>
                <td>
                <input type="number" name="three" value={this.state.formControls.three} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Four:</td>
                <td>
                <input type="number" name="four" value={this.state.formControls.four} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Five:</td>
                <td>
                <input type="number" name="five" value={this.state.formControls.five} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Six:</td>
                <td>
                <input type="number" name="six" value={this.state.formControls.six} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Seven:</td>
                <td>
                <input type="number" name="seven" value={this.state.formControls.seven} onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td className="ui header">Eight:</td>
                <td>
                <input type="number" name="eight" value={this.state.formControls.eight} onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Submit</button> <br /> <br />
        </form>


        {this.state.show && <PDFDownloadLink
          document={<GenPDF data={this.state.formControls} />}
          fileName="measurment.pdf"
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
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import PantSchema from "../Validations.js";

import './Pant.css';



class Pant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {}
    };
  }

  // componentWillMount(){}
  componentDidMount(){
    fetch('https://next.json-generator.com/api/json/get/EkRkX7pwu')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ initialValues: data })
        })
        .catch(console.log)
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="container mx-3">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5 text-primary text-uppercase">Pant Measurements</h1>
          </div>
        </div>
        <div className="row mx-3">
          <div className="col-12 px-0">
            <Formik
              enableReinitialize
              initialValues={this.state.initialValues}
              validationSchema={PantSchema}
              onSubmit={(values, actions) => {
                alert("Form is validated! Submitting the form...");
                this.setState({...this.state, initialValues: values})
                console.log(values, this.state.initialValues);

                actions.setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form className="form-inline">
                  <div className="form-group col-6 mb-2">
                    <label htmlFor="length" className="col-4 col-form-label">Pant Length:</label>
                    <Field
                      type="number"
                      name="length"
                      placeholder="Enter pant length"
                      className={`form-control ${
                        touched.length && errors.length ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="length"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="west" className="col-4 col-form-label">West:</label>
                    <Field
                      type="number"
                      name="west"
                      placeholder="Enter west size"
                      className={`form-control ${
                        touched.west && errors.west ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="west"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="hip" className="col-4 col-form-label">Hip:</label>
                    <Field
                      type="number"
                      name="hip"
                      placeholder="Enter hip size"
                      className={`form-control ${
                        touched.hip && errors.hip ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="hip"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="thigh" className="col-4 col-form-label">Thigh:</label>
                    <Field
                      type="number"
                      name="thigh"
                      placeholder="Enter thigh size"
                      className={`form-control ${
                        touched.thigh && errors.thigh ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="thigh"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="knee" className="col-4 col-form-label">Knee: </label>
                    <Field
                      type="number"
                      name="knee"
                      placeholder="Enter knee size"
                      className={`form-control ${
                        touched.knee && errors.knee ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="knee"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="buttom" className="col-4 col-form-label">Buttom: </label>
                    <Field
                      type="number"
                      name="buttom"
                      placeholder="Enter buttom size"
                      className={`form-control ${
                        touched.buttom && errors.buttom ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="buttom"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="inside" className="col-4 col-form-label">Inside:</label>
                    <Field
                      type="number"
                      name="inside"
                      placeholder="Enter inside size"
                      className={`form-control ${
                        touched.inside && errors.inside ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="inside"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group col-6 mb-2">
                    <label htmlFor="ply" className="col-4 col-form-label">PLY:</label>
                    <Field
                      type="number"
                      name="ply"
                      placeholder="Enter ply size"
                      className={`form-control ${
                        touched.ply && errors.ply ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="ply"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <div className="form-group  offset-3 col-6 mb-2">
                    <label htmlFor="fullRound" className="col-4 col-form-label">Full Round:</label>
                    <Field
                      type="number"
                      name="fullRound"
                      placeholder="Enter full round size"
                      className={`form-control ${
                        touched.fullRound && errors.fullRound ? "is-invalid" : ""
                        }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="fullRound"
                      className="invalid-feedback offset-4"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Pant;
import React, { Component } from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
// Text, View,
class GenPDF extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.data)
        
    }
    // Create styles
    styles() {
        StyleSheet.create({
            page: {
                flexDirection: 'row',
                backgroundColor: '#E4E4E4'
            },
            section: {
                margin: 10,
                padding: 10,
                flexGrow: 1
            }
        });
    }

    // Create Document Component
    render() {
        return (
            <Document>
                <Page size="A4" style={this.styles.page}>
               

                  { /*</Page> <View style={this.styles.section}>
                       // <Text>Section #1</Text>
        
                        {this.props.data.map((a) => {
                            return (
                                <View >
                                    <Text >{a}</Text>
                                </View>
                            );
                        })
                    }
                  {/*  </View>
                  //  <View style={this.styles.section}>
                        <Text>Section #2</Text>
                  </View> */}
                </Page>
            </Document>
        );
    }
}

export default GenPDF;
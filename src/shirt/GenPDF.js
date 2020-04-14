import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from "@react-pdf/renderer";
import Header from './Header';

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff" ,
        padding: 30,
          
    },
    section: { color: 'black', textAlign: 'center' },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
       
      },
});






function GenPDF(props) {



    console.log("pdf props", props.data);

    return (
        <Document>
            <Page size="Letter" style={styles.page} >
                
            <Header />
                

                {props.data
                    ? Object.entries(props.data).map(([key, value]) => {
                        return (
                            <View style={styles.section}>
                                <Text >{key} : {value}</Text>
                            </View>
                        )
                    })
                    : ""}
            </Page>
        </Document>
    );

}


export default GenPDF;
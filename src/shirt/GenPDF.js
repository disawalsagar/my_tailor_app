import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff"
    },
    section: { color: 'black', textAlign: 'center'}
});
function GenPDF(props) {

   
   
        console.log("pdf props", props.data);
        return (
            <Document>
                <Page size="A4" style={styles.page} >
                <View style={styles.section}>
                                <Text >Measurement</Text>
                              
                                
                 </View>
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
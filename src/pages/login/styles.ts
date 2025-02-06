import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        /*padding:20,*/
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
       /* backgroundColor:'red',*/
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
       
        

        
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
       /* backgroundColor:'green',*/
        paddingHorizontal:37
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
       /* backgroundColor:'blue',*/
        width:'100%',
    },

    logo:{
        height:50,
        width:80,
        alignItems:'center',
    },

    text:{
       fontWeight:'bold',
        marginTop:40
    },

    titleInput:{
        marginLeft:5,
        color:themas.colors.gray
    }

})
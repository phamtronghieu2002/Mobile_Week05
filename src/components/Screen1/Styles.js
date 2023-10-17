import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1,
        paddingLeft: 22,
        paddingRight: 22
    }
    , thumb: {
        width: 301,
        height: 361,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    , name: {
        fontSize: 15,
        fontWeight: 400,
        color: '#000000',


    }
    ,

    infor: {
        gap: 15
    },
    rating: {
        flexDirection: 'row',
        marginLeft: -8,
        gap: 10
    },
    danhgia: {
        fontSize: 15,
        fontWeight: 400,
        color: '#000000'
    },

    wpPrice: {
        flexDirection: 'row',
        gap: 10
    },
    newPrice: {
        fontWeight: 700,
        color: '#000000'
    },
    oldPrice: {
        fontWeight: 400,
        color: '#000000',
        textDecorationLine: 'line-through'

    },
    wpSelectColor: {
        position:'relative',
        borderBlockColor:'black',
        borderRadius:10,
        borderWidth:1,
        paddingTop:5,
        paddingBottom:5
        




    },
    
    buttonAction:{
        backgroundColor:'#CA1536',
        height:44,
        justifyContent:'center',
        marginTop:59,
        borderRadius:10,
    },
    textBtn:{
           textAlign:'center',
           fontSize:20,
           fontWeight:700,
           color:'#fff'
    },



})

export default styles
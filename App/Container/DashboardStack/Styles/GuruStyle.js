import { StyleSheet, Dimensions } from 'react-native'
import { width, height } from 'react-native-dimension'
import { Colors } from '../../../Metrics/index'


let Window = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#231F1F'
    },
    header:{
        backgroundColor: Colors.theme
      },
      headertext:{fontSize:28,color:'#F8E0D4'},
      backlogo:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    headerDiv:{
        width:'80%',
        height:'100%',
        justifyContent:'center',
    },
    animatedview:{
        width:'100%',
        height:null,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    textDiv:{
        width:'100%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    askbtn:{
        width:80,
        height:80,
        borderRadius:80,
        backgroundColor:'#F8E0D4',
        justifyContent:'center',
        alignItems:'center'
    },
    padding_100:{
        width:'100%',
        height:100
    }
})
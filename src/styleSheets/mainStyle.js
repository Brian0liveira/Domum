import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     
  containers:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

    background:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      height: '100%',
      width: '100%'
    },
  
    contLogo:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10%',
    },
  
    img:{
      width: 250,
      height: 150
    },

    input:{
      fontFamily: 'Roboto',
      backgroundColor: 'white',
      width: '90%',
      marginBottom: 0,
      color: '#222',
      fontSize: 17,
      borderRadius: 5,
      padding: 10
    },
  
    btnSubmit:{
      backgroundColor: '#4BD6BC',
      marginTop: '5%',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      width: '67%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
  
    textSubmit:{
      
      color: 'white',
      fontSize: 17
    },
  });

  export default styles
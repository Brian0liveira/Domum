import { StyleSheet } from 'react-native';



const StylesDescubra = StyleSheet.create({

  header:{
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    marginTop: '7%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  menu:{
    width:'auto',
    height: 'auto',
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex:1,
  },

  titulo:{
    fontFamily: 'Rubik',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
    width: '100%',
  },

  si:{
    width: '100%', 
    height: '60%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row',
    paddingTop: '5%',
  },

  containerInfo:{
    marginLeft: 30,
    flex:1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center',
    width: 300,
    height: '95%',
    backgroundColor: '#9BD1FD',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },

  containerInfoTitle:{
    width: '95%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },

  containerInfoText:{
    width: '95%',
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },

  circles:{
    flexDirection:'row', 
    width: '100%', 
    height: '5%', 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  button:{
    width: '100%',
    marginBottom: '10%',
    marginTop: 'auto',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDesign:{
    width: '70%',
    height: '120%',
    backgroundColor: '#2DA1FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },

  });

  export default StylesDescubra
import React, { Component } from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import Imagem from './src/component/imagem'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      frase:'',
      
     
     
    }
    this.enviar=this.enviar.bind(this);
  }
  enviar(){
    if(this.state.frase===''){
      this.setState({frase:'"Para ver muita coisa é preciso despregar os olhos de si mesmo."'})
    }  else {
      this.setState({frase:'"Não espero que meu caminho pela vida seja fácil, apenas que o destino final valha a pena."'})
    }
    
    

  }
  
  render(){
    return(
      <View style={styles.container}>
        <Imagem largura={250} altura={250}/>
        <Text style={styles.texto} >{this.state.frase}</Text><br></br>
        <Button title='Abrir Frase do Dia' onPress={this.enviar} />
        

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:20,
    
  },
  texto:{
    fontSize:25,
  }
});

export default App;

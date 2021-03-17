import React,{Component} from 'react';
import {View,Image} from 'react-native';

class Imagem extends Component{
    render(){
     let imagem='https://st.depositphotos.com/1941341/2462/i/950/depositphotos_24620781-stock-photo-open-book.jpg'
      return(
          <View>
       <Image
       source={{uri:imagem}}
       style={{width: this.props.largura ,height:this.props.altura}}
       
       />
       
       </View>
      )
    }
}

export default Imagem;
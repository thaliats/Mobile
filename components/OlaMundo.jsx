import React, {Component} from 'react'
import {Text,View} from 'react-native'

class OlaMundo extends Component{
    render(){
      //aqui dentro vai ficar o código JSX
      return (
          <View>
              <Text style={{fontSize:23,fontWeight:'bold'}}>
                  Ilustradora e designer
              </Text>
          </View>
      )  
    }
}

export default OlaMundo
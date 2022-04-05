import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';

class Note extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        title: this.props.data.title,
        body: this.props.data.description,
      }
    }

    updateData = async () => {
      this.props.db.transaction(async (tx) => {
          await tx.executeSql('UPDATE Notes SET title = ?, description = ? WHERE id = ?', [this.state.title, this.state.body, this.props.nId]);
      })
    }

    render() {
      return (
        <View style={styles.container}>
          <TextInput 
            style={styles.title}
            value = {this.state.title}
            onChangeText={(text) => {this.setState({title: text}); this.updateData()}}
            placeholder="Title"
            placeholderTextColor="#999999" 
            
          />
          <TextInput 
            style={styles.body}
            value = {this.state.body}
            onChangeText={(text) => {this.setState({body: text}); this.updateData()}}
            placeholder="Body"
            placeholderTextColor="#999999" 
            multiline = {true}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:'column',
    height:'90%',
  },
  title:{
    padding:10,
    borderWidth: 1,
    borderColor: '#00ccff',
    borderRadius:7,
    color:"black",
    fontSize:20,
    flex:0.07,
    marginBottom:10,
  },
  body:{
    padding:10,
    borderWidth: 1,
    borderColor: '#00ccff',
    borderRadius:7,
    color:"black",
    fontSize:15,
    flex:0.93,
    textAlignVertical: 'top',
  }
});

export default Note;

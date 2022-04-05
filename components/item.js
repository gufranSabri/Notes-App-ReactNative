import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

class Item extends React.Component {
    state = {
        isBookmarked: false,
        title:"",
        description:"",
        backgroundColor:"white"
    };

    render() {
        return (
            <TouchableOpacity onPress={()=>{this.props.onClickNote(this.props.data.id)}}>
                <View style={{...styles.item, backgroundColor:this.state.backgroundColor}}>
                    <View>
                        <Text style={styles.heading}>{this.props.data.heading}</Text>
                        <Text style={styles.description}>{this.props.data.desc}</Text>
                    </View>
                    
                    <View style={styles.right}>
                        {/* <TouchableOpacity onPress={()=>{this.setState({backgroundColor:this.state.isBookmarked?"white":"#ccf5ff",isBookmarked:!this.state.isBookmarked})}} >
                            <Text style={styles.rightIcon}><Icon2 name="bookmark-outline" size={25} color='#404040'/></Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={()=>{this.props.onDelete(this.props.data.id)}} >
                            <Text style={styles.rightIcon} ><Icon2 name="delete" size={25} color='#404040'/></Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        padding:15,
        paddingRight:7,
        backgroundColor:'white',
        borderRadius:10,
        marginBottom:10,
        borderColor:'#00ccff',
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    heading:{
        fontSize:20,
        color:"black",
        fontWeight:'600',
    },
    description:{
        fontSize:12,
        color:"gray",
    },
    right:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        // width:'23%',
        height:'100%',
        alignItems:'center',
    },
    rightIcon:{
        padding:7,
    }
});

export default Item;
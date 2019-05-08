import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
    state= { albums: [] };
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));           //fetching of data 
    }
    //renderAlbum(){
        //const {textStyle} = styles;
    // return this.state.albums.forEach(item => {
    //     return <Text key = {item.title}>{item.title}</Text>;
    // });
    // return (this.state.albums.map(album => { 
    //     <Text >Hello</Text>
    // }));
    render(){
        console.log(this.state);
        //const {viewStyle} = styles;
        return(
            <ScrollView>
                { this.state.albums.map(album => 
                    <AlbumDetails key = {album.title} album = {album} />
                )}
            </ScrollView>
        );
    }
}
// const styles = {
//     viewStyle : {
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingTop: 10,
//         backgroundColor: '#00f',
//         flex:1
//     },
//     textStyle : {
//         height: 40,
//         fontSize: 30,
//         color: '#f00'
//     }
// }
export default AlbumList;
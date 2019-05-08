import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';



const AlbumDetails = (props)=>{
    return(
        <Card>
            <CardSection>
                <View style = {styles.headingsandimage}>
                    <View>
                        <Image style = {styles.thumbnailStyle} 
                        source = { { uri: props.album.thumbnail_image}} />
                    </View>
                    <View style = {styles.headerdetails}>
                        <Text style = {styles.headerAlbumName}>{props.album.title}</Text>
                        <Text>{props.album.artist}</Text>
                    </View>
                </View>
                <Image style = {styles.imageSize}
                source = {{uri: props.album.image}} />
                <Button onPress = {()=> {Linking.openURL(props.album.url)}} album = {props.album}/>
            </CardSection> 
        </Card>
    )
};
const styles = {
    headingsandimage: {
        flexDirection: 'row'
    },
    headerdetails: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    imageSize: {
        height: 300
    },
    thumbnailStyle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 25
    },
    headerAlbumName: {
        fontSize: 20
    }
}
export default AlbumDetails;
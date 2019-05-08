//Import a library to create a component
import React from  'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//create a component

const app = () => (
    <View style = { {flex :1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
)


//render a component to a device

AppRegistry.registerComponent('albums', () => app)


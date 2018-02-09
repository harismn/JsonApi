//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet,FlatList } from 'react-native';
import Axios from 'axios'
import { Card, Image, View, Subtitle, Caption } from '@shoutem/ui';

// create a component
class Home extends Component {
    constructor() {
        super()
        this.state ={
            users : null
        }
    }
    componentWillMount()    {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then (({data}) => {
            console.log('ini data masuk', data )
            this.setState({
                users : data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        console.log('ini data di render', this.state.users);
        const{ users } = this.state
        let result = ''
        if(users){
            result = users
        }

        return (
            <View style={styles.container}>
                <FlatList 
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Card>
                    <Image
                      styleName="medium-wide"
                        source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png'}}
                    />
                    <View styleName="content">
                      <Subtitle>{item.name}</Subtitle>
                      <Caption>{item.website}</Caption>
                    </View>
                  </Card>
                )}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    list: {
        backgroundColor: 'orange',
        padding: 20,
        margin: 20
    },
});

//make this component available to the app
export default Home;

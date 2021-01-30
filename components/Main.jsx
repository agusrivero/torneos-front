import React from 'react';
import { Text, View, Button} from 'react-native';

const Main = ({navigation}) => {
    return(
        <View>
            <Text>Hello World</Text>
            <Button title="Navigate" onPress={() => navigation.navigate('Torneos', {id: 3})}/>
        </View>
    )
}

export default Main;
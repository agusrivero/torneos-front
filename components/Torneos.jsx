import React from 'react';
import { Text, View } from 'react-native';

const Torneos = ({navigation, route}) => {
    return(
        <View>
            <Text>Mi id es: {route.params.id}</Text>
        </View>
    )
}

export default Torneos
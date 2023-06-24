import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import Input from '../components/input'
const LandingScreen = (props) => {
    const [name, setName] = useState(null)
    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Enter Your name to participate in chat!</Text>

            <Input
                placeholder='Enter name here'
                onChangeText={(t) => setName(t)}


            />
            <Button
            title= 'Next'
            onPress={()=>props.navigation.navigate('Chat' , {name})}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },

})

export default LandingScreen
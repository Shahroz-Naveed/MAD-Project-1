import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native'
import Input from "../components/input"
import {useState}  from 'react';
import index from '../navigation/index'
const ChatScreen = (props) => {
    alert(props.route.params.name)
    const { name } = props.route.params;
    const data = [
        {
            message: 'hello',
            messageFrom: 'Shahroz'
        },
        {
            message: 'Hi',
            messageFrom: 'Mazhar'
        },
        {
            message: 'Hey',
            messageFrom: 'Akash'
        }
    ]
    const [message, setMessage] = useState(null)
    return (
        <View style = {{flex:1,justifyContent:'space-between'}}>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View 
                        style={name == item.messageFrom ? 
                            {
                                 width: "45%",
                                   backgroundColor: '#12AD2B',
                                   margin: 5,
                                   padding: 5,
                                   borderRadius: 10, 
                                   height: 50 } :
                            {
                                 width: "45%", 
                                 backgroundColor: 'grey',
                                 padding: 5,
                                 borderRadius: 10, 
                                 margin:5,
                                 height: 50, 
                                 alignSelf: 'flex-end', }}
                        >
                            {item.messageFrom === name ? (
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>{'You'}</Text>
                            ) : ( 

                                <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.messageFrom}</Text>

                            )}
                            <Text>{item.message}</Text>
                        </View>
                    )

                }}

                keyExtractor={item => item.message}
            />
            <View>
            <Input
                placeholder={"Enter Your Message!"}
                onChangeText={(t)=>setMessage(t)}
            />
            <Button
                title='send'
                onPress={() => {}}

            />
            </View>

        </View>
    )

            }
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },

})
export default ChatScreen
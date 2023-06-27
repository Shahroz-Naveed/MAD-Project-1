import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native'
import Input from "../components/input"
import { useState, useEffect } from 'react';
import index from '../navigation/index'
import { SendMessage } from '../services/ChatServices';
import { onSnapshot, collection, query, where, getFirestore ,Timestamp} from 'firebase/firestore';
import firebaseApp from "../services/firebase"
const ChatScreen = (props) => {
    // alert(props.route.params.name)
    const { name } = props.route.params;
    const db = getFirestore(firebaseApp)
    const [message, setMessage] = useState(null)
    const [messages, setMessages] = useState([])
    const onSendPressed = async () => {
        if (message) {
            let res = await SendMessage({ message, messageFrom: name, time:Timestamp.now() })
            if (res.scuccess) {
                setMessage('')

            } else {
                alert("Could'not send Message please try again!")
            }
        }
        else {
            alert("Please Enter your Message first")
        }
    }
    
    useEffect(() => {
        const q = query(collection(db, "Chat"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chat = [];
            querySnapshot.forEach((doc) => {
                chat.push(doc.data());
            });
            setMessages(chat)
        });

    },[])
       
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>

            <FlatList
                data={messages}
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
                                    height: 50
                                } :
                                {
                                    width: "45%",
                                    backgroundColor: 'grey',
                                    padding: 5,
                                    borderRadius: 10,
                                    margin: 5,
                                    height: 50,
                                    alignSelf: 'flex-end',
                                }}
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
                    value={message}
                    placeholder={"Enter Your Message!"}
                    onChangeText={(t) => setMessage(t)}
                />
                <Button
                    title='send'
                    onPress={() => onSendPressed()}

                />
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})
export default ChatScreen
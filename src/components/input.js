import { TextInput, StyleSheet } from 'react-native';
const Input = (props) => {
    return (

        <TextInput
            value={props.value}
            style={styles.input}
            placeholder={props.placeholder}
            onChangeText={(t) => props.onChangeText(t)}
        />


    )
}
const styles = StyleSheet.create({

    Input: {
        backgroundColor: 'd3d3d3',
        height: 40,
        margin: 5,
        borderRadius: 10,
        width: '80%'
    }

})
export default Input
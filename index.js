import {Text, View, Button, Image} from "react-native";
import styles from './style';

export default function App(props) {
    return (
<View style={styles.container}>
<View style={styles.viewImg}>
<Image source={{ uri: props.rpg.imgUrl}} 
style={styles.img}/> </View>
<View style={styles.viewData}>
<Text style={styles.titulo}> {props.rpg.titulo}</Text>
<Text style={styles.desc}> {props.rpg.desc}</Text>
<Text style={styles.habilidades}> {props.rpg.habilidades}</Text>
<Button style={styles.btn} title="Trocar"/>
</View>
 </View>
    );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Rpg from './src/components/Rpg';


export default function App() {
  const rpg = [
{
titulo:'MINOTAURO',
desc:'Um guerreiro metade homem, metade touro, que assusta seus adversarios.',
habilidades:'FORÇA 90; AGILIDADE 50; VELOCIDADE 80; COMBATE 85',
imgUrl:'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2019/02/minotauro-1.jpg',
},

{
  titulo:'ANACONDA',
  desc:'Uma cobra forte e veloz que sufuca quem passa em seu caminho. ',
  habilidades:'FORÇA 80; AGILIDADE 85; VELOCIDADE 90; COMBATE 65',
  imgUrl:'https://i.pinimg.com/originals/11/be/9f/11be9f417147e671e4bd855ef54961ac.jpg',
  },
 
 
  {
    titulo:'BIG-PIG',
    desc:'Um soldado que anda pelos vales com sua espada, pronto para qualquer batalha.',
    habilidades:'FORÇA 70; AGILIDADE 70; VELOCIDADE 60; COMBATE 60',
    imgUrl:'https://i.pinimg.com/originals/c5/71/84/c571845fa193e2561be5f8d6ab108fdd.jpg',
    }




  ]

  return (
    <View style={styles.container}>
      {rpg.map(r=><Rpg rpg = {r}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

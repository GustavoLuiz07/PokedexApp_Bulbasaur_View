import React from 'react';
import {KeyboardAvoidingView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Pokedex () {
  return (
    <KeyboardAvoidingView style={styles.container}>
    <View>

    <Text style={styles.number}>#001</Text> 
    <Text style={styles.pokemonName}>Bulbasaur</Text>
    <Text style={styles.miniInfo}>Seed Pokemon</Text>

    <Image
    style={styles.pokemon}
    source={{ uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28d90cd5-68b4-4663-9419-d8b2b94c1fc2/dadszsn-c1d62212-ead6-4771-b4c0-3d3d4bb29db6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI4ZDkwY2Q1LTY4YjQtNDY2My05NDE5LWQ4YjJiOTRjMWZjMlwvZGFkc3pzbi1jMWQ2MjIxMi1lYWQ2LTQ3NzEtYjRjMC0zZDNkNGJiMjlkYjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HKP433R4kXnpDXiKcY3sRUfSIxCiPpIGXbNGj6EQ-4o"}}
    />

    <Image 
    style={styles.imageType01}
    source={{ uri: "https://pokequizzes.com/wp-content/uploads/2020/09/GRASS-min.png" }}
    />

    <Image 
    style={styles.imageType02}
    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/2048px-Pok%C3%A9mon_Poison_Type_Icon.svg.png" }}
    />

    <Text style={styles.about}>There is a plant seed on it's back right from the day this pokemon is born. The seed slowly grows larger.</Text>

    <TouchableOpacity style={styles.botao}>
    <Text style={styles.botaotxt}>Moves</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.botaoevolutions}>
    <Text style={styles.botaoevolutionstxt}>Evolutions</Text>
    </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white" //cor de fundo da pokédex. Pode ser que eu mude = white!
  },
  number: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 48,
  },
  pokemonName: {
    fontSize: 30,
    color: "black",
    marginLeft: 48,
  },
  miniInfo: {
    fontSize: 16,
    fontWeight: 100,
    color: "black",
    marginLeft: 48
  },
  pokemon: {
    width: 300,
    height: 270,
    marginLeft: 53,
    marginTop: 10
  },
  imageType01: {
    width: 23,
    height: 22,
    borderRadius: 10,
    marginHorizontal: 165
  },
  imageType02: {
    width: 23,
    height: 22,
    marginHorizontal: 192,
    marginTop: -22
  },
  about: {
    marginTop: 10,
    fontSize: 14,
    color: "black",
    marginLeft: 47
  },
  botao: {
    width: 150,
    height: 40,
    left: 46,
    backgroundColor: "#179BFF",
    marginTop: 20,
    borderRadius: 20
  },
  botaotxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginLeft: 45,
    marginTop: 8
  },
  botaoevolutions: {
    width: 150,
    height: 40,
    left: 200,
    top: -40,
    backgroundColor: "red",
    borderRadius: 20
  },
  botaoevolutionstxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: 36,
    marginTop: 8
  }
})

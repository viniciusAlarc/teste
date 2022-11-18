import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebaseconfig";
import styles from "./style"


export default function NovaTask({ navigation }){
    const [description, setDescription] = useState(null)

    function addTask(){
        database.collection("tasks").add({
          description: description,
          status: false,
        })
        Navigation.navigate("task")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
            style={styles.input}
            placeholder="Ex: Lavar as louças"
            onChangeText={setDescription}
            value={description}
            />
            <TouchableOpacity
            style={styles.buttonNovaTask}
            onPress={()=> {
                addTask()
            }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebaseconfig";
import styles from "./style"

export default function Detalhes({ navigation, route }){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    function editTask(description, id){
        database.collection("tasks").doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate("task")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
            style={styles.input}
            placeholder="Ex: Lavar as louças"
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
            />
            <TouchableOpacity
            style={styles.buttonNovaTask}
            onPress={()=> {
                editTask(descriptionEdit, idTask)
            }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
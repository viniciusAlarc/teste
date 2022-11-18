import React, { useState, useEffect } from "react";
import {
     View, 
     Text,
     TouchableOpacity, 
     FlatList
} from "react-native";

import database from "../../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./src/pages/task/style"


export default function Task({ navigation }){
    const [task, setTask] = useState([])


    function deleteTask(id){
        database.collection("tasks").doc(id).delete()
    }

    useEffect(()=>{
        database.collection("tasks").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id })
            })
            setTask(List)
        })
    }, [])

    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( item )=>{
                    return(
                    <View style={styles.Tasks}>
                        <TouchableOpacity 
                        style={styles.deleteTask}
                         onPress={() => {
                            deleteTask(item.id)
                         }}>
                            


                            <FontAwesome
                            name="star"
                            size={23}
                            color="#F92e6a">
                            </FontAwesome>

                        </TouchableOpacity>
                        <Text
                        style={styles.descriptionTask}
                        onPress={()=>{
                            navigation.navigate("Detalhes", {
                                id: item.index,
                                description: item.description
                            })
                        }}>

                            {item.description}
                        </Text>

                    </View>
                    )
                }}
            />

            <TouchableOpacity 
            style={styles.buttonNovaTask}
            onPress={() => navigation.navigate("Nova Task")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
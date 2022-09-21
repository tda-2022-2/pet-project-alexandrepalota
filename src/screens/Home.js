import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MovieListitem from "../components/MovieListItem";

const API = 'http://192.168.2.113:8887/v1/api/cinema'

export default function Home() {

    const [movies, setMovies] = useState([])

    const getMovies = () => {
        axios.get(`${API}/movies`)
            .then(res => {
                setMovies(res.data)
            })
    }

    useEffect(() => {
        getMovies()
    }, [])


    return (
        <SafeAreaView>
            <FlatList
                data={movies}
                renderItem={({item}) => <MovieListitem movie={item}/>}
                keyExtractor={({id}) => id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import SessionListItem from "../components/SessionListItem";

const API = 'http://192.168.2.113:8887/v1/api/cinema'

export default function Sessions(props) {

    const movie = props.route.params

    const [sessions, setSessions] = useState([])
    const [lastPage, setLastPage] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    const updateList = () => {
        axios.get(`${API}/movies/${movie.id}/sessions?size=30&page=${currentPage}`)
        .then(res => {
            console.log(res.data)
            setSessions([...sessions, res.data.content])
            setLastPage(res.data.last)
            setCurrentPage(res.data.pageNumber)
        })
    }
    
    useEffect(() => {
        setSessions([])
        updateList()
    }, [])

    return (
        <FlatList
            data={sessions}
            renderItem={({item}) => <SessionListItem session={item}/>}
            keyExtractor={item => item.id}
        />
    )
}
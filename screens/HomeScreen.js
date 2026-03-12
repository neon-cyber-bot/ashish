import React from 'react';
import { View, FlatList, Text, Button, TextInput, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const [search, setSearch] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    const loadPosts = () => {
        // Placeholder for fetching posts
        const dummyPosts = [
            { id: '1', content: 'First post' },
            { id: '2', content: 'Second post' },
            { id: '3', content: 'Third post' },
        ];
        setPosts(dummyPosts);
    };

    const handlePin = (postId) => {
        // Placeholder for pin functionality
        console.log('Pinned post:', postId);
    };

    React.useEffect(() => {
        loadPosts();
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Text>{item.content}</Text>
                        <Button title="Pin" onPress={() => handlePin(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    postContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
});

export default HomeScreen;
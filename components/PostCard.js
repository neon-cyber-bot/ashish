import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PostCard = ({ post }) => {
    return (
        <View style={styles.card}>  
            <Image source={{ uri: post.image }} style={styles.image} />
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.buttonContainer}>   
                <TouchableOpacity style={styles.button} onPress={post.onLike}> 
                    <Text style={styles.buttonText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={post.onComment}> 
                    <Text style={styles.buttonText}>Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    description: {
        marginVertical: 10,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#007BFF',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PostCard;
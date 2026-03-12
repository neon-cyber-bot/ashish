import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = () => {
  const handleLogin = () => {
    // Implement login functionality
    console.log('User logged in');
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('User logged out');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Profile</Text>
      <Button title='Login' onPress={handleLogin} />
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

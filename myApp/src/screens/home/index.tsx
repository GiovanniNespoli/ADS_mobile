import * as React from 'react';
import { Button, Text, View } from 'react-native';

export function Home({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}
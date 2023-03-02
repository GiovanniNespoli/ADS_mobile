import * as React from 'react';
import { Container, BackGroundImage } from './styles';
import HomeImage from '../../assets/home.svg';

export function Home({ navigation }: { navigation: any }) {
    return (
        <Container>
            <BackGroundImage source={HomeImage} />
        </Container>
    )
}
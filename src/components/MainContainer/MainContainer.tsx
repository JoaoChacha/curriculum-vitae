import React, { FC } from 'react';
import Container from '@material-ui/core/Container';

const MainContainer: FC = ({ children }) => (
    <Container maxWidth="md">
        {children}
    </Container>
)

export default MainContainer
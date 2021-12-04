import  { HStack } from '@chakra-ui/layout';

export const Layout = ({ children }) => {
    return (
        <HStack
            backgroundColor={ 'gray.900' }
            as={ 'main' }
            height={ '100vh' }
            width={ '100vw' }
            justifyContent={ 'center' }
            alignItems={ 'center' }>
            { children }
        </HStack>
    )
}
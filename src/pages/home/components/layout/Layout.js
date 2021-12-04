import  { Flex } from '@chakra-ui/layout';

export const Layout = ({ children }) => {
    return (
        <Flex
            flexDirection={ { base: 'column', md: 'row' } }
            backgroundColor={ 'gray.900' }
            as={ 'main' }
            height={ '100vh' }
            width={ '100vw' }
            justifyContent={ 'center' }
            alignItems={ 'center' }>
            { children }
        </Flex>
    )
}
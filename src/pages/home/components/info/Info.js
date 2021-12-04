import { Box, Link, HStack, Flex } from '@chakra-ui/layout'
import { Heading, Text } from '@chakra-ui/react';

const data = {
    titles: {
        heading: 'A software developer',
        subheading: ' in perpetual growth',
    },
    description: 'Aspiring coder and amateur photographer.',
    jobs: {
        current: {
            intro: 'Currently at ',
            name: 'MOXY',
            url: 'https://moxy.studio',
        }
    },
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/threequartersjohn',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jo%C3%A3o-silva-939614179/',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/joao_silva.90/',
        },
        {
            name: 'Contact',
            url: 'mailto:threequartersjohn@gmail.com',
        },
    ],
}

export const Info = () => {
    return (
        <Flex
            color={ 'gray.300' }
            flexDirection={ 'column' }
            alignItems={ 'flex-start' }
            paddingX={ '2rem' }
            as={ 'section' }
            height={ '20rem' }
            width={ '24rem' }>
                <Box
                    as={ 'header' }>
                    <Heading 
                        as={ 'h1' }
                        lineHeight={ '1' }
                        fontSize={ '2rem' }>
                        { data.titles.heading }
                        <Text 
                            as={ 'span' }
                            fontSize={ '1.6rem' }>
                            { data.titles.subheading }
                        </Text>
                    </Heading>
                </Box>
                <Box
                    as={ 'main' }>
                    <Text
                        paddingTop={ '1.5rem' }>
                        { data.description }
                    </Text>
                    <Text
                        paddingTop={ '0.5rem' }>
                        { data.jobs.current.intro }
                        <Link
                            referrerPolicy={ 'no-referrer' }
                            target={ '_blank' }
                            href={ data.jobs.current.url }>
                            { data.jobs.current.name }
                            { '.' }
                        </Link>
                    </Text>
                </Box>
                <HStack
                    marginTop={  'auto' }
                    as={ 'footer' }>
                        { data.links.map(({name, url}, index) => (
                            <>
                                <Link
                                    referrerPolicy={ 'no-referrer' }
                                    target={ '_blank' }
                                    href={ url }
                                    key={ name }>
                                        { name }
                                </Link>
                                { index !== data.links.length - 1 && 
                                    <Text as={ 'span' }>
                                        {' / '}
                                    </Text>}
                            </>
                        )) }
                </HStack>

        </Flex>
    )
}
import { Box, Link, HStack, Flex } from '@chakra-ui/layout'
import { Heading, Text } from '@chakra-ui/react';
import { Fragment } from 'react';

const data = {
    titles: {
        heading: 'A software developer',
        subheading: ' in perpetual growth',
    },
    description: 'Aspiring coder and amateur photographer.',
    jobs: {
        current: {
            intro: 'Currently at ',
            name: 'Uphold',
            url: 'https://uphold.com/',
        },
        previous: {
            intro: ', previously at ',
            previousJobs: [
                {
                    name: 'MOXY',
                    url: 'https://moxy.studio',
                }
            ]
        }
    },
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/threequartersjohn',
        },
        {
            name: 'Photos',
            url: 'https://www.instagram.com/joao_silva.90/',
        },
        {
            name: 'CV',
            url: 'https://glass-train-5c6.notion.site/Jo-o-Silva-927e110fb20c4ee3ace07ec1bb11da78',
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
            paddingX={{ base: 0, md: '2rem' }}
            paddingTop={{ base: '2rem', md: 0 }}
            paddingBottom={{ base: '1rem', md: 0 }}
            as={ 'section' }
            height={ '20rem' }
            width={{ base: '16rem', md: '24.1rem' }}>
                <Box
                    as={ 'header' }>
                    <Heading 
                        as={ 'h1' }
                        lineHeight={ '1' }
                        fontSize={{ base:'1.49rem', md: '2rem' }}>
                        { data.titles.heading }
                        <Text 
                            as={ 'span' }
                            display={ 'block' }
                            fontSize={{ base:'1.3rem', md: '1.6rem' }}>
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
                        </Link>
                        { data.jobs.previous.intro }
                        { data.jobs.previous.previousJobs.map((job, index, arr) => (
                            <Link
                                key={ job.name }
                                referrerPolicy={ 'no-referrer' }
                                target={ '_blank' }
                                href={ job.url }>
                                { job.name }
                                { arr.length - 1 === index ? '.' : ', '}
                            </Link>
                        )) }
                    </Text>
                </Box>
                <HStack
                    marginTop={  'auto' }
                    as={ 'footer' }>
                        { data.links.map(({name, url}, index) => (
                            <Fragment key={ name }>
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
                            </Fragment>
                        )) }
                </HStack>

        </Flex>
    )
}
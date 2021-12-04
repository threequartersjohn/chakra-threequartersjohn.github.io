import { AspectRatio } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const image = {
    alt: 'Photo of me.',
    src: 'images/selfie.jpg',
};

export const Photo = () => {
    return (
        <AspectRatio
            as={ 'section' }
            ratio={ '1' }
            width={ '20rem' }>
            <Image
                borderWidth={ '0.1rem' }
                borderColor={ 'gray.300' }
                borderStyle={ 'solid' }
                borderRadius={ '25px' }
                alt={ image.alt }
                src={ image.src} />
        </AspectRatio>
    )
}
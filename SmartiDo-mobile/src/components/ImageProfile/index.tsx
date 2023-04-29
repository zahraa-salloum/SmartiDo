import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'


interface ImageProfileProps  {
    image: ImageSourcePropType,
}

const ImageProfile: FC<ImageProfileProps> = (props) => {
    return (
        <View>
            <Image style={styles.image} source={props.image} />
        </View>
    )
}

export default ImageProfile
import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'


interface ProfileProps  {
    image: ImageSourcePropType,
}

const Profile: FC<ProfileProps> = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} />
        </View>
    )
}

export default Profile
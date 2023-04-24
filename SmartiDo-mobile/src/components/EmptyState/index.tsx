import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'

interface EmptyStateProps  {
    image?: ImageSourcePropType,
    title?: string,
    description?: string,
}

const EmptyState: FC<EmptyStateProps> = (props) => {
return (
    <View>
        {!!props.image ? <Image source={props.image}></Image> : null}
        {!!props.title ? <Text style={styles.title}>{props.title}</Text> : null}
        {!!props.description ? <Text style={styles.description}>{props.description}</Text> : null}
    </View>
  )
}

export default EmptyState
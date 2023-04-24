import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React, { FC } from 'react'

interface EmptyStateProps  {
    image?: ImageSourcePropType,
    title?: string,
    description?: string,
}

const EmptyState: FC<EmptyStateProps> = (props) => {
return (
    <View>
        {!!props.image ? <Image source={props.image}></Image> : null}
        {!!props.title ? <Text>{props.title}</Text> : null}
        {!!props.description ? <Text>{props.description}</Text> : null}
    </View>
  )
}

export default EmptyState
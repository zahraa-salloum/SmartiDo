import { Text, View } from 'react-native'
import React, { FC } from 'react'

interface EmptyStateProps  {
    title?: string,
    description?: string,
}

const EmptyState: FC<EmptyStateProps> = (props) => {
return (
    <View>
        {!!props.title ? <Text>{props.title}</Text> : null}
        {!!props.description ? <Text>{props.description}</Text> : null}
    </View>
  )
}

export default EmptyState
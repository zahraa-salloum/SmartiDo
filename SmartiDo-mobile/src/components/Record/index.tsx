import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'

interface RecordProps  {
    image?: ImageSourcePropType | null,
    name?: string,
    score?: number,
}

const Record: FC<RecordProps> = (props) => {
    const defaultImage = require('../../../assets/student.png')
    if(props.image!= null){
        props.image = {uri: `data:image/png;base64,${props.image}`};
    }
return (
    <View style={styles.container}>
        <Image style={styles.image} source={props.image ?? defaultImage} />
        {!!props.name ? <Text style={styles.name}>{props.name}</Text> : null}
        {!!props.score ? <Text style={styles.score}>{props.score}</Text> : null}
    </View>
  )
}

export default Record
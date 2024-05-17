import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import tw from 'twrnc'
import { ListDetails } from '../dummyData'
import { ListView } from '../components'

type RootStackParamList = {}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>

interface HomeProps {
    navigation: HomeScreenNavigationProp
}

export const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={[tw`w-full px-4 pt-20`]}>
            <FlatList
                data={ListDetails}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                renderItem={({ item }) => (
                    <ListView
                        label={item.text}
                        navigateTo={item.navigateTo}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

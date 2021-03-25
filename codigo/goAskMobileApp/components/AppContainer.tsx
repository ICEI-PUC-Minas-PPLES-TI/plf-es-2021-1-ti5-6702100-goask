import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CONTAINER_STYLE_COLORS } from '../utils/colors';

interface Props {

}

const AppCointainer: React.FC<Props> = (props) => {
    return (
        <SafeAreaView style={styles.redContainer}>
            <View style={styles.orangeContainer}>
                <View style={styles.lightGreenContainer}> 
                    <View style={styles.darkGreenContainer}>
                        <View style={styles.lightBlueContainer}>
                            <View style={styles.darkBlueContainer}>
                                {props.children}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    redContainer: {
        backgroundColor: CONTAINER_STYLE_COLORS.RED,
        flex: 1,
        zIndex: 0,
    },

    orangeContainer: {
        backgroundColor: CONTAINER_STYLE_COLORS.ORANGE,
        zIndex: 6,
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginRight: 3,
    },

    lightGreenContainer: {
        backgroundColor: CONTAINER_STYLE_COLORS.LIGHT_GREEN,
        zIndex: 2,
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginRight: 3,
    },

    darkGreenContainer: {
        backgroundColor: CONTAINER_STYLE_COLORS.DARK_GREEN,
        zIndex: 3,
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginRight: 3,
    },

    lightBlueContainer: {
        backgroundColor: CONTAINER_STYLE_COLORS.LIGHT_BLUE,
        zIndex: 4,
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginRight: 3,
    },

    darkBlueContainer: {
        backgroundColor: CONTAINER_STYLE_COLORS.DARK_BLUE,
        zIndex: 5,
        flex: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginRight: 3,
    }
})

export default AppCointainer
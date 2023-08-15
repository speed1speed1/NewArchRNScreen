module.exports = {
    project: {
        ios:{},
        android:{}
    },
    assets: ['./src/assets/fonts/', './src/assets/images/personalIcon'],
    dependencies: {
        ...(process.env.NO_FLIPPER // or `process.env.NO_FLIPPER` for RN@0.71.x and above
            ? { 'react-native-flipper': { platforms: { ios: null } } }
            : {}),
    }
}

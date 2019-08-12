import React from 'react';
// @ts-ignore
import { TouchableOpacity, Text } from 'react-native';
export default () => {
    return (React.createElement(TouchableOpacity, { onPress: () => console.log('Clicked') },
        React.createElement(Text, null, "BTN")));
};
//# sourceMappingURL=RNWButton.js.map
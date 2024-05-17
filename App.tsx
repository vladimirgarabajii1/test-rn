import React from 'react';
import Root from './src/navigation/Root.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/navigationRef.ts';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <NavigationContainer ref={navigationRef}>
          <Root />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;

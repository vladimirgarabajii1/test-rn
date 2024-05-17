import React, {useEffect, useMemo, useRef} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {BackdropPressBehavior} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import style from './BottomSheet.style';
import {StyleProp, TextStyle} from 'react-native/types';
import {Keyboard} from 'react-native';

function BottomSheet(props: {
  isOpen: boolean;
  snapPointPercent?: number;
  pressBehaviour?: BackdropPressBehavior;
  children?: React.ReactNode;
  onDismiss: () => void;
  style?: StyleProp<TextStyle>;
}): JSX.Element {
  const snapPoints = useMemo(
    () => [`${props.snapPointPercent || 50}%`],
    [props.snapPointPercent],
  );
  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);
  useEffect(() => {
    if (props.isOpen) {
      bottomSheetModalRef.current?.present();
      Keyboard.dismiss();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [props.isOpen]);
  return (
    <BottomSheetModal
      style={[props.style, style.container]}
      snapPoints={snapPoints}
      ref={bottomSheetModalRef}
      enablePanDownToClose
      backdropComponent={pr => (
        <BottomSheetBackdrop
          {...pr}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior={props.pressBehaviour}
        />
      )}
      onDismiss={props.onDismiss}
      handleComponent={null}>
      {props.children}
    </BottomSheetModal>
  );
}

export default BottomSheet;

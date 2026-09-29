import { View, Text, StyleSheet, TouchableOpacity, 
         PermissionsAndroid, Alert, ActivityIndicator } from 'react-native';

import { useState, useRef } from 'react';

import { SafeAreaProvider, 
         SafeAreaView 
} from 'react-native-safe-area-context';

import { CameraView, useCameraPermissions } 
from 'expo-camera';

import { Asset, usePermissions } from 'expo-media-library';

export default function App() {
  return (
    <View>

    </View>
  );
}

function TelaCamera() {
  const [permissaoCamera, setPermissaoCamera] = useCameraPermissions();
  const [permissaoGaleria, setPermissaoGaleria] = usePermissions({ writeOnly: true });
  const [salvando, setSalvando] = useState(false);
  const camera = useRef(null);

  if (!permissaoCamera && !permissaoGaleria) {
    return null;
  }

  const temPermissao = permissaoCamera.granted && permissaoGaleria.granted;
  
}
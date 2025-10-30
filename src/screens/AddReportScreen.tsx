import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, Platform, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

const AddReportScreen: React.FC = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState<string>('Stockton St 1-99, San Francisco, CA');
  const [address, setAddress] = useState<string>('Stockton St 1-99, San Francisco, CA');
  const [image, setImage] = useState<string | null>(null);
  const [loadingLoc, setLoadingLoc] = useState(false);

  const handleLocation = async () => {
    setLoadingLoc(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Permite acceso a la ubicación para continuar.');
        setLoadingLoc(false);
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      const addrArr = await Location.reverseGeocodeAsync({latitude: loc.coords.latitude, longitude: loc.coords.longitude});
      let addrString = `${addrArr[0]?.street ?? ''} ${addrArr[0]?.name ?? ''}, ${addrArr[0]?.city ?? ''}, ${addrArr[0]?.region ?? ''}`;
      setAddress(addrString);
      setLocation(addrString);
    } catch (e) {
      Alert.alert('Error', 'No se pudo obtener la ubicación.');
    }
    setLoadingLoc(false);
  };

  const handlePickImage = async () => {
    let perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert('Permiso denegado', 'Permite acceso a tus fotos para continuar.');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!address || !image || !description.trim()) {
      Alert.alert('Campos requeridos', 'Completa todos los campos para continuar.');
      return;
    }
    // Aquí implementar el envío del reporte
    Alert.alert('Reporte enviado', '¡Tu reporte ha sido enviado exitosamente!');
    setDescription('');
    setImage(null);
    setLocation(address);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.headerRow}>
        <Text style={styles.backText}>{'< Atrás'}</Text>
        <Text style={styles.title}>Nuevo Reporte</Text>
        <Text style={styles.backText}>{'      '}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📍 Ubicación</Text>
        <TouchableOpacity style={styles.locationButton} onPress={handleLocation} disabled={loadingLoc}>
          <Text style={styles.locationButtonText}>{loadingLoc ? 'Obteniendo ubicación...' : 'Actualizar ubicación'}</Text>
        </TouchableOpacity>
        <Text style={styles.locationText}>{address}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📷 Imagen</Text>
        <TouchableOpacity style={styles.imageBox} onPress={handlePickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <View style={styles.imagePlaceholderContent}>
              <Text style={styles.cameraIcon}>📷</Text>
              <Text style={styles.addImageText}>Toca para agregar imagen</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📝 Descripción</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe el problema que quieres reportar..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Reporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#fafafa',
    flexGrow: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  backText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '500',
    width: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  locationButton: {
    backgroundColor: '#158AFF',
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 5,
  },
  locationButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  locationText: {
    color: '#888',
    fontStyle: 'italic',
    fontSize: 15,
    marginLeft: 2,
  },
  imageBox: {
    borderWidth: 1.7,
    borderColor: '#e2e2e2',
    borderStyle: 'dashed',
    borderRadius: 12,
    minHeight: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    marginBottom: 5,
  },
  cameraIcon: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 7,
  },
  addImageText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#555',
  },
  imagePlaceholderContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePreview: {
    width: 130,
    height: 130,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    padding: 13,
    marginTop: 4,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#33C759',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom: Platform.OS === 'ios' ? 30 : 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddReportScreen;

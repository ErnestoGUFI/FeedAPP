import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import ReportCard, { Report } from '../components/ReportCard';
import { Ionicons } from '@expo/vector-icons';

const data: Report[] = [
  {
    id: '1',
    author: 'Ana García',
    neighborhood: 'Centro de la ciudad',
    timeAgo: 'Hace 2 horas',
    description: 'Problema con el alumbrado público en la calle principal',
    placeholderEmoji: '📸',
  },
  {
    id: '2',
    author: 'Carlos Mendoza',
    neighborhood: 'Parque Central',
    timeAgo: 'Hace 4 horas',
    description: 'Basura acumulada en los contenedores del parque',
    placeholderEmoji: '🌳',
  },
];

export const FeedScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed de Reportes</Text>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.9}>
          <Ionicons name="add" size={18} color={'#fff'} />
          <Text style={styles.addLabel}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReportCard report={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 26,
    color: colors.text,
    fontWeight: '700',
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addLabel: { color: '#fff', marginLeft: 6, fontWeight: '600' },
  listContent: { paddingVertical: 8 },
});

export default FeedScreen;



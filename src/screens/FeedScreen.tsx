import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import ReportCard from '../components/ReportCard';
import { useReports } from '../context/ReportsContext';
import { useNavigation } from '@react-navigation/native';

export const FeedScreen: React.FC = () => {
  const { reports } = useReports();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed de Reportes</Text>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('AddReport' as never)}
        >
          <Text style={styles.addIcon}>+</Text>
          <Text style={styles.addLabel}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReportCard report={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay reportes aún</Text>
            <Text style={styles.emptySubtext}>Presiona "Agregar" para crear tu primer reporte</Text>
          </View>
        }
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
  addIcon: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  addLabel: { color: '#fff', marginLeft: 6, fontWeight: '600' },
  listContent: { paddingVertical: 8 },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.subtext,
  },
});

export default FeedScreen;



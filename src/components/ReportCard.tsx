import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export type Report = {
  id: string;
  author: string;
  neighborhood: string;
  timeAgo: string;
  description: string;
  placeholderEmoji?: string;
};

type Props = {
  report: Report;
};

export const ReportCard: React.FC<Props> = ({ report }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={20} color={colors.subtext} />
        </View>
        <View style={styles.authorInfo}>
          <Text style={styles.author}>{report.author}</Text>
          <Text style={styles.subtext}>{report.neighborhood}</Text>
        </View>
        <Text style={styles.time}>{report.timeAgo}</Text>
      </View>

      <View style={styles.media}>
        <Text style={styles.mediaEmoji}>{report.placeholderEmoji || '📷'}</Text>
        <Text style={styles.mediaCaption}>Imagen del reporte</Text>
      </View>

      <Text style={styles.description}>{report.description}</Text>

      <View style={styles.actionsRow}>
        <ActionButton icon={<Ionicons name="thumbs-up" size={18} color={colors.like} />} label="Me gusta" />
        <ActionButton icon={<Ionicons name="chatbubble-ellipses" size={18} color={colors.subtext} />} label="Comentar" />
        <ActionButton icon={<MaterialCommunityIcons name="share" size={18} color={colors.subtext} />} label="Compartir" />
      </View>
    </View>
  );
};

const ActionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <TouchableOpacity style={styles.action} activeOpacity={0.85}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 14,
    paddingVertical: 14,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  authorInfo: { flex: 1 },
  author: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  subtext: {
    fontSize: 13,
    color: colors.subtext,
  },
  time: {
    fontSize: 12,
    color: colors.subtext,
  },
  media: {
    marginTop: 12,
    backgroundColor: colors.card,
    height: 200,
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaEmoji: { fontSize: 40 },
  mediaCaption: { marginTop: 8, color: colors.subtext },
  description: {
    marginHorizontal: 16,
    marginTop: 12,
    fontSize: 15,
    color: colors.text,
  },
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  icon: { marginRight: 8 },
  actionText: { color: colors.subtext, fontSize: 14 },
});

export default ReportCard;



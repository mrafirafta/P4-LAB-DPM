import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onIncrement, onDecrement }) => (
  <View style={styles.team}>
    <Text style={styles.teamName}>{teamName}</Text>
    <Text style={styles.score}>{score}</Text>
    <View style={styles.scoreActions}>
      <TouchableOpacity style={styles.button} onPress={onIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.minusButton]} onPress={onDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  team: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    marginHorizontal: 10,
    shadowColor: '#2c3e50',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  teamName: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    fontWeight: '600',
  },
  score: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  scoreActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  minusButton: {
    backgroundColor: '#457b9d',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TeamScore;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import WinnerModal from './components/WinnerModal';
import TeamScore from './components/TeamScore';
import FireworksAnimation from './components/FireworksAnimation';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [isFireworksVisible, setFireworksVisible] = useState(false);

  useEffect(() => {
    if (scoreA === 10 || scoreB === 10) {
      setResetMessage('Skor Otomatis Akan Mereset Dalam 5 Detik...');
      const timer = setTimeout(resetScores, 5000);
      return () => clearTimeout(timer);
    } else {
      setResetMessage('');
    }
  }, [scoreA, scoreB]);

  const incrementScore = (team) => {
    if (winnerMessage) return;
    const newScore = team === 'A' ? scoreA + 1 : scoreB + 1;
    if (newScore === 10) {
      const winner = team === 'A' ? 'Tim A' : 'Tim B';
      setWinnerMessage(`${winner} Menang!`);
      setModalVisible(true);
      setFireworksVisible(true);
      setTimeout(() => setFireworksVisible(false), 3000);
    }
    team === 'A' ? setScoreA(Math.min(newScore, 10)) : setScoreB(Math.min(newScore, 10));
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinnerMessage('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>
      {winnerMessage ? (
        <Text style={styles.winnerMessage}>{winnerMessage}</Text>
      ) : (
        <Text style={styles.info}>Pertandingan Berlangsung</Text>
      )}

      <View style={styles.scoreBoard}>
        <TeamScore
          teamName="Tim A"
          score={scoreA}
          onIncrement={() => incrementScore('A')}
          onDecrement={() => setScoreA(Math.max(scoreA - 1, 0))}
        />
        <TeamScore
          teamName="Tim B"
          score={scoreB}
          onIncrement={() => incrementScore('B')}
          onDecrement={() => setScoreB(Math.max(scoreB - 1, 0))}
        />
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
      {resetMessage && <Text style={styles.resetMessage}>{resetMessage}</Text>}

      <WinnerModal
        isVisible={isModalVisible}
        message={winnerMessage}
        onClose={resetScores}
      />

      {isFireworksVisible && <FireworksAnimation />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  info: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  winnerMessage: {
    fontSize: 24,
    color: '#27ae60',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 15,
    marginTop: 30,
    width: '60%',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetMessage: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 10,
  },
});

export default App;

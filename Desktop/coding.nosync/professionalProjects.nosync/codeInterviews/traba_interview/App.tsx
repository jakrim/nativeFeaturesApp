import React, {useCallback, useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

type TimeHistory = {
  startTime: string;
  duration: number;
}

export default function App() {
  const [time, setTime] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(false);
  const [timeHistory, setTimeHistory] = useState<TimeHistory[]>([{startTime: 'Heres a start time', duration: 20}]);

  useEffect(() => {
    handlePress()
  }, [time, setTime, started])


  const handlePress = () => {
    setStarted(true);
    let interval;
    if (started) {
      interval = setInterval(() => {
        setTime(time + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    const timeStamp = new Date().toUTCString();
  }

  // const handleStopPress = () => {
  //   setStarted(false);
  //   clearInterval();
  //   setTime(0);
  // }

  return (
    <View style={styles.container}>
      <Text style={{color: 'purple', fontSize: 24}}>{time}</Text>
      <View style={{marginTop: 32, flexDirection: 'row', }}>
        <View style={{marginRight: 30}}>
          <Button title='Start'
            onPress={handlePress}
          />
        </View>
        <Button title='Stop'
          onPress={handlePress}
        />
      </View>
      <View style={{marginTop: 32}}>
        {timeHistory.map((timeHistoryItem: TimeHistory) => (
           <View style={{marginBottom: 8}} key={timeHistoryItem.startTime}>
            <Text>{timeHistoryItem.startTime}</Text>
            <Text>{timeHistoryItem.duration}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

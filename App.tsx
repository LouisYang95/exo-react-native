import React, {useState} from 'react';
import {SafeAreaView, ScrollView, useColorScheme, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Exo1 from './src/screens/exo1/exo1.tsx';
import Exo2 from './src/screens/exo2/exo2.tsx';
import Exo3 from './src/screens/exo3/exo3.tsx';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentPage, setCurrentPage] = useState('Exo1');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handlePageChange = (pageName: string) => {
    setCurrentPage(pageName);
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      {currentPage === 'Exo1' && <Exo1 />}
      {currentPage === 'Exo2' && <Exo2 />}
      {currentPage === 'Exo3' && <Exo3 />}
      <Button
        title="Exo1"
        onPress={() => handlePageChange('Exo1')}
        disabled={currentPage === 'Exo1'}
      />
      <Button
        title="Exo2"
        onPress={() => handlePageChange('Exo2')}
        disabled={currentPage === 'Exo2'}
      />
      <Button
        title={'Exo3'}
        onPress={() => handlePageChange('Exo3')}
        disabled={currentPage === 'Exo3'}
      />
    </SafeAreaView>
  );
}

export default App;

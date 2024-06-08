import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import FbSignInBtn from '../components/facebook-btn.tsx';

const Home = () => {
  return (
    <View>
      <Text>123123</Text>
      <FbSignInBtn />

      <Link href="/"> Back to index </Link>
    </View>
  );
};

export default Home;

import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Text, TouchableOpacity } from 'react-native';

const FbSignInBtn = () => {
  const handleFbSignIn = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const fbToken = data.accessToken.toString();
            console.log('fbToken', fbToken);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      }
    );
  };

  return (
    <TouchableOpacity onPress={handleFbSignIn}>
      <Text>Facebook sign in</Text>
    </TouchableOpacity>
  );
};

export default FbSignInBtn;

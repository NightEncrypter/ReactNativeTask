import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import theme from '../theme/theme';

type Props = {
  docText?: string;
  step?: string;
  page?: string;
  imgUrl?: string;
};
const Login: FC<Props> = ({docText, step, page, imgUrl}) => {
  const navigation = useNavigation<any>();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/img/adhaar.png')}
            style={{height: '100%'}}
          />
        </View>

        <View style={styles.indicatorsContainer}>
          {[1, 2, 3].map((v, i) => (
            <View
              key={v}
              style={{
                width: i == 2 ? 30 : 6,
                height: 6,
                borderRadius: 25,
                backgroundColor: i == 2 ? 'black' : 'grey',
              }}></View>
          ))}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <View
              style={{
                gap: 10,
                alignItems: 'center',
              }}>
              <Text style={styles.stepText}>Login</Text>

              <View style={{gap: 5}}>
                <Text style={styles.infoDescription}>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Text>
              </View>
              <View style={styles.userPhNumberContainer}>
                <Text style={styles.userPhText}>Phone Number Text</Text>
                <TextInput
                  value="7389307348"
                  style={{
                    color: 'white',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    width: '100%',
                  }}
                />
              </View>
              {/* <View style={styles.horizontalLine} /> */}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeStack')}
              style={[styles.button]}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: theme.primary.backgroundColor,
    borderTopLeftRadius: theme.primary.borderRadius,
    borderTopRightRadius: theme.primary.borderRadius,
  },
  footerContainer2: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // backgroundColor: 'yellow',
  },
  skipButtonText: {
    fontWeight: '700',
    color: theme.primary.color,
  },
  footerContainer: {
    flex: 2,
    gap: 25,
    marginTop: 15,
    padding: 10,
    paddingHorizontal: 20,
  },
  horizontalLine: {
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.6,
    height: 1,
  },
  userPhNumberContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    // gap: 10,
  },
  userPhText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.6,
    textTransform: 'capitalize',
  },
  indicatorsContainer: {
    marginTop: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },

  stepText: {
    color: theme.primary.color,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  headText: {
    fontSize: 16,
    color: theme.primary.color,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  infoDescription: {
    color: theme.primary.color,
    maxWidth: 300,
    textAlign: 'center',
    fontWeight: '300',
  },
  button: {
    backgroundColor: theme.secondary.backgroundColor,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontWeight: '600',
    color: theme.secondary.color,
  },
});

export default Login;

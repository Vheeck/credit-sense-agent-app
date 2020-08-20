import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Image 
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
        <Block flex middle>
          <StatusBar hidden />
          <ImageBackground
            source={Images.RegisterBackground}
            style={{ width, height, zIndex: 1, paddingTop: theme.SIZES.BASE * 6, }}
          >
            <Block flex middle>
                <Block flex={0.25} middle style={styles.socialConnect}>
                  <Image source={Images.Logo1} style={{ width: 250, height:200, marginTop:50}}></Image>
                 
                  
                </Block>
                <Block flex>
                  
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1, paddingTop:6, }}
                      behavior="padding"
                      enabled
                    >
                      <ScrollView>
                        <Block style={{ marginBottom: 75, }}></Block>
                      <Block width={width * 0.8} style={{ marginBottom: 15, }}>
                        <Input
                        
                          borderless
                          placeholder="Email"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="hat-3"
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                          style={styles.inp}
                        />
                      </Block>
                     
                      <Block width={width * 0.8}>
                        <Input
                          password
                          borderless
                          placeholder="Password"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              name="padlock-unlocked"
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                          style={styles.inp}
  
                        />
                       
                      </Block>
                      <Block row width={width * 0.75}>
                        <Checkbox
                          checkboxStyle={{
                            borderWidth: 3
                          }}
                          color={argonTheme.COLORS.PRIMARY}
                          label="I agree with the"
                          
                          color="#FFCC2A"
                        />
                        
                       
                        <Text color="#ffffff">&nbsp; Privacy Policy</Text>
                      </Block>
                      <Block middle>
                        <Button color="primary" style={styles.createButton} onPress={() => navigation.navigate("App")} >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Log In
                          </Text>
                          
                        </Button>
                      </Block>
                      <Block middle >
                      <Text color='yellow' onPress={() => navigation.navigate("create")}>Create an account?</Text>
                      </Block>
                      </ScrollView>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
             
            </Block>
          </ImageBackground>
        </Block>
      );
    }
  }
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  },
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    
    },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.75,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#FFCC2A',
    
  },
  inp: {
    borderRadius: 20
  },
  
});

export default Onboarding;

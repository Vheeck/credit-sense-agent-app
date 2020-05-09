import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Input, } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                   
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={16}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        233
                      </Text>
                      <Text size={11} color={argonTheme.COLORS.TEXT}>Customers</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                         10
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Loans</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                         ₦90
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Balance</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      Jessica Jones
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    Jessica@gmail.com
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                 
                  <Block
                    row
                    style={{ paddingVertical: 14, alignItems: "baseline" }}
                  >
                    <Text bold size={16} color="#525F7F">
                      My Account
                    </Text>
                  </Block>
                  <Block
                    row
                    style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                  >
                    
                  </Block>
                 
                  {/* <Text bold size={18} color="#525F7F">
                      Agent Information
                    </Text> */}
                    
                  <Text bold size={13} color="#525F7F">
                      Agent ID
                    </Text>

                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="AGT2345647545342453"
            editable={false}
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#d3d3d3"
            }}
            iconContent={<Block />}
          />
        </Block>

        <Text bold size={13}  color="#525F7F">
                     Email
                    </Text>

                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Jessica@gmail.com"
            
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
            style={styles.inp}
          />
        </Block>

        <Text bold size={13} color="#525F7F">
                      Password
                    </Text>

                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="AGT2345647545342453"
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
            style={styles.inp}
          />
        </Block>

        <Text bold size={13} color="#525F7F">
                     First name
                    </Text>

                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Jessica"
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
            style={styles.inp}
          />
        </Block>

        <Text bold size={13} color="#525F7F">
                     Last name
                    </Text>

                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Jones"
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
            style={styles.inp}
          />
        </Block>

        <Text bold size={13} color="#525F7F">
                     Area(s) of assignment
                    </Text>


        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Ijede"
            editable={false}
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#d3d3d3"
            }}
            iconContent={<Block />}
          />
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Ewuowa"
            editable={false}
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#d3d3d3"
            }}
            iconContent={<Block />}
          />
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Agura"
            editable={false}
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#d3d3d3"
            }}
            iconContent={<Block />}
          />
        </Block>

        <Block middle style={{ marginBottom: 15,}}>
                      <Button color="primary" style={styles.createButton} >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                         Save
                        </Text>
                        
                      </Button>
                    </Block>
    

        
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
        {
           
        }
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },

inp: {
  borderRadius: 20
},
createButton: {
  width: width * 0.75,
  marginTop: 15,
  borderRadius: 20,
  backgroundColor: '#434E9D',
  
},

});

export default Profile;

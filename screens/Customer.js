import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme, Radio, } from "galio-framework";

import { Button, Input, } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Customer extends React.Component {
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
                        22%
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
                         ₦9000
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
                    MVN: 09874657679
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
                      Business name
                    </Text>

                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Business name"
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
                      Gender
                    </Text>
     <Block>
     <Radio label="Male" color="primary"  />
     <Radio label="Female" color="primary"  />

        </Block>
 
        <Text bold size={13} color="#525F7F">
                      Date of birth
                    </Text>

                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="DOB"
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
                      Working status
                    </Text>
     <Block>
     <Radio label="Self-employed" color="primary"  />
     <Radio label="Unemployed" color="primary"  />
     <Radio label="Employed" color="primary"  />


        </Block>
 

        <Block >

        <Text bold size={13} color="#525F7F" style={{ marginTop: 25,}} >
                     Account Information
                    </Text>
                    <Text bold size={13} color="#525F7F" style={{ marginTop: 25,}} >
                     Account number
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

       

         <Text bold size={13} color="#525F7F" style={{ marginTop: 25,}} >
                     BVN
                    </Text>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
            right
            placeholder="26636363727"
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
            style={styles.inp}
          />
        </Block>

        <Text bold size={13} color="#525F7F" style={{ marginTop: 25,}} >
                     Contact Information
                    </Text>
                    <Text bold size={13} color="#525F7F" style={{ marginTop: 25,}} >
                     Address
                    </Text>


        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
            right
            placeholder="1,Unity estate."
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
                     Office address
                    </Text>


        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
            right
            placeholder="Office address."
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
                     Country
                    </Text>


        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
            right
            placeholder="Country"
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
                     State
                    </Text>


        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
            right
            placeholder="State"
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
                     City
                    </Text>


        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
        <Input
            right
            placeholder="City"
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
            style={styles.inp}
          />
        </Block>

        <Block style={styles.info}>

        <Text bold size={25} color="#32325D" style={{ marginTop: 25,}} >
                      Loans
                    </Text>
                  <Block
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24, width }}
                  >
                   
                  </Block>
                  <Block row space="evenly">
                    <Block>
                      <Text
                        bold
                        size={16}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        Loan ID
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                        Loanbalance
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                         Status
                      </Text>
                      </Block>
                  </Block>
                </Block>

                <Block style={styles.info}>

          <Block
            row
            space="evenly"
            style={{ marginTop: 0, paddingBottom: 24, width }}
          >
           
          </Block>
          <Block row space="evenly">
            <Block>
              <Text
                bold
                size={16}
                color="#525F7F"
                style={{ marginBottom: 4 }}
              >
                LID12546
              </Text>
             
            </Block>

            
            <Block middle>
              <Text
                bold
                color="#525F7F"
                size={17}
                style={{ marginBottom: 4 }}
              >
                Loanbalance
              </Text>
            
            </Block>
            <Block middle>
              <Text
                bold
                color="#525F7F"
                size={15}
                style={{ marginBottom: 4 }}
              >
                 Pending
              </Text>
              </Block>
          </Block>
          
          <Block row space="evenly">
            <Block>
              <Text
                bold
                size={16}
                color="#525F7F"
                style={{ marginBottom: 4 }}
              >
               LID12546
              </Text>
             
            </Block>

            
            <Block middle>
              <Text
                bold
                color="#525F7F"
                size={17}
                style={{ marginBottom: 4 }}
              >
                Loanbalance
              </Text>
            
            </Block>
            <Block middle>
              <Text
                bold
                color="#525F7F"
                size={15}
                style={{ marginBottom: 4 }}
              >
                 Pending 
              </Text>
              </Block>
          </Block>
          <Block row space="evenly">
            <Block>
              <Text
                bold
                size={16}
                color="#525F7F"
                style={{ marginBottom: 4 }}
              >
                LID12546
              </Text>
             
            </Block>

            
            <Block middle>
              <Text
                bold
                color="#525F7F"
                size={17}
                style={{ marginBottom: 4 }}
              >
                Loanbalance
              </Text>
            
            </Block>
            <Block middle>
              <Text
                bold
                color="#525F7F"
                size={15}
                style={{ marginBottom: 4 }}
              >
                 Pending
              </Text>
              </Block>
          </Block>

        </Block>
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
    // paddingHorizontal: 40
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

export default Customer;

import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");


class createloan extends React.Component {
    render = () => {
        return (
            <ScrollView>
          <Block flex style={styles.group}>
            <Text bold size={20} style={styles.title}>
              Borrowers details
            </Text>
            
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input right placeholder="First name" iconContent={<Block />}
              style={styles.inp}
               />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="MVN"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Amount"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Loan discription"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Abursed by"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>

            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Release date"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Interest rate"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Button color="primary" style={styles.createbtn} >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                         Passport  
                        </Text>
                        
                      </Button>
            <Text bold size={20} style={styles.title}>
              Guarantor's credentials
            </Text>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input right placeholder="First name" iconContent={<Block />}
              style={styles.inp}
               />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Middle name"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Last name"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
    
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Bank verification number"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
           
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Email"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Phone"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
    
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Gender"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
    
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
    
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Home address"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
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
    
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="Marital Status"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Input
                right
                placeholder="employment status"
                style={{
                  borderColor: argonTheme.COLORS.INFO,
                  borderRadius: 4,
                  backgroundColor: "#fff"
                }}
                iconContent={<Block />}
                style={styles.inp}
              />
            </Block>
            <Block middle style={{ marginBottom: 15,}}>
                      <Button color="primary" style={styles.createButton} >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                         Submit
                        </Text>
                        
                      </Button>
                    </Block>
    
          
    
          </Block>
</ScrollView>

        );
      };
}

const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 44,
      color: argonTheme.COLORS.HEADER
    },
    group: {
      paddingTop: theme.SIZES.BASE * 2
    },
    shadow: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.2,
      elevation: 2
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: width - theme.SIZES.BASE * 2
    },
    optionsButton: {
      width: "auto",
      height: 34,
      paddingHorizontal: theme.SIZES.BASE,
      paddingVertical: 10
    },
    input: {
      borderBottomWidth: 1
    },
    inputDefault: {
      borderBottomColor: argonTheme.COLORS.PLACEHOLDER
    },
    inputTheme: {
      borderBottomColor: argonTheme.COLORS.PRIMARY
    },
    inputTheme: {
      borderBottomColor: argonTheme.COLORS.PRIMARY
    },
    inputInfo: {
      borderBottomColor: argonTheme.COLORS.INFO
    },
    inputSuccess: {
      borderBottomColor: argonTheme.COLORS.SUCCESS
    },
    inputWarning: {
      borderBottomColor: argonTheme.COLORS.WARNING
    },
    inputDanger: {
      borderBottomColor: argonTheme.COLORS.ERROR
    },
    social: {
      width: theme.SIZES.BASE * 3.5,
      height: theme.SIZES.BASE * 3.5,
      borderRadius: theme.SIZES.BASE * 1.75,
      justifyContent: "center"
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
      createbtn:{
        width: width * 0.3,
        marginTop: 15,
      },
});

export default createloan;
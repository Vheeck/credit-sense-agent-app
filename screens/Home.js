import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text, } from 'galio-framework';

import { Card,Button } from '../components';

import { Images, argonTheme } from "../constants";
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
        <Card item={articles[0]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[1]} />
          
            <Card item={articles[2]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[3]} />
          
        
        </Block>
        <Text bold size={25} color="#32325D" style={{ marginBottom: -9,}} >
                      Individual
                    </Text>
                  <Block
                    row
                    space="evenly"
                    style={{ marginTop: 2, paddingBottom: 24, width }}
                  >
                   
                  </Block>
                  
                  <Block row space="evenly" style={{backgroundColor: '#d3d3d3'}}>
                    <Block  style={{backgroundColor: ''}}>
                      <Text
                        bold
                        size={16}
                        color="#525F7F"
                        style={{ marginBottom: 4 }
                      }
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
                        Amount
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
                        LID11223
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                       ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                        Pendind
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
                       LID22334
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                        ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                         Pendind
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
                      LID33445
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                     ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                       Pendind
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
                       LID44556
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                        ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                        Pendind
                      </Text>
                      </Block>
                      </Block>

                      <Text bold size={25} color="#32325D" style={{ marginTop: 20,}} >
                      Groups
                    </Text>
                  <Block
                    row
                    space="evenly"
                    style={{ marginTop: 2, paddingBottom: 24, width }}
                  >
                   
                  </Block>
                  
                  <Block row space="evenly" style={{backgroundColor: '#d3d3d3'}}>
                    <Block  style={{backgroundColor: ''}}>
                      <Text
                        bold
                        size={16}
                        color="#525F7F"
                        style={{ marginBottom: 4 }
                      }
                      >
                     GROUP ID
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                        Amount
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

                  <Block row space="evenly">
                    <Block>
                      <Text
                        bold
                        size={16}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                      GID33445
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                     ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                       Pendind
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
                      GID33445
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                     ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                       Pendind
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
                      GID33445
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                     ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                       Pendind
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
                      GID33445
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                     ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                       Pendind
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
                      GID33445
                      </Text>
                     
                    </Block>

                    
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={17}
                        style={{ marginBottom: 4 }}
                      >
                     ₦2,500
                      </Text>
                    
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                       Pendind
                      </Text>
                      </Block>

                      
                  </Block>

                  <Block middle style={{ marginBottom: 15, marginTop: 20,}}>
                      <Button color="primary" style={styles.createButton} >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                         Add new loans
                        </Text>
                        
                      </Button>
                    </Block>
    
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },

  createButton: {
    width: width * 0.75,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#434E9D',
    
  },
});

export default Home;

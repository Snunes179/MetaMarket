import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SHADOWS, SIZES, assets} from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={{
            width: 150,
            height: 40
          }}
        />
        <View style={{
          width: 50,
          height: 50
        }}>
          <Image 
            source={assets.person01}
            resizeMode='contain'
            style={{
              width: '100%',
              height: '100%'
            }}
          />
          <Image 
            source={assets.badge}
            resizeMode='contain'
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 15,
              height: 15
            }}
          />
        </View>
      </View>

      <View style={{
        marginVertical: SIZES.font
      }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Hello, User 🖖
        </Text>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base / 2
        }}>
          Let's find a true masterpiece
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View style={{
            width: '100%', 
            flexDirection: 'row', 
            backgroundColor: COLORS.gray,
            borderRadius: 5,
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2
          }}>
          <Image 
            source={assets.search}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base
            }}
          />
          <TextInput 
            placeholder="Search for awesome NFT's"
            style={{
              flex: 1
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader;
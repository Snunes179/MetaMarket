import { View, Text, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, SHADOWS, assets } from '../constants';

export const NFTTitle = ({ title, subtitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{
        fontSize: titleSize,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
      }}>{title}</Text>
      <Text style={{
        fontSize: subTitleSize,
        fontFamily: FONTS.regular,
        color: COLORS.gray
      }}>by: {subtitle}</Text>
    </View>
  )
}

export const ETHPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image 
        source={assets.eth}
        resizeMode='contain'
        style={{
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.primary }}>{price}</Text>
    </View>
  )
}

export const ImageCMP = ({ imgUrl, index }) => {
  return (
    <Image 
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }}
    />
  )
}

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[ assets.person02, assets.person03, assets.person04 ].map((imgUrl, index) => (
        <ImageCMP imgUrl={imgUrl} index={index} key={`People-${index}`}/>
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.dark,
      elevation: 1,
      maxWidth: "50%",
      borderRadius: 10,
    }}>
      <Text style={{ 
        fontFamily: FONTS.regular, 
        fontSize: SIZES.small, 
        color: COLORS.white
      }}>
        Ending in
      </Text>
      <Text style={{ 
        fontFamily: FONTS.semiBold, 
        fontSize: SIZES.medium, 
        color: COLORS.white
      }}>
        12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: 'space-between'
    }}>
      <People />
      <EndDate />
    </View>
  )
}
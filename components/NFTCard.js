import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CircleButton, RectButton, DetailsButton } from './Button';
import { NFTTitle, ETHPrice, SubInfo } from './SubInfo';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardsProps}>
      <View style={styles.cardContainer}>
      <Image 
        source={data.image}
        resizeMode="cover"
        style={styles.cardImage}
      />

      <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle 
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View style={{
          marginTop: SIZES.font,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <ETHPrice price={data.price} />
          <DetailsButton 
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
            />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardsProps: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  cardContainer: {
    width: "100%",
    height: 250,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.font,
  }
});

export default NFTCard;
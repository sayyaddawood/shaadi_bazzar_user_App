import React, {useMemo} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Icons, TextView} from '../core';
import {Colors, Dimen} from '../../theme';
import {IconButton} from 'react-native-paper';
import {IconsType} from '../core/Icons';
import Line from '../Line';
import {useHelper} from '../../hooks';

type SocialLinksType = {
  facebook_page_link?: string;
  instagram_page_link?: string;
  website_link?: string;
};

const SocialLinks = ({
  facebook_page_link,
  instagram_page_link,
  website_link,
}: SocialLinksType) => {
  const {goToWhatsapp} = useHelper();

  const socialLinks = useMemo(() => {
    const links = [];

    if (instagram_page_link) {
      links.push({
        iconName: 'instagram',
        iconType: IconsType.Entypo,
        value: instagram_page_link,
        backgroundColor: Colors.Instagram,
      });
    }

    if (facebook_page_link) {
      links.push({
        iconName: 'facebook',
        iconType: IconsType.Entypo,
        value: facebook_page_link,
        backgroundColor: Colors.Facebook,
      });
    }

    if (website_link) {
      links.push({
        iconName: 'world-o',
        iconType: IconsType.Fontisto,
        value: website_link,
        backgroundColor: Colors.PrimaryColor,
      });
    }

    return links;
  }, [instagram_page_link, facebook_page_link, website_link]);

  if (socialLinks.length === 0) return null;

  return (
    <View>
      <TextView position="left" type="h5">
        Social Links
      </TextView>

      <View style={styles.row}>
        {socialLinks.map((item, index) => (
          <IconButton
            key={index}
            icon={() => (
              <Icons
                type={item.iconType}
                name={item.iconName}
                size={20}
                color={Colors.White}
              />
            )}
            size={17}
            style={[{backgroundColor: item.backgroundColor}]}
            onPress={() => {
              Linking.openURL(item.value);
            }}
          />
        ))}
      </View>

      <Line style={[styles.line]} />
    </View>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    height: 5,
    backgroundColor: Colors.Halfwit,
    marginLeft: -20,
    marginVertical: 15,
  },
});

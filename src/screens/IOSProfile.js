import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";

import { Colors } from "../constants/ThemeConstants";
import TextComponent from "../components/Shared/TextComponent";
import Status from "./Account/Status";
import Account from "./Account/Account";
import { widthPerc } from "../helpers/styleHelper";

const initialLayout = { width: Dimensions.get("window").width };

class IOSProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
      width: 0,
      activeTab: "STATUS",
    };
  }

  measureView(event) {
    console.log("width: ", event.nativeEvent.layout.width);
    this.setState({
      width: event.nativeEvent.layout.width,
    });
  }

  render() {
    const { position, width, activeTab } = this.state;
    const trans = position.interpolate({
      inputRange: [0, 360],
      outputRange: [0, width / 2],
      extrapolate: "clamp",
    });

    // const trans = position.interpolate({
    //   inputRange: [0, 360],
    //   outputRange: [0, width / 2],
    //   extrapolate: "clamp",
    // });
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        {/* <HeaderComponent title="Profile" {...pageProps} hasBack/> */}
        <View
          style={{
            height: 60,
            elevation: 10,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 40,
              backgroundColor: "rgba(118,118,128,0.12)",
              width: widthPerc(80),
              borderRadius: 8,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row" }}
              onLayout={(event) => this.measureView(event)}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  this.scrollViewRef.scrollTo({ x: 0 });
                  this.setState({ activeTab: "STATUS" });
                }}
                style={{
                  width: "50%",
                  // backgroundColor: Colors.themeBlack,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextComponent
                  style={{
                    color:
                      activeTab === "STATUS" ? Colors.white : Colors.themeBlack,
                  }}
                >
                  Status
                </TextComponent>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  this.scrollViewRef.scrollTo({ x: 360 });
                  this.setState({ activeTab: "ACCOUNT" });
                }}
                style={{
                  width: "50%",
                  // backgroundColor: Colors.themeBlack,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextComponent
                  style={{
                    color:
                      activeTab === "ACCOUNT"
                        ? Colors.white
                        : Colors.themeBlack,
                  }}
                >
                  Account
                </TextComponent>
              </TouchableOpacity>
              <Animated.View
                style={{
                  width: "50%",
                  backgroundColor: Colors.themeBlack,
                  height: "100%",
                  position: "absolute",
                  borderRadius: 8,
                  left: trans,
                  zIndex: -1,
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          style={{ flex: 1 }}
          ref={(ref) => {
            this.scrollViewRef = ref;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.position } } },
          ])}
        >
          <View key="1" style={{ width: widthPerc(100) }}>
            <Status />
          </View>
          <View key="2" style={{ width: widthPerc(100) }}>
            <Account />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default IOSProfile;

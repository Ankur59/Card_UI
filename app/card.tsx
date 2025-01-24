import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const Card: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: "#26282C",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.parent}>
        <View style={styles.intro}>
          <View style={styles.iconButton}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 1,
              }}
            >
              <View
                style={{
                  marginLeft: wp(5),
                  height: 11,
                  marginRight: wp(2),
                  marginTop: wp(0.3),
                }}
              >
                <FontAwesome6 name="handshake" size={wp(2.3)} color="#83888E" />
              </View>
              <Text
                style={{
                  color: "#767c89",
                  fontSize: wp(2),
                  fontWeight: "bold",
                  letterSpacing: 2,
                  marginRight: "10%",
                }}
              >
                INTRO
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 0,
              paddingRight: wp(2.5),
            }}
          >
            <Entypo name="dots-three-vertical" size={wp(3.6)} color="#767C89" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.img_parent}>
            <View style={styles.image}>
              <Image
                source={require("../assets/images/Profileimage.jpeg")}
                style={{
                  height: wp(12),
                  width: wp(12),
                  borderRadius: wp(7),
                  marginTop: "auto",
                }}
              />
            </View>
            <View style={styles.prof_name}>
              <View style={styles.profile_name}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    letterSpacing: 0.3,
                    marginBottom: hp(0.5),
                    fontSize: wp(3.5),
                    marginLeft: "7%",
                    position: "relative",
                  }}
                >
                  Nishant
                </Text>
                <Text
                  style={{
                    color: "grey",
                    marginLeft: "7%",
                    marginBottom: wp(1.5),
                    marginTop: 0,
                    fontSize: wp(3),
                  }}
                >
                  Full stack Developer
                </Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.postText}>
            <Text
              style={{
                color: "white",
                fontSize: wp(4),
                fontWeight: "500",
                lineHeight: wp(6),
              }}
            >
              Does anyone in my network know someone on the engineering team at
              Framer? Would love to connect!
            </Text>
          </ScrollView>
        </View>
        <View style={styles.btn_parent}>
          <View style={styles.long_btn}>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: wp(0.3),
                  fontSize: wp(3.5),
                }}
              >
                Give Intro
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.two_btn}>
            <TouchableOpacity
              style={{
                backgroundColor: "#26282C",
                height: "75%",
                width: "35%",
                alignItems: "center",
                borderRadius: 100,
                margin: 0,
                justifyContent: "center",
                borderColor: "#393C42",
                borderWidth: 0.6,
              }}
            >
              <Ionicons name="hand-right-outline" size={15} color="#AAAEB7" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#26282C",
                height: "75%",
                width: "35%",
                alignItems: "center",
                borderRadius: 100,
                margin: 0,
                justifyContent: "center",
                borderColor: "#393C42",
                borderWidth: 0.6,
              }}
            >
              <Ionicons name="return-up-forward" size={15} color="#AAAEB7" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: wp(90),
    height: hp(28),
    backgroundColor: "#161718",
    borderRadius: 10,
    position: "relative",
    paddingTop: 0,
    borderColor: "#393C42",
    borderWidth: 0.6,
  },
  intro: {
    height: "12%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 0,
    margin: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconButton: {
    backgroundColor: "#26282C",
    width: wp(18),
    height: "80%",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    marginTop: 0,
    borderColor: "#393C42",
    borderWidth: 1,
    alignSelf: "flex-start",
    position: "absolute",
    top: 0,
    borderTopColor: "#393C42",
    borderTopWidth: 0.6,
  },
  body: {
    height: "65%",
  },
  img_parent: {
    width: "100%",
    height: "45%",

    flexDirection: "row",
  },
  image: {
    width: "14%",

    height: "75%",
    marginLeft: 10,
    marginTop: 10,
    alignItems: "flex-end",
  },
  prof_name: {
    height: "85%",
    width: "50%",
    marginTop: 10,
    justifyContent: "center",
  },
  profile_name: {
    height: "90%",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 5,
    flexDirection: "column",
    position: "relative",
    paddingLeft: wp(0),
  },
  post_text: {
    height: "100%",
  },
  postContainer: {
    flex: 1,

    padding: 10,
  },
  postText: {
    fontSize: 16,
    color: "white",

    height: "55%",
    marginLeft: 10,
    marginRight: 20,
  },
  btn_parent: {
    height: "23%",
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopColor: "#393C42",
    borderTopWidth: 0.6,
  },
  long_btn: {
    backgroundColor: "#26282C",
    width: "65%",
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(6),
    marginLeft: 10,
    marginBottom: "2%",
    marginTop: "2%",
    borderColor: "#393C42",
    borderWidth: 0.6,
  },

  two_btn: {
    backgroundColor: "purle",
    width: "25%",
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 0,
    marginLeft: "2%",
  },
});

export default Card;

import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import * as WebBrowser from "expo-web-browser";
import * as FaceBook from "expo-auth-session/providers/facebook";
import * as AuthSession from "expo-auth-session";
import { Linking } from "expo";

const Interest = () => {
  const [user, setUser] = useState(null);
  const [requests, response, promptAsync] = FaceBook.useAuthRequest({
    clientId: "766804524947688",
  });

  const navigation = useNavigation();
  const handleNavigateToRegister = () => {
    // Navigate to the Register screen
    navigation.navigate("Home");
  };

  const handleLinkedInLogin = async () => {
    try {
      const redirectUri =
        "https://www.linkedin.com/oauth/v2/authorization" +
        "?response_type=code" +
        "&client_id=78rc4sx67d4cad" +
        "&redirect_uri=https%3A%2F%2Fsyxp3jdhbb.execute-api.us-east-1.amazonaws.com%2Fdev%2Fauth%2Flinkedin%2Fcallback" +
        "&state=foobar" +
        "&scope=openid%20profile%20w_member_social%20email";

      console.log(redirectUri, "redirectUri");

      // Open the URL for LinkedIn authentication
      const result = await WebBrowser.openBrowserAsync(redirectUri);

      // If the result is available, handle it
      if (result && result.type === "opened") {
        console.log("Browser opened successfully");

        // Now, make another API call to retrieve data
        navigation.navigate("Interest");
        // Handle the authentication process here
      } else {
        console.error("Failed to open browser");
      }
    } catch (error) {
      console.error("Error opening browser:", error);
    }
  };

  useEffect(() => {
    // Handle Facebook login response
    const handleFacebookLogin = async () => {
      try {
        const result = await LoginManager.logInWithReadPermissions([
          "public_profile",
        ]);
        console.log(result, "kjdhfdfjk");
        if (result.isCancelled) {
          alert("Login cancelled.");
        } else {
          const token = await AccessToken.getCurrentAccessToken();
          if (token) {
            const { accessToken } = token;
            const userInfoResponse = await fetch(
              `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
            );
            const userInfo = await userInfoResponse.json();
            setUser(userInfo);
            navigation.navigate("Interest");
          }
        }
      } catch (error) {
        console.error("Error logging in with Facebook:", error);
        console.error("Error logging in with Facebook:", result);
      }
    };

    // Check if the user is already logged in with Facebook
    const checkFacebookLogin = async () => {
      const token = await AccessToken.getCurrentAccessToken();
      console.log(token, "token");
      if (token) {
        handleFacebookLogin();
      }
    };

    checkFacebookLogin();
  }, []);
  console.log(user, "user");

  //   Twitter Login Code
  const handleTwitterLogin = async () => {
    // Implement Twitter login logic here
    console.log("first1");
    // Define your Twitter app's client ID and client secret
    const TWITTER_CLIENT_ID = "NXpxaVFxZVJDSzZ4RXEtWUxrd2w6MTpjaQ";
    const CALLBACK_URL = "https://viralblitzmedia.com/";

    // Set up the authentication endpoint
    // Construct the Twitter OAuth URL
    const authUrl = `https://api.twitter.com/oauth/authenticate?client_id=${TWITTER_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      CALLBACK_URL
    )}&response_type=token`;

    // Open the authentication session
    const result = await WebBrowser.openAuthSessionAsync(authUrl, CALLBACK_URL);

    // Check if authentication was successful
    if (result.type === "success") {
      const { url } = result;
      // Parse the URL to extract the access token
      // The access token will be available in the URL fragment or query parameters
      // You can use a URL parsing library like `query-string` to extract the token
      // Example: const accessToken = parse(url.split('#')[1]).access_token;
      console.log("Twitter Access Token:", accessToken);
      // Now you can use the access token to make authenticated requests to the Twitter API
    } else {
      // Authentication failed or was canceled by the user
      console.error("Twitter authentication failed");
    }
  };

  // TikTok Login Code
  const handleTikLogin = async () => {
    try {
      // Define your TikTok app's client ID and callback URL
      const TIKTOK_CLIENT_ID = "YOUR_TIKTOK_CLIENT_ID";
      const CALLBACK_URL = "YOUR_TIKTOK_CALLBACK_URL";

      // Construct the TikTok OAuth URL
      const authUrl = `https://YOUR_TIKTOK_DOMAIN/oauth/authorize?client_id=${TIKTOK_CLIENT_ID}&redirect_uri=${encodeURIComponent(
        CALLBACK_URL
      )}&response_type=token`;

      // Open the authentication session
      const result = await WebBrowser.openAuthSessionAsync(
        authUrl,
        CALLBACK_URL
      );

      // Check if authentication was successful
      if (result.type === "success") {
        const { url } = result;
        // Parse the URL to extract the access token
        // The access token will be available in the URL fragment or query parameters
        // You can use a URL parsing library like `query-string` to extract the token
        // Example: const accessToken = parse(url.split('#')[1]).access_token;
        console.log("TikTok Access Token:", accessToken);
        // Now you can use the access token to make authenticated requests to the TikTok API
      } else {
        // Authentication failed or was canceled by the user
        console.error("TikTok authentication failed");
      }
    } catch (error) {
      // Handle errors
      console.error("Authentication error:", error);
    }
  };

  // Facebook Login Code
  const handleFacebookLogin = async () => {
    console.log("handleFacebookLogin");
    try {
      const result = await promptAsync();
      if (result.type !== "success") {
        alert("Uh oh ,something went wrong!");
        return;
      }
    } catch (error) {
      console.log("Error logging in with Facebook:", error);
    }
  };

  // Instagram Login Code
  const handleInstagramLogin = async () => {
    try {
      const redirectUri = encodeURIComponent(
        "https://my-test-app.rpxnow.com/instagram/callback"
      );

      const authUrl = `https://api.instagram.com/oauth/authorize?client_id=727200839438769&redirect_uri=${redirectUri}&response_type=token&scope=vb2 - Test1`;

      const result = await WebBrowser.openBrowserAsync(authUrl);
      console.log(result, "result");
      if (result.type === "success") {
        console.log("Instagram authentication successful");

        // Check if the URL contains an access token
        const accessToken = extractAccessTokenFromUrl(result.url);
        if (accessToken) {
          console.log("Access Token:", accessToken);
          // Now you can use the access token for further actions with the Instagram API
        } else {
          console.error("Access token not found in URL");
        }
      } else if (result.type === "cancel" || result.type === "dismiss") {
        console.log("User canceled Instagram authentication");
      } else {
        console.error("Instagram authentication failed");
      }
    } catch (error) {
      console.error("Error opening browser:", error);
    }
  };

  // Youtube Login Code
  const handleYouTubeLogin = async () => {
    const clientId =
      "105548782099-ajnd6761766tmrl5kbuv2i76fvnvc7pc.apps.googleusercontent.com";
    const redirectUri = encodeURIComponent("https://viralblitzmedia.com/");
    const responseType = "token";
    const scope = encodeURIComponent(
      "https://www.googleapis.com/auth/youtube.readonly"
    );
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    try {
      const result = await WebBrowser.openAuthSessionAsync(authUrl);
      console.log(result, "result");
      if (result.type === "success") {
        console.log("Authentication successful:", result.url);
        // Parse the URL to extract the access token or other relevant data
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  // Pinterest Login Code
  const handlePinterestLogin = async () => {
    try {
      const redirectUrl = await WebBrowser.openAuthSessionAsync(
        "https://api.pinterest.com/oauth/?response_type=code&client_id=1113726320258520066&redirect_uri=https://syxp3jdhbb.execute-api.us-east-1.amazonaws.com/dev/linkedin/login&scope=read_public,write_public"
      );
console.log(redirectUrl,'redirectUrl')
      // Handle the redirect URL
      if (redirectUrl) {
        console.log("Redirect URL:", redirectUrl);
        // Now you can extract the code from the redirect URL
        // and perform further actions with the Pinterest API
      } else {
        console.error("Pinterest authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const socialMedia = [
    {
      id: 1,
      name: "facebook",
      image: require("../../assets/images/fa.png"),
      onPress: handleFacebookLogin,
    },
    {
      id: 2,
      name: "Instagram",
      image: require("../../assets/images/in.png"),
      onPress: handleInstagramLogin,
    },
    {
      id: 3,
      name: "Twitter",
      image: require("../../assets/images/tw.png"),
      onPress: handleTwitterLogin,
    },
    {
      id: 4,
      name: "Pinterset",
      image: require("../../assets/images/pi.png"),
      onPress: handlePinterestLogin,
    },
    {
      id: 5,
      name: "Tik",
      image: require("../../assets/images/tik.png"),
      onPress: handleTikLogin,
    },
    {
      id: 6,
      name: "LinkedIn",
      image: require("../../assets/images/li.png"),
      onPress: handleLinkedInLogin,
    },
    {
      id: 7,
      name: "Youtube",
      image: require("../../assets/images/yo.png"),
      onPress: handleYouTubeLogin,
    },
  ];

  // Get the screen width
  const screenWidth = Dimensions.get("window").width;

  // Calculate the number of circles to display per row based on screen width
  const circlesPerRow = Math.floor(screenWidth / 100); // Assuming each circle has a width of 80 and margin of 10

  // Function to render circles based on the data
  const renderCircles = () => {
    const circles = socialMedia.map((platform, index) => (
      <TouchableOpacity key={index} onPress={platform.onPress}>
        <Image style={styles.circle} key={index} source={platform.image} />
      </TouchableOpacity>
    ));

    // If more than circlesPerRow circles, create a new row
    if (socialMedia.length > circlesPerRow) {
      const rows = [];
      while (circles.length > 0) {
        rows.push(
          <View style={styles.containera} key={rows.length}>
            {circles.splice(0, circlesPerRow)}
          </View>
        );
      }
      return rows;
    }

    return <View style={styles.containera}>{circles}</View>;
  };

  const socialMediaa = [
    {
      id: 1,
      name: "Health & Wellness",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 2,
      name: "Business",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 3,
      name: "Finance",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 4,
      name: "Tech",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 5,
      name: "Arts",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 6,
      name: "Sports",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 7,
      name: "Travel",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 8,
      name: "Music",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 9,
      name: "Food",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 10,
      name: "Entertainment",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 11,
      name: "Fashion",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 12,
      name: "Hobbies",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 13,
      name: "Lifestyle",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 14,
      name: "Pets",
      image: require("../../assets/images/interest.png"),
    },
    {
      id: 15,
      name: "Gaming",
      image: require("../../assets/images/interest.png"),
    },
  ];
  const handleFacebookLogout = async () => {
    try {
      // Check if the LoginManager object exists
      if (LoginManager) {
        // Log out the user from Facebook
        await LoginManager.logOut();
        // After successful logout, you can navigate the user to the login screen or perform any other action
        console.log("Logged out from Facebook");
      } else {
        console.error("LoginManager is null");
      }
    } catch (error) {
      console.error("Error logging out from Facebook:", error);
    }
  };
  // Get the screen width
  const screenWidtha = Dimensions.get("window").width / "0.1";

  // Calculate the number of circles to display per row based on screen width
  const circlesPerRowa = Math.floor(screenWidtha / 100); // Assuming each circle has a width of 80 and margin of 10

  // Function to render circles based on the data
  const renderCirclesa = () => {
    const circlesa = socialMediaa.map((media, index) => (
      <TouchableOpacity onPress={handleYouTubeLogin}>
        <Image style={styles.circlea} key={index} source={media.image} />
        <Text style={styles.circleText}>{media.name} </Text>
      </TouchableOpacity>
    ));

    // If more than circlesPerRow circles, create a new row
    if (socialMediaa.length > circlesPerRowa) {
      const rows = [];
      while (circlesa.length > 0) {
        rows.push(
          <View style={styles.containeraa} key={rows.length}>
            {circlesa.splice(0, circlesPerRow)}
          </View>
        );
      }
      return rows;
    }
    return <View style={styles.containeraa}>{circlesa}</View>;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Almost done!</Text>

        <Text style={styles.subtitle}>Let’s connect your social media</Text>

        {/* Render circles */}
        {renderCircles()}
        <Text style={styles.subtitle}>Select your business category (max 3)</Text>
        {renderCirclesa()}
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToRegister}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "appfont-medium",
    fontSize: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#9399AA",
    borderColor: "#9399AA",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
  subtitle: {
    textAlign: "start",
    fontFamily: "appfont-medium",
    fontSize: 16,
    marginTop: 20,
  },
  circleText: {
    marginTop: 3,
    textAlign: "center",
    fontFamily: "appfont-medium",
    fontSize: 12,
  },
  containera: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10, // Adjust as needed
    flexWrap: "wrap",
    gap: 10,
  },
  containeraa: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20, // Adjust as needed
    flexWrap: "wrap",
    gap: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.MAIN,
    marginVertical: 10,
  },
  circlea: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
});

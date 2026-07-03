import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const WelcomeScreen = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // const hasCredentials =
    //   email.trim().length > 0 || password.trim().length > 0;

    // if (!hasCredentials) {
    //   Alert.alert(
    //     "Missing details",
    //     "Enter your email or password to continue.",
    //   );
    //   return;
    // }

    Alert.alert("Login successful", "You have been signed in.");
    clearForm();
    // router.replace("/dashboard");
    router.push("/dashboard");
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.background}>
        <View style={styles.content}>
          <View style={styles.brandBlock}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.brandName}>Practicare</Text>
          </View>

          <Text style={styles.heading}>Welcome back !</Text>

          <View style={styles.socialRow}>
            <Pressable
              style={styles.socialButton}
              onPress={() => {
                alert("Google login pressed");
              }}
            >
              <Text style={styles.socialLabel}>Google</Text>
            </Pressable>

            <Pressable
              style={styles.socialButton}
              onPress={() => {
                alert("Apple login pressed");
              }}
            >
              <Text style={styles.socialLabel}>Apple</Text>
            </Pressable>
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with email</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.form}>
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#6f938d"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#6f938d"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Pressable
            style={styles.forgotButton}
            onPress={() => {
              alert("Forgot password pressed");
            }}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>

          <Pressable style={styles.loginButton} onPress={() => handleLogin()}>
            <Text style={styles.loginText}>Log In</Text>
          </Pressable>

          <View style={styles.signUpRow}>
            <Text style={styles.signUpPrompt}>Don&apos;t have an account?</Text>
            <Pressable onPress={() => alert("Sign Up pressed")}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Terms of Service</Text>
            <View style={styles.footerDivider} />
            <Text style={styles.footerText}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#081612",
  },
  background: {
    flex: 1,
    backgroundColor: "#081612",
    overflow: "hidden",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  brandBlock: {
    alignItems: "center",
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 0,
  },
  logo: {
    width: 200,
    height: 200,
    marginRight: -60,
    marginLeft: -60,
  },
  brandName: {
    fontSize: 50,
    color: "#1da89b",
    fontWeight: "500",
  },
  heading: {
    marginTop: -5,
    color: "#e9f5f2",
    fontSize: 35,
    fontWeight: "500",
    textAlign: "center",
  },
  socialRow: {
    flexDirection: "row",
    gap: 20,
  },
  socialButton: {
    flex: 1,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#18352f",
    borderWidth: 1,
    borderColor: "rgba(59, 109, 97, 0.35)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  socialLabel: {
    color: "#edf5f2",
    fontSize: 15,
    fontWeight: "600",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -10,
    marginBottom: -10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(99, 138, 131, 0.28)",
  },
  dividerText: {
    color: "#6e908a",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  form: {
    gap: 12,
  },
  input: {
    height: 54,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(61, 116, 105, 0.45)",
    backgroundColor: "rgba(13, 34, 28, 0.72)",
    color: "#eff8f5",
    paddingHorizontal: 16,
    fontSize: 15,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -10,
    marginBottom: -20,
  },
  forgotText: {
    color: "#d8e6e2",
    fontSize: 14,
  },
  loginButton: {
    marginTop: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#31ddc4",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#31ddc4",
  },
  loginText: {
    color: "#03110d",
    fontSize: 20,
    fontWeight: "700",
  },
  signUpRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  signUpPrompt: {
    color: "#9eb6b0",
    fontSize: 14,
  },
  signUpLink: {
    color: "#eff6f4",
    fontSize: 14,
    fontWeight: "700",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
    gap: 10,
  },
  footerText: {
    color: "#5f7d78",
    fontSize: 13,
  },
  footerDivider: {
    width: 1,
    height: 14,
    backgroundColor: "rgba(95, 125, 120, 0.5)",
  },
});

export default WelcomeScreen;

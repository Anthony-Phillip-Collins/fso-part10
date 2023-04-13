import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  ns(name) {
    return `${this.namespace}:${name}`;
  }

  async getAccessToken() {
    try {
      const value = await AsyncStorage.getItem(this.ns("accessToken"));
      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(this.ns("accessToken"), accessToken);
    } catch (e) {
      // saving error
      console.log(e);
    }
    console.log("Token saved.");
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(this.ns("accessToken"));
    } catch (e) {
      // remove error
      console.log(e);
    }

    console.log("Token removed.");
  }
}

export default AuthStorage;

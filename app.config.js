import 'dotenv/config';

export default {
  "expo": {
    "name": "ChatApp",
    "slug": "ChatApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.sgirase08.rn_chatapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },

    "extra": {
      "eas": {
        "projectId": "83178c0b-db97-40fe-8c50-c9dec40ff1ab"
      }
    }

  }
}

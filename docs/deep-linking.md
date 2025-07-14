Great question! The `npx uri-scheme` tool is perfect for testing deep links. Here's how to use it with your Expo app:

## Install and Use uri-scheme

### 1. **Install uri-scheme globally:**
```bash
npm install -g uri-scheme
```

### 2. **Open your app first:**
Make sure your app is running on the simulator/device:
```bash
# For iOS
npx expo run:ios

# For Android  
npx expo run:android
```

### 3. **Test Universal Links:**

#### Test your universal links:
```bash
# Test contact-us page
npx uri-scheme open "https://universal-links-web.vercel.app/contact-us" --ios

# Test invite page  
npx uri-scheme open "https://universal-links-web.vercel.app/invite" --android

# Test home page
npx uri-scheme open "https://universal-links-web.vercel.app/" --ios
```

#### Test custom scheme (fallback):
```bash
# Test with your custom scheme
npx uri-scheme open "universallinks://contact-us" --ios
npx uri-scheme open "universallinks://invite" --android
```

## Available Commands:

### **Open URLs:**
```bash
# iOS Simulator
npx uri-scheme open "https://universal-links-web.vercel.app/contact-us" --ios

# Android Emulator
npx uri-scheme open "https://universal-links-web.vercel.app/contact-us" --android

# Both platforms
npx uri-scheme open "https://universal-links-web.vercel.app/contact-us"
```

### **List installed apps:**
```bash
# See what apps can handle your scheme
npx uri-scheme list --ios
npx uri-scheme list --android
```

### **Test if your app is registered:**
```bash
# Check if your app responds to your custom scheme
npx uri-scheme test universallinks --ios
npx uri-scheme test universallinks --android
```

## Expected Behavior:

✅ **Success**: Your app should open and navigate to the correct screen
❌ **Failure**: Browser opens instead of your app, or app doesn't respond

## Troubleshooting Tips:

### If universal links don't work:
1. **Check your well-known files are accessible:**
   ```bash
   curl https://universal-links-web.vercel.app/.well-known/assetlinks.json
   curl https://universal-links-web.vercel.app/.well-known/apple-app-site-association
   ```

2. **Test custom scheme first:**
   ```bash
   npx uri-scheme open "universallinks://contact-us" --ios
   ```

3. **Verify app is installed and running:**
   ```bash
   npx uri-scheme list --ios | grep universallinks
   ```
Google provides several types of system images for Android emulators, each serving different use cases. Here's a breakdown of the **types of emulator system images**, including **user**, **userdebug**, and **eng** images.

---

## 🧩 Android Emulator Image Types

### 1. **`user` Image (Production)**

* ✅ Default image used in most official emulator builds (e.g., `Google APIs` image)
* 🔒 **No root access**
* 🚫 `adb root` **won’t work**: `adbd cannot run as root in production builds`
* ✅ Suitable for testing production-like behavior

**Examples:**

* `Google Play x86_64`
* `Google APIs x86_64`
* **Used for testing apps under Play Store rules**

---

### 2. **`userdebug` Image**

* 🛠 A mix of production and development features
* ✅ Supports **`adb root`**, **`adb remount`**, `su`, etc.
* ✅ Ideal for debugging, inspecting `/data/data`, modifying system files
* ✅ More secure than `eng` but more permissive than `user`
* ✅ You can **start the shell as root**

> Not available directly in Android Studio’s Device Manager for all API levels.

You can download via command line (see below 👇)

---

### 3. **`eng` Image (Engineering)**

* 🔓 Fully open system image for platform developers
* 🧪 Has many debugging tools, logs, and services
* ❗ Insecure and not optimized
* ✅ Full root access, all system flags disabled

---

## 🎯 How to Check the Type of Your Running Emulator

```bash
adb shell getprop ro.build.type
```

Typical values:

* `user` = production
* `userdebug` = debug-enabled
* `eng` = engineering

---

## 📦 Available Image Types in Android Studio

In **Android Studio > Device Manager > Create Device > System Image**:

* **Google Play** → `user`
* **Google APIs** → `user`
* **AOSP x86/x86\_64** → varies; may allow root (closer to `userdebug`)
* **Android Automotive OS / Android TV** → some include `userdebug`

To get `userdebug` or `eng` images, you'll often need to:

---

## ⬇️ Download Debug Images from AOSP (Command Line)

```bash
sdkmanager --install "system-images;android-30;google_apis_playstore;x86_64"
sdkmanager --install "system-images;android-30;default;x86_64"
```

To find more:

```bash
sdkmanager --list | grep system-images
```

---

## 🛠 Recommended: Use AOSP x86\_64 or ARM64 for Root Access

In Android Studio:

1. Go to **Device Manager > Create Virtual Device**
2. Choose a system image:

   * **`AOSP x86_64`** (more permissive)
   * Avoid **Google Play** images if you need root

---

### ✅ Summary

| Image Type  | `adb root` | Suitable for               |
| ----------- | ---------- | -------------------------- |
| `user`      | ❌          | Production testing         |
| `userdebug` | ✅          | App and platform debugging |
| `eng`       | ✅          | Deep system-level testing  |

---

Let me know what API level and use case you want (root access vs production testing), and I’ll recommend a specific image you can install.

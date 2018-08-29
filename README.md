# Manhunt
The mobile game where you hunt man for sport!

Jkjk... but it's kinda like that.

Sneak photos of your friends for points; the better the photo, the more points you get.

Coming soon to the App Store.

> *"I went on a manhunt once. I just got back from Nam. I was hitchhiking through Oregon. Next thing I know there's a bunch of cops chasing after me through the woods! I had to take them all out, it was a bloodbath!"*
– Frank Reynolds

# When trying to build from clone...
The Google Vision libraries are not included in this repo because they're too big to upload to git. Download them from the links provided by the `react-native-camera` repo and place them in a folder called "Frameworks" inside `Manhunt/ios/`.

You will also likely need to change the permissions on the root directory for Xcode to build the project properly. This can be done on MacOS by following these steps:
1. Select the root directory
2. Do `File > Get Info`
3. Scroll down to `Sharing and Permissions`
4. Click the lock on the bottom right and input your password
5. Change the permissions for `everyone` to `Read & Write`
6. Click the gear icon at the bottom of the window
7. Click `apply to enclosed items` and continue

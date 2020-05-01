<h1 align="center">:octocat: Al-Quran Mobile App :octocat:</h1>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [How To Run](howtorun)
- [Screenshots](#screenshots)
- [Testing](#testing)
- [License](#license)
- [Author](#author)

## Introduction
Al-Quran-Mobile-React-Native is an app Al-Quran for Mobile. Its only support Indonesian language. The data is provide by API from <a href="https://quran.kemenag.go.id/">KEMENAG RI</a>.


## Features
* User can see all list of surah
* User can get list all ayat on detail surah
* And more

## Requirements
* [`npm`](https://www.npmjs.com/get-npm) or [`yarn`](https://yarnpkg.com/) 
* [`react native`](https://facebook.github.io/react-native)
* [`react navigation`](https://reactnavigation.org/)


## How To Run

1. Clone this repository
   ```
   $ git clone https://github.com/ihsaninh/Al-Quran-Mobile-React-Native.git
   ```
2. Install all dependencies on the package.json
   ```
   $ cd Al-Quran-Mobile-React-Native
   $ npm install or yarn install (if you using yarn)
   ```
3. Run Al-Quran Mobile App

   - Dev
   ```
   $ react-native run-android --variant=devDebug --appIdSuffix=dev 
   ```
   - Beta
   ```
   $ react-native run-android --variant=betaDebug 
   ```

## Screenshot
<div align="center">
    <img width="300" src="https://github.com/ihsaninh/Al-Quran-Mobile-React-Native/blob/master/ss2.jpg">
    <img width="300" src="https://github.com/ihsaninh/Al-Quran-Mobile-React-Native/blob/master/ss1.jpg">   
    <img width="300" src="https://github.com/ihsaninh/Al-Quran-Mobile-React-Native/blob/master/ss4.jpg">    
    <img width="300" src="https://github.com/ihsaninh/Al-Quran-Mobile-React-Native/blob/master/ss5.jpg">
</div>

## Testing
If you want test the application, you can install it directly by download the app on this <a href="https://drive.google.com/open?id=1opWBufyxsVw0O9RyEhdZWPT07tKqzmXb">New Version</a>. You can make your own apk by yourself with command ``` cd android && ./gradlew clean && ./gradlew assembleRelease ```

## License
Al Quran Mobile React Native is licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.

## Author
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/ihsaninh">
          <img width="100" src="https://avatars0.githubusercontent.com/u/24758414?s=460&v=4" alt="Ihsan Nurul Habib"><br/>
          <sub><b>Ihsan Nurul Habib</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>

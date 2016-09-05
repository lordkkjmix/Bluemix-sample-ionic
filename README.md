# ionic application for IBM MobileFirst Services on IBM Bluemix
##The readme is available in french in README-FR.md
##Ce README est disponible en français dans README-FR.md
This projet contains a ionic project that you can use to learn.

### Create your mobile backend in Bluemix

1. In the Boilerplates section of the Bluemix catalog, click MobileFirst Services Starter.
2. Enter a name and host for your app and click Create.
3. Click Finish.
### Create your projet 
```Bash
ionic start myproject blank
```

### Downloading the sample

Clone the samples with the following command:
	
```Bash
git clone https://github.com/lordkkjmix/Bluemix-sample-ionic
```
###Replace your ionic www folder by cloned www folder	
### Add the native platforms to your app

Navigate into your project directory and run the following commands:

```Bash
ionic platform add ios
ionic platform add android
```
	
Add the plugin:

```Bash
ionic plugin add ibm-mfp-core
```


  
### Configure the front end

1. Navigate to the directory where the project was cloned.
2. Open <b>app.js</b> located at [your-directory]/www/js/app.js
3. Replace the \<APPLICATION_ROUTE\> and \<APPLICATION_GUID\> with your Bluemix application ID and route.
4. Make sure your route is using **https**

Javascript:

```Javascript	
// Bluemix credentials
route: "<APPLICATION_ROUTE>",
guid: "<APPLICATION_GUID>",
```

***Note: Don't forget commas at the end of each line!***

### Build/Run the ionic App

Now you can run your application in your mobile emulator or on your device.

1. Build the ionic app. (no need if your run)From your terminal enter the following command:

	```Bash
	ionic build ios
	ionic build android
	```

2. Run the sample app. From your terminal enter the following command:

	```Bash
	ionic run ios
	ionic run android		
	```

You will see a single view application with a "PING BLUEMIX" button. When you click this button the application will test the connection from the client to the backend Bluemix application. The application uses the ApplicationRoute specified in **app.js** in order to test the connection. The application will then display if the connection was successful or unsuccessful. In the unsuccessful state an error will be displayed in the Xcode/Android log, as well as in the application.

***Note: A GET request is made to a protected resource on the Node.js runtime on Bluemix. This code has been provided in the MobileFirst Services Starter boilerplate. If the backend application was not created using the MobileFirst Services Starter boilerplate the application will not be able to connect successfully.***

### Resolve any problems

Check the following items:

- Verify that you correctly pasted the route and GUID values.
- Check the Xcode or Android debug log for more information.
- Check the status of your App in Bluemix.
***Browser can run cordova plugin and make error "Undefined file"*** 
### License

This package contains sample code provided in source code form. The samples are licensed under the under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 and may also view the license in the license.txt file within this package. Also see the notices.txt file within this package for additional notices.

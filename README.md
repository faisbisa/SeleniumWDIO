# SeleniumWDIO
1. npm init
2. npm install
3. for npm init wdio
fungsi spec : lokasi untuk membuat test script
4. run : npm run wdio

#Test Scenario

1. >> User Story : As a User, I want to login failed with invalid password and show validation "Kredential yang anda berikan Salah"
   >> Fiture : Login
   >> Scenario : Login with invalid data
   >> Given : Kasir Aja Website
 - When user open url Kasir Aja
 - And user can input email valid
 - And user can input password invalid
 - And user click button Login
 - Then user can't login with validate "Kredential yang anda berikan Salah"
 
 2. >> User Story : As a User, I want to login failed with empty data and show validation ""email" is not allowed to be empty"
   >> Fiture : Login
   >> Scenario : Login with empty data
   >> Given : Kasir Aja Website
 - When user open url Kasir Aja
 - And user not input email 
 - And user not input password 
 - And user click button Login
 - Then user can't login with validate "email" is not allowed to be empty"
 
 3.>> User Story : As a User, I want to login success
   >> Fiture : Login
   >> Scenario : Login with valid data
   >> Given : Kasir Aja Website
 - When user open url Kasir Aja
 - And user can input email valid
 - And user can input password valid
 - And user click button Login
 - Then user can login with validate success to Kasir Aja home page
 
 OUTPUT : 
 <img width="682" alt="image" src="https://user-images.githubusercontent.com/19841139/221335096-ffee8d66-b545-4f1f-9f95-715029e890b2.png">

atau bisa dilihat video di dalam repo ini

Terima kasih ^,^

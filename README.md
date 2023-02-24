# SeleniumWDIO
1. npm init
2. npm install
3. for npm init wdio
fungsi spec : lokasi untuk membuat test script
4. run : npm run wdio

#Test Scenario

1. >> User Story : As a User, I want to login success
   >> Fiture : Login
   >> Scenario : Login with valid data
   >> Given : Kasir Aja Website
 - When user open url Kasir Aja
 - And user can input email valid
 - And user can input password valid
 - And user click button Login
 - Then user can login with validate success to Kasir Aja home page

2. >> User Story : As a User, I want to login failed with invalid password and show validation "Kredential yang anda berikan Salah"
   >> Fiture : Login
   >> Scenario : Login with invalid data
   >> Given : Kasir Aja Website
 - When user open url Kasir Aja
 - And user can input email valid
 - And user can input password invalid
 - And user click button Login
 - Then user can't login with validate ""Kredential yang anda berikan Salah""

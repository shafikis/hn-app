
var HNfeats="&bull; Write notes on home screen, lock screen or both wallpapers."
+"<br>&bull; Write up to three notes categories on wallpaper at once"
+"<br>    (example: to do, to buy and remeber)."
+"<br>&bull; Reset wallpaper to original state at any time."
+"<br>&bull; Change notes background."
+"<br>&bull; Many customizable fonts."
+"<br>&bull; Ability to change notes order on wallpaper."
+"<br>and more coming in future updates.";

var HNdesc="Write notes on your home screen and lock screen wallpapers "
+"<br> and never miss a note again.";

var HNpolicy="(\"I\" refers to Heynote App developer)."
+"<br><br>I respect your privacy, and the only data I collect is your email address when you send feedback(and it is only used to reply to your feedback), but all other data(written under \"COLLECTED DATA AND WHAT FOR\") is collected by third party services (written under \"THIRD PARTY SERVICES\")."
+"<br><br><b>COLLECTED DATA AND WHAT FOR:</b>"
+"<br><br>1.Crashes and analytics to improve app(can be disabled from settings)."
+"<br><br>2.Email address only when you send a feedback(in order to reply to the feedback)"
+"<br><br><b>THIRD PARTY SERVICES:</b>"
+"<br><br>1.Google Analytics for Firebase."
+"<br><br>2.Firebase Crashlytics."
+"<br><br>Firebase policy link: firebase.google.com/support/privacy"
+"<br><br><b>PERMISSIONS AND WHAT FOR:</b>"
+"<br><br>1.Read and write storage(in order to store notes locally on your phone)."
+"<br><br>2.Connect to internet(in order to send crash reports and analytics to Firebase)."
+"<br><br>3.Setting wallpaper(which is the main functionality of the app)."
+"<br><br><b>POLICY CHANGES:</b>"
+"<br><br>You will be informed if privacy policy changed and you will be asked if you agree on the new one."
+"<br><br>At this point no ads is served to app, if things changed I will inform you in the future and ask for your agreement."
+"<br><br><b>APP OWNER:</b>"
+"<br><br>This app is owned by Shafik Ismail"
+"<br><br>Copyright &#169; 2020 by Shafik Ismail. All rights reserved."
+"<br><br><b>CONTACT ME:</b>"
+"<br><br>For any questions contact me at:"
+"<br><br>shafikismaildev@gmail.com"
+"<br><br>By using Heynote app you consent to this privacy policy."
+"<br><br>";

var HNabout="This app is fully designed and developed by Shafik Ismail.<br>Copyright &#169; 2020 by Shafik Ismail. All rights reserved."

window.onload = function(){
	document.getElementById('featuresP').innerHTML = HNfeats;
	document.getElementById('descriptionP').innerHTML = HNdesc;
	document.getElementById('policyP').innerHTML = HNpolicy;
	document.getElementById('aboutP').innerHTML = HNabout;

}
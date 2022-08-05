
var HNfeats="&bull; Heynote's way of displaying notes on wallpaper will"
+" get you notified without the need for any widgets or lock screen"
+" edit(Heynote writes notes directly on stock wallpaper which also can be reset at any time)."
+"<br>&bull; Add notes to your home and lock screen wallpapers."
+"<br>&bull; Fully customize your notes"
+"<br> (position on screen, font color, font family, transparency, ...., etc)."
+"<br>&bull; Reset wallpaper to original state at any time."
+"<br>&bull; Change notes background."
+"<br>and more coming in future updates.";

var HNdesc="Add notes, lists and images to your home and lock screen wallpapers "
+"<br> and never miss a note again.";

var HNabout="This app is fully designed and developed by Shafik Ismail.<br>Copyright &#169; 2020-2022 by Shafik Ismail. All rights reserved."

window.onload = function(){
	document.getElementById('featuresP').innerHTML = HNfeats;
	document.getElementById('descriptionP').innerHTML = HNdesc;
	document.getElementById('aboutP').innerHTML = HNabout;
}

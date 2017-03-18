var input1 = $("#input-1")
    , input2 = $("#input-2")
    , input3 = $("#input-3")
    , input4 = $("#input-4")
    , input5 = $("#input-5");
var flah1 = $("#flah-1")
    , flah2 = $("#flah-2")
    , flah3 = $("#flah-3")
    , flah4 = $("#flah-4")
    , flah5 = $("#flah-5")
var text1 = $("#text-1")
    , text2 = $("#text-2")
    , text3 = $("#text-3")
    , text4 = $("#text-4")
    , text5 = $("#text-5");
var userText1 = ""
    , userText2 = ""
    , userText3 = ""
    , userText4 = ""
    , userText5 = "";
var userTexts = [userText1, userText2, userText3, userText4, userText5];
var tmln = new TimelineMax();
/*Hide Flahs
document.onkeypress = function () {
        for (i = 1; i < 6; i++) {
            if (userTexts[i] === "") {
                $("#flah-" + i + "").addClass("auto-alpha-off");
            }
            else {
                $("#flah-" + i + "").removeClass("auto-alpha-off");
            }
        }
    }
*/
    /*set default text*/
window.onload = function () {
    flah1.append(userText1);
    flah2.append(userText2);
    flah3.append(userText3);
    flah4.append(userText4);
    flah5.append(userText5);;
};
/*set text on input*/
input1.keyup(function () {
    userText1 = this.value;
    userText1 = userText1.substring(0, 25) + "<br>" + userText1.substring(25);
    text1.html(userText1);
});
input2.keyup(function () {
    userText2 = this.value;
    userText2 = userText1.substring(0, 25) + "<br>" + userText2.substring(25);
    text1.innerHTML = userText2;
});
input3.keyup(function () {
    userText3 = this.value;
    userText3 = userText1.substring(0, 25) + "<br>" + userText3.substring(25);
    text1.innerHTML = userText3;
});
input4.keyup(function () {
    userText4 = this.value;
    userText4 = userText1.substring(0, 25) + "<br>" + userText4.substring(25);
    text1.innerHTML = userText4;
});
input5.keyup(function () {
    userText5 = this.value;
    userText5 = userText1.substring(0, 25) + "<br>" + userText5.substring(25);
    text1.innerHTML = userText5;
});

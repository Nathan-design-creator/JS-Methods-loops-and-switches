var text = "aWesoMe";

document.write(text.toUpperCase());
document.write("<br>");
document.write(text.toLowerCase());

document.write("<br>");
document.write(text.startsWith("aW"));
document.write("<br>");
document.write(text.endsWith("Me"));

document.write("<br>");
for (var i = 1; i <= 100; i = i + 1) {
    document.write(i + " ");

}
document.write("<br>");
document.write("<br>");
document.write("<br>");

var day = new Date().getDay();
document.write(day);
var display_day;

switch (day) {
    case 0:
        display_day = "Sunday";
        break;
    case 1:
        display_day = "Monday";
        break;
    case 2:
        display_day = "Tuesday";
        break;
    case 3:
        display_day = "Wednesday";
        break;
    case 4:
        display_day = "Thursday";
        break;
    case 5:
        display_day = "Friday";
        break;
    case 6:
        display_day = "Saturday";
        break;
    default:
        display_day = "Invalid day";
}
document.write("<br>");
document.write("<br>");
document.write("Today is " + display_day);
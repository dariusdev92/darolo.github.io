/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var username = prompt("Su nombre.") || "Random".concat(Date.now());
var form = document.querySelector('#form');
var input = form.querySelector('#text');
var chat = document.querySelector('#chat');
var webSocket = new WebSocket("wss://ecsdev17.ex-cle.la:1880/ws/chat");
var sendMessage = function (ws, name) { return function (event) {
    event.preventDefault();
    var message = {
        name: name,
        text: input.value,
    };
    console.log('Send Message', message);
    ws.send(JSON.stringify(message));
    input.value = "";
}; };
var reciveMessage = function (event) {
    var message = JSON.parse(event.data);
    console.log('Recive Message', message);
    var span = document.createElement('span');
    span.innerHTML = "<strong>".concat(message.name, "</strong>: ").concat(message.text, "<br/>");
    chat.appendChild(span);
};
webSocket.onopen = function (event) {
    console.log('WebSocket Open', event);
    webSocket.onmessage = reciveMessage;
    form.onsubmit = sendMessage(webSocket, username);
};
input.blur();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnJ0Yy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciB1c2VybmFtZSA9IHByb21wdChcIlN1IG5vbWJyZS5cIikgfHwgXCJSYW5kb21cIi5jb25jYXQoRGF0ZS5ub3coKSk7XG52YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG52YXIgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Jyk7XG52YXIgY2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0Jyk7XG52YXIgd2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vZWNzZGV2MTcuZXgtY2xlLmxhOjE4ODAvd3MvY2hhdFwiKTtcbnZhciBzZW5kTWVzc2FnZSA9IGZ1bmN0aW9uICh3cywgbmFtZSkgeyByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnU2VuZCBNZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xufTsgfTtcbnZhciByZWNpdmVNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdSZWNpdmUgTWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gXCI8c3Ryb25nPlwiLmNvbmNhdChtZXNzYWdlLm5hbWUsIFwiPC9zdHJvbmc+OiBcIikuY29uY2F0KG1lc3NhZ2UudGV4dCwgXCI8YnIvPlwiKTtcbiAgICBjaGF0LmFwcGVuZENoaWxkKHNwYW4pO1xufTtcbndlYlNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IE9wZW4nLCBldmVudCk7XG4gICAgd2ViU29ja2V0Lm9ubWVzc2FnZSA9IHJlY2l2ZU1lc3NhZ2U7XG4gICAgZm9ybS5vbnN1Ym1pdCA9IHNlbmRNZXNzYWdlKHdlYlNvY2tldCwgdXNlcm5hbWUpO1xufTtcbmlucHV0LmJsdXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==

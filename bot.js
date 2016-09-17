/*Variable area*/
var Discord = require('discord.io');
var Permissions = require('./permissions');
var bot = new Discord.Client({
	token: "MjI1NTQwODk1Mjk3MTEwMDE2.Crqi8A.Bg6qFGX3Co6XTwD9L7hObVLiNKI",
	autorun: true
});

/*Event area*/

bot.on("ready", function(event) {
	console.log("Connected!");
	console.log("Logged in as: ");
	console.log(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function(user, userID, channelID, message, event) {
	console.log(user + " - " + userID);
	console.log("in " + channelID);
	console.log(message);
	console.log("----------");

	if (message === "!ping") {
		sendMessages(channelID, ["Pong"]); //Sending a message with our helper function
	} else if (message === "!picture") {
		sendFiles(channelID, ["image.png"]); //Sending a file with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!tako") {
		sendMessages(channelID, ["Le pouple le plus con au monde"]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!gunther") {
		sendMessages(channelID, ["humm you touch my tralala, humm my ding ding dong"]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!ame") {
		sendMessages(channelID, ["Le dieu de la pluie"]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!yamete") {
		sendMessages(channelID, ["Yamete kodasai yamete ya ya yaaaa sempai :open_mouth: "]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!fuck") {
		sendMessages(channelID, ["FUCK OFF ! " + " " + "<" + "@" +userID + ">"]); 
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!jojo") {
		sendMessages(channelID, ["Le plus grand des programmeur, il aime mangé ..... du code :joy:"]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, avatar, channelID, message, event) {

	if (message === "!avatar") {
		sendMessages(channelID, ["Les avatars arrive sous peut xD "]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!bucheron") {
		sendMessages(channelID, ["L'algue la plus grand et poilu au monde "]); //Sending a message with our helper function
	}
});

bot.on("message", function(user, userID, channelID, message, event) {

	if (message === "!help") {
		sendMessages(channelID, ["Voici la liste des commandes disponnible " + "<" + "@" + userID + ">" + ":" + "\n!ame" + "\n!bucheron" + "\n!fuck"
		+ "\n!gunther" +"\n!jojo" + "\n!ping" + "\n!tako" 
		+ "\n!yamete"]); //Sending a message with our helper function
	}
});

bot.on("presence", function(user, userID, status, game, event) {
	console.log(user + " is now: " + status);
});

bot.on("any", function(event) {
	//console.log(rawEvent) //Logs every event
});

bot.on("disconnect", function() {
	console.log("Bot disconnected");
	/*bot.connect()*/ //Auto reconnect
});

/*Function declaration area*/
function sendMessages(ID, messageArr, interval) {
	var resArr = [], len = messageArr.length;
	var callback = typeof(arguments[2]) === 'function' ?  arguments[2] :  arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendMessages() {
		setTimeout(function() {
			if (messageArr[0]) {
				bot.sendMessage({
					to: ID,
					message: messageArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendMessages();
			}
		}, interval);
	}
	_sendMessages();
}

function sendFiles(channelID, fileArr, interval) {
	var resArr = [], len = fileArr.length;
	var callback = typeof(arguments[2]) === 'function' ? arguments[2] : arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendFiles() {
		setTimeout(function() {
			if (fileArr[0]) {
				bot.uploadFile({
					to: channelID,
					file: fileArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendFiles();
			}
		}, interval);
	}
	_sendFiles();
}


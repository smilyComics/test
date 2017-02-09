function message() {
	var chat = document.getElementById("chat");
	var p = document.createElement("tr")
	var user = document.createElement("td")
	var Text = document.createElement("td")
	var time = document.createElement("td")
	user.innerHTML = prompt("what's your username?");
	Text.innerHTML = prompt("what do you want to say?");
	var d = new Date();
	time.innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + "." + d.getMinutes();
	chat.appendChild(p)
	p.appendChild(user)
	p.appendChild(Text)
	p.appendChild(time)
	p.appendChild(time)
}

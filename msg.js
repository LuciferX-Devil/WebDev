function createMsg(time,msg){
    const div=document.createElement("div")
    div.className="every_msg"
    div.innerHTML = `
        <div class="message">
            <div class="msg-body">
                <div class="msg-header">
                    <span class="msg-user">LUCIFER</span>
                    <span class="msg-time">${time}</span>
                </div>
                <div class="msg-content">
                    ${msg}
                </div>
            </div>
            <img class="msg-pfp" src="https://i.postimg.cc/HLLTdqSM/pfp.png" alt="pfp">
        </div>
    `
    return div
}

function addMsg() {
    const inp=document.getElementById("inp")
    
    const msgContent = inp.value
    const timeStamp = new Date().toLocaleTimeString()
    const messageDiv = createMsg(timeStamp, msgContent)
    document.getElementById("chat").appendChild(messageDiv)
    inp.value = ""
}

function receiveMsg(message){
    const time = new Date().toLocaleTimeString()
    const div = document.createElement("div")
    div.id="every_msg"
    div.innerHTML = `
        <div class="rec_msg">
            <img class="msg-pfp" src="https://i.postimg.cc/HLLTdqSM/pfp.png">
            <div class="rec-msg-body">
                <div class="msg-header">
                    <span class="msg-user">Member_1</span>
                    <span class="msg-time">${time}</span>
                </div>
                <div class="msg-content">
                    ${message}
                </div>
            </div>
        </div>
    `
    document.getElementById("chat").appendChild(div)
}



document.getElementById("inp").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addMsg();
    }
});


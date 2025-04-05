function createMsg(time,msg){
    const div=document.createElement("div")
    div.innerHTML = `
        <div class="message">
            <img class="msg-pfp" src="https://i.postimg.cc/HLLTdqSM/pfp.png" alt="pfp">
            <div class="msg-body">
                <div class="msg-header">
                    <span class="msg-user">Member_1</span>
                    <span class="msg-time">${time}</span>
                </div>
                <div class="msg-content">
                    ${msg}
                </div>
            </div>
        </div>
    `
    return div
}

function addMsg() {
    const inp=document.getElementById("inp")
    
    const msgContent = inp.value
    const timeStamp = new Date().toLocaleTimeString()
    const messageDiv = createMsg(timeStamp, msgContent)
    document.getElementById("messages").appendChild(messageDiv)
    inp.value = ""
}

document.getElementById("inp").addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
        addMsg();
    }
});
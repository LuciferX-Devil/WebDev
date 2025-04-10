function openSettings(){
    console.log("Setting open requested")
    document.getElementsByClassName("actarea")[0].style.filter = "blur(10px)"
    const sng_win = document.createElement("div")
    sng_win.innerHTML = `
        <div class='Settings_Window'>
            Change Appearance
            <form>
                <label for="apr_change">How do you want the messages to look?"</label>
                <select id="apr_change">
                    <option value="compact">Compact</option>
                    <option value="full_span">Full Span</option>
                </select>
            </form>
        </div>
    `
    document.getElementsByClassName("main")[0].appendChild(sng_win)

    function removeSet(event){
        if(!sng_win.contains(event.target)){
            sng_win.remove()
            document.getElementsByClassName("actarea")[0].style.filter = "none"
            document.removeEventListener("click",removeSet);
            console.log("Closed settings")
        }
    }
    setTimeout(Listener,500)
    function Listener(){
        document.addEventListener("click",removeSet)
    }

    const msg_display = document.getElementById("apr_change")
    const msg_array = document.getElementsByClassName("every_msg")
    const all_msg = Array.from(msg_array)
    
    if(msg_display.value === "full_span"){
        const children = document.getElementById("chat")

        for(let i=0;i<all_msg.length;i++){
            children.removeChild(all_msg[i])
            children.appendChild(all_msg[i])
        }
    }
}


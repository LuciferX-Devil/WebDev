function themeMars(){
    document.getElementsByClassName("main")[0].style.backgroundColor = "#472111"
    document.getElementsByClassName("globs")[0].style.backgroundColor = "#4a2312"
    document.getElementById("side").style.backgroundImage = "linear-gradient(#180a02,#321a0a)"
    document.querySelector(".settings").style.backgroundColor = "#472111"
    document.getElementById("main").style.backgroundImage = "linear-gradient(#220c00,#392013)"
    document.getElementsByClassName("profoot")[0].style.backgroundColor = "rgb(27, 10, 4)"
    document.documentElement.style.setProperty("--thumbColor1","rgb(73, 11, 11)")
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "#220c00"
    document.getElementsByClassName("Message_srch")[0].style.backgroundColor = "#421c0e"
    document.documentElement.style.setProperty("--thumbColor2","rgb(240, 106, 106)")
    document.documentElement.style.setProperty("--trackColor2","rgb(137, 27, 27)")
    document.getElementsByClassName("LeftUI")[0].style.backgroundImage = "linear-gradient(to right,#361306,#271007)"
    document.getElementsByClassName("RightUI")[0].style.backgroundColor = "#271007"
    document.documentElement.style.setProperty("--msg_balloon","rgb(185, 83, 45)")
    document.documentElement.style.setProperty("--receiver","rgb(213, 116, 80)")
    const msg_array = document.getElementsByClassName("message")
    const rec_array = document.getElementsByClassName("rec_msg")
    const sent_msg = Array.from(msg_array)
    const rec_msg = Array.from(rec_array)

    if(sent_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<sent_msg.length;i++){     
            children.removeChild(sent_msg[i])
            document.getElementById("chat").appendChild(sent_msg[i])
        }
    }

    if(rec_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<rec_msg.length;i++){     
            children.removeChild(rec_msg[i])
            document.getElementById("chat").appendChild(rec_msg[i])
        }
    }
    else{
        console.log("Empty chat, no changes")
    }
}

function themeMidBlu(){
    document.getElementsByClassName("main")[0].style.backgroundColor = "#212082"
    document.getElementsByClassName("globs")[0].style.backgroundColor = "#1a1884"
    document.getElementById("side").style.backgroundImage = "linear-gradient(#0B0A2A,#0E1342)"
    document.querySelector(".settings").style.backgroundColor = "#212082"
    document.getElementById("main").style.backgroundImage = "linear-gradient(#030132,#0d0c28)"
    document.getElementsByClassName("profoot")[0].style.backgroundColor = "rgb(4, 4, 27)"
    document.documentElement.style.setProperty("--thumbColor1","rgb(5, 7, 25)")
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "#030132"
    document.getElementsByClassName("Message_srch")[0].style.backgroundColor = "#0E1342"
    document.documentElement.style.setProperty("--thumbColor2","#989FEF")
    document.documentElement.style.setProperty("--trackColor2","#212082")
    document.getElementsByClassName("LeftUI")[0].style.backgroundImage = "linear-gradient(to right,#0E1342,#0B0A2A)"
    document.getElementsByClassName("RightUI")[0].style.backgroundColor = "#0B0A2A"
    document.documentElement.style.setProperty("--msg_balloon","#1a1884")
    document.documentElement.style.setProperty("--receiver","rgb(34, 17, 216)")
    const msg_array = document.getElementsByClassName("message")
    const rec_array = document.getElementsByClassName("rec_msg")
    const sent_msg = Array.from(msg_array)
    const rec_msg = Array.from(rec_array)

    if(sent_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<sent_msg.length;i++){     
            children.removeChild(sent_msg[i])
            document.getElementById("chat").appendChild(sent_msg[i])
        }
    }

    if(rec_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<rec_msg.length;i++){     
            children.removeChild(rec_msg[i])
            document.getElementById("chat").appendChild(rec_msg[i])
        }
    }
    else{
        console.log("Empty chat, no changes")
    }
}

function themeLitGreen(){
    document.getElementsByClassName("main")[0].style.backgroundColor = "rgb(173, 245, 210)"
    document.getElementsByClassName("globs")[0].style.backgroundColor = "rgb(147, 211, 154)"
    document.getElementById("side").style.backgroundImage = "linear-gradient(rgb(42, 247, 185),rgb(150, 223, 201))"
    document.querySelector(".settings").style.backgroundColor = "rgb(173, 245, 210)"
    document.getElementById("main").style.backgroundImage = "linear-gradient(rgb(105, 213, 120),rgb(132, 241, 188))"
    document.getElementsByClassName("profoot")[0].style.backgroundColor = "rgb(162, 255, 212)"
    document.documentElement.style.setProperty("--thumbColor1","rgb(30, 148, 60)")
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "rgb(105, 213, 120)"
    document.getElementsByClassName("Message_srch")[0].style.backgroundColor = "rgb(53, 247, 195)"
    document.documentElement.style.setProperty("--thumbColor2","rgb(112, 231, 201)")
    document.documentElement.style.setProperty("--trackColor2","rgb(15, 191, 83)")
    document.getElementsByClassName("LeftUI")[0].style.backgroundImage = "linear-gradient(to right,rgb(0, 240, 156),rgb(0, 200, 117))"
    document.getElementsByClassName("RightUI")[0].style.backgroundColor = "rgb(0,200,117)"
    document.documentElement.style.setProperty("--msg_balloon","rgb(48, 150, 72)")
    document.documentElement.style.setProperty("--receiver","rgb(62, 209, 118)")
    const msg_array = document.getElementsByClassName("message")
    const rec_array = document.getElementsByClassName("rec_msg")
    const sent_msg = Array.from(msg_array)
    const rec_msg = Array.from(rec_array)

    if(sent_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<sent_msg.length;i++){     
            children.removeChild(sent_msg[i])
            document.getElementById("chat").appendChild(sent_msg[i])
        }
    }

    if(rec_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<rec_msg.length;i++){     
            children.removeChild(rec_msg[i])
            document.getElementById("chat").appendChild(rec_msg[i])
        }
    }
    else{
        console.log("Empty chat, no changes")
    }
}


function themeMariGold(){
    document.getElementsByClassName("main")[0].style.backgroundColor = "rgb(238, 192, 11)"
    document.getElementsByClassName("globs")[0].style.backgroundColor = "rgb(237, 190, 60)"
    document.getElementById("side").style.backgroundImage = "linear-gradient(rgb(200, 168, 24),rgb(221, 179, 94))"
    document.querySelector(".settings").style.backgroundColor = "rgb(238, 192, 11)"
    document.getElementById("main").style.backgroundImage = "linear-gradient(rgb(182, 132, 24),rgb(240, 208, 110))"
    document.getElementsByClassName("profoot")[0].style.backgroundColor = "rgb(240, 181, 5)"
    document.documentElement.style.setProperty("--thumbColor1","rgb(220, 157, 40)")
    document.getElementsByClassName("buttons")[0].style.backgroundColor = "rgb(182, 132, 24)"
    document.getElementsByClassName("Message_srch")[0].style.backgroundColor = "rgb(237, 209, 47)"
    document.documentElement.style.setProperty("--thumbColor2","rgb(244, 190, 97)")
    document.documentElement.style.setProperty("--trackColor2","rgb(230, 168, 32)")
    document.getElementsByClassName("LeftUI")[0].style.backgroundImage = "linear-gradient(to right,rgb(240, 217, 102),rgb(249, 205, 30))"
    document.getElementsByClassName("RightUI")[0].style.backgroundColor = "rgb(249, 205, 30)"
    document.documentElement.style.setProperty("--msg_balloon","rgb(208, 132, 0)")
    document.documentElement.style.setProperty("--receiver","rgb(252, 196, 65)")
    const msg_array = document.getElementsByClassName("message")
    const rec_array = document.getElementsByClassName("rec_msg")
    const sent_msg = Array.from(msg_array)
    const rec_msg = Array.from(rec_array)

    if(sent_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<sent_msg.length;i++){     
            children.removeChild(sent_msg[i])
            document.getElementById("chat").appendChild(sent_msg[i])
        }
    }

    if(rec_msg.length>0){
        const children = document.getElementById("chat")
        for(let i=0;i<rec_msg.length;i++){     
            children.removeChild(rec_msg[i])
            document.getElementById("chat").appendChild(rec_msg[i])
        }
    }
    else{
        console.log("Empty chat, no changes")
    }
}

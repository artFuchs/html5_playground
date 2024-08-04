let myWindow = null;

function createWindow(){
    if (myWindow != null && !myWindow.closed)
        return;

    myWindow = window.open("","", "width=200, height=200");
}

function focusWindow(time = 0){
    if (myWindow == null || myWindow.closed)
        return;
    setTimeout( function(){
        myWindow.blur();
        myWindow.focus();
    }, time*1000);
}

function focusThisWindow(time=5){
    setTimeout(
        function(){
            console.log("chamou a função");
            window.self.focus();
        }, time*1000);
}

function notifyMe(time = 0){
    let options = {
        body: "Clique aqui para ir para a janela!"
    }


    setTimeout(
        function(){
            if (!("Notification in window")){
                alert("browser não suporta notificações de Desktop");
                return;
            }

            if (Notification.permission == "granted"){
                let notification = new Notification("olá", options);
                let callback = function(event){
                    //event.preventDefault(); // prevent the browser from focusing the Notification's tab
                    window.focus();
                    //window.open('http://www.mozilla.org', '_blank');
                }
                notification.onclick = callback;
                notification.onclose = callback;
                return;
            }

            if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        let notification = new Notification("olá", options);
                    }
                });
            }

        }, time*1000);
}

Notification.requestPermission();

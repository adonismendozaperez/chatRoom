let socket = io.connect('http://172.22.119.193:2122',{'forceNew':true});
     
socket.on('messages', function(data){
    console.log(data);
    render(data);
});
 
function render(data){
    let html = data.map(function(message, index){
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
 
    let div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}
 
function addMessage(e){
    let message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };
 
    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message);
 
    return false;
}
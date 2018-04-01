let socket = io.connect('http://172.22.119.193:2122',{'forceNew':true});
$(document).ready(overlay);

socket.on('messages', (data)=>{
    console.log(data);
    render(data);
});
 
function render(data){
    let html = data.map((message, index)=>{
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> say:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
    
    console.log(data.nickname);
    let div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}
 
function addMessage(e){
    let message = {
        nickname: $('#nickname').val(),
        text: $('#text').val()
    };
 
    // document.getElementById('nickname').style.display = 'none';
    document.getElementById('nickname').readOnly = true;
    socket.emit('add-message', message);
    $('#text').val('');
    $('#text').focus();
    return false;
}
/* MODAL */

function overlay(){

    $('#myModal').css('display','block');
    
    $('#btnNick').click(function (){
        $('#myModal').css('display','none');
        if( $('#myModal').val() != "" ){
            return false;
        }
    });
}

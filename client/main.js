const socket = io.connect('http://172.22.119.193:2122',{'forceNew':true});

socket.on('message',function (data){
    console.log(data);
    render(data);
});

function render(data){
    let html = data.map(function(message,index){
        return `
            <div class="message">
                <strong>${message.nickname} say:</strong>
                <p>${message.text}</p>
            </div>    
        `;
    }).join(' ');
    document.getElementById('message').innerHTML = html;
}
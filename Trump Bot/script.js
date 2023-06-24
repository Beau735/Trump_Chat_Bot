$(document).ready(function(){
    var randomReplies = [
        "Ask your momma!",
        "WTF do you want?",
        "Don't get on my balls!",
        "Seriously? Prick...",
        "Don't annoy me!!",
        "Shut up!!!"
    ];

    $("#send-btn").on("click", sendMessage);

    // Function to handle sending a message
    function sendMessage() {
        $value = $("#data").val();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
        $(".form").append($msg);
        $("#data").val('');

        var randomIndex = Math.floor(Math.random() * randomReplies.length);
        var randomReply = randomReplies[randomIndex];

        $replay = '<div class="bot-inbox inbox"><div class="icon"><i class="fa fa-user-times"></i></div><div class="msg-header"><p>'+ randomReply +'</p></div></div>';
        $(".form").append($replay);
        $(".form").scrollTop($(".form")[0].scrollHeight);
    }

    // Event listener for Enter key press
    $("#data").on("keyup", function(event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });
});


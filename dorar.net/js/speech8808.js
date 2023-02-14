var transcription;
var form;

window.SpeechRecognition = window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        null;
if (window.SpeechRecognition === null) {
    //document.getElementById('ws-unsupported').classList.add('hidden');
    document.getElementById('button-play-ws').setAttribute('disabled', 'disabled');
} else {
    var recognizer = new window.SpeechRecognition();

    // Recogniser doesn't stop listening even if the user pauses
    recognizer.continuous = true;
    recognizer.lang = 'ar';
    // Start recognising
    recognizer.onresult = function (event) {
        transcription.textContent = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                transcription.value = event.results[i][0].transcript;
                form.submit();
            } else {
                transcription.textContent += event.results[i][0].transcript;
            }
        }
    };

    document.getElementById('button-play-ws').addEventListener('click', function () {
        try {
            transcription = document.getElementById('qq');
            form = document.getElementById("site-search");
            recognizer.start();
        } catch (ex) {
            //log.innerHTML = 'Recognition error: ' + ex.message + '<br />' + log.innerHTML;
        }
    });

    /*
    document.getElementById('button-play-ws-gsearch').addEventListener('click', function () {
        try {
            transcription = document.getElementById('gsrch-term');
            form = document.getElementById("gsearch");
            recognizer.start();
        } catch (ex) {
            //log.innerHTML = 'Recognition error: ' + ex.message + '<br />' + log.innerHTML;
        }
    });
    */

    if (null !== document.getElementById('button-play-ws-inner'))
    {
        document.getElementById('button-play-ws-inner').addEventListener('click', function () {
            try {
                transcription = document.getElementById('skeys');
                form = document.getElementById("inner-search");
                recognizer.start();
            } catch (ex) {
                //log.innerHTML = 'Recognition error: ' + ex.message + '<br />' + log.innerHTML;
            }
        });
    }
}
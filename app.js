var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error) {
    console.log("error occured", error)
    alert("something went wrong with server ! try after some time")
}


function getTranslatorURL(input) {
    return serverURL + "?" + "text=" + input
}

function clickHandler() {
    //outputDiv.innerText = "sdasfvfqefcev" + txtInput.value
    var inputText = txtInput.value

    fetch(getTranslatorURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
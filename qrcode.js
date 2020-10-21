var choosenField;
var resultCollector;
var ourResultsCustom = [];

var redQuagga = {
    start: function (element, barcode) {
        $('#' + element + '-container').css({ 'height': '200px', 'width': '200px' })
        $('#' + element + '-button-stop').toggle();
        $('#' + element + '-button').toggle();
        choosenField = element;
        resultCollector = Quagga.ResultCollector.create({
            capture: false,
            capacity: 30,
        })
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#' + element + '-container'),
                constraints: {
                    width: 180,
                    height: 480,
                    facingMode: "environment"
                },
            },
            decoder: {
                readers: [
                    barcode,
                ],
            },

        }, function (err) {
            if (err) {
                console.log(err)
                return
            }
            Quagga.registerResultCollector(resultCollector);
            Quagga.start();
            var track = Quagga.CameraAccess.getActiveTrack();
            var capabilities = {};
            if (typeof track.getCapabilities === 'function') {
                capabilities = track.getCapabilities();
            }
            if (capabilities.torch) {
                track.applyConstraints({
                    advanced: [{ torch: true }]
                })
                    .catch(e => console.log(e));
            }
        });
    },
    found: function (code) {
        $('input[name=' + choosenField + ']').val(code);
        this.stop();
    },

    stop: function () {
        $('#' + choosenField + '-container').css({ 'height': 'unset', 'width': 'unset' })
        $('#' + choosenField + '-container').children().remove()
        $('#' + choosenField + '-button-stop').toggle();
        $('#' + choosenField + '-button').toggle();
        ourResultsCustom = [];
        choosenField = '';
        Quagga.stop();
    }
};

function count(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

Quagga.onDetected(function () {
    var results = resultCollector.getResults();
    for (element of results) {
        if (element.codeResult.startInfo.error < 0.3) {
            ourResultsCustom.push(element.codeResult.code)
        }
    }
    var resultOccurence = count(ourResultsCustom);
    var bestResult = Object.keys(resultOccurence).reduce((a, b) => resultOccurence[a] > resultOccurence[b] ? a : b);
    if (resultOccurence[bestResult] > 15) {
        redQuagga.found(bestResult);
    }
});



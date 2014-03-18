function CalculatorView(elem) {
    var calculator = new Calculator();

    function showResult(result) {
        elem.getElementsByClassName('answer')[0].value = result;
    }

    function eventHandler() {
        var controls = elem.getElementsByClassName('control');

        function controlsClick(type) {
            calculator.set('action', type);
            calculator.set('operand1', elem.getElementsByClassName('operand1')[0].value);
            calculator.set('operand2', elem.getElementsByClassName('operand2')[0].value);
            
            calculator.getAnswer(showResult);
        }

        for (var i = 0; i < controls.length; i++) {
            /*addEvent(controls[i], 'click', controlsClick.bind(this, controls[i].classList[0]));*/
            addEvent(controls[i], 'click', function(){
                    controlsClick(controls[i].classList[0]);
                }
            );
        }
    }

    function start() {
        eventHandler();
    }

    start();

    return this;
}
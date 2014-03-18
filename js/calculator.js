function Calculator() {
    var ajax_facade = new AjaxFacade(),
        info = {
            'operand1': 0,
            'operand2': 0,
            'answer': 0,
            'action': ''
        };

    this.getAnswer = function(show_result) {
        var parameters = {
            'operand1': info['operand1'],
            'operand2': info['operand2']
        };

        ajax_facade.getResult(info['action'], parameters, function(answer) {
            info['answer'] = answer;
            show_result(info['answer']);
        });
    }

    /*function isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    function isValid(property, value) {
        var valid = false;
        
        switch(property) {
            case 'operand1':
            case 'operand2':
            case 'answer':
                if(isNumeric(value)) {
                    valid = true;
                }
                break;

            case 'operation':
                if(['add', 'mul', 'sub', 'div', ''].indexOf(value) !== -1) {
                    valid = true;
                }
                break;
        }

        return valid;
    }*/

    this.set = function(property, value) {
        info[property] = value;
    };

    this.get = function(property) {
        return info[property];
    };

    return this;
}
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

        ajax_facade.getResult(info['action'], parameters, show_result, function(answer) {
            info['answer'] = answer;
        });
    }

    this.set = function(property, value) {
        info[property] = value;
    };

    this.get = function(property) {
        return info[property];
    };

    return this;
}
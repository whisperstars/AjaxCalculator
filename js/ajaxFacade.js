function AjaxFacade() {
    var files = {
            'add': 'php/add.php',
            'sub': 'php/sub.php',
            'mul': 'php/mul.php',
            'div': 'php/div.php'
        };

    function getAjax() {
        var ajax;

        if(XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return ajax;
    }

    function parseParameters(parameters) {
        var parameter;

        if(parameters) {
            parameter = '?';

            for(key in parameters) {
                parameter += key + '=' + parameters[key] + '&';
            }
            
            parameter = parameter.substr(0, parameter.length - 1);
        } else {
            parameter = '';
        }

        return parameter;
    }

    function createURI(action, parameters) {
        return files[action] + parseParameters(parameters);
    }

    this.getResult = function(action, parameters, success_callback) {
        var ajax = getAjax();

        ajax.open('GET', createURI(action, parameters), true);

        ajax.onreadystatechange = function() {
            if(ajax.readyState === 4) {
                if(ajax.status === 200) {
                    success_callback(ajax.responseText);
                }
            }
        };

        ajax.send();
    };
}
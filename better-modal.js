function betterAlert(elements, IFEE, callback, submitText) {
    var alertDOM = document.createElement("div");
    var btn = document.createElement('button');
    var btnText = document.createTextNode(submitText ? submitText != null : 'Submit');
    var cancelBtn = document.createElement('button');
    cancelBtn.appendChild(document.createTextNode('Cancel'));
    cancelBtn.addEventListener('click', cancel);
    btn.appendChild(btnText);
    btn.addEventListener('click', removeAlert);
    document.body.appendChild(alertDOM);
    alertDOM.classList.add('alert');
    var contents = document.createElement("div");
    alertDOM.appendChild(contents);
    contents.classList.add('container');
    contents.classList.add('betteralert-container');

    if(typeof elements != 'string') {
        contents.appendChild(elements);
    } else {
        contents.innerHTML = elements;
    }

    contents.appendChild(btn);
    contents.appendChild(cancelBtn);

    if(IFEE) {
        IFEE();
    }

    function removeAlert() {
        var inputs = document.querySelectorAll('div.betteralert-container input, div.betteralert-container select');
        var tmpObj = [];

        if(inputs.length > 0) {
            tmpObj = Array.from(inputs).reduce(function(obj, currentEl) {
                var childObj = {};
                childObj.attributes = {};
                Array.from(currentEl.attributes).forEach(function(attr) {
                    childObj.attributes[attr.name] = attr.value;
                });

                if(currentEl.type == "checkbox") {
                    childObj[currentEl.name] = currentEl.checked;
                } else {
                    childObj[currentEl.name] = currentEl.value;
                }

                obj[currentEl.name] = childObj;
                return obj;
            }, {});
        }

        if(callback && tmpObj) {
            callback(tmpObj);
        } else if(tmpObj) {
            return tmpObj;
        }


        btn.removeEventListener('click', removeAlert);
        cancelBtn.removeEventListener('click', cancel);
        document.body.removeChild(alertDOM);
    }

    function cancel() {
        btn.removeEventListener('click', removeAlert);
        cancelBtn.removeEventListener('click', cancel);
        document.body.removeChild(alertDOM);
    }
    
};

module.exports = betterAlert;

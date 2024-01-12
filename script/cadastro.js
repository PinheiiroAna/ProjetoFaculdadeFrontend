class validator {

    constructor () {
        this.validations = {
            'data-min-length',
        }
    }

    validate(form){

        let inputs = form.getElementByTagname('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input){
          
            for(let i = 0; this.validations.length > i; i++) (
                if(input.getAttribute(this.validations[i]) != null) {
                    console.log('achou validação');
                }
                )

        }, this);

    }
}


let form = document.getElementById ("register-form");
let submit = document.getElementById ("btn-submite");

let validator = new validator();
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);
});
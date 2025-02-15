function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click',validateForm);
    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', onIsCompanyHandler)

    function validateForm(e) {
        e.preventDefault(); 
        let userNameInput = document.getElementById('username');
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let userNameIsValid =usernameRegex.test(userNameInput.value);
        setBorder(userNameInput, userNameIsValid)

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let emaiIslValid = emailRegex.test(emailInput.value);
        setBorder(emailInput,emaiIslValid);

        let passwordRegex = /^\w{5,15}$/;
        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let passwordsAreOk = passwordIsValid &&
            passwordInput.value === confirmPasswordInput.value;
          setBorder(passwordInput, passwordsAreOk);
          setBorder(confirmPasswordInput, passwordsAreOk);

          let companyNumberIsValid = false;
        let isCompanyCheckbox = document.getElementById('company');
        if(isCompanyCheckbox.checked){
            let companyNumberInput = document.getElementById('companyNumber');
            
            if(companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))){
                let companyNumber = Number(companyNumberInput.value);
                if(companyNumber >= 1000 && companyNumber <= 9999){
                    companyNumberIsValid = true;
                }
            }
            setBorder(companyNumberInput, companyNumberIsValid);
        }
        let validDiv = document.getElementById('valid');
        let mainInputAreValid = userNameIsValid && emaiIslValid && passwordsAreOk;
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = mainInputAreValid && companyInfoIsValid;
        validDiv.style.display = shouldShowValidDiv ? 'block' : 'none';
    }
    function onIsCompanyHandler(e) {
        
        let companyInfoFieldset = document.getElementById('companyInfo');
        
        companyInfoFieldset.style.display = e.target.checked ? 'block' : 'none';

    }
    function  setBorder(element, isValid) {
        if(isValid){
            element.style.setProperty('border','none')
        }else{
            element.style.setProperty('border', '2px solid red')
       
        }
    }
}

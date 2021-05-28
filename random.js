
    let password_numeric = '1234567890';
    let password_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password_lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let password_symbol = '!"#$%&()=~|@[];:+-*<>?_>.,\'';
    
    function genPassword(length = 20){
        let password = '';
        let password_base = '';
        if (document.getElementById('rule_numeric')) password_base += password_numeric;
        if (document.getElementById('rule_uppercase')) password_base += password_uppercase;
        if (document.getElementById('rule_lowercase'))   password_base += password_lowercase;
        if (document.getElementById('rule_symbol')) password_base += password_symbol;
        for (let i = 0; i < length; i++) {
            password += password_base.charAt(Math.floor(Math.random() * password_base.length));
        }
        return password;
    }
    function setPassword(id)
    {
        let rule_length = document.getElementById('rule_length').value;
        document.getElementById(id).value = genPassword(rule_length);
    }
    
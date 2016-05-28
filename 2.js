function solution() {
    function person() {
        var first_name = document.getElementById('first_name').value;
        var last_name = document.getElementById('last_name').value;
        var email = document.getElementById('email').value;
        var firstValid = first_name.length > 0;
        var secondValid = last_name.length > 0;
        var mailLenght = email.length > 0;
        var mailValid = /^[a-zA-Z0-9.]{1,64}@[a-zA-Z0-9.-]{1,64}$/.test(email);
        return firstValid && secondValid && mailLenght && mailValid;
    }
    function company() {
        var name = document.getElementById('company_name').value;
        var phone = document.getElementById('phone').value;
        var isNameValid = name.length > 0;
        var hasUnexpectedChars = /[^0-9\s\-]/g.test(phone)
        var stripedPhone = phone.replace(/-/g,'').replace(/ /g,'');
        var isPhoneValid = !hasUnexpectedChars && stripedPhone.length >= 6;
        return isNameValid && isPhoneValid;
    }
    var types = document.getElementsByName('type');
    var type;
    for (var i = 0; i < types.length; i += 1) {
        if (types[i].checked) {
            type = types[i].value;
        }
    }
    if (type === 'person') {
        return person();
    } else {
        return company();
    }
}

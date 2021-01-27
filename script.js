function chkFormular(form)
        {
            if(document.form.name.value === "")  {
                alert("Geben Sie bitte ihren Namen ein");
                document.form.name.focus();
                return false;
            }
            if(document.form.email.value === "") {
                alert("Geben Sie bitte Ihre Email ein");
                document.form.email.focus();
                return false;
            }
            if(document.form.email.value.indexOf('@') === -1) {
                alert("Die E-Mailadresse fehlt!");
                document.form.email.focus();
                return false;
            }
        }
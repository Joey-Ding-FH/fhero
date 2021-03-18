formhero.setFormHeroHost('formhero.at');
formhero.useHttps(true);
function launchForm(clickEvent)
{
    formhero.loadForm({
        form:"suntrust-j",
        organization: "demo",
        team: "fh-interview-candidates",
        onCloseFn: function() { console.log("The user closed the modal!"); },
        onStatusFn: function(status) { console.log("Form State: ", status); }
    }, {
        "auth.firstName": "Daniel",
        "auth.lastName": "Radcliffe",
    }).then(
        function(successResult) {
            console.log("Form Success:", successResult);
        },
        function(cancelledResult){
            console.log("Form Cancelled:", cancelledResult);
        }
    ).catch(function(exceptionResult) {
        alert("On Exception");
    });
}

document.querySelectorAll('div.nice-button')[0].addEventListener('click', launchForm);
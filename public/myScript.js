formhero.setFormHeroHost('formhero.at');
formhero.useHttps(true);
function launchForm(clickEvent)
{
    document.getElementById("logo").style.display='block'
    formhero.loadForm({
        form:"suntrust-j",
        organization: "fh-interview-candidates",
        team: "demo",
        onCloseFn: function() { console.log("The user closed the modal!"); },
        onStatusFn: function(status) { console.log("Form State: ", status); }
    }, {
        "info.claimant.fullName": "Joey Ding",
    }).then(
        function(successResult) {
            document.getElementById("logo").style.display='none'
            document.getElementById("result").innerHTML = successResult.collectedData["info.fullName"]
        },
        function(cancelledResult){
            document.getElementById("logo").style.display='none'
            console.log("Form Cancelled:", cancelledResult);
        }
    ).catch(function(exceptionResult) {
        document.getElementById("logo").style.display='none'
        alert("On Exception");
    });
    console.log("123")
}

document.querySelectorAll('a#launch')[0].addEventListener('click', launchForm);

function SendMail(){
    var params={
       from_name: document.getElementById("fullName").value,
       email: document.getElementById("email_id").value,
       message : document.getElementById("message").value
    }
    emailjs.send("service_w35lmmm","template_uaxegzu",params).then(function(res){
       alert("succes!" + res.status);
    })
 };
       

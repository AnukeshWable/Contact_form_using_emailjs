function sendmessage(){
    (function () {
      emailjs.init("0beN_UUbuE7xehNY7");
    })();

    var serviceID = "service_3lfr1h8";
    var templateID = "template_iz8gghu";

    var params = {
      sendername: document.querySelector("#name").value,
      senderemail: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    emailjs.send(serviceID, templateID, params).then((res) => {
      alert(
        "Thank you," + params["sendername"] + "! Your message has been sent"
      );
    });
  }

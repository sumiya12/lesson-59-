function showPost(content) {
  var editedContent =
    "Шинэ мэдээ : " +
    content +
    "\n\nТа нэмэлт мэдээлэл авахыг хүсвэл 1234.мн сайтаар зочилоорй.";

  console.log(editedContent);

  return function () {
    var email = prompt(
      editedContent +
        "\n\nХэрэв та Имайл хаягаа оруулбал бид танд шинэ мэдээлэл түргэн шуурхай хүргэж байх болно."
    );

    document.write(
      "Баярлалаа бид таны оруулсан имайл хаягийг хүлээж авлаа. таны имайл» : " +
        email
    );
  };
}

var medee = "1234.mn сайтын хямдрал дуусахад ердөө нэг хоног үлдлээ!";
var askEmailFunction = showPost(medee);
setTimeout(askEmailFunction, 5000);

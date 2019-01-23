 function showNepizdika(test) {
     test.style.width = '700px';
     test.style.height = '400px';
     test.style.color = 'red';
     test.value = 'НЕПИЗДИКА';
 };

 function fight() {
     alertify.set({
         labels: {
             ok: "Да"
             , cancel: "Нет"
         }
         , delay: 5000
         , buttonReverse: false
         , buttonFocus: "ok"
     });
     alertify.confirm("Мой хуй с твоей губой", function (e) {
         if (e) {
             alertify.success("ПИДОРА ЕДА");
         }
         else {
             alertify.error("ПИДОРА ОТВЕТ!!!11");
         }
     });
     return false;
 };

function post(){//post という名前の関数宣言
  const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);//送り方.宛先.非同期にするか？-true
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load',post);//ブラウザ画面全体.イベント発生見守り.ロードしたときに.post関数を動かしてね
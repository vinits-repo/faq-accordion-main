document.addEventListener("DOMContentLoaded", () => {

  function toggleAns(questionId) {
    const ans = document.getElementById(questionId);
    ans.classList.toggle("hidden");
  }

  function buttonClick(buttonId, questionId, img1Id, img2Id) {
    const button = document.getElementById(buttonId);
    const img1 = document.getElementById(img1Id);
    const img2 = document.getElementById(img2Id);

    button.addEventListener("click", () => {
      toggleAns(questionId);
      img1.classList.toggle("hidden");
      img2.classList.toggle("hidden");
    });
  }

  buttonClick("btn1", "q1", "img1", "img2");
  buttonClick("btn2", "q2", "img3", "img4");
  buttonClick("btn3", "q3", "img5", "img6");
  buttonClick("btn4", "q4", "img7", "img8");
});

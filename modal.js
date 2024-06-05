document.addEventListener('DOMContentLoaded', function() {
  // 全てのパネル要素を取得
  var panels = document.querySelectorAll(".top-left-panel, .top-right-panel, .middle-panel, .bottom-left-panel, .bottom-right-panel");

  panels.forEach(function(panel) {
    panel.addEventListener('click', function() {
      // データ属性からモーダルのIDを取得
      var modalId = panel.getAttribute('data-modal');
      var modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";

        // モーダルのクローズボタン
        var closeBtn = modal.querySelector('.close');
        closeBtn.onclick = function() {
          modal.style.display = "none";
        };

        // モーダル外のクリックで閉じる
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    });
  });
});
// ボタン画像要素を取得
const button = document.getElementById('button');

// ホバー時に画像を変更
button.addEventListener('mouseover', function() {
    button.src = 'img/btn-hover.png'; // ホバー時の画像に変更
});

// ホバーが外れた時、元の画像に戻す
button.addEventListener('mouseout', function() {
    button.src = 'img/button.png'; // 通常時の画像に戻す
});

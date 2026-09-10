document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    // ホバー時に画像を変更
    button1.addEventListener('mouseover', function() {
        button1.src = 'img/btn-hover.png'; // ホバー時の画像に変更
    });
    // ホバーが外れた時、元の画像に戻す
    button1.addEventListener('mouseout', function() {
        button1.src = 'img/button.png'; // 通常時の画像に戻す
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button2 = document.getElementById('button2');
    // ホバー時に画像を変更
    button2.addEventListener('mouseover', function() {
        button2.src = 'img/btn-hover.png'; // ホバー時の画像に変更
    });
    // ホバーが外れた時、元の画像に戻す
    button2.addEventListener('mouseout', function() {
        button2.src = 'img/button.png'; // 通常時の画像に戻す
    });
});
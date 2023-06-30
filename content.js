// content.js

// キーボードイベントを受け取るためのリスナーを追加
document.addEventListener('keydown', function(event) {
  // 右矢印キーが押された場合
  if (event.keyCode === 39) {
    skipVideo(15); // 15秒進める
  }
  
  // 左矢印キーが押された場合
  if (event.keyCode === 37) {
    skipVideo(-15); // 15秒戻る
  }
});

// 動画を指定された秒数進める/戻す関数
function skipVideo(seconds) {
  // 現在のタブで再生中の動画を取得
  var video = document.querySelector('video');

  // 動画が存在し、再生中である場合
  if (video && !video.paused) {
    // 現在の再生位置を取得し、指定された秒数分だけ進める/戻す
    var currentTime = video.currentTime;
    video.currentTime = currentTime + seconds;
  }
}

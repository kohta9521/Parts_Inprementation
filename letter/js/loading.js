// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  $("#splash-logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash")
    .delay(1500)
    .fadeOut("slow", function () {
      //機能編 4-2-1 背景色が伸びる（下から上）が動作した後に下記アニメーションを実行
      $("body").addClass("appear"); //機能編 4-2-1 背景色が伸びる（下から上）
      sliderSet(); //機能編  9-4-1 ニュースティッカーの動きの関数を呼ぶ
      PositionCheck(); //機能編  5-1-26 追従メニューの現在地ハイライトの関数を呼ぶ
      ScrollAnime(); //機能編 5-1-26 追従メニューの現在地ハイライトの関数を呼ぶ
      PageTopAnime(); //機能編  8-1-3	ページの指定の高さを超えたら右から出現する関数を呼ぶ

      /*機能編  9-2-2	任意の場所をクリックすると隠れていた内容が開き、先に開いていた内容が閉じる*/
      $(".open").each(function (index, element) {
        //openクラスを取得
        var Title = $(element).children(".title"); //openクラスの子要素のtitleクラスを取得
        $(Title).addClass("close"); ///タイトルにクラス名closeを付与し
        var Box = $(element).children(".box"); //openクラスの子要素boxクラスを取得
        $(Box).slideDown(500); //アコーディオンを開く
      });
    });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  /*===========================================================*/
  /*機能編  4-2-1 背景色が伸びる（下から上） */
  /*===========================================================*/

  //=====ここから背景が伸びた後に動かしたいJSをまとめる
  $(".splashbg").on("animationend", function () {
    fadeAnime(); //印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
}); // ここまでページが読み込まれたらすぐに動かしたい場合の記述
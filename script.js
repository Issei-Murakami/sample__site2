$(function () {
  $("html,body").animate({ scrollTop: 0 }, "1");

  //ハンバーガーメニュー
  $(".header-nav__btn").click(function () {
    $(this).toggleClass("active");
    $(".header-nav__menu ").toggleClass("show");
  });
  $(".header-nav__menu  li").click(function () {
    $(".header-nav__btn").removeClass("active");
    $(".header-nav__menu ").removeClass("show");
  });

  //ヘッダースクロール
  $(window).scroll(function () {
    if ($(this).scrollTop() > 520) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  $(function () {
    /*=================================================
  スクロール時のイベント
  ===================================================*/
    $(window).scroll(function () {
      // スクロール位置を取得
      let scroll = $(window).scrollTop();

      /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
      mv_scale(scroll);
    });
  });
  function mv_scale(scroll) {
    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合 ※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
      $(".mainvisual img").css({
        width: 100 / 3 + scroll / 10 + "%",
      });
      // スマホ表示の場合の処理（画面幅が900px以下の場合）
    } else {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
      $(".mainvisual img").css({
        width: 100 - scroll / 10 + "%",
      });
    }
  }

  //サイドボタン
  // 変数で画面幅を取得
  $(window).scroll(function () {
    console.log($(this).scrollTop());
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 980) {
      $(".sidebar").addClass("show");
    }
    if ($(this).scrollTop() < 980) {
      $(".sidebar").removeClass("show");
    }
    if ($(this).scrollTop() > 4150) {
      $(".sidebar").removeClass("show");
    }
    console.log();
  });

  //背景画像切り替え
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let access_position =
      $(".third__section").offset().top - $(window).height();
    let contact_position =
      $(".last__section").offset().top - $(window).height();

    // #accessが表示された場合
    if (scroll > access_position) {
      // #contactが表示されるまでの間は、背景画像をfadeInで表示する
      if (scroll < contact_position) {
        $(".bg__img").addClass("open");
      } else {
        $(".bg__img").removeClass("open");
      }
      // #accessが表示される前の場合
    } else {
      // 背景画像を表示しない
      $(".bg__img").removeClass("open");
    }
  });
});

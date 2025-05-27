### TODO
- [x] headerの固定を図る
- [x] 影を適用する
- [x] 固定バーの位置ずれを直す
- [x] QA　展開できるようにする
- [x] 画像の大きさ縮小
- [x] bodyのfontsizeやmargin周辺の修正
- [x] QAのボタン　瞬間的クリック時のみtoggleするようにする
- [x] QAのズレを直す
- [x] [Q]のレイアウトを修正する
- [x] [A]のCSSを施す
- [x] headlineを直す
- [ ] モーダル作り方の仕様書を書く
- [ ] 引数によって適切なXMLを適用できるようにする
- [ ] モーダル内のsvg画像の反映漏れを対策する
- [ ] modal　drag&dropできるようにする
- [ ] 画面外選択で警告光発するようにする
- [ ] .question.active時に上にズレるバグを治す


### 仕様
~~~html
<header>
  <div class="modal-header">
    <span><!--insert text here--></span><button class="close-modal">X</button>
  </div>
  <div class ="modal-bar">
    <!--create more of "task-container" (and span.right-arrow between them) within "modal-bar" in need-->
    <div class="modal-nav active">
      <div class="task-container">
        <span class="task"><!--insert text here--></span>
      </div>
      <span class="period"><!--insert text here--></span>
    </div>
    <span class="right-arrow"></span>
    <div class="modal-nav">
      <div class="task-container"> <!--max of one element tagged as task-container should be set active simultaneously-->
        <span class="task"><!--insert text here--></span>
      </div>
      <span class="period"><!--insert text here--></span>
    </div>
  </div>
</header>

<div class="modal-body">
  <div class="section-container">
    <div class="instruction"><span class="index"><!--insert text here--></span><span><!--insert text here--></span></div>
    <span class="down-arrow"></span>
    <div class="instruction"><span class="index"><!--insert text here--></span><span><!--insert text here--></span></div>
  </div>
  <div class="section-container">
    <div class="q-and-a">
      <div class="question">
        <span class="left">
          <span class="index">Q</span><span class="context"><!--insert text here--></span><span><!--insert text here--></span>
        </span>
        <div class="toggle-container"><span class = "toggle-indicator"></span></div>
      </div>
      <div class="answers hide">
        <div class="answer">
          <span class="index">A</span><span class="context"><!--insert text here--></span><span><!--insert text here--></span>
        </div>
      </div>
    </div>
  </div>
</div>

~~~

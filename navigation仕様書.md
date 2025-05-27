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


仕様
~~~html
<header>
  <div class="modal-header">
    <span><!--insert text here--></span><button class="close-modal">X</button>
  </div>
  <div class ="modal-bar">
    <div class="modal-nav active"> 
      <div class="task-container">
        <span class="task">活動pt 進捗</span>
      </div>
      <span class="period">1/27 - 2/23</span>
    </div>
    <span class="right-arrow">></span>
  </div>
</header>

<!--header以外を指す　これも1モーダルにあたり、1つのみ-->
<div class="modal-body">
  <div class="section-container">
  </div>
</div>

~~~

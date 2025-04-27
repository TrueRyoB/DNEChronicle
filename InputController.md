## 要求
・一回に二つ以上のInput Readerクラスが稼働する場面がある(キャラ操作+UI操作)
・できれば中堅管理してあって欲しい
・車輪の再開発を必要としない設計がいい

## 案
1) 許可制<br>
Singletonでbool isGameplayingとかだったらInputActionのcallbackを見るようにする<br>
実装が簡単で制御も簡単　だから再開発が必要になってもあまり手間にならない<br>
ゴミ<br>
<br>
2) 登録制<br>
一番実用的<br>
Interfaceを使ってSetRegisterとか使う<br>
それをenumで管理<br>

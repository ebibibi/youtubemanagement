# youtubemanagement
youtubeの特定チャンネルのアップロード動画からランダムで1動画を選択し、Twitterで紹介するAzure Functionの関数です。
node.jsを使っています。

# 使い方
- Azure上でfunctionsを作成
- 下記の項目をfunctionsの「構成」に設定
  - YouTubeAPIKey
  - YouTubeChannelID
  - YouTubeUserID
  - TwitterConsumerKey
  - TwitterConsumerSecet
  - TwitterAccessTokenKey
  - TwitterAccessTokenSecret
- このレポジトリをフォークしたうえでfunctionsの「デプロイセンター」にてソースとして設定

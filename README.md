# youtubemanagement

> **Status: retired (not deployed, not maintained).**
>
> This Azure Function is no longer running anywhere:
>
> - The target Function App `youtubemanagement` does not exist in any accessible
>   Azure subscription (verified 2026-08-07, re-verified 2026-08-31). The deploy
>   workflow is therefore `workflow_dispatch` only.
> - `TimerTrigger1` posts through the X (Twitter) API v1.1 `statuses/update`
>   endpoint, which has been retired.
>
> ### Open Dependabot alerts
>
> The remaining advisories all reach the tree through `twitter@1.7.1 -> request@2.88.2`.
> `request` was deprecated in 2020 and will never receive a patched release, so
> there is no version bump that resolves them. They are dismissed as `not_used`
> because `tweetPost()` is their only consumer and it cannot execute (see above).
>
> If this function is ever revived, the fix is to replace `twitter` with a
> maintained client that targets the X API v2 (for example `twitter-api-v2`) and
> to reopen the dismissed alerts.

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

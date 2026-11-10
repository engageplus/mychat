/* =====================================================================
   サービス・料金一覧（services.js）
   サービスの追加・価格の変更は、このファイルだけを直せば反映されます。
   （site-data.js の中の古い catalog は、このファイルで上書きされます）

   【書き方】
   per / price : 「per あたり price 円」      min : 最低数量     step : 増減の単位（省略すると min と同じ）
   max : 最大数量     unit : 単位（人・回・時間 など）
   start : 開始時間（省略すると site-data.js の startTime）   speed : 増加スピード   guarantee : 保証
   info : 「詳細」の行を、自分で全部指定したいとき（start/speed/guarantee は使われません）
   desc : 「詳細」の上に出す説明文（行ごと）   notes : ⚠️の注意書き（行ごと）
   hint / ex : URL入力欄の案内と例     chatNotice : 注文後にチャットへ誘導する文
   plans : 種類やプランがあるとき（pop:true で「購入数最多」）   planLabel : その見出し
   badge : 「👑利用者数No.1」などの目印     aliases : 昔の名前（管理画面の金額チェック用）
   consult:true : 注文ではなく「チャットで相談」にする（priceText:価格の表示、consultText:説明、consultAsk:相談時に自動で入る文）
   paused:true : 受付停止中にする（pausedText:表示する文）
   ===================================================================== */

// 保証の文言（各サービスの「詳細」で内容が違うため、全体の文はやわらかくしています）
Object.assign(SITE.t, {
  guaranteeShort: "多くのサービスには減少保証があります。保証の内容や期間は、各サービスの「詳細」に表示しています。保証の対象で減少した分は、無料で補充します。",
  guaranteeTerms: "多くのサービスには減少保証があります。保証の内容や期間は、各サービスの「詳細」に表示します。保証の対象で減少した分は、無料で補充します。ただし、アカウントの削除・非公開化、URLやID（アカウント名）の変更があった場合などは、対象外です。"
});

SITE.catalog = [

  /* ================= YouTube ================= */
  { name: "YouTube", items: [
    { name: "チャンネル登録者", unit: "人", per: 100, price: 1300, min: 100, step: 50, max: 10000,
      badge: "👑当店 利用者数No.1",
      hint: "YouTubeのチャンネルURL", ex: "https://www.youtube.com/@XXXXX",
      speed: "50〜100人/日", guarantee: "永久減少保証" },

    { name: "再生回数", aliases: ["通常動画の再生"], unit: "回", per: 1000, min: 1000, step: 100, max: 300000,
      planLabel: "動画の種類",
      plans: [ { name: "通常動画", price: 590 }, { name: "ショート動画", price: 590 } ],
      hint: "YouTubeの動画URL（ショート動画の場合は、ショート動画のURL）", ex: "https://www.youtube.com/watch?v=XXXXX",
      speed: "4,000〜5,000回/日", guarantee: "永久減少保証" },

    { name: "高評価", unit: "回", per: 100, price: 450, min: 50, step: 1, max: 10000,
      hint: "YouTubeの動画URL", ex: "https://www.youtube.com/watch?v=XXXXX",
      start: "0〜1時間（通常は入金確認後、即時スタート）", speed: "10,000回/日", guarantee: "永久減少保証" },

    { name: "再生時間", unit: "時間", per: 100, price: 1600, min: 100, step: 100, max: 10000,
      hint: "YouTubeのアカウント（チャンネル）のURL", ex: "https://www.youtube.com/@XXXXX",
      start: "1〜24時間", speed: "500〜1,000時間/日", guarantee: "30日間減少保証",
      desc: ["仕入れ元の都合で、動画の長さに制限がある場合があります。ご注文後は、必ずチャットにお越しください。"],
      notes: [
        "⚠️ 動画の外部埋め込みを許可してください。",
        "⚠️ 動画時間に制限を求める場合がございます。対応する長さの動画がなかった場合、アップロードしていただく場合がございます。",
        "⚠️ 動画に制限を設定しないでください。増加及び保証の対象外となります。（非公開、限定公開、年齢制限、国制限等のあらゆる制限を含みます）",
        "⚠️ 動画に対して作業中または作業完了後に変更を加えないでください。（動画のカット、公開範囲の変更など）",
        "⚠️ 保証をご利用の際は、当ストアの指定するフォーマットで、都度スクリーンショットのご提出が必須です。ご提供いただけない場合、補填の対象外となります。",
        "⚠️ 上記ルールに違反する場合、増加数および保証の対象外となります。"
      ],
      chatNotice: "ご注文後、必ずチャットにお越しください。注文の詳細は、チャットでご案内します（右上の「チャットで相談」から）。" },

    { name: "LIVE配信視聴者", consult: true, unit: "", per: 1, min: 1, max: 1,
      priceText: "要相談（時間指定可能）",
      consultText: "配信の時間を指定して、視聴者を増やせます。増やしたい時間、人数をご記入ください。【例：100人　120分】",
      consultAsk: "増やしたい時間、人数をご記入ください。\n【例：100人　120分】\nご希望：" },

    { name: "収益化済みアカウント", consult: true, unit: "", per: 1, min: 1, max: 1,
      priceText: "準備中（コンビニ払いのみ）",
      consultText: "収益化済みのアカウントです。お支払いは、コンビニ払いでのみ受け付けています。詳細は、チャットでお問い合わせください。" }
  ] },

  /* ================= TikTok ================= */
  { name: "TikTok", items: [
    { name: "フォロワー", unit: "人", per: 100, price: 750, min: 100, step: 50, max: 10000,
      badge: "👑当店 利用者数No.3",
      hint: "TikTokのアカウントURL", ex: "https://www.tiktok.com/@XXXXX",
      speed: "500〜1,000人/日", guarantee: "永久減少保証" },

    { name: "再生回数", unit: "回", per: 3000, price: 150, min: 3000, step: 1000, max: 900000,
      hint: "TikTokの動画URL", ex: "https://www.tiktok.com/@XXXXX/video/0000000000",
      speed: "5,000,000回/日", guarantee: "永久減少保証" },

    { name: "いいね", unit: "回", per: 100, price: 300, min: 100, step: 50, max: 10000,
      hint: "TikTokの動画URL", ex: "https://www.tiktok.com/@XXXXX/video/0000000000",
      speed: "最大10,000回/日", guarantee: "永久減少保証" },

    { name: "共有", unit: "回", per: 100, price: 360, min: 50, step: 1, max: 10000,
      hint: "TikTokの動画URL", ex: "https://www.tiktok.com/@XXXXX/video/0000000000",
      start: "0〜3時間（通常は入金確認後、即時スタート）", speed: "100,000回/日" },

    { name: "保存", unit: "回", per: 100, price: 360, min: 50, step: 1, max: 10000,
      hint: "TikTokの動画URL", ex: "https://www.tiktok.com/@XXXXX/video/0000000000",
      start: "0〜24時間", speed: "1,000回/日" },

    { name: "LIVE視聴者", consult: true, unit: "", per: 1, min: 1, max: 1,
      priceText: "要相談（時間指定可能）",
      consultText: "ライブ配信の視聴者を増やせます。増やしたい時間、人数をご記入ください。【例：100人　120分】",
      consultAsk: "増やしたい時間、人数をご記入ください。\n【例：100人　120分】\nご希望：" },

    { name: "シャドウバン解除依頼", consult: true, unit: "", per: 1, min: 1, max: 1,
      priceText: "要相談（アカウントの状態により変わります）",
      consultText: "お客様のアカウントがシャドウバンになっていた場合、当方独自のプロモーションで、解除に導きます。まずは、アカウントがシャドウバンになっているかを確認しますので、チャットで「TikTokアカウントリンク」と「シャドウバン解除依頼」を送信してください。",
      consultAsk: "TikTokアカウントリンク：\nシャドウバン解除依頼" }
  ] },

  /* ================= X（Twitter） ================= */
  { name: "X", items: [
    { name: "フォロワー", unit: "人", per: 100, price: 1000, min: 100, step: 50, max: 10000,
      hint: "XのアカウントURL", ex: "https://x.com/XXXXX",
      start: "0〜24時間", speed: "10,000人/日", guarantee: "30日間減少保証",
      notes: ["⚠️ Xサービスは、他サービスに比べて、アプリのアップデートに左右されやすいため、増加までお時間を頂く場合がございます。詳細は、ご注文後、チャットにてご案内いたします。"] },

    { name: "日本人フォロワー", paused: true, unit: "人", per: 100, min: 100, max: 10000,
      pausedText: "現在、受付を停止しています。（受付再開後は、通常のフォロワー2：日本人フォロワー1の割合での購入を推奨しています。日本人のユーザーには、日本人フォロワーが上位に表示されやすいためです）",
      hint: "XのアカウントURL", ex: "https://x.com/XXXXX" },

    { name: "リツイート", unit: "回", per: 100, price: 540, min: 50, step: 10, max: 10000,
      hint: "Xのポスト（ツイート）のURL", ex: "https://x.com/XXXXX/status/0000000000",
      start: "3〜48時間", speed: "〜20回/日（進行予想です。通常は表示より高速な場合がございます）", guarantee: "永久補填保証",
      notes: [
        "⚠️ アダルトやXの利用規約に違反するアカウント／ポストは、対応できません。",
        "⚠️ 自社作業による増加分のみを記録して作業いたします。他の要因による減少が発生した場合、最終的なリツイート数が少なく見えることがございますが、サポート対象外となります。"
      ] },

    { name: "いいね", unit: "回", per: 100, price: 450, min: 100, step: 10, max: 10000,
      hint: "Xのポスト（ツイート）のURL", ex: "https://x.com/XXXXX/status/0000000000",
      start: "0〜1時間（通常は入金確認後、即時）", speed: "5,000〜10,000回/日", guarantee: "永久補填保証" },

    { name: "表示回数", unit: "回", per: 1000, price: 75, min: 1000, step: 1000, max: 1000000,
      hint: "Xのポスト（ツイート）のURL", ex: "https://x.com/XXXXX/status/0000000000",
      start: "0〜1時間（通常は入金確認後、即時スタート）", speed: "100,000回/時間" },

    { name: "ブックマーク", unit: "回", per: 100, price: 360, min: 50, step: 10, max: 10000,
      hint: "Xのポスト（ツイート）のURL", ex: "https://x.com/XXXXX/status/0000000000",
      start: "0〜1時間（通常は入金確認後、即時スタート）", speed: "100,000回/日", guarantee: "永久補填保証",
      notes: ["⚠️ 現時点では安定していますが、アップデートの影響などにより、開始時間・減少率等が変動する可能性がございます。"] },

    { name: "投票", unit: "票", per: 100, price: 360, min: 100, step: 50, max: 10000,
      hint: "増やしたい投票のポストのURL", ex: "https://x.com/XXXXX/status/0000000000",
      start: "0〜24時間", speed: "1,000〜3,000回/日", guarantee: "永久減少保証",
      chatNotice: "ご注文後、チャットで、増やしたい投票項目をお伝えください。" },

    { name: "スペース視聴者", consult: true, unit: "", per: 1, min: 1, max: 1,
      priceText: "60分 280円／120分 480円",
      consultText: "スペースのリスナーが、60分または120分、増加します。\n料金：60分 280円／120分 480円\n開始時間：0〜10分（通常は入金確認後、即時スタート）／増加スピード：50,000回/時間\n入金確認のタイミングを合わせるため、事前に、スペース開始予定時刻と、ご希望の人数をチャットでお伝えください。",
      consultAsk: "ご希望：60分 ／ 120分\n人数：\nスペース開始予定時刻：" }
  ] },

  /* ================= Instagram ================= */
  { name: "Instagram", items: [
    { name: "フォロワー", unit: "人", per: 100, price: 700, min: 100, step: 50, max: 10000,
      hint: "InstagramアカウントのURL", ex: "https://www.instagram.com/XXXXX/",
      start: "1〜3時間", speed: "1,000〜3,000人/日", guarantee: "永久減少保証" },

    { name: "日本人フォロワー", unit: "人", per: 100, min: 50, max: 10000,
      badge: "👑当店 利用者数No.2",
      hint: "InstagramアカウントのURL", ex: "https://www.instagram.com/XXXXX/",
      plans: [ { name: "ライト", price: 1800 }, { name: "スタンダード", price: 2800, pop: true }, { name: "プレミアム", price: 3900 } ] },

    { name: "いいね", unit: "回", per: 100, price: 450, min: 100, step: 50, max: 10000,
      hint: "Instagram投稿またはリールのURL", ex: "https://www.instagram.com/p/XXXXX",
      desc: ["投稿、リール動画どちらにも対応しています。"],
      start: "0〜3時間（通常は入金確認後、即時スタート）", speed: "100,000回/日", guarantee: "永久減少保証" },

    { name: "日本人いいね", unit: "回", per: 100, price: 750, min: 100, step: 50, max: 10000,
      hint: "Instagram投稿またはリールのURL", ex: "https://www.instagram.com/p/XXXXX",
      desc: ["投稿、リール動画どちらにも対応しています。"],
      start: "0〜6時間（通常は入金確認後、即時スタート）", speed: "10〜100回/日（自然に増加します）", guarantee: "永久減少保証" },

    { name: "リール再生", unit: "回", per: 1000, price: 150, min: 1000, step: 100, max: 1000000,
      hint: "InstagramリールのURL", ex: "https://www.instagram.com/reel/XXXXX/",
      start: "0〜1時間（通常は入金確認後、即時スタート）", speed: "100,000回/日", guarantee: "永久減少保証" },

    { name: "保存", unit: "回", per: 100, price: 360, min: 50, step: 1, max: 10000,
      hint: "Instagram投稿またはリールのURL", ex: "https://www.instagram.com/p/XXXXX",
      start: "0〜1時間（通常は入金確認後、即時スタート）", speed: "50,000回/日", guarantee: "永久減少保証" },

    { name: "再投稿（リポスト）", unit: "回", per: 100, price: 360, min: 50, step: 1, max: 10000,
      hint: "Instagram投稿のURL", ex: "https://www.instagram.com/p/XXXXX",
      start: "0〜1時間（通常は入金確認後、即時スタート）", speed: "100,000回/日", guarantee: "永久減少保証" },

    { name: "運用代行（30日間）", unit: "件", per: 1, price: 24000, min: 1, max: 1,
      hint: "InstagramアカウントのURL", ex: "https://www.instagram.com/XXXXX/",
      desc: [
        "【このサービスについて】あなたのInstagramアカウントを、独自の手法で運用代行します。",
        "【主な作業内容】",
        "・自動ストーリー大量閲覧（1日あたり1,000〜10,000回）",
        "・自動でストーリーにいいね",
        "・自動でストーリーにステッカーアクション（投票／クイズ／スライダー）",
        "・自動でストーリーに絵文字でリアクション（希望者のみ）",
        "・新規フォロワーに自動でDM返信（希望者のみ）",
        "・独自手法（主に検索関連のリーチ拡大を行います。作業内容は共有できかねます）",
        "【このサービスの特徴】アクティブフォロワーの増加／投稿の平均いいね・コメント・インプレッション数の増加／Instagram経由の予約数・注文数アップ（美容サロン、物販、情報商材、ネットショップなど）／日本人指定可能"
      ],
      info: ["⌛ 運用代行期間: 30日"],
      notes: [
        "⚠️ ご購入により、ここに記載の内容に同意したものとみなします。",
        "⚠️ 運用期間中は、あなたのInstagramアカウントにログインする必要があります。",
        "⚠️ フォロワーの増加数は、アカウントの属性や投稿内容によって変わります。増加数の確約はありません。",
        "⚠️ これまでアカウントの凍結は一度も発生していませんが、保証はいたしかねます。"
      ],
      chatNotice: "ご購入後は、チャットに、購入完了のご連絡をお願いいたします。" }
  ] }
];

/* =====================================================================
   EngagePlus サイト設定ファイル
   価格・保証・開始時間・FAQ・運営者情報は、このファイルだけを直せば、
   order.html / faq.html / terms.html / tokusho.html のすべてに反映されます。

   ・【 】で始まる値は「未記入」の目印です。記入したら【 】を外してください。
     （未記入のままだと、ページ上で金色の点線つきで表示されます）
   ・文章の中の {{名前}} は、下の t（文言）の同じ名前の値に置き換わります。
   ・変更したら保存し、GitHubにアップロードしてください（このファイルだけでOK）。
   ===================================================================== */
window.SITE = {

  /* ---------- 文言（t） ---------- */
  t: {
    // ■ 運営者情報（特商法・規約・プライバシーに表示）
    operator:    "EngagePlus運営",
    email:       "当ストア内チャットにてお問い合わせください",
    disclosure:  "オンライン特化の運営形態のため、サイト上での掲載は省略しています。ご請求いただいた際は、お客様の本人確認のうえ遅滞なく開示いたします。",   // 特商法の所在地・電話番号欄
    hours:       "24時間対応",
    court:       "当方の所在地を管轄する裁判所",

    // ■ 運用ルール
    startTime:     "24時間以内",                       // 全サービス共通の開始時間（個別に変えたい場合は下のcatalogのstart）
    startLimit:    "7日",                       // 入金確認から何日以内に開始できなければ「提供できなかった」とするか
    replyTime:     "通常12時間以内",         // チャットの返信目安
    refundMethod:  "PayPayでの送金",
    refundDays:    "7営業日以内に開始",
    retention:     "最終のご注文から約12か月",     // 個人情報の保存期間
    exchangeRule:  "お支払い金額と同額になる数量", // 他サービスへ変更するときの換算方法
    jpGuarantee:   "30日間は無料で補充", // Instagram日本人フォロワーの保証

    // ■ 保証・提供できなかった場合の対応（複数ページに表示）
    fallback: "当方が提供する他のサービスへの変更、またはご希望により返金",
    guaranteeShort: "一部サービスを除くすべてのサービスは、永久減少保証です。減少した分は、無料で補充します。",
    guaranteeTerms: "一部サービスを除くすべてのサービスには、永久減少保証があります。提供した数が減少した場合は、減少した分を無料で補充します。ただし、アカウントの削除・非公開化、URLやID（アカウント名）の変更があった場合などは、対象外です。Instagramの日本人フォロワーの保証は、{{jpGuarantee}}とします。",
    fallbackTerms: "<p>SNS側の仕様変更などにより、ご注文のサービスを提供できなかった場合は、次のとおり対応します。特に、Xのフォロワーなど、SNS側の影響を受けやすく、提供が安定しにくいサービスで起こることがあります。入金の確認から{{startLimit}}以内にサービスを開始できなかった場合も同様です。</p><ol><li>当方は、まず、<b>お支払い金額と同額分の、当方が提供する他のサービスへの変更</b>をご案内します。変更先のサービスと数量は、{{exchangeRule}}とし、お客様と相談のうえで決定します。</li><li>お客様が変更を希望されない場合は、<b>未提供分の金額を返金</b>します。</li></ol>",

    // ■ 凍結に関する表示（報告が出たら、すぐに修正・削除してください）
    freezeNote: "これまでにご利用いただいたお客様から、シャドウバンや凍結の報告はありません。",

    // ■ 実績
    trackCount: "増加件数5000件以上、合計増加数100万以上",
    openchatUrl: "https://line.me/ti/g2/yhad06VJ-ZM_CIR-6NqtIqZGRN56lYDaVUempQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
  },

  /* ---------- サービスと料金（catalog） ----------
     per:基準数量 / price:その基準数量あたりの金額 / min:最低数量(増減の単位) / max:最大数量
     speed:増加スピード / guarantee:保証の表示文（なければ表示しない）/ start:開始時間（省略すると共通のstartTime）
     hint・ex:URL入力欄の案内と例 / plans:プランがある場合（pop:true で「購入数最多」） */
  catalog: [
    { name: "YouTube", items: [
      { name: "チャンネル登録者", unit: "人", per: 100, price: 1300, min: 100, max: 10000,
        hint: "YouTubeのチャンネルURL", ex: "https://www.youtube.com/@XXXXX",
        speed: "50〜100人/日", guarantee: "永久減少保証" },
      { name: "通常動画の再生", unit: "回", per: 1000, price: 590, min: 1000, max: 300000,
        hint: "YouTubeの動画URL", ex: "https://www.youtube.com/watch?v=XXXXX",
        speed: "4,000〜5,000回/日", guarantee: "永久減少保証" } ] },
    { name: "TikTok", items: [
      { name: "フォロワー", unit: "人", per: 100, price: 750, min: 100, max: 10000,
        hint: "TikTokのアカウントURL", ex: "https://www.tiktok.com/@XXXXX",
        speed: "500〜1,000人/日", guarantee: "永久減少保証" },
      { name: "再生回数", unit: "回", per: 3000, price: 150, min: 3000, max: 900000,
        hint: "TikTokの動画URL", ex: "https://www.tiktok.com/@XXXXX/video/0000000000",
        speed: "5,000,000回/日", guarantee: "永久減少保証" },
      { name: "【アップデートにより受付停止】いいね", unit: "回", per: 100, price: 300, min: 100, max: 10000,
        hint: "TikTokの動画URL", ex: "https://www.tiktok.com/@XXXXX/video/0000000000",
        speed: "最大10,000回/日", guarantee: "永久減少保証" } ] },
    { name: "X", items: [
      { name: "フォロワー", unit: "人", per: 100, price: 1000, min: 100, max: 10000,
        hint: "XのアカウントURL", ex: "https://x.com/XXXXX",
        speed: "50〜100人/日（最大1,000人/日）", guarantee: "永久減少保証" } ] },
    { name: "Instagram", items: [
      { name: "フォロワー", unit: "人", per: 100, price: 700, min: 100, max: 10000,
        hint: "InstagramアカウントのURL", ex: "https://www.instagram.com/XXXXX/",
        speed: "500〜1,000人/日", guarantee: "最高品質アカウント・永久減少保証" },
      { name: "日本人フォロワー", unit: "人", per: 100, min: 50, max: 10000,
        hint: "InstagramアカウントのURL", ex: "https://www.instagram.com/XXXXX/",
        plans: [ { name: "ライト", price: 1800 }, { name: "スタンダード", price: 2800, pop: true }, { name: "プレミアム", price: 3900 } ] } ] }
  ],

  /* ---------- よくある質問（faq） ----------
     q:質問 / a:答え（HTML可）/ top:true にすると注文ページの下にも表示
     faq.html には、ここにあるすべてが、書いた順に表示されます。 */
  faq: [
    { q: "本当に届きますか？", a: "ご入金の確認後、順番に作業を開始します。作業の状況は、チャット画面の注文カードで確認できます。" },
    { q: "実績は確認できますか？", a: "オープンチャットのノートで、一部お客様の実績を公開しています(記入は任意)。<br><br><a href='{{openchatUrl}}' target='_blank' rel='noopener noreferrer'>オープンチャットを開く</a>に参加後、右上の三本線（☰）から「ノート」を選び、一番下の「実績」欄をご確認ください。" },
    { q: "アカウントBANや凍結されませんか？", top: true, a: "凍結対象にはなりません。<br>仮に当サービスを利用したことがBAN等の原因になるのであれば、『誰でも第三者のアカウントを自由自在に制限をかけられる』という理不尽な状況が成立してしまいます。<br>また、当サービスを利用したことにより、アカウントが凍結した等の報告はサービス提供開始から1度もありませんのでご安心ください。" },
    { q: "パスワードは必要ですか？", top: true, a: "いいえ、必要ありません。ご入力いただくのは、アカウントや動画のURL等のみです。<br><br>お客様のアカウントにログインして操作することもございませんのでご安心ください。" },
    { q: "いつから始まりますか？", top: true, a: "入金の確認後、通常{{startTime}}に作業を開始します。<br><br>数量が多い場合や混雑時は、時間がかかることがあります。進み具合は、注文後のチャット画面で確認できます。" },
    { q: "数が減ったらどうなりますか？", top: true, a: "減少保証付きサービスであれば再増加いたしますのでチャットよりご連絡ください。稀にシステムエラーや不具合により減少が発生する場合がございます。<br><br>また、一部サービスを除くほとんどのサービスには永久減少保証がついております。注文画面からご確認ください。{{guaranteeShort}}" },
    { q: "支払い方法を教えてください", a: "通常PayPayでお支払いいただきます。注文後の画面に、リンクの作り方を手順つきで表示します。PayPayのホーム画面で「送る」→「送る」→「SNSで送る」を選び、金額を入力してリンクを作成してください。<br><br>また、『Amazonギフトカード・コンビニ払い』をご利用希望の方はチャットにてお問い合わせください。" },
    { q: "送金リンクの金額を間違えました", a: "表示された金額と異なる場合はチャットでご連絡ください。<br>差額分をお支払いいただきます。" },
    { q: "対象のアカウントは、非公開でも大丈夫ですか？", a: "サービス提供中は公開設定にしてください。非公開の場合、サービスを提供できません。" },
    { q: "注文を間違えた・キャンセルしたい", a: "当ストアオンラインサービスの性質上、決済完了後のお客様都合によるキャンセル、返金、はお受けできません。注文前に再度ご確認ください。" },
    { q: "注文番号を忘れてしまいました", a: "同じ端末・ブラウザで本サイトを開くと、チャット画面に注文が表示されます。ブラウザのデータを消したり、端末を変えたりした場合は、チャットで過去の注文内容をお知らせください。" },
    { q: "18歳未満でも利用できますか？", a: "保護者の同意を得たうえで、ご利用ください。" },
    { q: "問い合わせはどこからできますか？", a: "本サイトのチャット画面から、24時間送信できます。返信は、{{replyTime}}に行います。" }
  ],

  /* ---------- 内部の仕組み（通常は触らなくてOK） ---------- */
    /* ---------- カート ---------- */
  maxItems: 5,   // 1回の注文に入れられる品目の上限

  orderItems: function (o) {
    return (o.items && o.items.length) ? o.items : [{ platform: o.platform, service: o.service, plan: o.plan || "", qty: o.qty, unit: o.unit, total: o.total, account: o.account }];
  },
  orderLine: function (it) {
    return it.platform + " " + it.service + (it.plan ? "（" + it.plan + "）" : "") + " " + it.qty.toLocaleString("ja-JP") + it.unit;
  },
plain: function (s) { return this._rep(s, false); },
  f: function (s) { return this._rep(s, true); },
  _rep: function (s, mark) {
    var self = this;
    for (var i = 0; i < 3; i++) {
      s = s.replace(/\{\{(\w+)\}\}/g, function (m, k) {
        var v = self.t[k];
        if (v === undefined) return m;
        return (mark && /^【/.test(v)) ? "<mark>" + v + "</mark>" : v;
      });
    }
    return s;
  },
  fill: function (root) { root.innerHTML = this.f(root.innerHTML); }
};

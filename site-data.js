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
    operator:    "【屋号または氏名】",
    email:       "【メールアドレス】",
    disclosure:  "オンライン特化の運営形態のため、サイト上での掲載は省略しています。ご請求いただいた際は、お客様の本人確認のうえ遅滞なく開示いたします。",   // 特商法の所在地・電話番号欄
    hours:       "【24時間対応】",
    court:       "【当方の所在地を管轄する裁判所】",

    // ■ 運用ルール
    startTime:     "24時間以内",                       // 全サービス共通の開始時間（個別に変えたい場合は下のcatalogのstart）
    startLimit:    "【◯日】",                       // 入金確認から何日以内に開始できなければ「提供できなかった」とするか
    payDeadline:   "【ご注文から◯時間以内】",       // 送金リンクの送信期限
    replyTime:     "【通常1〜2営業日以内】",         // チャットの返信目安
    refundMethod:  "【PayPayでの送金】",
    refundDays:    "【◯営業日以内】",
    claimDeadline: "【提供の完了から◯日以内】",     // 返金・補充などの申し出期限
    retention:     "【最終のご注文から◯か月】",     // 個人情報の保存期間
    exchangeRule:  "【お支払い金額と同額になる数量】", // 他サービスへ変更するときの換算方法
    jpGuarantee:   "【◯日間は無料で補充／保証なし】", // Instagram日本人フォロワーの保証

    // ■ 保証・提供できなかった場合の対応（複数ページに表示）
    fallback: "当方が提供する他のサービスへの変更、またはご希望により返金",
    guaranteeShort: "Instagramの日本人フォロワーを除くすべてのサービスは、永久減少保証です。減少した分は、無料で補充します。",
    guaranteeTerms: "Instagramの日本人フォロワーを除くすべてのサービスには、永久減少保証があります。提供した数が減少した場合は、減少した分を無料で補充します。ただし、アカウントの削除・非公開化、URLやID（アカウント名）の変更があった場合などは、対象外です。Instagramの日本人フォロワーの保証は、{{jpGuarantee}}とします。",
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
      { name: "いいね", unit: "回", per: 100, price: 300, min: 100, max: 10000,
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
    { q: "本当に届きますか？", a: "ご入金の確認後、順番に作業を開始します。作業の状況は、チャット画面の注文カードで確認できます。提供できなかった場合は、{{fallback}}で対応します（<a href='terms.html#refund'>返金・キャンセル</a>）。" },
    { q: "実績は確認できますか？", a: "オープンチャットのノートで、一部お客様の実績を公開しています(記入は任意)。<a href='{{openchatUrl}}' target='_blank' rel='noopener noreferrer'>オープンチャットを開く</a>に参加後、右上の三本線（☰）から「ノート」を選び、一番下の「実績」欄をご確認ください。" },
    { q: "アカウントBANや凍結されませんか？", top: true, a: "凍結対象にはなりません。仮に当サービスを利用したことでBANされる" },
    { q: "パスワードは必要ですか？", top: true, a: "いいえ、必要ありません。ご入力いただくのは、アカウントや動画のURL等のみです。パスワードをお尋ねすることはなく、お客様のアカウントにログインして操作することもございませんのでご安心ください。" },
    { q: "いつから始まりますか？", top: true, a: "入金の確認後、通常{{startTime}}に作業を開始します。数量が多い場合や混雑時は、時間がかかることがあります。進み具合は、注文後のチャット画面で確認できます。" },
    { q: "数が減ったらどうなりますか？", top: true, a: "一部サービスを除く、ほぼ全てのサービスに減少保証がございますのでお問い合わせください。規定数まで再増加いたします。まれに提供元の不具合やエラー等により減少する可能性があります。{{guaranteeShort}}" },
    { q: "提供できなかった場合は？", top: true, a: "{{fallback}}で対応します。詳しくは<a href='terms.html#refund'>返金・キャンセル</a>をご確認ください。" },
    { q: "支払い方法を教えてください", a: "通常PayPayでお支払いいただきます。注文後の画面に、リンクの作り方を手順つきで表示します。PayPayのホーム画面で「送る」→「送る」→「SNSで送る」を選び、金額を入力してリンクを作成してください。また、その他のお支払い方法をご利用希望の方はチャットにてお問い合わせください。" },
    { q: "送金リンクの金額を間違えました", a: "表示された金額と異なる場合はチャットでご連絡ください。差額分を再度お支払いいただきます。" },
    { q: "対象のアカウントは、非公開でも大丈夫ですか？", a: "公開設定にしてください。非公開の場合、サービスを提供できません。" },
    { q: "注文を間違えた・キャンセルしたい", a: "提供の開始前であれば、キャンセルできます。チャットで注文番号をお知らせください。提供を開始した後は、キャンセルできません。" },
    { q: "注文番号を忘れてしまいました", a: "同じ端末・ブラウザで本サイトを開くと、チャット画面に注文が表示されます。ブラウザのデータを消したり、端末を変えたりした場合は、チャットで過去の注文内容をお知らせください。" },
    { q: "18歳未満でも利用できますか？", a: "保護者の同意を得たうえで、ご利用ください。" },
    { q: "問い合わせはどこからできますか？", a: "本サイトのチャット画面から、24時間送信できます。返信は、{{replyTime}}に行います。" }
  ],

  /* ---------- 内部の仕組み（通常は触らなくてOK） ---------- */
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

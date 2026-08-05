    // 16タイプ一覧データ
    const TYPES_LIST = [
      // Kタイプ (1-8)
      {
        code: "KARS",
        group: "K",
        title: "知の仲介者",
        oneLine: "知識を分析し、現実へ活かし、人と共有する読者。",
        desc: "本から得た知識を構造的に理解し、仕事や生活で実践する。さらに、自分の学びを整理して人へ伝え、知見を循環させることに喜びを感じる。",
        traits: ["根拠や仕組みを重視する", "読んだ内容を試したくなる", "人へ分かりやすく説明したくなる"],
        axisLabels: ["K: 知識求者", "A: 構造分析", "R: 現実反映", "S: 他者共有"]
      },
      {
        code: "KARP",
        group: "K",
        title: "価値観の設計者",
        oneLine: "知識を分析し、現実へ活かし、自分の糧にする読者。",
        desc: "本から得た知識を深く理解し、自分の判断基準や価値観へ組み込む。人へ積極的に共有するより、自分自身を支える確かな土台として蓄積する。",
        traits: ["納得できるまで考える", "自分の価値観と照らし合わせる", "学びを静かに生活へ取り入れる"],
        axisLabels: ["K: 知識求者", "A: 構造分析", "R: 現実反映", "P: 個人保存"]
      },
      {
        code: "KAIS",
        group: "K",
        title: "視点の案内人",
        oneLine: "知識を分析し、心に留めながら、人と共有する読者。",
        desc: "本の背景や構造を探究し、そこから得た新しい視点を人と交換する。すぐ実践することより、考察や対話によって理解を広げることを楽しむ。",
        traits: ["本同士の関連性を考える", "新しい視点を発見する", "考察を人と語り合う"],
        axisLabels: ["K: 知識求者", "A: 構造分析", "I: 心中保持", "S: 他者共有"]
      },
      {
        code: "KAIP",
        group: "K",
        title: "孤高の沈思者",
        oneLine: "知識を分析し、心に留め、自分だけの理解を深める読者。",
        desc: "情報の表面だけでなく、背景や構造を自分が納得するまで考え続ける。他者の評価や共有を必要とせず、本を思考を深める対話相手として捉える。",
        traits: ["深読みや再読を好む", "読後も考察を続ける", "自分なりの答えを探す"],
        axisLabels: ["K: 知識求者", "A: 構造分析", "I: 心中保持", "P: 個人保存"]
      },
      {
        code: "KFRS",
        group: "K",
        title: "共感の伝播者",
        oneLine: "知識を感じ取り、現実へ活かし、人へ届ける読者。",
        desc: "知識を理屈だけでなく、具体的なエピソードや自分への響きから受け取る。心に残った学びを日常で実践し、その価値を人にも伝えようとする。",
        traits: ["エピソードから学びを得る", "印象に残った考えを試す", "本の魅力を人へ勧める"],
        axisLabels: ["K: 知識求者", "F: 感覚重視", "R: 現実反映", "S: 他者共有"]
      },
      {
        code: "KFRP",
        group: "K",
        title: "日常の耕作者",
        oneLine: "知識を感じ取り、現実へ活かし、自分の中で育てる読者。",
        desc: "本から得た気づきを、自分の日常へ少しずつ取り入れる。大きく変わろうとするのではなく、心に残った言葉によって、自分の生活や価値観を静かに耕していく。",
        traits: ["自分に響く言葉を大切にする", "学びを小さな行動へ変える", "本を静かな指針として扱う"],
        axisLabels: ["K: 知識求者", "F: 感覚重視", "R: 現実反映", "P: 個人保存"]
      },
      {
        code: "KFIS",
        group: "K",
        title: "情感の語り部",
        oneLine: "知識を感じ取り、心に留めながら、人と分かち合う読者。",
        desc: "本に含まれる知識だけでなく、文章の雰囲気や作者の思いも受け取る。すぐに行動へ変えるより、印象に残った部分を人と語り合うことで理解を深める。",
        traits: ["言葉や場面の印象を重視する", "感じたことを誰かと共有する", "対話を通じて本を味わい直す"],
        axisLabels: ["K: 知識求者", "F: 感覚重視", "I: 心中保持", "S: 他者共有"]
      },
      {
        code: "KFIP",
        group: "K",
        title: "言葉の醸造家",
        oneLine: "知識を感じ取り、心に留め、自分だけの宝物にする読者。",
        desc: "本から受け取った言葉や気づきを急いで整理せず、自分の中で時間をかけて熟成させる。ふとした瞬間に一節を思い返し、自分だけの意味を見つけていく。",
        traits: ["心に残る表現を大切にする", "時間を置いて意味を味わう", "読書体験を自分の中へしまっておく"],
        axisLabels: ["K: 知識求者", "F: 感覚重視", "I: 心中保持", "P: 個人保存"]
      },

      // Eタイプ (9-16)
      {
        code: "EARS",
        group: "E",
        title: "感情の共鳴師",
        oneLine: "感情を分析し、現実へ活かし、人へ届ける読者。",
        desc: "心が動いた理由や登場人物の心理を考察し、その気づきを現実の人間関係や生き方へ活かす。さらに、受け取った感情や学びを人へ伝えることで共感を広げる。",
        traits: ["感情の背景を考える", "人間理解へつなげる", "心が動いた理由を人へ伝える"],
        axisLabels: ["E: 感情体験", "A: 構造分析", "R: 現実反映", "S: 他者共有"]
      },
      {
        code: "EARP",
        group: "E",
        title: "心象の分析者",
        oneLine: "感情を分析し、現実へ活かし、自分の人生へ重ねる読者。",
        desc: "登場人物や書き手の感情を読み解き、自分自身の経験や価値観と照らし合わせる。本を、自分の心を理解し、人生を見直すための鏡として扱う。",
        traits: ["心理描写を深く読む", "自分の感情と重ねる", "気づきを自己理解へつなげる"],
        axisLabels: ["E: 感情体験", "A: 構造分析", "R: 現実反映", "P: 個人保存"]
      },
      {
        code: "EAIS",
        group: "E",
        title: "余韻の対話官",
        oneLine: "感情を分析し、余韻を深め、人と語り合う読者。",
        desc: "作品のテーマや、心が動いた理由を考え続ける。感想や解釈を人と交換し、それぞれ異なる受け取り方に触れることで、作品の余韻をさらに深める。",
        traits: ["テーマや心理を考察する", "感想の違いを楽しむ", "対話によって作品を味わい直す"],
        axisLabels: ["E: 感情体験", "A: 構造分析", "I: 心中保持", "S: 他者共有"]
      },
      {
        code: "EAIP",
        group: "E",
        title: "感性の守護者",
        oneLine: "感情を分析し、余韻を深め、自分の中で育てる読者。",
        desc: "作品から受け取った感情や意味を、自分だけのものとして静かに考え続ける。急いで言葉にしたり他者の解釈へ触れたりせず、自分の感性を守りながら理解を育てる。",
        traits: ["自分なりの解釈を大切にする", "感情について静かに考える", "再読によって意味を深める"],
        axisLabels: ["E: 感情体験", "A: 構造分析", "I: 心中保持", "P: 個人保存"]
      },
      {
        code: "EFRS",
        group: "E",
        title: "響応の照灯士",
        oneLine: "感情を味わい、現実へ活かし、人と分かち合う読者。",
        desc: "本から受け取った感動や活力を、現実の行動へ持ち帰る。自分の中に灯った気持ちを人にも伝え、誰かの心や日常にも新しい灯をともそうとする。",
        traits: ["感動を素直に受け止める", "前向きな行動へつなげる", "心が動いた体験を人へ届ける"],
        axisLabels: ["E: 感情体験", "F: 感覚重視", "R: 現実反映", "S: 他者共有"]
      },
      {
        code: "EFRP",
        group: "E",
        title: "内根の涵養家",
        oneLine: "感情を味わい、現実へ活かし、自分の支えにする読者。",
        desc: "本から受け取った感情を、自分の心を養う栄養として取り込む。心に残った言葉や場面を日々の支えとし、時間をかけて自分の内面へ根づかせていく。",
        traits: ["本を心の支えにする", "感情を静かな成長へつなげる", "大切な言葉を自分の中で育てる"],
        axisLabels: ["E: 感情体験", "F: 感覚重視", "R: 現実反映", "P: 個人保存"]
      },
      {
        code: "EFIS",
        group: "E",
        title: "祝祭の唱和者",
        oneLine: "感情を味わい、余韻を抱え、人と共鳴する読者。",
        desc: "作品の世界へ入り込み、登場人物と一緒に笑い、泣き、心を動かされる。その感動を同じ本を愛する人と語り合い、作品への喜びを分かち合う。",
        traits: ["感情移入しながら読む", "好きな作品について語り合う", "共感の輪が広がることを楽しむ"],
        axisLabels: ["E: 感情体験", "F: 感覚重視", "I: 心中保持", "S: 他者共有"]
      },
      {
        code: "EFIP",
        group: "E",
        title: "永遠の逗留者",
        oneLine: "感情を味わい、余韻を抱え、自分だけの世界として大切にする読者。",
        desc: "本の世界へ深く没入し、読み終えたあともその場所に心を留め続ける。感想を急いでまとめず、自分だけの記憶や心の居場所として作品を抱き続ける。",
        traits: ["物語の世界へ深く浸る", "読後の余韻を長く味わう", "本を何度でも帰れる場所として捉える"],
        axisLabels: ["E: 感情体験", "F: 感覚重視", "I: 心中保持", "P: 個人保存"]
      }
    ];

    // DOM要素
    const typeGrid = document.getElementById('type-grid');

    // 初期表示
    renderList();

    // 描画ロジック
    function renderList() {
      typeGrid.innerHTML = '';

      TYPES_LIST.forEach(type => {
        const card = document.createElement('div');
        card.className = "type-card bg-book-card rounded-2xl p-6 shadow-sm border border-book-border flex flex-col justify-between relative overflow-hidden";

        // グループごとの上部アクセントカラー
        const borderAccent = type.group === 'K' ? 'bg-book-primary' : 'bg-book-accent';

        card.innerHTML = `
          <div class="absolute top-0 left-0 w-full h-1.5 ${borderAccent}"></div>

          <div>
            <!-- ヘッダーライン：コード & 二つ名 -->
            <div class="flex justify-between items-start mb-2">
              <div>
                <span class="text-2xl font-serif font-bold text-book-primary tracking-wider">${type.code}</span>
                <span class="ml-2 text-xs text-book-muted bg-book-bg px-2 py-0.5 rounded border border-book-border">${type.group === 'K' ? '知識志向' : '感情志向'}</span>
              </div>
            </div>

            <!-- タイトル (職能名) -->
            <h2 class="text-lg font-serif font-bold text-book-text mb-2">${type.title}</h2>

            <!-- 一行説明 -->
            <div class="bg-book-lightBg/60 p-3 rounded-xl mb-4 border border-book-border/40">
              <p class="text-xs sm:text-sm font-semibold text-book-primary leading-relaxed">${type.oneLine}</p>
            </div>

            <!-- 詳細解説 -->
            <p class="text-xs sm:text-sm text-book-muted leading-relaxed mb-4">${type.desc}</p>
          </div>

          <div>
            <!-- 特長リスト -->
            <div class="mb-4 pt-3 border-t border-book-border/40">
              <span class="text-[11px] font-bold text-book-primary uppercase tracking-wider block mb-1.5">主な読書傾向</span>
              <ul class="text-xs text-book-text space-y-1 list-disc list-inside">
                ${type.traits.map(t => `<li>${t}</li>`).join('')}
              </ul>
            </div>

            <!-- 4軸タグ -->
            <div class="flex flex-wrap gap-1.5 pt-2 border-t border-book-border/40">
              ${type.axisLabels.map(label => `<span class="text-[10px] bg-book-bg text-book-muted px-2 py-1 rounded border border-book-border/60">${label}</span>`).join('')}
            </div>
          </div>
        `;

        typeGrid.appendChild(card);
      });
    }

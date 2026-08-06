// --- 設問データ (全26問) ---
const QUESTIONS = [
  // K / E 軸 (Q1~Q8)
  { id: 1, text: "本を選ぶときは、「何を学べるか」が気になる。", axis: "KE", target: "K", weight: 2, label: "選書基準" },
  { id: 2, text: "本を選ぶときは、「どんな気持ちになれそうか」が気になる。", axis: "KE", target: "E", weight: 2, label: "選書基準" },
  { id: 3, text: "本を読み終えたとき、「新しい知識や考え方を得られた」と感じると満足する。", axis: "KE", target: "K", weight: 2, label: "満足感" },
  { id: 4, text: "本を読み終えたとき、「心が動かされた」と感じると満足する。", axis: "KE", target: "E", weight: 2, label: "満足感" },
  { id: 5, text: "本を読んでいるとき、新しい考え方や視点に出会う瞬間が好きだ。", axis: "KE", target: "K", weight: 2, label: "読書中の価値" },
  { id: 6, text: "本を読んでいるとき、その本の世界や空気に浸ることが好きだ。", axis: "KE", target: "E", weight: 2, label: "読書中の価値" },
  { id: 7, text: "読書中、「なるほど」と思う瞬間に嬉しさを感じる。", axis: "KE", target: "K", weight: 1, label: "補助判定" },
  { id: 8, text: "読書中、「この気持ち、分かる」と感じる瞬間に嬉しさを感じる。", axis: "KE", target: "E", weight: 1, label: "補助判定" },

  // A / F 軸 (Q9~Q14)
  { id: 9, text: "登場人物の気持ちよりも、出来事が起きた理由が気になる。", axis: "AF", target: "A", weight: 2, label: "注目対象" },
  { id: 10, text: "伏線や構成に気づきながら読むことが多い。", axis: "AF", target: "A", weight: 2, label: "構造への注目" },
  { id: 11, text: "作者がなぜこの表現や展開を選んだのか考えながら読む。", axis: "AF", target: "A", weight: 2, label: "作者意図への注目" },
  { id: 12, text: "本の世界の雰囲気や空気感を味わうことが好きだ。", axis: "AF", target: "F", weight: 2, label: "空気への注目" },
  { id: 13, text: "読書中、「この表現が好きだ」と感じることが多い。", axis: "AF", target: "F", weight: 2, label: "表現への反応" },
  { id: 14, text: "内容を細かく理解するより、物語の流れに身を任せて読むことが多い。", axis: "AF", target: "F", weight: 1, label: "補助判定" },

  // R / I 軸 (Q15~Q20)
  { id: 15, text: "読んだ内容を、実際の生活で試してみたくなる。", axis: "RI", target: "R", weight: 2, label: "現実への反映" },
  { id: 16, text: "本をきっかけに、自分の行動や習慣を変えることがある。", axis: "RI", target: "R", weight: 2, label: "行動変化" },
  { id: 17, text: "印象に残った内容は、後で振り返れる形にしておきたい。", axis: "RI", target: "R", weight: 1, label: "記録・整理" },
  { id: 18, text: "読み終えたあとは、すぐに整理せず、しばらく余韻に浸っていたい。", axis: "RI", target: "I", weight: 2, label: "余韻" },
  { id: 19, text: "本の一節や場面を、後になって何度も思い返すことがある。", axis: "RI", target: "I", weight: 2, label: "心への定着" },
  { id: 20, text: "本から受け取ったものは、時間をかけて自分の中で意味を持つと思う。", axis: "RI", target: "I", weight: 1, label: "補助判定" },

  // S / P 軸 (Q21~Q26)
  { id: 21, text: "面白かった本は、誰かに勧めたくなる。", axis: "SP", target: "S", weight: 2, label: "推薦行動" },
  { id: 22, text: "同じ本を読んだ人と、感想や考察を語り合いたくなる。", axis: "SP", target: "S", weight: 2, label: "対話" },
  { id: 23, text: "人の感想を聞くことで、本への理解が深まると感じる。", axis: "SP", target: "S", weight: 1, label: "他者との交流" },
  { id: 24, text: "本の感想は、無理に言葉にせず、自分の中だけに残しておきたい。", axis: "SP", target: "P", weight: 2, label: "感想の保持" },
  { id: 25, text: "他人の解釈に触れず、自分だけの余韻を大切にしたい。", axis: "SP", target: "P", weight: 2, label: "個人的な読書体験" },
  { id: 26, text: "本との思い出は、自分だけの大切なものとしてしまっておきたい。", axis: "SP", target: "P", weight: 1, label: "補助判定" }
];

// --- 16タイプ診断データ ---
const TYPES_DATA = {
  "KARS": {
    title: "知の仲介者",
    oneLine: "知識を分析し、現実へ活かし、人と共有する読者。",
    desc: "本から得た知識を構造的に理解し、仕事や生活で実践する。さらに、自分の学びを整理して人へ伝え、知見を循環させることに喜びを感じる。",
    traits: ["根拠や仕組みを重視する", "読んだ内容を試したくなる", "人へ分かりやすく説明したくなる"]
  },
  "KARP": {
    title: "価値観の設計者",
    oneLine: "知識を分析し、現実へ活かし、自分の糧にする読者。",
    desc: "本から得た知識を深く理解し、自分の判断基準や価値観へ組み込む。人へ積極的に共有するより、自分自身を支える確かな土台として蓄積する。",
    traits: ["納得できるまで考える", "自分の価値観と照らし合わせる", "学びを静かに生活へ取り入れる"]
  },
  "KAIS": {
    title: "視点の案内人",
    oneLine: "知識を分析し、心に留めながら、人と共有する読者。",
    desc: "本の背景や構造を探究し、そこから得た新しい視点を人と交換する。すぐ実践することより、考察や対話によって理解を広げることを楽しむ。",
    traits: ["本同士の関連性を考える", "新しい視点を発見する", "考察を人と語り合う"]
  },
  "KAIP": {
    title: "孤高の沈思者",
    oneLine: "知識を分析し、心に留め、自分だけの理解を深める読者。",
    desc: "情報の表面だけでなく、背景や構造を自分が納得するまで考え続ける。他者の評価や共有を必要とせず、本を思考を深める対話相手として捉える。",
    traits: ["深読みや再読を好む", "読後も考察を続ける", "自分なりの答えを探す"]
  },
  "KFRS": {
    title: "共感の伝播者",
    oneLine: "知識を感じ取り、現実へ活かし、人へ届ける読者。",
    desc: "知識を理屈だけでなく、具体的なエピソードや自分への響きから受け取る。心に残った学びを日常で実践し、その価値を人にも伝えようとする。",
    traits: ["エピソードから学びを得る", "印象に残った考えを試す", "本の魅力を人へ勧める"]
  },
  "KFRP": {
    title: "日常の耕作者",
    oneLine: "知識を感じ取り、現実へ活かし、自分の中で育てる読者。",
    desc: "本から得た気づきを、自分の日常へ少しずつ取り入れる。大きく変わろうとするのではなく、心に残った言葉によって、自分の生活や価値観を静かに耕していく。",
    traits: ["自分に響く言葉を大切にする", "学びを小さな行動へ変える", "本を静かな指針として扱う"]
  },
  "KFIS": {
    title: "情感の語り部",
    oneLine: "知識を感じ取り、心に留めながら、人と分かち合う読者。",
    desc: "本に含まれる知識だけでなく、文章の雰囲気や作者の思いも受け取る。すぐに行動へ変えるより、印象に残った部分を人と語り合うことで理解を深める。",
    traits: ["言葉や場面の印象を重視する", "感じたことを誰かと共有する", "対話を通じて本を味わい直す"]
  },
  "KFIP": {
    title: "言葉の醸造家",
    oneLine: "知識を感じ取り、心に留め、自分だけの宝物にする読者。",
    desc: "本から受け取った言葉や気づきを急いで整理せず、自分の中で時間をかけて熟成させる。ふとした瞬間に一節を思い返し、自分だけの意味を見つけていく。",
    traits: ["心に残る表現を大切にする", "時間を置いて意味を味わう", "読書体験を自分の中へしまっておく"]
  },
  "EARS": {
    title: "感情の共鳴師",
    oneLine: "感情を分析し、現実へ活かし、人へ届ける読者。",
    desc: "心が動いた理由や登場人物の心理を考察し、その気づきを現実の人間関係や生き方へ活かす。さらに、受け取った感情や学びを人へ伝えることで共感を広げる。",
    traits: ["感情の背景を考える", "人間理解へつなげる", "心が動いた理由を人へ伝える"]
  },
  "EARP": {
    title: "心象の分析者",
    oneLine: "感情を分析し、現実へ活かし、自分の人生へ重ねる読者。",
    desc: "登場人物や書き手の感情を読み解き、自分自身の経験や価値観と照らし合わせる。本を、自分の心を理解し、人生を見直すための鏡として扱う。",
    traits: ["心理描写を深く読む", "自分の感情と重ねる", "気づきを自己理解へつなげる"]
  },
  "EAIS": {
    title: "余韻の対話官",
    oneLine: "感情を分析し、余韻を深め、人と語り合う読者。",
    desc: "作品のテーマや、心が動いた理由を考え続ける。感想や解釈を人と交換し、それぞれ異なる受け取り方に触れることで、作品の余韻をさらに深める。",
    traits: ["テーマや心理を考察する", "感想の違いを楽しむ", "対話によって作品を味わい直す"]
  },
  "EAIP": {
    title: "感性の守護者",
    oneLine: "感情を分析し、余韻を深め、自分の中で育てる読者。",
    desc: "作品から受け取った感情や意味を、自分だけのものとして静かに考え続ける。急いで言葉にしたり他者の解釈へ触れたりせず、自分の感性を守りながら理解を育てる。",
    traits: ["自分なりの解釈を大切にする", "感情について静かに考える", "再読によって意味を深める"]
  },
  "EFRS": {
    title: "響応の照灯士",
    oneLine: "感情を味わい、現実へ活かし、人と分かち合う読者。",
    desc: "本から受け取った感動や活力を、現実の行動へ持ち帰る。自分の中に灯った気持ちを人にも伝え、誰かの心や日常にも新しい灯をともそうとする。",
    traits: ["感動を素直に受け止める", "前向きな行動へつなげる", "心が動いた体験を人へ届ける"]
  },
  "EFRP": {
    title: "内根の涵養家",
    oneLine: "感情を味わい、現実へ活かし、自分の支えにする読者。",
    desc: "本から受け取った感情を、自分の心を養う栄養として取り込む。心に残った言葉や場面を日々の支えとし、時間をかけて自分の内面へ根づかせていく。",
    traits: ["本を心の支えにする", "感情を静かな成長へつなげる", "大切な言葉を自分の中で育てる"]
  },
  "EFIS": {
    title: "祝祭の唱和者",
    oneLine: "感情を味わい、余韻を抱え、人と共鳴する読者。",
    desc: "作品の世界へ入り込み、登場人物と一緒に笑い、泣き、心を動かされる。その感動を同じ本を愛する人と語り合い、作品への喜びを分かち合う。",
    traits: ["感情移入しながら読む", "好きな作品について語り合う", "共感の輪が広がることを楽しむ"]
  },
  "EFIP": {
    title: "永遠の逗留者",
    oneLine: "感情を味わい、余韻を抱え、自分だけの世界として大切にする読者。",
    desc: "本の世界へ深く没入し、読み終えたあともその場所に心を留め続ける。感想を急いでまとめず、自分だけの記憶や心の居場所として作品を抱き続ける。",
    traits: ["物語の世界へ深く浸る", "読後の余韻を長く味わう", "本を何度でも帰れる場所として捉える"]
  }
};

// --- アプリケーションの状態 ---
let currentQuestionIndex = 0;
let answers = [];

// DOM要素
const screenTop = document.getElementById('screen-top');
const screenQuiz = document.getElementById('screen-quiz');
const screenLoading = document.getElementById('screen-loading');
const screenResult = document.getElementById('screen-result');

const btnStart = document.getElementById('btn-start');
const btnBack = document.getElementById('btn-back');
const btnShareX = document.getElementById('btn-share-x');
const btnCopy = document.getElementById('btn-copy');
const btnRestart = document.getElementById('btn-restart');

const quizProgressText = document.getElementById('quiz-progress-text');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');

// イベントリスナー設定
btnStart.addEventListener('click', startQuiz);
btnBack.addEventListener('click', prevQuestion);
btnRestart.addEventListener('click', restartQuiz);
btnShareX.addEventListener('click', shareOnX);
btnCopy.addEventListener('click', copyResult);

quizOptions.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const score = parseInt(btn.getAttribute('data-score'), 10);
    answerQuestion(score);
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  switchScreen(screenTop, screenQuiz);
  renderQuestion();
}

function switchScreen(fromScreen, toScreen) {
  fromScreen.classList.add('hidden');
  toScreen.classList.remove('hidden');
  toScreen.classList.remove('fade-enter-active');
  void toScreen.offsetWidth;
  toScreen.classList.add('fade-enter-active');
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestionIndex];
  const total = QUESTIONS.length;
  const progressRatio = (currentQuestionIndex / total) * 100;

  quizProgressText.innerText = `Q${currentQuestionIndex + 1} / ${total}`;
  quizProgressBar.style.width = `${progressRatio}%`;

  quizQuestion.innerText = q.text;

  btnBack.disabled = (currentQuestionIndex === 0);
}

function answerQuestion(score) {
  answers[currentQuestionIndex] = score;

  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    quizQuestion.classList.add('opacity-0');
    setTimeout(() => {
      renderQuestion();
      quizQuestion.classList.remove('opacity-0');
    }, 150);
  } else {
    showLoading();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function showLoading() {
  switchScreen(screenQuiz, screenLoading);
  setTimeout(() => {
    calculateAndShowResult();
  }, 1800);
}

function calculateAndShowResult() {
  const scores = {
    K: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    E: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    A: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    F: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    R: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    I: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    S: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 },
    P: { raw: 0, weighted: 0, highWeighted: 0, highRaw: 0 }
  };

  answers.forEach((ansScore, idx) => {
    const q = QUESTIONS[idx];
    const target = q.target;
    const weight = q.weight;

    let baseScore = 0;
    if (ansScore === 3) baseScore = 3;
    else if (ansScore === 2) baseScore = 2;

    let oppTarget = getOppositeChar(target);
    let oppBaseScore = 0;
    if (ansScore === 1) oppBaseScore = 2;
    else if (ansScore === 0) oppBaseScore = 3;

    scores[target].weighted += baseScore * weight;
    scores[target].raw += ansScore;
    if (weight === 2) {
      scores[target].highWeighted += baseScore * weight;
      scores[target].highRaw += ansScore;
    }

    if (oppBaseScore > 0) {
      scores[oppTarget].weighted += oppBaseScore * weight;
      scores[oppTarget].raw += (3 - ansScore);
      if (weight === 2) {
        scores[oppTarget].highWeighted += oppBaseScore * weight;
        scores[oppTarget].highRaw += (3 - ansScore);
      }
    }
  });

  const axis1 = resolveAxis('K', 'E', scores);
  const axis2 = resolveAxis('A', 'F', scores);
  const axis3 = resolveAxis('R', 'I', scores);
  const axis4 = resolveAxis('S', 'P', scores);

  const resultCode = `${axis1}${axis2}${axis3}${axis4}`;
  displayResult(resultCode, scores);
}

function getOppositeChar(char) {
  const pair = { 'K':'E', 'E':'K', 'A':'F', 'F':'A', 'R':'I', 'I':'R', 'S':'P', 'P':'S' };
  return pair[char];
}

function resolveAxis(charLeft, charRight, scores) {
  const left = scores[charLeft];
  const right = scores[charRight];

  if (left.weighted > right.weighted) return charLeft;
  if (right.weighted > left.weighted) return charRight;

  if (left.highWeighted > right.highWeighted) return charLeft;
  if (right.highWeighted > left.highWeighted) return charRight;

  if (left.raw > right.raw) return charLeft;
  if (right.raw > left.raw) return charRight;

  return charLeft;
}

function displayResult(code, scores) {
  const data = TYPES_DATA[code] || TYPES_DATA["KARS"];

  document.getElementById('result-code').innerText = code;
  document.getElementById('result-title').innerText = data.title;
  document.getElementById('result-one-line').innerText = data.oneLine;
  document.getElementById('result-description').innerText = data.desc;

  const traitsUl = document.getElementById('result-traits');
  traitsUl.innerHTML = '';
  data.traits.forEach(trait => {
    const li = document.createElement('li');
    li.innerText = trait;
    traitsUl.appendChild(li);
  });

  updateAxisBars(scores);
  switchScreen(screenLoading, screenResult);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateAxisBars(scores) {
  updateSingleBar('k', 'e', scores.K.weighted, scores.E.weighted);
  updateSingleBar('a', 'f', scores.A.weighted, scores.F.weighted);
  updateSingleBar('r', 'i', scores.R.weighted, scores.I.weighted);
  updateSingleBar('s', 'p', scores.S.weighted, scores.P.weighted);
}

function updateSingleBar(leftKey, rightKey, scoreLeft, scoreRight) {
  const total = scoreLeft + scoreRight || 1;
  const leftPercent = Math.round((scoreLeft / total) * 100);

  const barLeft = document.getElementById(`bar-${leftKey}`);
  const barRight = document.getElementById(`bar-${rightKey}`);

  barLeft.style.width = `${leftPercent}%`;
  barRight.style.width = `${100 - leftPercent}%`;

  const leftLabel = document.getElementById(`axis-${leftKey}-label`);
  const rightLabel = document.getElementById(`axis-${rightKey}-label`);

  if (scoreLeft >= scoreRight) {
    barLeft.className = "bg-book-primary h-full transition-all duration-500";
    barRight.className = "bg-book-border h-full transition-all duration-500";
    leftLabel.className = "text-book-primary font-bold";
    rightLabel.className = "text-book-muted font-normal";
  } else {
    barLeft.className = "bg-book-border h-full transition-all duration-500";
    barRight.className = "bg-book-primary h-full transition-all duration-500";
    leftLabel.className = "text-book-muted font-normal";
    rightLabel.className = "text-book-primary font-bold";
  }
}

function restartQuiz() {
  switchScreen(screenResult, screenTop);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareOnX() {
  const code = document.getElementById('result-code').innerText;
  const title = document.getElementById('result-title').innerText;
  const oneLine = document.getElementById('result-one-line').innerText;
  const url = window.location.href;

  const text = `【読書の価値観診断】\n\n私の読書タイプは\n「${code}：${title}」でした。\n\n${oneLine}\n\nあなたは、本とどんな関係を築いていますか？\n\n#読書の価値観診断\n`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  window.open(shareUrl, '_blank');
}

function copyResult() {
  const code = document.getElementById('result-code').innerText;
  const title = document.getElementById('result-title').innerText;
  const oneLine = document.getElementById('result-one-line').innerText;
  const text = `【読書の価値観診断】私の読書タイプは「${code}：${title}」です。（${oneLine}）`;

  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('診断結果をコピーしました');
  } catch (err) {
    showToast('コピーに失敗しました');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.innerText = message;

  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2500);
}

// --- APIテスト用のコード ---
document.addEventListener("DOMContentLoaded", () => {
  const apiTestButton = document.getElementById("api-test-button");
  const apiTestMessage = document.getElementById("api-test-message");
  const apiTestResult = document.getElementById("api-test-result");

  if (!apiTestButton || !apiTestMessage || !apiTestResult) {
    console.error("APIテスト用のHTML要素が見つかりません。");
    return;
  }

  apiTestButton.addEventListener("click", async () => {
    const message = apiTestMessage.value.trim();

    if (!message) {
      apiTestResult.textContent = "メッセージを入力してください。";
      return;
    }

    apiTestButton.disabled = true;
    apiTestResult.textContent = "コンダクターが考えています……";

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "通信に失敗しました。");
      }

      apiTestResult.textContent =
        data.reply ?? "返答を取得できませんでした。";
    } catch (error) {
      console.error("API通信エラー:", error);

      apiTestResult.textContent =
        error instanceof Error
          ? error.message
          : "エラーが発生しました。";
    } finally {
      apiTestButton.disabled = false;
    }
  });
});
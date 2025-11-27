// ===== SOAL GAME =====
const questions = {
  sipil: [
    { q: "Beton adalah material utama konstruksi gedung.", a: true },
    { q: "Kolom tidak menahan beban struktur.", a: false },
    { q: "AutoCAD dipakai untuk gambar teknik sipil.", a: true },
    { q: "Aspal digunakan untuk jalan raya.", a: true },
    { q: "Fondasi berada di bagian paling atas gedung.", a: false },
    { q: "Baja tulangan dipakai pada beton bertulang.", a: true },
    { q: "Pondasi biasanya diatas genteng", a: false },
    { q: "Pondasi sangat penting untuk kestabilan bangunan.", a: true },
    { q: "Struktur jembatan termasuk teknik sipil.", a: true },
    { q: "Berat beton bertulang 2400kg/volume", a: true }
  ],

  umum: [
    { q: "Bumi itu bulat.", a: true },
    { q: "Matahari terbit dari timur.", a: true },
    { q: "Semua hewan hidup di laut.", a: false },
    { q: "Pesawat bisa terbang.", a: true },
    { q: "Hujan berasal dari uap air.", a: true },
    { q: "Ular memiliki kaki.", a: false },
    { q: "Gunung bisa meletus.", a: true },
    { q: "Air tidak bisa menguap.", a: false },
    { q: "Manusia bernapas dengan oksigen.", a: true },
    { q: "Bunga terbuat dari besi.", a: false }
  ],

  alam: [
    { q: "Pohon menghasilkan oksigen.", a: true },
    { q: "Hiu adalah mamalia.", a: false },
    { q: "Air laut asin.", a: true },
    { q: "Gunung berapi bisa meledak.", a: true },
    { q: "Awan berasal dari uap air.", a: true },
    { q: "Batu bisa berjalan.", a: false },
    { q: "Singa raja hutan.", a: true },
    { q: "Ulat berubah jadi kupu-kupu.", a: true },
    { q: "Indonesia terdapat hutan hujan.", a: true },
    { q: "Pasir berasal dari batuan.", a: true }
  ],

  matematika: [
    { q: "5 + 5 x 5= 50", a: false },
    { q: "7 x 7 x 7 x 7 + 0 = 0", a: false },
    { q: "Akar dari 49 = 7", a: true },
    { q: "100 lebih kecil dari 10", a: false },
    { q: "π ≈ 3.14", a: true },
    { q: "90° adalah sudut siku-siku", a: true },
    { q: "12 ÷ 2 = 8", a: false },
    { q: "Luas lingkaran = πr²", a: true },
    { q: "2 adalah bilangan prima", a: true },
    { q: "1 + 1 = 3", a: false }
  ],

  love: [
    { q: "Cinta butuh komunikasi.", a: true },
    { q: "Cinta toxic harus dipaksakan.", a: false },
    { q: "Rindu adalah tanda sayang.", a: true },
    { q: "Pacar boleh kontrol hidupmu.", a: false },
    { q: "Hubungan sehat butuh kepercayaan.", a: true },
    { q: "Cemburu wajar tapi jangan berlebihan.", a: true },
    { q: "Move on itu proses.", a: true },
    { q: "Jika pasangan saling memahami, saling mendukung, dan mampu berkomunikasi dengan baik, maka hubungan tersebut memiliki peluang lebih besar untuk bertahan lama dibandingkan hubungan tanpa komunikasi.", a: true },
    { q: "Perhatian kecil berarti banyak.", a: true },
    { q: "Cinta itu logika tanpa perasaan.", a: false }
  ]
};

// ===== Variabel =====
let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;

// ===== Elemen =====
const themePage = document.getElementById("themePage");
const quizPage = document.getElementById("quizPage");
const winPage = document.getElementById("winPage");
const losePage = document.getElementById("losePage");

const questionText = document.getElementById("question");
const scoreText = document.getElementById("scoreText");
const countText = document.getElementById("questionCount");

// ===== Event Listener Tema =====
document.querySelectorAll(".theme-btn").forEach(btn => {
  btn.addEventListener("click", () => startGame(btn.dataset.theme));
});

// ===== Event Jawaban =====
document.getElementById("btnTrue").addEventListener("click", () => answer(true));
document.getElementById("btnFalse").addEventListener("click", () => answer(false));

document.getElementById("restartWin").addEventListener("click", resetGame);
document.getElementById("restartLose").addEventListener("click", resetGame);

// ===== Mulai Game =====
function startGame(theme) {
  selectedQuestions = [...questions[theme]];
  currentQuestion = 0;
  score = 0;

  themePage.classList.remove("active");
  quizPage.classList.add("active");

  showQuestion();
}

// ===== Tampilkan Soal =====
function showQuestion() {
  if (currentQuestion >= selectedQuestions.length) {
    endGame();
    return;
  }

  questionText.textContent = selectedQuestions[currentQuestion].q;
  countText.textContent = `Pertanyaan ${currentQuestion + 1} / 10`;
}

// ===== Jawaban User =====
function answer(userAnswer) {
  if (userAnswer === selectedQuestions[currentQuestion].a) score++;

  currentQuestion++;
  scoreText.textContent = `Skor: ${score}`;
  showQuestion();
}

// ===== Akhir Game =====
function endGame() {
  quizPage.classList.remove("active");

  if (score >= 8) winPage.classList.add("active");
  else losePage.classList.add("active");
}

// ===== Reset =====
function resetGame() {
  winPage.classList.remove("active");
  losePage.classList.remove("active");
  themePage.classList.add("active");
}

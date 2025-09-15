// Guardar a referência original do console.log (DECLARAÇÃO ÚNICA - REMOVIDA A SEGUNDA DECLARAÇÃO)
let originalConsoleLog = console.log;
let consoleLogOverridden = false;

// Variável para capturar a saída
let capturedOutput = "";

// Elementos da DOM
const subjectItems = document.querySelectorAll(".subject-item");
const lessonItems = document.querySelectorAll(".lesson-item");
const lessonTitle = document.getElementById("lesson-title");
const lessonContent = document.getElementById("lesson-content");
const codeEditor = document.getElementById("code-editor");
const runBtn = document.getElementById("run-btn");
const resetBtn = document.getElementById("reset-btn");
const hintBtn = document.getElementById("hint-btn");
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");
const submissionFeedback = document.getElementById("submission-feedback");
const feedbackText = document.getElementById("feedback-text");

// Controlar expansão das matérias
subjectItems.forEach((subject) => {
  subject.addEventListener("click", () => {
    const subjectId = subject.getAttribute("data-subject");
    const lessonList = document.getElementById(`${subjectId}-lessons`);

    // Fechar outros submenus abertos
    document.querySelectorAll(".lesson-sublist").forEach((list) => {
      if (list !== lessonList) {
        list.classList.remove("expanded");
      }
    });

    document.querySelectorAll(".subject-item").forEach((item) => {
      if (item !== subject) {
        item.classList.remove("expanded");
      }
    });

    // Alternar o submenu atual
    lessonList.classList.toggle("expanded");
    subject.classList.toggle("expanded");
  });
});

// Função para carregar conteúdo Markdown
async function loadMarkdownContent(markdownFile) {
  if (!markdownFile) return null;

  try {
    const response = await fetch(markdownFile);
    console.log("response", response);
    if (!response.ok) {
      throw new Error(`Erro ao carregar arquivo: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Erro ao carregar Markdown:", error);
    return null;
  }
}

// Carregar lição selecionada
async function loadLesson(lessonIndex) {
  const lesson = lessons[lessonIndex];
  lessonTitle.textContent = lesson.title;

  // Mostrar mensagem de carregamento
  lessonContent.innerHTML =
    '<p class="loading">Carregando conteúdo da lição...</p>';

  // Verificar se temos um arquivo Markdown para carregar
  let contentHTML = lesson.content;

  if (lesson.markdownFile) {
    const markdownContent = await loadMarkdownContent(lesson.markdownFile);
    if (markdownContent) {
      // Converter Markdown para HTML
      contentHTML = marked.parse(markdownContent);
    } else {
      // Fallback para conteúdo embutido se o arquivo não for encontrado
      contentHTML =
        lesson.content ||
        `<p>Conteúdo não disponível. Arquivo ${lesson.markdownFile} não encontrado.</p>`;
    }
  }

  lessonContent.innerHTML = contentHTML;
  codeEditor.value = lesson.code;
  output.textContent = "// A saída do seu código aparecerá aqui...";
  submissionFeedback.style.display = "none";

  // Atualizar a navbar
  lessonItems.forEach((item, index) => {
    if (index === parseInt(lessonIndex)) {
      item.classList.add("active");

      // Expandir a matéria pai
      const subjectId = item
        .closest(".lesson-sublist")
        .id.replace("-lessons", "");
      const subjectItem = document.querySelector(
        `.subject-item[data-subject="${subjectId}"]`
      );
      const lessonList = document.getElementById(`${subjectId}-lessons`);

      lessonList.classList.add("expanded");
      subjectItem.classList.add("expanded");
    } else {
      item.classList.remove("active");
    }
  });
}

// Event Listeners
lessonItems.forEach((item) => {
  item.addEventListener("click", () => {
    const lessonIndex = item.getAttribute("data-lesson");
    loadLesson(lessonIndex);
  });
});

runBtn.addEventListener("click", runCode);
resetBtn.addEventListener("click", () => {
  const activeLesson = document.querySelector(".lesson-item.active");
  if (activeLesson) {
    const lessonIndex = parseInt(activeLesson.getAttribute("data-lesson"));
    codeEditor.value = lessons[lessonIndex].code;
  }
  output.textContent = "// A saída do seu código aparecerá aqui...";
  submissionFeedback.style.display = "none";

  // Restaurar console.log original
  if (consoleLogOverridden) {
    console.log = originalConsoleLog;
    consoleLogOverridden = false;
  }
});
hintBtn.addEventListener("click", showHint);
submitBtn.addEventListener("click", submitCode);

// Carregar a primeira lição
loadLesson(0);

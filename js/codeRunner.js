// Enviar código para avaliação
// URL do Web App do Google Apps Script (substitua com sua URL)
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwvj-cn-euIIxMHUSvlzbwIYeE0ijOr5GEKWx9CScJVADtiQo0pNxPKFcjVXOdY6igQHQ/exec";

// Executar o código
function runCode() {
  const code = codeEditor.value;

  // Restaurar console.log original antes de executar
  if (consoleLogOverridden) {
    console.log = originalConsoleLog;
  }

  output.textContent = "";
  capturedOutput = ""; // Resetar a saída capturada

  try {
    // Capturar console.log apenas uma vez
    console.log = function () {
      originalConsoleLog.apply(console, arguments);

      // Processar todos os argumentos
      let outputText = "";
      for (let i = 0; i < arguments.length; i++) {
        if (i > 0) outputText += " ";

        // Verificar se é um objeto e converter para string formatada
        if (typeof arguments[i] === "object" && arguments[i] !== null) {
          try {
            outputText += JSON.stringify(arguments[i].message, null, 2);
          } catch (e) {
            outputText += String(arguments[i]);
          }
        } else {
          outputText += String(arguments[i]);
        }
      }

      // Adicionar tanto à exibição quanto à captura
      output.textContent += outputText + "\n";
      capturedOutput += outputText + "\n";
    };
    consoleLogOverridden = true;

    // Executar o código
    eval(code);
  } catch (error) {
    const errorText = error.toString();
    output.textContent = errorText;
    capturedOutput = errorText; // Também capturar erros
  }
}

// Mostrar dica
function showHint() {
  const activeLesson = document.querySelector(".lesson-item.active");
  if (activeLesson) {
    const lessonIndex = parseInt(activeLesson.getAttribute("data-lesson"));
    alert(lessons[lessonIndex].hint);
  } else {
    alert("Por favor, selecione uma lição primeiro.");
  }
}

// Função para enviar dados para o Google Sheets (ATUALIZADA)
function enviarParaPlanilha(codigo, saida, exercicio) {
  const formData = new FormData();
  formData.append("data_hora", new Date().toISOString());
  formData.append("exercicio", exercicio);
  formData.append("codigo", codigo);
  formData.append("saida", saida); // NOVO: Adicionar a saída capturada
  formData.append("pagina", document.title);

  return fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Sucesso:", data);
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
}

// Função modificada de envio de código (ATUALIZADA)
function submitCode() {
  const activeLesson = document.querySelector(".lesson-item.active");
  if (!activeLesson) {
    feedbackText.innerHTML = `<span class="error">❌ Por favor, selecione uma lição primeiro.</span>`;
    submissionFeedback.style.display = "block";
    return;
  }

  const lessonIndex = parseInt(activeLesson.getAttribute("data-lesson"));
  const userCode = codeEditor.value;
  const exercicio = lessonTitle.textContent;

  // Se não houver saída capturada (usuário não executou o código), executar agora
  if (!capturedOutput) {
    runCode();
  }

  // Mostrar mensagem de carregamento
  feedbackText.innerHTML = `<span class="success">⏳ Enviando código e saída, aguarde...</span>`;
  submissionFeedback.style.display = "block";

  // Enviar para o Google Sheets (código E saída)
  enviarParaPlanilha(userCode, capturedOutput, exercicio)
    .then((data) => {
      const message = data.message || data;

      // Verificar se o código está correto (após o envio bem-sucedido)
      if (userCode.includes(lessons[lessonIndex].solution)) {
        feedbackText.innerHTML = `<span class="success">✅ Parabéns! Seu código está correto e foi enviado com sucesso! ${message}</span>`;
      } else {
        feedbackText.innerHTML = `<span class="success">✅ Código e saída enviados com sucesso! ${message}</span>`;
      }
    })
    .catch((error) => {
      feedbackText.innerHTML = `<span class="error">❌ Erro ao enviar código: ${error.message}. Tente novamente.</span>`;
    });
}

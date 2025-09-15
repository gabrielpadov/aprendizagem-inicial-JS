// Dados das lições
const lessons = [
  {
    title: "Introdução ao JavaScript e Console.log",
    content: `
        <p>JavaScript é uma linguagem de programação versátil que permite criar funcionalidades interativas em páginas web e aplicações.</p>
        
        <p>O <code>console.log()</code> é uma das ferramentas mais importantes para aprendizado e debugging em JavaScript. Ele nos permite:</p>
        <ul>
            <li>Exibir mensagens e resultados no console do navegador</li>
            <li>Depurar e entender como nosso código está funcionando</li>
            <li>Testar valores e verificar o fluxo do programa</li>
            <li>Acompanhar o progresso da execução do código</li>
        </ul>

        <p>Nesta primeira lição, vamos explorar as diversas formas de usar o <code>console.log()</code> para nos auxiliar na aprendizagem de JavaScript.</p>

        <h3>Exemplos Básicos:</h3>
        <pre>// Mensagem simples
console.log("Olá, Mundo!");

// Exibindo variáveis
let nome = "Gabriel";
console.log(nome);

// Múltiplos valores
let idade = 25;
console.log("Nome:", nome, "Idade:", idade);</pre>

        <h3>Concatenação:</h3>
        <pre>// Concatenação tradicional
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");

// Calculando dentro do console.log
console.log("Daqui a 5 anos você terá " + (idade + 5) + " anos.");</pre>

        <h3>Quebras de Linha e Organização:</h3>
        <pre>// Quebras de linha com \\n
console.log("Primeira linha\\nSegunda linha\\nTerceira linha");

// Separadores para organizar a saída
console.log("=== INÍCIO DO PROGRAMA ===");
console.log("Processando dados...");
console.log("=== FIM DO PROGRAMA ===");

// Tabelas para dados estruturados
let usuarios = [
    { nome: "Ana", idade: 30, cidade: "São Paulo" },
    { nome: "Carlos", idade: 25, cidade: "Rio de Janeiro" }
];
console.table(usuarios);</pre>

        <h3>Exercício Prático:</h3>
        <p>Tente criar um programa que:</p>
        <ol>
            <li>Exiba uma mensagem de boas-vindas</li>
            <li>Use concatenação para criar uma frase com variáveis</li>
            <li>Mostre informações formatadas com estilos</li>
            <li>Use quebras de linha para organizar a saída</li>
        </ol>
    `,
    markdownFile: null,
    code: `// Escreva seu código JavaScript aqui
console.log("Olá, Mundo!");

// Exemplo de concatenação
let nome = "Estudante";
let linguagem = "JavaScript";
console.log("Olá, " + nome + "! Bem-vindo ao mundo do " + linguagem + "!");

// Exemplo com quebra de linha
console.log("Primeira linha\\nSegunda linha");

// Experimente criar suas próprias mensagens!`,
    hint: ` Use concatenação com o operador + para juntar textos e variáveis. Use \\n para quebras de linha.
    \n console.log("🚀 Bem-vindo ao JavaScript!");\n
let aluno = "Você";
let curso = "JavaScript";
console.log("Olá, " + aluno + "!\\n Você está aprendendo " + curso + "!");

console.log("=== DESAFIO COMPLETO ===");`,
    solution: `console.log("Bem-vindo ao JavaScript!");

let aluno = "Você";
let curso = "JavaScript";
console.log("Olá, " + aluno + "!\\n Você está aprendendo " + curso + "!");

console.log("=== DESAFIO COMPLETO ===");`,
  },
  //   {
  //     title: "Entrada de Dados com Prompt",
  //     content: `
  //         <p>Em JavaScript, podemos interagir com o usuário através de caixas de diálogo. Uma das funções mais úteis para isso é o <code>prompt()</code>.</p>

  //         <h3>O que é o prompt()?</h3>
  //         <p>O <code>prompt()</code> é uma função built-in do JavaScript que exibe uma caixa de diálogo para o usuário inserir dados:</p>
  //         <pre>let nome = prompt("Por favor, digite seu nome:");
  // console.log("Olá, " + nome + "!");</pre>

  //         <h3>Sintaxe Básica</h3>
  //         <pre>let variavel = prompt(mensagem, valorPadrao);</pre>
  //         <ul>
  //             <li><code>mensagem</code>: Texto que será exibido para o usuário</li>
  //             <li><code>valorPadrao</code> (opcional): Valor pré-definido no campo de entrada</li>
  //             <li>Retorna: O valor digitado pelo usuário ou <code>null</code> se cancelado</li>
  //         </ul>

  //         <!-- Continue com o restante do conteúdo em HTML -->
  //     `,
  //     markdownFile: null, // Não usar arquivo externo
  //     code: `// Exemplo de uso do prompt
  // let nome = prompt("Qual é o seu nome?");
  // if (nome) {
  //     console.log("Olá, " + nome + "!");
  // } else {
  //     console.log("Você não digitou um nome.");
  // }`,
  //     hint: "Use prompt() para receber entrada do usuário e sempre valide se não é null ou vazio.",
  //     solution: `let nome = prompt("Qual é o seu nome?");
  // if (nome && nome.trim() !== "") {
  //     console.log("Olá, " + nome.trim() + "!");
  // } else {
  //     console.log("Nome inválido ou não fornecido.");
  // }`,
  //   },
  // {
  //   title: "Variáveis e Tipos de Dados",
  //   content: `
  //                   <p>Variáveis são containers que armazenam valores. Em JavaScript, usamos <code>let</code>, <code>const</code> ou <code>var</code> para declarar variáveis.</p>
  //                   <p>JavaScript tem vários tipos de dados: números, strings, booleanos, arrays, objetos e mais.</p>
  //                   <p>Exemplo:</p>
  //                   <pre>let nome = "Gabriel";\nconst idade = 30;\nvar ehEstudante = true;</pre>
  //                   <p>Crie uma variável chamada 'mensagem' que contém o texto "JavaScript é incrível!" e exiba no console.</p>
  //               `,
  //   code: `// Crie uma variável e exiba seu conteúdo\nlet mensagem = "JavaScript é legal!";\nconsole.log(mensagem);`,
  //   hint: "Use let mensagem = 'JavaScript é incrível!'; seguido de console.log(mensagem);",
  //   solution: `let mensagem = "JavaScript é incrível!";\nconsole.log(mensagem);`,
  // },
  {
    title: "Variáveis e Tipos de Dados em JavaScript",
    content: `
        <p>Variáveis são como caixas nomeadas usadas para armazenar dados que poderão ser reutilizados, modificados ou apenas lidos durante a execução de um programa.</p>
        
        <h3>🧪 Tipos de dados em JavaScript</h3>
        <p>Os principais tipos de dados que podemos armazenar em variáveis são:</p>
        
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background-color: #f0f0f0;">
                <th style="padding: 8px;">Tipo</th>
                <th style="padding: 8px;">Exemplo</th>
                <th style="padding: 8px;">Descrição</th>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>number</code></td>
                <td style="padding: 8px;"><code>42, 3.14</code></td>
                <td style="padding: 8px;">Números inteiros ou decimais</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>string</code></td>
                <td style="padding: 8px;"><code>'Olá', "Mundo"</code></td>
                <td style="padding: 8px;">Sequência de caracteres (texto)</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>boolean</code></td>
                <td style="padding: 8px;"><code>true, false</code></td>
                <td style="padding: 8px;">Valor lógico: verdadeiro ou falso</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>object</code></td>
                <td style="padding: 8px;"><code>{ nome: 'Ana' }</code></td>
                <td style="padding: 8px;">Estrutura de dados com propriedades</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>array</code></td>
                <td style="padding: 8px;"><code>[1, 2, 3]</code></td>
                <td style="padding: 8px;">Lista ordenada de valores</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>null</code></td>
                <td style="padding: 8px;"><code>null</code></td>
                <td style="padding: 8px;">Valor nulo intencional</td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>undefined</code></td>
                <td style="padding: 8px;"><code>undefined</code></td>
                <td style="padding: 8px;">Variável declarada mas sem valor atribuído</td>
            </tr>
        </table>

        <div class="warning">
            <p>🔍 <strong>JavaScript não é fortemente tipado:</strong> uma mesma variável pode mudar de tipo durante a execução (embora isso não seja recomendado).</p>
        </div>

        <h3>✏️ Declarando variáveis</h3>
        <p>Em JavaScript, podemos declarar variáveis com as palavras-chave:</p>
        
        <ul>
            <li><code>var</code> → mais antiga, com escopo de função. <span style="color: #d32f2f;">(Evite usar)</span></li>
            <li><code>let</code> → moderna, com escopo de bloco. <span style="color: #388e3c;">(Recomendada)</span></li>
            <li><code>const</code> → valor constante (não pode ser re-atribuído). <span style="color: #388e3c;">(Recomendada)</span></li>
        </ul>

        <pre>// Exemplos de declaração:
var nomeAntigo = "Gabriel";        // Não recomendado
let idade = 30;                 // Variável que pode mudar
const PI = 3.14;                // Valor constante</pre>

        <div class="tip">
            <p>💡 <strong>Dica:</strong> Use <code>let</code> para variáveis que podem mudar e <code>const</code> para valores fixos. Evite <code>var</code>, exceto em códigos legados.</p>
        </div>

        <h3>🔄 Atualizando variáveis</h3>
        <p>Você pode atualizar o valor de uma variável declarada com <code>let</code>:</p>
        <pre>let contador = 0;
contador = 1;     // ✅ Permitido
contador = 5;     // ✅ Permitido</pre>

        <p>Mas não pode reatribuir variáveis <code>const</code>:</p>
        <pre>const PI = 3.14;
PI = 3.1415;      // ❌ Erro! Não é permitido.</pre>

        <h3>🧪 Exemplo prático completo</h3>
        <pre>// Diferentes tipos de dados
let numero = 42;                    // number
let texto = "JavaScript";           // string  
let ativo = true;                   // boolean
let pessoa = { nome: "Maria" };     // object
let lista = [1, 2, 3];              // array
let vazio = null;                   // null
let indefinido;                     // undefined

// Exibindo no console
console.log('Número:', numero);
console.log('Texto:', texto);
console.log('Ativo:', ativo);
console.log('Pessoa:', pessoa);
console.log('Lista:', lista);
console.log('Vazio:', vazio);
console.log('Indefinido:', indefinido);</pre>

        <h3>🧩 Tipagem dinâmica</h3>
        <p>JavaScript permite que variáveis mudem de tipo, mas isso não é recomendado:</p>
        <pre>let valor = 30;          // number
valor = "trinta";      // agora é string - ⚠️ possível, mas evite</pre>

        <div class="warning">
            <p>🧠 <strong>Boa prática:</strong> Não altere o tipo da variável após a declaração. Prefira manter o tipo consistente.</p>
        </div>

        <h3>🎯 Exercício Prático</h3>
        <p>Crie variáveis para armazenar diferentes tipos de dados:</p>
        <ol>
            <li>Uma string com uma mensagem motivacional</li>
            <li>Um número representando sua idade</li>
            <li>Um boolean indicando se você é estudante</li>
            <li>Exiba todas as variáveis no console</li>
        </ol>
    `,
    code: `// Crie variáveis com diferentes tipos de dados
let mensagem = "JavaScript é incrível!";
let idade = 30;
let ehEstudante = true;

// Exiba os valores no console
console.log("Mensagem:", mensagem);
console.log("Idade:", idade);
console.log("É estudante:", ehEstudante);`,
    hint: "Use let para declarar variáveis. Lembre-se: strings usam aspas, números não, booleanos são true ou false sem aspas.",
    solution: `let mensagem = "JavaScript é incrível!";
let idade = 25;
let ehEstudante = true;

console.log("Mensagem:", mensagem);
console.log("Idade:", idade);
console.log("É estudante:", ehEstudante);

// Bônus: mostrando os tipos
console.log("Tipo da mensagem:", typeof mensagem);
console.log("Tipo da idade:", typeof idade);
console.log("Tipo de ehEstudante:", typeof ehEstudante);`,
  },
  // {
  //   title: "Estruturas Condicionais",
  //   content: `
  //                   <p>As estruturas condicionais permitem que seu código tome decisões com base em condições.</p>
  //                   <p>Use <code>if</code>, <code>else if</code> e <code>else</code> para controlar o fluxo do seu programa.</p>
  //                   <p>Exemplo:</p>
  //                   <pre>let idade = 18;\nif (idade >= 18) {\n  console.log("Você é maior de idade");\n} else {\n  console.log("Você é menor de idade");\n}</pre>
  //                   <p>Crie um programa que verifica se um número é positivo, negativo ou zero.</p>
  //               `,
  //   code: `let idade = 18;\nif (idade >= 18) {\n  console.log("Você é maior de idade");\n} else {\n  console.log("Você é menor de idade");\n}`,
  //   hint: "Use if (numero > 0) para positivo, else if (numero < 0) para negativo, e else para zero.",
  //   solution: `let numero = 5;\nif (numero > 0) {\n  console.log("Positivo");\n} else if (numero < 0) {\n  console.log("Negativo");\n} else {\n  console.log("Zero");\n}`,
  // },
  {
    title: "Estruturas Condicionais em JavaScript",
    content: `
        <p>As estruturas condicionais permitem que seu código tome decisões com base em condições, executando diferentes blocos de código dependendo de situações específicas.</p>
        
        <h3>📊 Tipos de Condicionais</h3>
        
        <h3>1. if / else if / else</h3>
        <p>Usado para verificar múltiplas condições em sequência:</p>
        <pre>let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}</pre>

        <h3>2. switch / case</h3>
        <p>Ideal para quando você precisa verificar uma variável contra múltiplos valores específicos:</p>
        <pre>let diaDaSemana = 3;
let nomeDia;

switch (diaDaSemana) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

console.log("Hoje é " + nomeDia);</pre>

        <div class="warning">
            <p>⚠️ <strong>Importante:</strong> Sempre use <code>break</code> após cada <code>case</code> para evitar que o código execute os casos seguintes (fenômeno chamado "fall-through").</p>
        </div>

        <h3>3. Operador Ternário</h3>
        <p>Forma compacta para decisões simples:</p>
        <pre>let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);</pre>

        <h3>🔄 Quando usar cada estrutura</h3>
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background-color: #f0f0f0;">
                <th style="padding: 8px;">Estrutura</th>
                <th style="padding: 8px;">Quando usar</th>
                <th style="padding: 8px;">Exemplo</th>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>if/else</code></td>
                <td style="padding: 8px;">Condições complexas ou baseadas em ranges</td>
                <td style="padding: 8px;"><code>if (idade > 18 && idade < 65)</code></td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>switch/case</code></td>
                <td style="padding: 8px;">Múltiplos valores específicos para uma variável</td>
                <td style="padding: 8px;"><code>case "A": case "B": case "C":</code></td>
            </tr>
            <tr>
                <td style="padding: 8px;"><code>ternário</code></td>
                <td style="padding: 8px;">Decisões simples de uma linha</td>
                <td style="padding: 8px;"><code>condicao ? valor1 : valor2</code></td>
            </tr>
        </table>

        <h3>🧪 Exemplos Práticos</h3>

        <h3>Exemplo 1: Verificador de Notas</h3>
        <pre>let nota = 85;
let conceito;

if (nota >= 90) {
    conceito = "A";
} else if (nota >= 80) {
    conceito = "B";
} else if (nota >= 70) {
    conceito = "C";
} else if (nota >= 60) {
    conceito = "D";
} else {
    conceito = "F";
}

console.log("Conceito: " + conceito);</pre>

        <h3>Exemplo 2: Dias da Semana com Switch</h3>
        <pre>let dia = "Segunda";
let mensagem;

switch (dia) {
    case "Segunda":
        mensagem = "Início da semana! 💪";
        break;
    case "Sexta":
        mensagem = "Sextou! 🎉";
        break;
    case "Sábado":
    case "Domingo":
        mensagem = "Fim de semana! 🏖️";
        break;
    default:
        mensagem = "Dia de semana normal";
}

console.log(mensagem);</pre>

        <h3>Exemplo 3: Calculadora com Switch</h3>
        <pre>let num1 = 10;
let num2 = 5;
let operacao = "+";
let resultado;

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
        break;
    default:
        resultado = "Operação inválida";
}

console.log("Resultado: " + resultado);</pre>

        <h3>🎯 Exercícios Práticos</h3>
        
        <h3>Exercício 1: Verificador de Números</h3>
        <p>Crie um programa que verifica se um número é positivo, negativo ou zero.</p>

        <h3>Exercício 2: Sistema de Notas</h3>
        <p>Crie um programa que converte notas numéricas em conceitos (A, B, C, D, F).</p>

        <h3>Exercício 3: Dia da Semana</h3>
        <p>Crie um programa que recebe um número de 1 a 7 e retorna o nome do dia da semana.</p>
    `,
    code: `// Exercício 1: Verifique se um número é positivo, negativo ou zero
let numero = 5;

// Seu código aqui...

// Exercício 2: Converta notas para conceitos
let nota = 85;

// Seu código aqui...

// Exercício 3: Dia da semana
let diaNumero = 3;

// Seu código aqui...`,
    hint: "Use if/else para o exercício 1, if/else if/else para o exercício 2, e switch/case para o exercício 3. Lembre-se do break no switch!",
    solution: `// Exercício 1: Verificador de números
let numero = 5;

if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// Exercício 2: Sistema de notas
let nota = 85;
let conceito;

if (nota >= 90) {
    conceito = "A";
} else if (nota >= 80) {
    conceito = "B";
} else if (nota >= 70) {
    conceito = "C";
} else if (nota >= 60) {
    conceito = "D";
} else {
    conceito = "F";
}

console.log("Conceito: " + conceito);

// Exercício 3: Dia da semana
let diaNumero = 3;
let diaNome;

switch (diaNumero) {
    case 1:
        diaNome = "Domingo";
        break;
    case 2:
        diaNome = "Segunda-feira";
        break;
    case 3:
        diaNome = "Terça-feira";
        break;
    case 4:
        diaNome = "Quarta-feira";
        break;
    case 5:
        diaNome = "Quinta-feira";
        break;
    case 6:
        diaNome = "Sexta-feira";
        break;
    case 7:
        diaNome = "Sábado";
        break;
    default:
        diaNome = "Dia inválido";
}

console.log("Dia: " + diaNome);`,
  },
  // {
  //   title: "Loops e Iteração",
  //   content: `
  //                   <p>Loops permitem executar um bloco de código várias vezes.</p>
  //                   <p>JavaScript suporta vários tipos de loops: <code>for</code>, <code>while</code>, <code>do while</code>.</p>
  //                   <p>Exemplo de for loop:</p>
  //                   <pre>for (let i = 0; i < 5; i++) {\n  console.log("Número: " + i);\n}</pre>
  //                   <p>Crie um loop que exiba os números de 1 a 10 no console.</p>
  //               `,
  //   code: `// Use um loop para exibir números de 1 a 5\nfor (let i = 0; i < 5; i++) {\n  console.log("Número: " + i);\n};`,
  //   hint: "Use for (let i = 1; i <= 10; i++) { console.log(i); }",
  //   solution: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`,
  // },
  {
    title: "Loops e Iteração",
    content: `
      <p>Loops permitem executar um bloco de código várias vezes.</p>
      <p>JavaScript suporta vários tipos de loops: <code>for</code>, <code>while</code>, <code>do while</code>.</p>
      <p><b>Exemplo de for loop:</b></p>
      <pre>for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}</pre>

      <p><b>Exemplo de while loop:</b></p>
      <pre>let j = 0;
while (j < 3) {
  console.log("Contagem: " + j);
  j++;
}</pre>

      <p><b>Exemplo de do...while loop:</b></p>
      <pre>let k = 0;
do {
  console.log("Executa pelo menos uma vez, k = " + k);
  k++;
} while (k < 3);</pre>

      <p>💡 O <code>do...while</code> garante que o bloco de código será executado pelo menos uma vez, 
      mesmo que a condição seja falsa já na primeira verificação.</p>

      <p><b>Exercício 1:</b> Crie um loop que exiba os números de 1 a 10 no console.<code>for</code></p>
      <p><b>Exercício 2:</b> Crie um loop que exiba os números de 1 a 10 no console usando <code>do...while</code>.</p>
  `,
    code: `// (EXEMPLO) Use um loop para exibir números de 1 a 5
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
};\n
// Exercício 1:

// Seu código aqui...

// Exercício 2:

// Seu código aqui...
`,
    hint: "Use do { ... } while (condição);",
    solution: `
    for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}
    let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);`,
  },
  // {
  //   title: "Funções",
  //   content: `
  //                   <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica.</p>
  //                   <p>Elas ajudam a organizar o código e evitar repetição.</p>
  //                   <p>Exemplo:</p>
  //                   <pre>function cumprimentar(nome) {\n  return "Olá, " + nome + "!";\n}\n\nconsole.log(cumprimentar("Maria"));</pre>
  //                   <p>Crie uma função chamada 'dobro' que recebe um número e retorna o dobro desse número.</p>
  //               `,
  //   code: `// Crie a função dobro aqui\nfunction cumprimentar(nome) {\n  return "Olá, " + nome + "!";\n}\n\nconsole.log(cumprimentar("Maria"));`,
  //   hint: "A função deve ser: function dobro(numero) { return numero * 2; }",
  //   solution: `function dobro(numero) {\n  return numero * 2;\n}\n\nconsole.log(dobro(5));`,
  // },
  {
    title: "Funções e Escopo",
    content: `
      <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica.</p>
      <p>Elas ajudam a organizar o código e evitar repetição.</p>
      
      <p><b>Exemplo de função simples:</b></p>
      <pre>function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}

console.log(cumprimentar("Maria"));</pre>

      <p><b>Exercício:</b> Crie uma função chamada <code>dobro</code> que recebe um número e retorna o dobro desse número.</p>

      <hr />

      <h3>📌 Escopo em JavaScript</h3>
      <p>Escopo é o contexto em que uma variável está disponível para ser acessada no código. 
      Em JavaScript, o escopo determina onde e quando você pode acessar uma variável — dentro de funções, blocos ou globalmente.</p>
      <p>Em termos simples: escopo é o "alcance" da variável no seu código.</p>

      <h4>🔍 Tipos de escopo</h4>
      <ul>
        <li><b>Global:</b> a variável é acessível em qualquer parte do código</li>
        <li><b>Local (de função):</b> a variável é acessível somente dentro da função em que foi declarada</li>
        <li><b>De bloco (com <code>let</code> e <code>const</code>):</b> a variável existe apenas dentro de um bloco <code>{}</code> (como if, for, etc.)</li>
      </ul>

      <h4>🧪 Exemplo prático de escopo</h4>
      <pre>var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable);         // {1}
console.log(myFunction());       // {2}
console.log(myOtherVariable);    // {3}
console.log(myOtherFunction());  // {4}
console.log(myOtherVariable);    // {5}</pre>

      <h4>🔎 Explicação passo a passo</h4>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr><th>Linha</th><th>Saída</th><th>Explicação</th></tr>
        <tr><td>{1}</td><td>'global'</td><td><code>myVariable</code> declarada com var fora de funções é global</td></tr>
        <tr><td>{2}</td><td>'local'</td><td>dentro de <code>myFunction</code>, foi criada uma nova variável local com o mesmo nome</td></tr>
        <tr><td>{3}</td><td>'global'</td><td><code>myOtherVariable</code> foi criada globalmente (sem var)</td></tr>
        <tr><td>{4}</td><td>'local'</td><td>em <code>myOtherFunction</code>, o valor global de <code>myOtherVariable</code> foi alterado</td></tr>
        <tr><td>{5}</td><td>'local'</td><td>o valor global de <code>myOtherVariable</code> agora é 'local'</td></tr>
      </table>
  `,
    code: `// Exemplo de função simples
function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}

console.log(cumprimentar("Maria"));`,
    hint: "A função deve ser: function dobro(numero) { return numero * 2; }",
    solution: `function dobro(numero) {
  return numero * 2;
}

console.log(dobro(5));`,
  },

  // Lições de HTML & CSS
  //   {
  //     title: "Estrutura HTML",
  //     content: `
  //                     <p>HTML (HyperText Markup Language) é a linguagem de marcação usada para criar páginas web.</p>
  //                     <p>Um documento HTML básico consiste em elementos que definem a estrutura do conteúdo.</p>
  //                     <p>Exemplo:</p>
  //                     <pre>&lt;!DOCTYPE html&gt;
  // &lt;html&gt;
  // &lt;head&gt;
  //     &lt;title&gt;Título da Página&lt;/title&gt;
  // &lt;/head&gt;
  // &lt;body&gt;
  //     &lt;h1&gt;Meu Primeiro Cabeçalho&lt;/h1&gt;
  //     &lt;p&gt;Meu primeiro parágrafo.&lt;/p&gt;
  // &lt;/body&gt;
  // &lt;/html&gt;</pre>
  //                     <p>Crie a estrutura básica de uma página HTML.</p>
  //                 `,
  //     code: `// Para HTML, você precisaria de um editor diferente\nconsole.log("Esta lição é sobre HTML");`,
  //     hint: "Comece com a declaração DOCTYPE e adicione os elementos html, head e body.",
  //     solution: `console.log("Estrutura HTML básica criada");`,
  //   },
  // ... outras lições (o array continuaria com todas as 15 lições)
  {
    title: "Entrada de Dados com Prompt",
    content: `
        <p>Em JavaScript, podemos interagir com o usuário através de caixas de diálogo. Uma das funções mais úteis para isso é o <code>prompt()</code>.</p>
        
        <h3>O que é o prompt()?</h3>
        <p>O <code>prompt()</code> é uma função built-in do JavaScript que exibe uma caixa de diálogo para o usuário inserir dados:</p>
        <pre>let nome = prompt("Por favor, digite seu nome:");
console.log("Olá, " + nome + "!");</pre>
        
        <h3>Sintaxe Básica</h3>
        <pre>let variavel = prompt(mensagem, valorPadrao);</pre>
        <ul>
            <li><code>mensagem</code>: Texto que será exibido para o usuário</li>
            <li><code>valorPadrao</code> (opcional): Valor pré-definido no campo de entrada</li>
            <li>Retorna: O valor digitado pelo usuário ou <code>null</code> se cancelado</li>
        </ul>
        <br/>
        <h3>Exemplos Práticos</h3>
        <h3>Exemplo 1: Capturando um nome</h3>
        <pre>let nomeUsuario = prompt("Qual é o seu nome?");
if (nomeUsuario) {
    console.log("Bem-vindo, " + nomeUsuario + "!");
} else {
    console.log("Você não digitou um nome.");
}</pre>
        
        <h3>Exemplo 2: Calculadora simples</h3>
        <pre>let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;
switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: divisão por zero";
        break;
    default:
        resultado = "Operação inválida";
}

console.log("Resultado: " + resultado);</pre>
        
        <h3>Convertendo Tipos de Dados</h3>
        <p>O <code>prompt()</code> sempre retorna uma string. Para trabalhar com números, precisamos converter:</p>
        <pre>// Converter para número inteiro
let idade = parseInt(prompt("Digite sua idade:"));

// Converter para número decimal
let preco = parseFloat(prompt("Digite o preço:"));

// Converter para número (melhor método)
let quantidade = Number(prompt("Digite a quantidade:"));</pre>
        
        <h3>Validação Básica</h3>
        <p>Sempre valide a entrada do usuário:</p>
        <pre>let valor;
do {
    valor = prompt("Digite um número maior que 10:");
    if (valor === null) {
        console.log("Operação cancelada pelo usuário");
        break;
    }
    valor = Number(valor);
} while (isNaN(valor) || valor <= 10);

console.log("Você digitou: " + valor);</pre>
        
        <h3>Recomendações para os Próximos Exercícios</h3>
        <ol>
            <li><strong>Use prompt() para interação</strong>: Nos próximos exercícios, utilize <code>prompt()</code> para receber dados do usuário em vez de valores fixos no código.</li>
            <li><strong>Valide as entradas</strong>: Sempre verifique se o usuário digitou algo válido.</li>
            <li><strong>Converta tipos quando necessário</strong>: Lembre-se de converter strings para números quando for fazer cálculos.</li>
            <li><strong>Trate cancelamentos</strong>: Considere que o usuário pode clicar em "Cancelar" e seu código deve lidar com isso.</li>
            <li><strong>Mantenha a interface amigável</strong>: Use mensagens claras nos prompts para que o usuário saiba o que digitar.</li>
        </ol>
        <br />
        <h3>Exercício Prático</h3>
        <p>Crie um programa que:</p>
        <ol>
            <li>Peça ao usuário para digitar dois números</li>
            <li>Peça para escolher uma operação matemática</li>
            <li>Exiba o resultado da operação</li>
            <li>Trate possíveis erros (divisão por zero, entradas inválidas, etc.)</li>
        </ol>
        
        <br />
        <h3>Observações Finais</h3>
        <p>Lembre-se: o <code>prompt()</code> é uma ferramenta simples mas poderosa para criar interatividade em seus programas JavaScript!</p>
    `,
    markdownFile: null,
    code: `// Exemplo de uso do prompt
let nome = prompt("Por favor, digite seu nome:");
console.log("Olá, " + nome + "!");`,
    hint: `Use prompt() para receber entrada do usuário e sempre valide se não é null ou vazio. \n 
    O método .trim() é usado para remover espaços em branco do início e do final de uma string. Espaços em branco incluem espaços, tabs, quebras de linha e outros caracteres de whitespace.
\n
    if (nome && nome.trim() !== "") {
    console.log("Olá, " + nome.trim() + "!");
} else {
    console.log("Nome inválido ou não fornecido.");
}`,
    solution: `// Solicitar os dois números
let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");

// Converter para números
num1 = Number(num1);
num2 = Number(num2);

// Verificar se são números válidos
if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: Por favor, digite números válidos.");
} else {
    // Solicitar a operação
    let operacao = prompt("Escolha a operação (+, -, *, /):");
    
    let resultado;
    let operacaoValida = true;
    
    // Realizar a operação escolhida
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Erro: Divisão por zero não é permitida.");
                operacaoValida = false;
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            console.log("Erro: Operação inválida. Use +, -, * ou /.");
            operacaoValida = false;
    }
    
    // Exibir o resultado se a operação foi válida
    if (operacaoValida) {
        console.log("Resultado: " + num1 + operacao + num2 + " = " + resultado");
    }
}`,
  },
];

// {
//   title: "Introdução ao JavaScript",
//   content: `
//       <p>JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas web.</p>
//       <p>Nesta primeira lição, vamos aprender como exibir mensagens no console.</p>
//       <p>Use <code>console.log()</code> para exibir informações no console. Por exemplo:</p>
//       <pre>console.log("Olá, Mundo!");</pre>
//       <p>Tente criar um programa que exiba "Meu primeiro programa em JavaScript!" no console.</p>
//   `,
//   // Nova propriedade: pode ser um caminho para arquivo Markdown ou null para usar content
//   markdownFile: null,
//   code: `// Escreva seu código JavaScript aqui\nconsole.log("Olá, Mundo!");`,
//   hint: "Use console.log('Meu primeiro programa em JavaScript!') para resolver este exercício.",
//   solution: `console.log("Meu primeiro programa em JavaScript!");`
//   },
//   {
//   title: "Variáveis e Tipos de Dados",
//   content: "", // Será substituído pelo Markdown
//   markdownFile: "licoes/variaveis-tipos.md", // Exemplo de arquivo externo
//   code: `// Crie uma variável e exiba seu conteúdo\nlet mensagem = "JavaScript é legal!";\nconsole.log(mensagem);`,
//   hint: "Use let mensagem = 'JavaScript é incrível!'; seguido de console.log(mensagem);",
//   solution: `let mensagem = "JavaScript é incrível!";\nconsole.log(mensagem);`
// }

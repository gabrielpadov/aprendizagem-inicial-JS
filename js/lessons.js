// Dados das lições
const lessons = [
  {
    title: "Introdução ao JavaScript",
    content: `
                    <p>JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas web.</p>
                    <p>Nesta primeira lição, vamos aprender como exibir mensagens no console.</p>
                    <p>Use <code>console.log()</code> para exibir informações no console. Por exemplo:</p>
                    <pre>console.log("Olá, Mundo!");</pre>
                    <p>Tente criar um programa que exiba "Meu primeiro programa em JavaScript!" no console.</p>
                `,
    code: `// Escreva seu código JavaScript aqui\nconsole.log("Olá, Mundo!");`,
    hint: "Use console.log('Meu primeiro programa em JavaScript!') para resolver este exercício.",
    solution: `console.log("Meu primeiro programa em JavaScript!");`,
  },
  {
    title: "Variáveis e Tipos de Dados",
    content: `
                    <p>Variáveis são containers que armazenam valores. Em JavaScript, usamos <code>let</code>, <code>const</code> ou <code>var</code> para declarar variáveis.</p>
                    <p>JavaScript tem vários tipos de dados: números, strings, booleanos, arrays, objetos e mais.</p>
                    <p>Exemplo:</p>
                    <pre>let nome = "João";\nconst idade = 30;\nvar ehEstudante = true;</pre>
                    <p>Crie uma variável chamada 'mensagem' que contém o texto "JavaScript é incrível!" e exiba no console.</p>
                `,
    code: `// Crie uma variável e exiba seu conteúdo\nlet mensagem = "JavaScript é legal!";\nconsole.log(mensagem);`,
    hint: "Use let mensagem = 'JavaScript é incrível!'; seguido de console.log(mensagem);",
    solution: `let mensagem = "JavaScript é incrível!";\nconsole.log(mensagem);`,
  },
  {
    title: "Estruturas Condicionais",
    content: `
                    <p>As estruturas condicionais permitem que seu código tome decisões com base em condições.</p>
                    <p>Use <code>if</code>, <code>else if</code> e <code>else</code> para controlar o fluxo do seu programa.</p>
                    <p>Exemplo:</p>
                    <pre>let idade = 18;\nif (idade >= 18) {\n  console.log("Você é maior de idade");\n} else {\n  console.log("Você é menor de idade");\n}</pre>
                    <p>Crie um programa que verifica se um número é positivo, negativo ou zero.</p>
                `,
    code: `let numero = 5;\n\n// Verifique se o número é positivo, negativo ou zero\nif (numero > 0) {\n  console.log("Positivo");\n} else if (numero < 0) {\n  console.log("Negativo");\n} else {\n  console.log("Zero");\n}`,
    hint: "Use if (numero > 0) para positivo, else if (numero < 0) para negativo, e else para zero.",
    solution: `let numero = 5;\nif (numero > 0) {\n  console.log("Positivo");\n} else if (numero < 0) {\n  console.log("Negativo");\n} else {\n  console.log("Zero");\n}`,
  },
  {
    title: "Loops e Iteração",
    content: `
                    <p>Loops permitem executar um bloco de código várias vezes.</p>
                    <p>JavaScript suporta vários tipos de loops: <code>for</code>, <code>while</code>, <code>do while</code>.</p>
                    <p>Exemplo de for loop:</p>
                    <pre>for (let i = 0; i < 5; i++) {\n  console.log("Número: " + i);\n}</pre>
                    <p>Crie um loop que exiba os números de 1 a 10 no console.</p>
                `,
    code: `// Use um loop para exibir números de 1 a 10\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`,
    hint: "Use for (let i = 1; i <= 10; i++) { console.log(i); }",
    solution: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`,
  },
  {
    title: "Funções",
    content: `
                    <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica.</p>
                    <p>Elas ajudam a organizar o código e evitar repetição.</p>
                    <p>Exemplo:</p>
                    <pre>function cumprimentar(nome) {\n  return "Olá, " + nome + "!";\n}\n\nconsole.log(cumprimentar("Maria"));</pre>
                    <p>Crie uma função chamada 'dobro' que recebe um número e retorna o dobro desse número.</p>
                `,
    code: `// Crie a função dobro aqui\nfunction dobro(numero) {\n  return numero * 2;\n}\n\n// Teste a função\nconsole.log(dobro(5)); // Deve exibir 10`,
    hint: "A função deve ser: function dobro(numero) { return numero * 2; }",
    solution: `function dobro(numero) {\n  return numero * 2;\n}\n\nconsole.log(dobro(5));`,
  },
  // Lições de HTML & CSS
  {
    title: "Estrutura HTML",
    content: `
                    <p>HTML (HyperText Markup Language) é a linguagem de marcação usada para criar páginas web.</p>
                    <p>Um documento HTML básico consiste em elementos que definem a estrutura do conteúdo.</p>
                    <p>Exemplo:</p>
                    <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Título da Página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Meu Primeiro Cabeçalho&lt;/h1&gt;
    &lt;p&gt;Meu primeiro parágrafo.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                    <p>Crie a estrutura básica de uma página HTML.</p>
                `,
    code: `// Para HTML, você precisaria de um editor diferente\nconsole.log("Esta lição é sobre HTML");`,
    hint: "Comece com a declaração DOCTYPE e adicione os elementos html, head e body.",
    solution: `console.log("Estrutura HTML básica criada");`,
  },
  // ... outras lições (o array continuaria com todas as 15 lições)
];

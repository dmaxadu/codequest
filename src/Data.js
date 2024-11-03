export const concepts = [
    { 
        id: 1, 
        title: "Variáveis", 
        description: "Variáveis armazenam valores que podem ser usados no programa.", 
        challenge: "Crie uma variável chamada 'idade' com o valor 25.", 
        solution: "idade = 25" },
    { 
        id: 2, 
        title: "Tipos de Dados", 
        description: "Tipos de dados indicam a natureza dos valores, como inteiros, strings, etc.", 
        challenge: "Crie uma variável mensagem com um valor string 'Olá, mundo!'", 
        solution: "mensagem = 'Olá, mundo!'" },
    { 
        id: 3, 
        title: "Operadores Aritméticos", 
        description: "Operadores como +, -, * e / realizam operações matemáticas.", 
        challenge: "Calcule a soma de 10 e 5 e atribua à variável resultado.", 
        solution: "resultado = 10 + 5" },
    { 
        id: 4, 
        title: "Input do Usuário", 
        description: "A função input permite receber dados do usuário.", 
        challenge: "Peça ao usuário que insira seu nome e armazene em uma variável chamada nome.", 
        solution: "nome = input('Digite seu nome: ')" },
    { 
        id: 5, 
        title: "Condicionais", 
        description: "Condicionais permitem executar código baseado em condições.", 
        challenge: "Verifique se a variável 'idade' é maior que 18.", 
        solution: "if idade > 18:" },
    { 
        id: 6, 
        title: "Loops For", 
        description: "Loops for repetem código um número determinado de vezes.", 
        challenge: "Use um loop for para imprimir os números de 1 a 5.", 
        solution: "for i in range(1, 6): print(i)" },
    { 
        id: 7, 
        title: "Loops While", 
        description: "Loops while repetem código enquanto uma condição for verdadeira.", 
        challenge: "Use um loop while para contar de 1 a 3.", 
        solution: "contador = 1 while contador <= 3: print(contador) contador += 1" },
    { 
        id: 8, 
        title: "Funções", 
        description: "Funções encapsulam blocos de código para reutilização.", 
        challenge: "Crie uma função que retorne 'Hello, World!'", 
        solution: "def saudacao(): return 'Hello, World!'" },
    { 
        id: 9, 
        title: "Parâmetros de Função", 
        description: "Parâmetros permitem que uma função receba dados externos.", 
        challenge: "Crie uma função que receba um número e retorne seu dobro.", 
        solution: "def dobro(x): return x * 2" },
    { 
        id: 10, 
        title: "Listas", 
        description: "Listas são coleções ordenadas de itens.", 
        challenge: "Crie uma lista 'numeros' com os números 1, 2 e 3.", 
        solution: "numeros = [1, 2, 3]" },
    { 
        id: 11, 
        title: "Métodos de Lista", 
        description: "Métodos como append adicionam itens à lista.", 
        challenge: "Adicione o número 4 ao final da lista [1, 2, 3].", 
        solution: "numeros.append(4)" },
    { 
        id: 12, 
        title: "Dicionários", 
        description: "Dicionários armazenam dados em pares de chave-valor.", 
        challenge: "Crie um dicionário com a chave 'nome' e valor 'Ana'.", 
        solution: "pessoa = {'nome': 'Ana'}" },
    { 
        id: 13, 
        title: "Métodos de String", 
        description: "Métodos de string manipulam textos.", 
        challenge: "Transforme a string 'python' em maiúsculas.", 
        solution: "'python'.upper()" },
    { 
        id: 14, 
        title: "Operadores Lógicos", 
        description: "Operadores lógicos como and, or combinam condições.", 
        challenge: "Escreva uma condição que verifica se 'idade' é maior que 18 e menor que 30.", 
        solution: "if (18 < idade < 30):" },
    { 
        id: 15, 
        title: "Operador de Igualdade", 
        description: "O operador == verifica se dois valores são iguais.", 
        challenge: "Verifique se duas variáveis são iguais.", 
        solution: "if x == y:" },
    { 
        id: 16, 
        title: "Comentários", 
        description: "Comentários explicam o código sem afetar sua execução.", 
        challenge: "Escreva um comentário dizendo 'Isto é um comentário'.", 
        solution: "# Isto é um comentário" },
    { 
        id: 17, 
        title: "Função Print", 
        description: "A função print exibe informações na tela.", 
        challenge: "Imprima 'Olá, Mundo!'.", 
        solution: "print('Olá, Mundo!')" },
    { 
        id: 18, 
        title: "Conversão de Tipo", 
        description: "Conversão de tipo permite alterar o tipo de uma variável.", 
        challenge: "Converta o número 5 para string.", 
        solution: "str(5)" },
    { 
        id: 19, 
        title: "Length", 
        description: "A função len() retorna o tamanho de uma lista, string, etc.", 
        challenge: "Encontre o comprimento da string 'Python'.", 
        solution: "len('Python')" },
    { 
        id: 20, title: "Funções Lambda", 
        description: "Funções lambda são funções anônimas de uma linha.", 
        challenge: "Crie uma função lambda que retorne o quadrado de um número.", 
        solution: "quadrado = lambda x: x ** 2" }
    // Adicione outros conceitos aqui.
];

export const randomizeConcepts = () => {
    return concepts.sort(() => Math.random() - 0.5);
};
export const concepts = {
    "challenges": [
        {
            "id": 0,
            "pergunta": "Declare uma variável chamada 'numero' que recebe o valor de um inteiro 10.",
            "resposta": "int numero = 10;",
            "explain": "Declarar variáveis consiste em atribuir um tipo e um valor inicial."
        },
        {
            "id": 1,
            "pergunta": "Como exibir a mensagem 'Olá, Mundo!' na tela?",
            "resposta": "print('Olá, Mundo!');",
            "explain": "Para exibir algo no console, usa-se o comando de saída padrão do idioma."
        },
        {
            "id": 2,
            "pergunta": "Qual o comando para ler uma entrada do usuário e armazenar em uma variável 'nome'?",
            "resposta": "nome = input();",
            "explain": "A função input captura a entrada do usuário em forma de string."
        },
        {
            "id": 3,
            "pergunta": "Como definir uma função que recebe dois números e retorna sua soma?",
            "resposta": "def soma(a, b): return a + b",
            "explain": "Funções encapsulam lógica e podem ter parâmetros e valores de retorno."
        },
        {
            "id": 4,
            "pergunta": "Qual comando adiciona um elemento ao final de uma lista chamada 'numeros'?",
            "resposta": "numeros.append(5);",
            "explain": "A função append insere elementos ao final de uma lista."
        },
        {
            "id": 5,
            "pergunta": "Como verificar se uma variável 'x' é maior que 10?",
            "resposta": "if x > 10:",
            "explain": "Condições são verificadas com operadores relacionais como >, <, ==."
        },
        {
            "id": 6,
            "pergunta": "Como criar um loop que imprime números de 1 a 5?",
            "resposta": "for i in range(1, 6): print(i)",
            "explain": "Loops iteram sobre sequências ou intervalos gerados com range."
        },
        {
            "id": 7,
            "pergunta": "Como verificar se um elemento '5' está na lista 'numeros'?",
            "resposta": "if 5 in numeros:",
            "explain": "O operador 'in' verifica a existência de um elemento em coleções."
        },
        {
            "id": 8,
            "pergunta": "Qual o comando para calcular o resto da divisão de 10 por 3?",
            "resposta": "10 % 3",
            "explain": "O operador % retorna o restante da divisão inteira entre dois números."
        },
        {
            "id": 9,
            "pergunta": "Como definir uma variável 'nome' do tipo string com o valor 'João'?",
            "resposta": "nome = 'João'",
            "explain": "Variáveis podem armazenar strings, declaradas entre aspas simples ou duplas."
        },
        {
            "id": 10,
            "pergunta": "Como fazer um comentário de uma linha em Python?",
            "resposta": "#texto",
            "explain": "Comentários são iniciados com # para documentar o código."
        },
        {
            "id": 11,
            "pergunta": "Como inicializar uma lista vazia chamada 'dados'?",
            "resposta": "dados = []",
            "explain": "Listas são coleções mutáveis criadas com colchetes vazios ou valores."
        },
        {
            "id": 12,
            "pergunta": "Qual comando retorna o comprimento de uma lista 'dados'?",
            "resposta": "len(dados)",
            "explain": "A função len retorna o número de elementos em listas, strings ou outras coleções."
        },
        {
            "id": 13,
            "pergunta": "Como criar um dicionário vazio chamado 'registro'?",
            "resposta": "registro = {}",
            "explain": "Dicionários são criados com chaves ({}) e armazenam pares chave-valor."
        },
        {
            "id": 14,
            "pergunta": "Como definir uma constante PI com valor 3.14 em Python?",
            "resposta": "PI = 3.14",
            "explain": "Por convenção, constantes são declaradas em maiúsculas, embora sejam mutáveis."
        },
        {
            "id": 15,
            "pergunta": "Como converter uma string '123' em um inteiro?",
            "resposta": "int('123')",
            "explain": "A função int converte strings numéricas para inteiros, se forem válidas."
        },
        {
            "id": 16,
            "pergunta": "Como verificar se uma lista 'valores' está vazia?",
            "resposta": "if not valores:",
            "explain": "O operador 'not' verifica se a coleção é vazia, retornando True."
        },
        {
            "id": 17,
            "pergunta": "Como inverter a string 'palavra'?",
            "resposta": "palavra[::-1]",
            "explain": "A sintaxe [::-1] cria uma cópia invertida da sequência."
        },
        {
            "id": 18,
            "pergunta": "Como remover o último elemento de uma lista 'itens'?",
            "resposta": "itens.pop()",
            "explain": "O método pop remove e retorna o último elemento de uma lista."
        },
        {
            "id": 19,
            "pergunta": "Como ordenar uma lista 'numeros' em ordem crescente?",
            "resposta": "numeros.sort()",
            "explain": "O método sort ordena listas diretamente, sem criar novas listas."
        },
        {
            "id": 20,
            "pergunta": "Como verificar se uma chave 'id' existe em um dicionário 'dados'?",
            "resposta": "if 'id' in dados:",
            "explain": "O operador 'in' verifica a existência de chaves em dicionários."
        },
        {
            "id": 21,
            "pergunta": "Como acessar o terceiro elemento de uma lista 'itens'?",
            "resposta": "itens[2]",
            "explain": "Listas são indexadas a partir de 0, então o terceiro elemento está no índice 2."
        },
        {
            "id": 22,
            "pergunta": "Como substituir todos os espaços em uma string 'texto' por traços?",
            "resposta": "texto.replace(' ', '-')",
            "explain": "A função replace substitui ocorrências de um caractere ou sequência por outro."
        },
        {
            "id": 23,
            "pergunta": "Como gerar um número aleatório entre 1 e 10?",
            "resposta": "random.randint(1, 10)",
            "explain": "A biblioteca random fornece funções para geração de números aleatórios."
        },
        {
            "id": 24,
            "pergunta": "Como importar a biblioteca de tempo em Python?",
            "resposta": "import time",
            "explain": "A palavra-chave import é usada para incluir bibliotecas em um programa."
        },
        {
            "id": 25,
            "pergunta": "Como declarar uma função chamada 'saudacao' sem parâmetros?",
            "resposta": "def saudacao(): pass",
            "explain": "Funções podem ser definidas sem parâmetros, usando pass para lógica vazia."
        },
        {
            "id": 26,
            "pergunta": "Como declarar uma lista com os números 1, 2 e 3?",
            "resposta": "[1, 2, 3]",
            "explain": "Listas podem ser inicializadas diretamente com valores dentro de colchetes."
        },
        {
            "id": 27,
            "pergunta": "Como verificar o tipo de uma variável 'x'?",
            "resposta": "type(x)",
            "explain": "A função type retorna o tipo do objeto passado como argumento."
        },
        {
            "id": 28,
            "pergunta": "Como remover a chave 'nome' de um dicionário 'registro'?",
            "resposta": "registro.pop('nome')",
            "explain": "O método pop remove um item de um dicionário com base na chave especificada."
        },
        {
            "id": 29,
            "pergunta": "Como criar uma tupla com os valores 1, 2 e 3?",
            "resposta": "(1, 2, 3)",
            "explain": "Tuplas são imutáveis e podem ser criadas com valores entre parênteses."
        },
        {
            "id": 30,
            "pergunta": "Como verificar se uma string 'texto' começa com a letra 'A'?",
            "resposta": "texto.startswith('A')",
            "explain": "O método startswith verifica se uma string começa com um determinado valor."
        },
        {
            "id": 31,
            "pergunta": "Como abrir um arquivo 'dados.txt' para leitura?",
            "resposta": "open('dados.txt', 'r')",
            "explain": "A função open abre um arquivo. O modo 'r' significa leitura."
        },
        {
            "id": 32,
            "pergunta": "Como fazer uma divisão que sempre retorne um número inteiro?",
            "resposta": "a // b",
            "explain": "O operador // realiza divisões inteiras, descartando a parte decimal."
        },
        {
            "id": 33,
            "pergunta": "Como definir uma função que não retorna nada?",
            "resposta": "def funcao(): return None",
            "explain": "Funções podem retornar None explicitamente para indicar ausência de valor."
        },
        {
            "id": 34,
            "pergunta": "Como transformar uma lista 'numeros' em um conjunto?",
            "resposta": "set(numeros)",
            "explain": "A função set converte listas para conjuntos, eliminando duplicados."
        },
        {
            "id": 35,
            "pergunta": "Como verificar se 'Python' está em uma lista 'linguagens'?",
            "resposta": "'Python' in linguagens",
            "explain": "O operador 'in' verifica a presença de um item em coleções como listas."
        },
        {
            "id": 36,
            "pergunta": "Como adicionar o valor '20' ao início de uma lista 'idades'?",
            "resposta": "idades.insert(0, 20)",
            "explain": "O método insert adiciona elementos em qualquer posição da lista."
        },
        {
            "id": 37,
            "pergunta": "Como obter a posição do valor '10' em uma lista 'valores'?",
            "resposta": "valores.index(10)",
            "explain": "O método index retorna a primeira posição de um elemento na lista."
        },
        {
            "id": 38,
            "pergunta": "Como verificar se todos os elementos de uma lista 'valores' são maiores que 5?",
            "resposta": "all(v > 5 for v in valores)",
            "explain": "A função all retorna True se todos os elementos da expressão forem verdadeiros."
        },
        {
            "id": 39,
            "pergunta": "Como somar todos os elementos de uma lista 'numeros'?",
            "resposta": "sum(numeros)",
            "explain": "A função sum retorna a soma de todos os elementos iteráveis, como listas."
        },
        {
            "id": 40,
            "pergunta": "Como verificar se duas variáveis 'a' e 'b' são iguais?",
            "resposta": "a == b",
            "explain": "O operador == compara valores para verificar igualdade."
        },
        {
            "id": 41,
            "pergunta": "Como contar o número de ocorrências do valor '5' em uma lista 'valores'?",
            "resposta": "valores.count(5)",
            "explain": "O método count conta quantas vezes um valor aparece na lista."
        },
        {
            "id": 42,
            "pergunta": "Como converter a lista [1, 2, 3] em uma string '1,2,3'?",
            "resposta": "','.join(map(str, [1, 2, 3]))",
            "explain": "O método join concatena elementos de uma lista em uma string, após mapeá-los para texto."
        },
        {
            "id": 43,
            "pergunta": "Como transformar uma string em uma lista de caracteres?",
            "resposta": "list('texto')",
            "explain": "A função list converte uma string em uma lista de caracteres individuais."
        },
        {
            "id": 44,
            "pergunta": "Como criar um loop infinito?",
            "resposta": "while True: pass",
            "explain": "Um loop infinito ocorre quando a condição do while é sempre verdadeira."
        },
        {
            "id": 45,
            "pergunta": "Como acessar o último elemento de uma lista 'dados'?",
            "resposta": "dados[-1]",
            "explain": "Usar índice negativo acessa elementos a partir do final de uma lista."
        },
        {
            "id": 46,
            "pergunta": "Como inicializar um set vazio chamado 'conjunto'?",
            "resposta": "conjunto = set()",
            "explain": "Conjuntos vazios são criados com a função set(), pois {} cria dicionários."
        },
        {
            "id": 47,
            "pergunta": "Como obter apenas os elementos únicos de uma lista 'itens'?",
            "resposta": "set(itens)",
            "explain": "A função set remove duplicatas, retornando apenas valores únicos."
        },
        {
            "id": 48,
            "pergunta": "Como arredondar o número 3.567 para duas casas decimais?",
            "resposta": "round(3.567, 2)",
            "explain": "A função round arredonda números para a precisão desejada."
        }
    ]
};
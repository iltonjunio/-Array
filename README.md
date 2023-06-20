# -Array

Uma função a ser executada para cada elemento na matriz. Seu valor de retorno é adicionado como um único elemento na nova matriz. A função é chamada com os seguintes argumentos:

element
O elemento atual sendo processado na matriz.

index
O índice do elemento atual que está sendo processado na matriz.

array
A matriz map()foi chamada.

thisArg Opcional
Um valor a ser usado como thisao executar callbackFn.
Descrição
O map()método é um método iterativo . Ele chama uma callbackFnfunção fornecida uma vez para cada elemento em uma matriz e constrói uma nova matriz a partir dos resultados.

callbackFné invocado apenas para índices de matriz que possuem valores atribuídos. Ele não é invocado para slots vazios em matrizes esparsas .

O map()método é um método de cópia . Não altera this. No entanto, a função fornecida como callbackFnpode alterar a matriz. Observe, no entanto, que o comprimento da matriz é salvo antes da primeira chamada de callbackFn. Portanto:

callbackFnnão visitará nenhum elemento adicionado além do comprimento inicial da matriz quando a chamada for map()iniciada.
Alterações em índices já visitados não fazem com callbackFnque sejam invocados novamente.
Se um elemento existente ainda não visitado da matriz for alterado por callbackFn, seu valor passado para o callbackFnserá o valor no momento em que esse elemento for visitado. Elementos excluídos não são visitados.
O map()método é genérico . Ele espera apenas que o thisvalor tenha uma lengthpropriedade e propriedades de chave inteira.

Como mapconstrói um novo array, chamá-lo sem usar o array retornado é um antipadrão; use forEachou for...ofem vez disso.
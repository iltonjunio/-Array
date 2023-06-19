// let nomes = ["lucas, pedro, bruno, carlos, ilton, junior, william, maria, luana, beicha, Pereira, osvaldo, vanilda, joana, gomes "]

// nomes.push("Luisa", "Ricardo", "Sofia");
// nomes.splice(2, 0, "Gabriel")
// nomes.splice(6, 0, "Marina")
// nomes.splice(7, 0, "Daniel")
// nomes.sort().reverse()
// nomes.pop()
// nomes.shift()
// nomes.splice(5, 1)
// nomes.sort()

// for (let i = 0; i < nomes.length; i++) {
//     console.log(`Aluno: ${nomes[i]}, Posição: ${i}`)
// }
// console.log(nomes)

// let posicao = 0
// for (const nome of nomes) {
//     console.log(`Aluno: ${nomes}, Posição: ${posicao}`)
//     posicao++
// }

// let notas = []
// for (let i = 0; i < nomes.length; i++) {
//     notas.push(Math.floor(Math.random() * 10) + 1)
// }

// notas = notas.map(nota => nota + 1.0)
// let notasMaioresQueSete = notas.filter(nota => nota > 7)
// console.log('Notas maiores que 7:', notasMaioresQueSete)


//=====================================================

// 1. Crie um array que armazene os nomes de 15 alunos.
let alunos = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro', 'Mariana', 'Lucas', 'Julia', 'Felipe', 'Fernanda', 'Gabriel', 'Laura', 'Rafael', 'Patrícia', 'Marcelo']

// 2. Adicione 3 alunos ao final do array.
alunos.push('Luisa', 'Rodrigo', 'Amanda')

// 3. Adicione 1 aluno na posição 2, 1 aluno na posição 6 e 1 aluno na posição 7.
alunos.splice(2, 0, 'Ricardo')
alunos.splice(6, 0, 'Camila')
alunos.splice(7, 0, 'Guilherme')

// 4. Ordene o array de modo descescente.
alunos.sort().reverse()

// 5. Remova o último aluno.
alunos.pop()

// 6. Remova o primeiro aluno.
alunos.shift()

// 7. Remova o aluno da posição 5.
alunos.splice(4, 1)

// 8. Ordene o array em modo crescente.
alunos.sort()

// 9. Utilize o Loop...OF para percorrer o array e exibir os nomes e a posição dos alunos.
let posicao1 = 0
for (const aluno of alunos) {
    console.log(`Aluno: ${aluno}, Posição: ${posicao1}`)
    posicao1++
}
// 10. Inicialize um array vazio.
let notas1 = []

// 11. Utilize o Loop FOR tradicional para adicionar as notas dos alunos neste novo array.
for (let i = 0; i < alunos.length; i++) {
  notas1.push(Math.floor(Math.random() * 10) + 1)
}

// 12. Utilize o método map para adicionar 1.0 ponto à nota de cada aluno.
notas1 = notas1.map(nota => nota + 1.0)

// 13. Utilize o método filter para exibir apenas as notas maiores do que 7.
let notasMaioresQueSete1 = notas1.filter(nota => nota > 7)
console.log('Notas maiores que 7:', notasMaioresQueSete1)

//14 utilize o loop for  tradicional para percorrer os dois array nome e notas e mostre o nome e nota de cada  aluno.

nomes6 = ["João", "Maria", "Carlos"]
notas6 = [8.5, 9.0, 7.5]

for (i = 0; i < nomes6.length; i++) {
    nomeAluno = nomes6[i]
    notaAluno = notas6[i].toFixed(1)
    console.log("Aluno: " + nomeAluno + " - Nota: " + notaAluno)
}


//15 utilie o metodo forerach para percorrer o array de notas e mostrar se cada aluno está aprovado (nota >= 7.0) ou reprovado.

nomes1 = ["João", "Maria", "Carlos"]
notas2 = [8.5, 9.0, 6.5]

nomes1.forEach(function(nome, index) {
    nota = notas2[index]
    situacao = nota >= 7.0 ? "Aprovado" : "Reprovado"
    
    console.log(nome + " - Nota: " + nota.toFixed(1) + " - " + situacao)
})

//16 utilize um metodo index of() para retorna o índice do  elemento "lucas" no array de nomes.

const nomes = ['ana', 'lucas', 'maria', 'lucas', 'pedro']

const indice = nomes.indexOf('lucas')

console.log(indice); // Saída: 1

//17 utilize o método findindex() para localizaar no array notas o índice  da 1º nota acima de 9.0.

const notas3 = [7.5, 8.0, 9.5, 9.0, 9.8, 8.5]

const indice1 = notas3.findIndex(nota => nota > 9.0)

console.log(indice); // Saída: 2

//18 utilize o metodo includes para verificar se o aluno "lucas" esta na lista.

const alunos2 = ['ana', 'maria', 'lucas', 'pedro']

const estaNaLista = alunos2.includes('lucas')

console.log(estaNaLista); // Saída: true

//19 utilize o metodo reduce () para caulcular a media das notas

const notas4 = [7.5, 8.0, 9.5, 9.0, 9.8, 8.5]

const soma = notas4.reduce((acumulador, nota) => acumulador + nota, 0)
const media3 = soma / notas4.length

console.log(media3); // Saída: 8.583333333333334

//20 utilize os métodos every () para verificar se todas as notas são maiores ao iguais á média.

const notas5 = [7.5, 8.0, 9.5, 9.0, 9.8, 8.5]
const media2 = 8.583333333333334;

const todasMaioresOuIguais = notas5.every(nota => nota >= media2)

console.log(todasMaioresOuIguais); // Saída: false

//21 utilize o metodo soma() para veficar se ha notas superiores a média.

const notas = [7.5, 8.0, 9.5, 9.0, 9.8, 8.5];
const media = 8.583333333333334;

const haNotasSuperiores = notas.some(nota => nota > media);

console.log(haNotasSuperiores); // Saída: true
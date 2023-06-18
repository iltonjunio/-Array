let nomes = ["lucas, pedro, bruno, carlos, ilton, junior, william, maria, luana, beicha, Pereira, osvaldo, vanilda, joana, gomes "]

nomes.push("Luisa", "Ricardo", "Sofia");
nomes.splice(2, 0, "Gabriel")
nomes.splice(6, 0, "Marina")
nomes.splice(7, 0, "Daniel")
nomes.sort().reverse()
nomes.pop()
nomes.shift()
nomes.splice(5, 1)
nomes.sort()
for (let i = 0; i < nomes.length; i++) {
    console.log(`Aluno: ${nomes[i]}, Posição: ${i}`)
}
console.log(nomes)


let posicao = 0
for (const nomes of alunos) {
    console.log(`Aluno: ${nomes}, Posição: ${posicao}`)
    posicao++
}

let notas = []
for (let i = 0; i < nomes.length; i++) {
    notas.push(Math.floor(Math.random() * 10) + 1)
}

notas = notas.map(nota => nota + 1.0)
let notasMaioresQueSete = notas.filter(nota => nota > 7)
console.log('Notas maiores que 7:', notasMaioresQueSete)




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
let notas1 = [];

// 11. Utilize o Loop FOR tradicional para adicionar as notas dos alunos neste novo array.
for (let i = 0; i < alunos.length; i++) {
  notas1.push(Math.floor(Math.random() * 10) + 1);
}

// 12. Utilize o método map para adicionar 1.0 ponto à nota de cada aluno.
notas = notas.map(nota => nota + 1.0);

// 13. Utilize o método filter para exibir apenas as notas maiores do que 7.
let notasMaioresQueSete1 = notas.filter(nota => nota > 7);
console.log('Notas maiores que 7:', notasMaioresQueSete1);
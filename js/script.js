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

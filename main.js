const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const bntTry = document.querySelector('#btnTry')

const phrases = [
'A solidão é a sorte de todos os espíritos excepcionais.',
'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
'Três amores... Quem me deu Tão estranha sorte assim? Três amores, tenho-os eu E nenhum me tem a mim!',
'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
'A perseverança é a mãe da boa sorte.',
'O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo indefinidamente. Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem.',
'Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.',
'Sorte é estar pronto quando a oportunidade vem.',
'A sorte favorece a mente bem preparada.',
'Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.',
'A sorte ajuda os audazes.',
'A sorte do egoísta é viver sem preocupações; o seu castigo é morrer sem afetos.',
'Julgo poder ser verdadeiro o fato de a sorte ser árbitro de metade das nossas ações, mas que, mesmo assim, ela permite-nos governar a outra metade ou parte dela.',
'A vida trará coisas boas se tiver paciência.',
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',    
'A maior de todas as torres começa no solo.',
'Não há que ser forte. Há que ser flexível.',
'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
'Há três coisas que jamais voltam, a flecha lançada, a palavra dita e a oportunidade perdida.',
'A juventude não é uma época da vida, é um estado de espírito.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
'Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
'Siga os bons e aprenda com eles.',
'Não importa o tamanho da montanha, ela não pode tapar o sol.',
'O bom-senso vale mais do que muito conhecimento.',
'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
'São os nossos amigos que nos ensinam as mais valiosas lições.',
'Aquele que se importa com o sentimento dos outros, não é um tolo.',
'A adversidade é um espelho que reflete o verdadeiro eu.',
'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
'Uma bela flor é incompleta sem as suas folhas.',
'Sem o fogo do entusiasmo, não há o calor da vitória.',
'O riso é a menor distância entre duas pessoas.',
'Os defeitos são mais fortes quando o amor é fraco.',
'Amizade e Amor são coisas que se unem num piscar de olhos.',
'Surpreender e ser surpreendido é o segredo do amor.',
'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
'A paciência na adversidade é sinal de um coração sensível.',
'A sorte favorece a mente bem preparada.',
'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
'Quem olha para fora sonha, quem olha para dentro acorda.',
];

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]

}

function buttonTry(event){
    event.preventDefault()
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}
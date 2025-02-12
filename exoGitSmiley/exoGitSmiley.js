const gitSmiley = [
    {
        command: 'Git Add',
        smiley: '➕',
        meanings: 'Ajoute au prochain commit'
    },
    {
        command: 'Git Commit',
        smiley: '✍️',
        meanings: 'Ajoute un commentaire explicite au fichier que tu vas push'
    },
    {
        command: 'Git Push',
        smiley: '😎',
        meanings: 'Ajoute le fichier commit à ton repo en remote'
    },
    {
        command: 'Git Log',
        smiley: '🤯',
        meanings: 'affiche les derniers commit avec commentaires'
    },
    {
        command: 'Git Remote',
        smiley: '😶‍🌫️',
        meanings: 'Permet de relier ton ordi à ton dossier à distance'
    },
    {
        command: 'Git Branch',
        smiley: '🌳',
        meanings: 'Permet de savoir sur quelle branche tu te trouves'
    },
    {
        command: 'Git Init',
        smiley: '😁',
        meanings: 'Permet de rendre un fichier "gitable"'
    },
    {
        command: 'Git Reset',
        smiley: '🙄',
        meanings: 'Permet de revenir à un état précédent en supprimant les modifications non commitées'
    },
    {
        command: 'Git Revert',
        smiley: '😤',
        meanings: 'permet de créer un nouveau commit qui annule les modifications d\'un commit spécifique'
    },
    {
        command: 'git reset --hard',
        smiley: '😵‍💫',
        meanings: 'elle supprime toutes les modifications non commitées depuis votre dernier commit'
    },
    {
        command: 'git diff',
        smiley: '🤔',
        meanings: 'permet de comparer les changements entre votre répertoire de travail et le dernier commit'
    },
    {
        command: 'git config --global user.email "votreemail@example.com',
        smiley: '📧',
        meanings : 'Permet de configurer ton git en y mettant ton mail pour savoir qui commit'
    },
]
const commandGitDiv = document.querySelector('#commandGit')

for (const item of gitSmiley){

    const newGitArticle = document.createElement('article')
    
    const newH2 = document.createElement('h2')
    newH2.innerText = item.command

    const newSmiley = document.createElement('li')
    newSmiley.innerText = item.smiley
    newSmiley.style.fontSize = "50px"
    newSmiley.style.listStyle = 'none'

    const newLine = document.createElement('li')
    newLine.innerText = item.meanings

    const newBr = document.createElement('br')
    newBr.innerText = '<br>'

    newGitArticle.appendChild(newH2)
    newGitArticle.appendChild(newSmiley)
    newGitArticle.appendChild(newLine)
    newGitArticle.appendChild(newBr)

    commandGitDiv.appendChild(newGitArticle)

}


// git pull
// git fetch
// git checkout
// git clone
function quotes(){
    var quotetext=
    [
    `Life isn't about finding yourself. Life is about creating yourself.} George Bernard Shaw `,
        `Love is that condition in which the happiness of another person is essential to your own.” ― Robert A. Heinlein`,
        `When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.
        ― Paulo Coelho, The Alchemist`,
        `Instead of worrying about what you cannot control, shift your energy to what you can create.
― Roy T. Bennett, The Light in the Heart`
    ]
    var num =Math.floor(Math.random() * quotetext.length);
    document.getElementById('display').innerHTML=quotetext[num]

}
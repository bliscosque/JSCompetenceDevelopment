const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>';
const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g)); // O \1 se refere ao primeiro grupo (equivalente ao $1)


console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));

// Função para cortar o texto mantendo o sentido
function cortarTexto(texto, limite) {
    if (!texto) return '';
    return texto.length > limite ? texto.substring(0, limite).trim() + '...' : texto;
}

fetch('user/edital.html')
  .then(res => res.text())
  .then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');

    let titulo = doc.querySelector('section h2')?.textContent.trim();
    let resumo = doc.querySelector('section p')?.textContent.trim();

    let card = document.getElementById('cardEdital');
    card.querySelector('h3').textContent = titulo || 'Edital';
    card.querySelector('p').textContent = cortarTexto(resumo, 120); // limite de 120 caracteres
  })
  .catch(() => {
    let card = document.getElementById('cardEdital');
    card.querySelector('h3').textContent = 'Erro';
    card.querySelector('p').textContent = 'Não foi possível carregar o edital.';
  });

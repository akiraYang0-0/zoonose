// Puxa o conteúdo do edital e exibe no card
fetch('user/edital.html')
  .then(res => res.text())
  .then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');

    let titulo = doc.querySelector('section h2');
    let resumo = doc.querySelector('section p');

    let card = document.getElementById('edital');
    card.querySelector('h3').textContent = titulo ? titulo.textContent : 'Edital';
    card.querySelector('p').textContent = resumo ? resumo.textContent : 'Confira as últimas notícias.';
  })
  .catch(() => {
    let card = document.getElementById('cardEdital');
    card.querySelector('h3').textContent = 'Erro';
    card.querySelector('p').textContent = 'Não foi possível carregar o edital.';
  });

  

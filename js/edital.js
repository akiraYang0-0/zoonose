(function () {
  function cortarTexto(texto, limite) {
    if (!texto) return '';
    // Normaliza espaços e quebras de linha
    texto = texto.replace(/\s+/g, ' ').trim();

    if (texto.length <= limite) return texto;

    const cortado = texto.slice(0, limite + 1); // +1 dá folga
    const ultimoEspaco = cortado.lastIndexOf(' ');
    if (ultimoEspaco <= 0) return texto.slice(0, limite) + '…';
    return cortado.slice(0, ultimoEspaco) + '…';
  }

fetch('./user/edital.html')
    .then(r => r.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const secoes = doc.querySelectorAll('section');
      const container = document.getElementById('cardEdital');

     container.innerHTML = `
    <header>
        <h2>📢 Últimas Notícias & Editais</h2>
        <small>Atualizado em: ${new Date().toLocaleDateString('pt-BR')}</small>
    </header>
`;

      secoes.forEach(sec => {
        const titulo = sec.querySelector('h2')?.textContent.trim() || 'Sem título';
        const texto  = sec.querySelector('p')?.textContent.trim() || '';
        const data   = sec.querySelector('.data')?.textContent.trim() || '';

        const artigo = document.createElement('article');
        artigo.className = 'card';
        artigo.innerHTML = `
          <h3>${titulo}</h3>
          <p class="resumo">${cortarTexto(texto, 60)}</p>
          ${data ? `<small class="data">${data}</small>` : ''}
        `;
        container.appendChild(artigo);
      });
    })
    .catch(err => {
      console.error(err);
      const container = document.getElementById('cardEdital');
      if (container) container.innerHTML = '<p>Não foi possível carregar os editais.</p>';
    });
})();

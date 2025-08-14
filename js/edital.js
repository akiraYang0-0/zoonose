function cortarTexto(texto, limite) {
    if (!texto) return '';
    if (texto.length <= limite) return texto;
    let cortado = texto.substring(0, limite);
    let ultimoEspaco = cortado.lastIndexOf(' ');
    return cortado.substring(0, ultimoEspaco) + '...';
}

fetch('user/edital.html')
  .then(res => res.text())
  .then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let secoes = doc.querySelectorAll('section');
    let container = document.getElementById('listaEditais');

    secoes.forEach(sec => {
        let titulo = sec.querySelector('h2')?.textContent.trim() || 'Sem título';
        let resumo = sec.querySelector('p')?.textContent.trim() || '';
        let img = sec.querySelector('img')?.src || 'placeholder.jpg';
        let data = sec.querySelector('.data')?.textContent || '';

    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('cardEdital').innerHTML = '<p>Não foi possível carregar os editais.</p>';
  });


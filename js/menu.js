document.addEventListener("DOMContentLoaded", () => {
    const menuHTML = `
        <div class="header">
            <h1>ZoonoSys <a href="comunicativo.html"</a></h1>
            <p>Vigilância, Prevenção e Controle de Zoonoses</p>
            <nav>
                <ul>
                    <li><a href="index.html">Página Inicial</a></li>
                    <li><a href="AnimalListar.html">Animais</a></li>
                    <li><a href="EspecieListar.html">Espécies</a></li>
                    <li><a href="ProtocoloListar.html">Protocolo</a></li>
                    <li><a href="AtendimentoListar.html">Atendimento</a></li>
                    <li><a href="AgendaListar.html">Agenda</a></li>
                </ul>
            </nav>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
});

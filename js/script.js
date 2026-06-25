document.addEventListener('DOMContentLoaded', function () {
    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const aberto = botao.getAttribute('aria-expanded') === 'true';
            const resposta = document.getElementById(botao.getAttribute('aria-controls'));

            perguntas.forEach(function (outro) {
                if (outro !== botao) {
                    outro.setAttribute('aria-expanded', 'false');
                    const outraResposta = document.getElementById(outro.getAttribute('aria-controls'));
                    if (outraResposta) outraResposta.hidden = true;
                }
            });

            botao.setAttribute('aria-expanded', String(!aberto));
            resposta.hidden = aberto;
        });
    });

    const form = document.getElementById('formulario-contato');
    const confirmacao = document.getElementById('mensagem-confirmacao');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            confirmacao.textContent = 'Por favor, preencha todos os campos corretamente.';
            confirmacao.style.color = '#ef4444';
            
            setTimeout(function () {
                confirmacao.textContent = '';
            }, 5000);
            return;
        }

        confirmacao.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
        confirmacao.style.color = '#22c55e';
        form.reset();
        setTimeout(function () {
            confirmacao.textContent = '';
        }, 5000);
    });

});

# Landing Page Profissional para Advogado


## Desenvolvido por 
- Carla Barroso

## Descrição do caso escolhido
Este projeto consiste no desenvolvimento de uma landing page para Állefi Henrri,
advogado inscrito na OAB nº 82.649, com atuação nas áreas de Direito
Civil, Direito de Família e Direito Criminal. O profissional realiza atendimentos 
presenciais e on-line, prestando assessoria jurídica para clientes em diferentes estados 
do Brasil.
A página foi desenvolvida com base em informações fornecidas pelo próprio profissional 
por meio de uma entrevista inicial, permitindo identificar suas necessidades, objetivos e 
público-alvo.

## Necessidade identificada
Foi identificada a ausência de um site profissional que apresentasse de forma organizada 
informações sobre o advogado, suas áreas de atuação e os canais de atendimento.
A divulgação dos serviços ocorria principalmente por meio de redes sociais e indicações, 
o que dificultava a centralização das informações e limitava sua presença digital.
Diante dessa necessidade, foi proposta a criação de uma landing page capaz de fortalecer 
sua presença online, transmitir credibilidade e facilitar o contato com potenciais 
clientes.

## Público-alvo
O público-alvo é composto por pessoas que buscam orientação jurídica nas áreas de Direito 
Civil, Direito de Família e Direito Criminal, incluindo clientes que desejam esclarecer 
dúvidas, obter atendimento jurídico especializado ou agendar consultas presenciais e 
on-line.

## Objetivo do site
O principal objetivo da landing page é apresentar o profissional, divulgar suas áreas de 
atuação, transmitir credibilidade e incentivar o contato por meio dos canais de 
atendimento disponibilizados, especialmente o WhatsApp.

## Processo de desenvolvimento

O desenvolvimento do projeto foi organizado em etapas que permitiram
transformar as necessidades identificadas durante a entrevista com o cliente
em uma solução funcional e responsiva.

1. Levantamento de requisitos e definição visual

Foram coletadas informações sobre a atuação profissional do advogado,
público-alvo, formas de atendimento e objetivos da página.

Com base nesse levantamento, foi definida uma identidade visual composta por
tons de azul, dourado e cores neutras, buscando transmitir profissionalismo,
credibilidade e confiança.

2. Estruturação da página (HTML)

Foi criada a estrutura da landing page utilizando elementos semânticos como
`<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.

Esses elementos foram utilizados para organizar o conteúdo de forma clara e
adequada ao propósito de cada seção da página.

3. Desenvolvimento do layout e responsividade (Bootstrap e CSS)

O sistema de grid do Bootstrap foi utilizado para auxiliar na construção do
layout responsivo.

Em conjunto, foram aplicados estilos personalizados em CSS para definir a
identidade visual, os espaçamentos, os cards, os botões e os demais elementos
da interface.

4. Implementação da interatividade (JavaScript)

Foram desenvolvidas funcionalidades para a seção de Perguntas Frequentes
(FAQ), permitindo expandir e recolher respostas de forma dinâmica.

Também foi implementada uma validação básica do formulário de contato para
verificar o preenchimento dos campos obrigatórios.

5. Testes e refinamentos finais

Após a implementação das funcionalidades, foram realizados ajustes visuais,
testes de responsividade, verificação dos links, validação do funcionamento
do formulário, conferência das imagens e revisão dos recursos de
acessibilidade utilizados no projeto.


## Principais decisões do projeto

1. Estrutura HTML Semântica

A página foi estruturada utilizando elementos semânticos como `<header>`,
`<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`, permitindo uma
organização mais clara do conteúdo e melhor interpretação da estrutura da
página.

As áreas de atuação e os diferenciais foram organizados em cards utilizando
`<article>`, pois representam blocos de conteúdo independentes dentro da
landing page. Também foram utilizadas listas para apresentar informações de
forma mais organizada e facilitar a leitura do usuário.

2. Organização visual e CSS

Os estilos visuais foram desenvolvidos em um arquivo CSS próprio, responsável
pela definição das cores, espaçamentos, tipografia, cards, botões e demais
elementos da interface.

Essa abordagem permitiu manter a estrutura HTML mais organizada e separar o
conteúdo da apresentação visual, facilitando futuras manutenções e ajustes no
projeto.

3. Responsividade

A responsividade foi implementada por meio da combinação entre Bootstrap e CSS
personalizado. O sistema de grid do Bootstrap foi utilizado para organizar os
elementos da página e adaptar o layout para diferentes tamanhos de tela.

Em dispositivos móveis, os elementos são reorganizados automaticamente para
garantir boa legibilidade e navegação sem comprometer a experiência do usuário.

4. Acessibilidade

Foram adotadas práticas básicas de acessibilidade, incluindo o uso de HTML
semântico, textos alternativos em imagens, contraste adequado entre texto e
fundo e organização hierárquica dos títulos.

Também foram utilizados atributos de acessibilidade relacionados aos recursos
interativos da página, contribuindo para uma melhor experiência de navegação
por tecnologias assistivas.

5. Interatividade

Foram implementados recursos de interação para tornar a navegação mais dinâmica
e facilitar o acesso às informações. A principal funcionalidade interativa da
página está presente na seção de Perguntas Frequentes (FAQ), permitindo que o
usuário visualize apenas as respostas desejadas sem sobrecarregar a interface.

## Funcionalidade em JavaScript
O JavaScript foi desenvolvido com foco em DOM, estado da interface e validação de 
formulário:
1. **FAQ interativo (acordeão):**  
O script identifica a pergunta clicada e abre a resposta correspondente.  
Mantém apenas um item aberto por vez na interface.  
Atualiza o atributo `aria-expanded`, garantindo acessibilidade.

2. **Formulário de contato:**  
Usa `event.preventDefault()` para evitar recarregamento da página.  
Valida os campos com `form.checkValidity()` (HTML5).  
Exibe mensagem de erro ou sucesso por 5 segundos.  
Depois disso, limpa os campos do formulário.

## Uso de Bootstrap
O Bootstrap foi utilizado de forma leve e justificada,  
principalmente como suporte para estruturação e responsividade.

Foram utilizados recursos como o sistema de grid  
(`container`, `row`, `col-*`) e classes utilitárias  
de espaçamento (`mb-*`, `mt-*`, `pe-*`, `ps-*`).

Também foi utilizada a navbar responsiva,  
com comportamento de colapso no mobile.

O uso do framework não substituiu o HTML e CSS puro.  
A identidade visual, componentes e interações foram personalizados,  
mantendo controle total sobre o design.

O Bootstrap foi aplicado apenas onde trouxe ganho real  
de produtividade e consistência no layout responsivo.


## Testes realizados
Responsividade:  
Simulamos diferentes tamanhos de tela  
utilizando o DevTools do navegador (mobile, tablet e desktop).  
Verificamos a ausência de rolagem horizontal  
e a adaptação correta dos elementos.

Usabilidade e links:  
Testamos todos os links âncora do menu  
e o redirecionamento para o WhatsApp  
(`target="_blank"` e `rel="noopener noreferrer"`).  
Confirmamos o funcionamento da navegação interna da página.

Acessibilidade e JavaScript:  
Testamos a navegação via tecla `Tab`  
para verificar o foco nos botões do FAQ  
e nos campos do formulário.  
Também testamos envios inválidos e campos vazios  
para validar a captura de erro e sucesso no JavaScript.

## Links
- **Link do repositório:** https://github.com/Carla-Barroso/landing-page-advogado
- **Link do site publicado:** https://carla-barroso.github.io/landing-page-advogado/


## Contribuição dos integrantes
O projeto foi desenvolvido individualmente.  
Todas as etapas foram realizadas por mim,  
incluindo pesquisa, estruturação, desenvolvimento,  
estilização, implementação de JavaScript e testes.

#

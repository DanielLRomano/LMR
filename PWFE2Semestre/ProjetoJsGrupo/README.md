Introdução

Este documento resume as principais funcionalidades de três projetos diferentes: uma Lâmpada Interativa, um Semáforo Interativo e uma Calculadora Interativa. Cada projeto apresenta uma aplicação web com interface de usuário e funcionalidades específicas. Abaixo, descrevemos brevemente cada projeto e os desafios enfrentados durante o desenvolvimento.

Lâmpada Interativa :

Funcionalidades Principais

Interface do Usuário: A interface inclui uma imagem de uma lâmpada e um botão "Ligar" que permite aos usuários interagirem com a lâmpada.

Controle da Lâmpada: Os usuários podem ligar e desligar a lâmpada clicando no botão. Também podem quebrar a lâmpada clicando duas vezes sobre ela.

Eventos de Interatividade: Eventos de clique e passagem do mouse são usados para controlar a lâmpada, ligando-a, desligando-a temporariamente e quebrando-a.

Desafios Enfrentados
Gerenciamento do Estado da Lâmpada: Foi necessário criar um sistema de gerenciamento de estado para a lâmpada que permitisse ligá-la e desligá-la, levando em consideração se a lâmpada estava quebrada ou não.

Manipulação de Eventos: A implementação de eventos de interatividade, como o clique do mouse e a passagem do mouse sobre a lâmpada, exigiu um entendimento detalhado de como os eventos são manipulados em JavaScript.

Compatibilidade de Imagens: Certificar-se de que as imagens da lâmpada estivessem nomeadas corretamente e que a URL da imagem refletisse o estado da lâmpada foi um aspecto crítico.

Semáforo Interativo :

Funcionalidades Principais

Interface do Usuário: A interface exibe uma imagem de um semáforo desligado e botões para controlar as cores do semáforo manualmente ou ativá-lo no modo automático.

Controle do Semáforo: Os botões permitem ao usuário selecionar manualmente uma cor para o semáforo ou ativar a troca automática de cores.

Troca Automática de Cores: O semáforo muda automaticamente de cor em intervalos regulares quando o modo automático é ativado.

Desafios Enfrentados
Gerenciamento de Cores: Implementar um mecanismo para alternar entre as cores do semáforo de forma circular, garantindo que as cores fossem ativadas na ordem correta.

Controle de Eventos: Garantir que a troca automática de cores pudesse ser interrompida quando um botão manual fosse clicado.

Atualização da Interface de Usuário: Certificar-se de que a imagem do semáforo refletisse a cor corrente e que o botão "Automático" pudesse iniciar e parar a troca automática.

Calculadora Interativa :

Funcionalidades Principais

Interface do Usuário: A calculadora apresenta um display e botões para números, operadores matemáticos e funcionalidades adicionais.

Controle da Calculadora: Os botões permitem ao usuário inserir números, realizar cálculos matemáticos básicos, limpar o display, corrigir erros e executar outras operações.

Validação de Entrada: A calculadora valida a entrada do usuário para evitar operações inválidas.

Desafios Enfrentados
Gerenciamento de Estado e Operações: Garantir que os números e operadores fossem tratados corretamente, permitindo a realização de cálculos sequenciais e a correta exibição dos resultados.

Avaliação de Expressões: Utilizar a função eval() para avaliar expressões matemáticas de forma segura e eficiente.

Interação com o Teclado: Mapear as teclas do teclado e garantir que a interação via teclado funcione de maneira consistente com os cliques nos botões da calculadora.

Conclusão

Cada um desses projetos apresenta uma aplicação web interativa com suas próprias funcionalidades exclusivas. Os desafios enfrentados incluíram o gerenciamento de estado, a manipulação de eventos, a validação de entrada e a atualização da interface de usuário. Esses projetos demonstram o uso de HTML, CSS e JavaScript para criar aplicativos web interativos e fornecer uma experiência interativa aos usuários.
Funcionalidades

Controle de reprodução: play, pause, stop

Navegação: próximo e anterior

Modos de reprodução: loop on/off, shuffle on/off

Histórico: lista dos últimos vídeos assistidos


Simulações: criação de playlists e execução de vídeos com logs detalhados no console

Estrutura do Projeto
src/
│
├─ models/
│  ├─ Video.ts        # Classe base Video
│  ├─ AdVideo.ts      # Subclasse de Video (polimorfismo)

│
├─ controller/
│  └─ Player.ts       # Classe Player com lógica de reprodução
│
└─ main.ts            # Simulações e testes do player

Pilares da POO Aplicados

Abstração

Classes e interfaces bem definidas (Video, Playlist, Player) que representam claramente os conceitos do domínio.

Encapsulamento

Atributos privados e protegidos (private, protected) com getters e setters para controlar o acesso e evitar vazamento de estado.

Herança

Subclasses de Video como AdVideo que estendem a classe base.

Polimorfismo

Métodos como play() e info() se comportam de forma distinta nas subclasses, permitindo diferentes tipos de vídeos.

Como Rodar o Projeto

Clone o repositório:

git clone <LINK_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>


Inicialize o projeto e instale dependências:

npm init -y
npm install 


Compile/execute o main.ts:

npm run start


Observe os logs do console mostrando:

Reprodução dos vídeos

Navegação entre vídeos

Modo de reprodução ativo (loop/shuffle)

Histórico de vídeos assistidos

Observações

Simulação: todos os métodos são simulados via console (sem interface gráfica).

Controle completo: o player suporta todas as operações exigidas: play, pause, stop, next, previous, loop, shuffle.

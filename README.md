# GoAsk

O GoAsk é um sistema que busca fortalecer o relacionamento entre a tecnologia e os estudos sobre qualquer assunto, a fim de resolver problemas de nivelamento entre os estudantes, distrações externas e repetições de cenários. Para alcançar esse objetivo, o GoAsk fornecerá um sistema web que permitirá a administração de quizes ou testes rápidos com uma liberdade de escolha de tema e tempo para responder as perguntas criadas, qualquer um poderá usar essa ferramenta, seja professores, assistentes ou os próprios estudantes que pretendem ensinar, aprender ou simplesmente se divertir.

O sistema também fornecerá uma versão mobile no qual diversos usuários podem acessar a sala de um quiz e concorrerem entre si e contra o tempo, com um sistema de pontuação que exibe um ranking de colocoção dos participantes. Enfim, o GoAsk tem como missão tornar o aprendizado mais descontraído, leve e autônomo, que permita momentos de diversão e trívia com amigos e desenvolva habilidades técnicas e sociais por meio da curiosidade e brincadeira para todos seus usuários e todos assuntos.

## Integrantes

* [Guilherme Campos Barata Diniz](https://github.com/Guicbdiniz)
* [Guilherme Oliveira Antonio](https://github.com/guilhermegoa)
* [Matheus Felipe Ferreira Martins](https://github.com/MatheusFFM)
* [Ricardo Christovão da Silva](https://github.com/ricardochristovao)
* [Thiago Jorge Queiroz Silva](https://github.com/ThiagoQueirozSilva)

## Orientadores

* Hugo Bastos de Paula
* Pedro Alves De Oliveira

## Instruções de utilização

```bash
# Clonar o repositório
git clone https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti5-6702100-goask.git
```

### Execução - Frontend web

```bash
# Caminho para o projeto
cd ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti5-6702100-goask/codigo/Front-end/

# Instala dependências
yarn

# Executa o front
yarn dev
```

### Execução - Frontend Mobile

Primeiro, é necessário instalar as dependências e inicializar o Metro Bundler.

```bash
# Caminho para o projeto
cd ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti5-6702100-goask/codigo/goAskMobileApp/

# Instala dependências
npm install

# Inicializa o Metro Bundler
npx react-native start
```

Depois, basta abrir uma nova janela, abrir um emulador Android a sua escolha e rodar o projeto.

```bash
npx react-native run-android
```
Para rodar em iOS, é necessário um Mac.  
Infelizmente, ninguem do grupo tem um Mac.  
Logo, nós não estamos familiarizados com o passo a passo.  
Para informações desse tipo, basta acessar [React Native](https://reactnative.dev)
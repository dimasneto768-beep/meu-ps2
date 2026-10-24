# Meu PS2 — interface inicial

Projeto estático em português, pensado para ser editado pelo Safari no iPhone XR e publicado gratuitamente no GitHub Pages.

## Arquivos
- `index.html`: estrutura e textos.
- `style.css`: visual inspirado no PS2, adaptado para celular.
- `app.js`: seleção local de arquivo, painel de integração, tela cheia e botões virtuais de demonstração.

## Importante: o que esta versão faz e não faz
Esta é uma interface funcional, mas **não é um emulador**. O seletor não executa nem envia jogos. Os botões virtuais apenas mostram o comando pressionado; ainda não enviam comandos a um emulador.

## Publicar no GitHub Pages pelo iPhone
1. Entre em https://github.com e crie um repositório público chamado `meu-ps2`.
2. Envie os três arquivos para a raiz do repositório (`Add file` → `Upload files`). Também é possível criar cada arquivo individualmente no site.
3. Abra `Settings` → `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`, branch `main` e pasta `/(root)`, depois salve.
5. Aguarde a publicação. O endereço geralmente fica no formato `https://SEU-USUARIO.github.io/meu-ps2/`.

## Plano de integração do Play!.js
1. Teste o emulador no Safari separadamente: https://playjs.purei.org/.
2. Verifique a documentação e licença do projeto e se há uma versão oficialmente incorporável (por exemplo, um pacote web ou uma API de integração).
3. Confirme se o navegador consegue carregar os arquivos necessários, se existe suporte a arquivos locais/BIOS conforme exigido pelo emulador e se o Safari permite o desempenho necessário.
4. Só depois implemente o adaptador para carregar o jogo e encaminhar os eventos dos botões virtuais ao emulador. Não se deve supor que um iframe ou uma simples ligação ao site externo permita controlar o emulador.
5. Não publique BIOS, jogos ou outros arquivos protegidos por direitos autorais. Use apenas conteúdo que você tem direito de usar.

## Limitações no iPhone XR
- Safari no iOS tem limites de memória, desempenho e execução de código pesado; um jogo de PS2 pode travar, ficar lento ou não iniciar.
- O suporte de áudio e tela cheia pode exigir uma ação explícita do usuário.
- Um site hospedado no GitHub Pages é estático; ele não fornece sozinho processamento de emulação em servidor.
- GitHub Pages não é um serviço de streaming de jogos nem de armazenamento de grandes bibliotecas de ROMs.

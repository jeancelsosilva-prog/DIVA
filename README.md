# Divã

**Divã** é o app de bolso com o plano de comunicação da Letícia Alves, psicóloga: rotina de 8 semanas, 24 pautas com prompt pronto, textos para copiar e colar, passo a passo de cada problema encontrado e revisão UI/UX. Funciona no celular como app (PWA), abre sem internet depois da primeira visita e guarda o progresso só no aparelho.

## 1. Dois perfis: Jean e Letícia

Na primeira abertura o app pergunta **Quem está usando?**. Dá para trocar a qualquer hora tocando na pílula de vidro no alto da tela.

| | Letícia | Jean |
|---|---|---|
| Abas | Hoje, Posts, Criar, Conversas, Mais | Hoje, Perfis, Anúncios, Medir, Mais |
| Linguagem | Fala com ela (“você”) | Fala da Letícia em terceira pessoa |
| Foco | Criação, voz dos posts, capas, calendário, respostas de Direct/WhatsApp, métricas da semana | Perfis (Instagram, Google, WhatsApp), anúncios, orçamento, medição, revisão do app |

Nada some: o que é do outro perfil fica em **Mais**, numa seção recolhida.

**Isto não é senha.** O perfil só muda a ordem e o tom das telas. Quem tiver o endereço do app vê tudo.

### Em cada aparelho

O app se ajusta sozinho ao aparelho em que for aberto:

- **Celular em pé:** abas embaixo, uma coluna.
- **Celular deitado:** menu estreito à esquerda, para sobrar altura.
- **Tablet em pé:** coluna mais larga, abas embaixo.
- **Computador (Mac, PC) e tablet deitado:** menu lateral, coluna de leitura e a troca de perfil numa janela no centro. Com mouse, botões e linhas reagem ao ponteiro.

Cada aparelho guarda o próprio perfil: o Mac do Jean pode ficar como Jean e o celular da Letícia como Letícia.

## 2. Voz dos posts e visual das capas (aba Criar)

A Letícia escolhe como os posts vão soar. A escolha muda o texto dos 24 prompts; o app destaca em rosa o trecho que acrescentou.

- **Sóbria e acolhedora** (padrão, igual ao guia original)
- **Papo de amiga**
- **Online de verdade**: português da internet brasileira, ironia carinhosa, sem infantilizar
- **Afiada e bem-humorada**
- **Íntima e literária**
- **Didática com personalidade**

Ajustes finos: humor, internet e quem fala (Você, A gente, Eu), além da perspectiva (“como profissional que atende essa população” ou “também como parte da comunidade”, só se for verdade e ela quiser que apareça). Cada pauta pode ter voz própria.

Os limites éticos valem em qualquer voz. Nas pautas sobre relações violentas, situações de risco e ambientes inseguros (P04, P17, P19) o prompt volta sozinho ao tom sóbrio, sem humor nem gíria.

Visual das capas: **Sóbrio** (o do guia) ou **Pop online** (cor chapada, letra pesada e uma palavra destacada, com as mesmas margens e o mesmo contraste). Com voz Sóbria, ajustes de fábrica e visual Sóbrio, os prompts são idênticos aos do arquivo original.

## 3. Publicar no GitHub (Jean)

1. Crie um repositório **Public** (no plano gratuito, o GitHub Pages só funciona com repositório público). Use um nome pouco óbvio, por exemplo `plano-comunicacao-2026`.
2. **Add file, Upload files**: arraste **todo o conteúdo desta pasta** (incluindo `icons` e `licencas`) e confirme em **Commit changes**. O `.nojekyll` é opcional; se ele não aparecer no seu gerenciador de arquivos, tudo bem.
3. **Settings, Pages**, em **Build and deployment**: **Deploy from a branch**, branch `main`, pasta `/ (root)`, **Save**.
4. Espere até 10 minutos. O endereço fica `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
5. Abra no seu celular antes de mandar para a Letícia: escolha um perfil, copie um prompt, confira o ícone rosa.

Para atualizar: envie os arquivos novos para o mesmo repositório. Quando o app abrir com internet, aparece **Versão nova pronta** com o botão **Atualizar**.

## 4. Instalar no celular (Letícia)

**iPhone (Safari):** abra o endereço no Safari, toque em **Compartilhar** (quadrado com seta para cima), **Adicionar à Tela de Início**, **Adicionar**. Abra sempre pelo ícone rosa.

**Android (Chrome):** abra no Chrome, toque nos três pontinhos, **Instalar app** (ou **Adicionar à tela inicial**) e confirme.

Os nomes dos botões mudam um pouco conforme o sistema. O passo a passo também está no app, em **Mais, Instalar no celular**.

## 5. Privacidade

- O GitHub Pages é público: quem tiver o endereço abre o app. A página pede para não aparecer em buscas (`noindex`), mas isso não a torna privada.
- O app tem CRP, telefone e a análise do caso: dados profissionais e de planejamento. **Não há dado de paciente** e o app não pede nenhum.
- Perfil escolhido, voz, etapas, tarefas e registros semanais ficam **só no aparelho**, no armazenamento do navegador. Nada vai para servidor. Cada celular tem o seu; para passar de um para outro, use **Ajustes, Copiar o backup**.
- Acesso fechado com senha exige outro serviço; o GitHub Pages gratuito não oferece.

## 6. Licenças

Fonte dos títulos: Fraunces (OFL 1.1, em `licencas/`). O app não usa serviços externos: tudo está dentro do `index.html`.

Material de planejamento. A revisão e a publicação de cada peça são de responsabilidade profissional da Letícia.

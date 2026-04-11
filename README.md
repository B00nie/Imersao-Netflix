# Imersão Netflix 🎬

Clone da interface do Netflix desenvolvido durante a **Imersão Front-end com IA da Alura**. O projeto recria a experiência visual da plataforma, com seleção de perfis, catálogo de conteúdo e diversos efeitos interativos.

---

## ✨ Funcionalidades

- **Tela de seleção de perfis** — escolha entre 4 perfis (Katia, Ana, Carlos e Taiga) antes de acessar o catálogo
- **Tema claro/escuro** — alternância via botão toggle com persistência em `localStorage`
- **Catálogo de conteúdo** — linhas de filmes e séries geradas dinamicamente por JavaScript, organizadas em categorias:
  - Mais Assistidos
  - Continuar Assistindo
  - Para Maratonar
- **Cards interativos** — ao passar o mouse, o card expande e exibe um preview em vídeo (YouTube embed), botões de ação e informações como classificação, duração e tags
- **Badges** — indicadores de Top 10, "Clássico", "Novo" e outros
- **Barra de progresso** — exibida nos títulos da categoria "Continuar Assistindo"
- **Perfil ativo no navbar** — nome e avatar do perfil selecionado são carregados do `localStorage` e exibidos na barra de navegação do catálogo
- **Design responsivo** — adaptado para mobile, tablet e desktop

---

## 🗂️ Estrutura do projeto

```
Imersao-Netflix/
├── index.html          # Tela de seleção de perfis
├── styles.css          # Estilos da tela de perfis
├── js/
│   ├── index.js        # Lógica de seleção de perfil e navegação
│   └── script.js       # Alternância e persistência de tema (dark/light)
├── assets/             # Imagens dos perfis e ícone do site
│   ├── Netflix-new-icon.png
│   ├── Profile1.png … Profile4.png
└── catalogo/
    ├── catalogo.html   # Página do catálogo (estilo Netflix)
    ├── catalogo.css    # Estilos do catálogo
    ├── assets/         # Ícone do catálogo
    └── js/
        ├── main.js     # Ponto de entrada — carrega perfil e monta os carrosséis
        ├── data.js     # Dados dos filmes/séries (categorias e URLs)
        ├── utils.js    # Funções utilitárias
        └── components/ # Componentes reutilizáveis (Carousel, etc.)
```

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilos, animações, variáveis CSS e media queries |
| JavaScript (ES Modules) | Lógica, geração de DOM e interatividade |
| Google Fonts | Fontes Bebas Neue, Nunito e Roboto |
| Font Awesome 6 | Ícones da barra de navegação |
| localStorage | Persistência de tema e perfil ativo |

---

## 🚀 Como executar

Por usar ES Modules (`type="module"`), o projeto precisa ser servido por um servidor HTTP local — abrir o `index.html` diretamente no navegador não funcionará.

**Opção 1 — VS Code Live Server:**
1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clique com o botão direito em `index.html` → **Open with Live Server**

**Opção 2 — Python:**
```bash
# Na raiz do projeto
python -m http.server 8080
```
Acesse `http://localhost:8080` no navegador.

---

## 📚 Sobre a Imersão

Projeto desenvolvido na **Imersão Front-end com IA** da [Alura](https://www.alura.com.br/), com foco em praticar HTML, CSS e JavaScript modernos com auxílio de inteligência artificial.

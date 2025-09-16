# Yor CSS

Uma biblioteca CSS moderna construída com Sass e JavaScript, inspirada no Bootstrap.

## 🚀 Características

- **Biblioteca CSS Moderno**: Construído com Sass para máxima flexibilidade
- **Componentes JavaScript**: Componentes interativos prontos para uso

## 📦 Instalação

### Via NPM
```bash
npm install yor-css
```

### Via CDN


### Download Manual
Baixe os arquivos CSS e JavaScript da pasta `dist/` e inclua em seu projeto.

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM

### Configuração do Ambiente
```bash
# Clone o repositório
git clone https://github.com/sdevawsm/yor-css.git

# Instale as dependências
npm install
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Compila Sass e JavaScript para produção |
| `npm run build:dev` | Compila Sass e JavaScript para desenvolvimento |
| `npm run dev` | Inicia servidor de desenvolvimento com hot reload |
| `npm run watch` | Compila e observa mudanças nos arquivos |
| `npm run sass` | Compila apenas Sass com watch |
| `npm run sass:dev` | Compila apenas Sass para desenvolvimento |
| `npm run sass:build` | Compila apenas Sass para produção (minificado) |
| `npm run clean` | Limpa a pasta dist |

### Estrutura do Projeto

```
yor-css/
├── src/
│   ├── js/
│   │   ├── index.js              # Arquivo principal JavaScript
│   │   ├── components/
│   │   │   └── alert.js          # Componente Alert
│   │   └── utils/
│   │       └── index.js          # Funções utilitárias
│   └── scss/
│       ├── yor-css.scss          # Arquivo principal Sass
│       └── _variables.scss       # Variáveis Sass
├── dist/
│   ├── css/
│   │   ├── yor-css.css           # CSS compilado
│   │   └── yor-css.css.map       # Source map
│   └── js/
│       ├── yor-css.js            # JavaScript compilado
│       └── yor-css.min.js        # JavaScript minificado
├── examples/
│   └── index.html                # Página de exemplo
├── webpack.config.js             # Configuração do Webpack
└── package.json                  # Configurações do projeto
```

## 🎨 Uso

### CSS Básico

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Projeto</title>
    <link rel="stylesheet" href="dist/css/yor-css.css">
</head>
<body>
    <div class="yor-container">
        <div class="yor-row">
            <div class="yor-col">
                <h1>Meu Conteúdo</h1>
            </div>
        </div>
    </div>
</body>
</html>
```

### Sistema de Grid

```html
<div class="yor-container">
    <div class="yor-row">
        <div class="yor-col">
            <p>Coluna 1</p>
        </div>
        <div class="yor-col">
            <p>Coluna 2</p>
        </div>
        <div class="yor-col">
            <p>Coluna 3</p>
        </div>
    </div>
</div>
```

### Componentes JavaScript

#### Alertas

```html
<!-- Alertas com auto-inicialização -->
<div class="yor-alert yor-alert-primary" data-yor-alert>
    Este é um alerta primário!
</div>

<div class="yor-alert yor-alert-success" data-yor-alert>
    Este é um alerta de sucesso!
</div>

<div class="yor-alert yor-alert-danger" data-yor-alert>
    Este é um alerta de perigo!
</div>

<div class="yor-alert yor-alert-warning" data-yor-alert>
    Este é um alerta de aviso!
</div>
```

#### JavaScript Programático

```html
<script src="dist/js/yor-css.min.js"></script>
<script>
// Usar globalmente
const alert = new YorCSS.Alert('#meu-alerta', {
    dismissible: true,
    autoClose: true,
    delay: 5000
});

// Ou usar módulos ES6
import YorCSS from 'yor-css';
const alert = new YorCSS.Alert('#meu-alerta');
</script>
```

## 🎯 Componentes Disponíveis

### Alert
- Alertas dismissíveis
- Auto-fechamento configurável
- Múltiplos tipos (primary, success, danger, warning)

### Utilitários
- Sistema de grid responsivo
- Classes utilitárias
- Funções JavaScript auxiliares

## 🔧 Customização

### Variáveis Sass

Personalize as cores e outros valores editando `src/scss/_variables.scss`:

```scss
$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #6c757d !default;
$gray-700: #495057 !default;
$gray-800: #343a40 !default;
$gray-900: #212529 !default;
$black:    #000 !default;
```

### Build Personalizado

Para criar uma versão personalizada:

1. Edite as variáveis em `src/scss/_variables.scss`
2. Adicione seus próprios componentes em `src/js/components/`
3. Execute `npm run build` para gerar a versão personalizada

## 🌐 Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Isso iniciará um servidor em `http://localhost:9000` com:
- Hot reload automático
- Compilação automática do Sass
- Compilação automática do JavaScript
- Source maps para debug

## 📝 Licença

MIT License.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/sdevawsm/yor-css/issues)
- **Documentação**: [GitHub Pages](https://sdevawsm.github.io/yor-css)
- **Email**: [Seu Email]

## 🗺️ Roadmap

- [ ] Componente Button
- [ ] Componente Modal
- [ ] Componente Dropdown
- [ ] Componente Tab
- [ ] Componente Toast
- [ ] Componente Tooltip
- [ ] Componente Popover
- [ ] Sistema de ícones
- [ ] Tema escuro
- [ ] Documentação interativa

## 📊 Estatísticas

![GitHub stars](https://img.shields.io/github/stars/sdevawsm/yor-css?style=social)
![GitHub forks](https://img.shields.io/github/forks/sdevawsm/yor-css?style=social)
![NPM version](https://img.shields.io/npm/v/yor-css)
![License](https://img.shields.io/npm/l/yor-css)

---

**Desenvolvido com ❤️ por [sdevawsm](https://github.com/sdevawsm)**

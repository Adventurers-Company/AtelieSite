# Ateliê Fio Fino — Landing Page (demo)

Landing page de demonstração para portfólio. Este repositório contém uma versão estática/dinâmica mínima do front-end com um servidor Flask simples.

Observação: todas as informações pessoais foram removidas ou substituídas por informações de demonstração.

**Características principais**
- Layout responsivo com foco em apresentação para portfólio
- Componentes: Hero, Sobre, Serviços, Processos, Preços, Loja, Portfólio e Contato
- Animações leves, parallax no hero e efeitos de scroll
- Galeria de imagens usando links públicos (Unsplash)

**Tecnologias**
- Python 3 + Flask (servidor mínimo)
- HTML5, CSS3 e JavaScript (Vanilla)

## Como executar (local)

1. Crie e ative um ambiente virtual (opcional, recomendado):

Windows (PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Instale dependências:

```bash
pip install -r requirements.txt
```

3. Execute o servidor:

```bash
python app.py
```

4. Abra seu navegador em `http://localhost:5000`

## Estrutura do projeto

```
.
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── styles.css
│   └── app.js
└── README.md
```

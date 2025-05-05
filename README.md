 <h3>🧪 A3 Media - Teste Desenvolvedor Web Júnior</h3>

Este projeto foi desenvolvido como parte do teste técnico para a vaga de Desenvolvedor Web Júnior na A3 Media. O objetivo foi avaliar a capacidade de reprodução fiel de páginas web, criação de templates reutilizáveis, integração com CMS e automação de múltiplas páginas utilizando conteúdo dinâmico.

 <h3>✅ Objetivo</h3>

Recriar fielmente duas landing pages de concorrentes.

Transformar cada uma em um template Astro.

Criar 1000 cópias de cada template utilizando TinaCMS.

Gerar conteúdo dinâmico e único em cada página usando faker-js.

Utilizar o TinaCMS como painel de edição, onde alterações refletem automaticamente no site.


 <h3>🧰 Stack Utilizada</h3>

⚡ Astro — Framework moderno para desenvolvimento web rápido.

📝 TinaCMS — CMS headless para controle de conteúdo em tempo real.

🔀 faker-js — Geração de dados fictícios para simular conteúdo.

💅 HTML / TAILWIND — Estilização fiel às páginas originais.

🔗 Slugs dinâmicos com padrão:

/paginatemplate1/1 ... /paginatemplate1/1000  
/paginatemplate2/1 ... /paginatemplate2/1000


<h3>📄 Páginas Base (Originais) </h3>

Template 1
https://getflowempower.com/ps/pscollins01

Template 2
https://glucosecontrolguide.com/fb/sgs/vsl3/prn-ca1/h1l1/


<h3>🚀 Como Rodar o Projeto</h3>

1. Clone o repositório

```bash
git clone https://github.com/dannunees/a3media-teste.git
cd a3media-teste
```

2. Instale as dependências

```bash
npm install
```

3. Rode o projeto

```bash
npm run dev
```

4. Para acessar as páginas criadas:

http://localhost:4321/paginatemplate1/1

http://localhost:4321/paginatemplate2/1

(para visualizar as outras páginas, basta mudar o número do slug na url, ex: http://localhost:4321/paginatemplate1/10 etc)

5. Acesse o CMS

Vá para: http://localhost:4321/admin/index.html

Edite conteúdo em tempo real via TinaCMS.

Segue link das páginas publicadas na vercel tbm:

https://projeto-a3media.vercel.app/paginatemplate1/1

https://projeto-a3media.vercel.app/paginatemplate2/1

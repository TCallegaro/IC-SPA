## Sobre o projeto

O projeto é uma Single Page Application (SPA) educativa voltada à prevenção de acidentes com animais peçonhentos, como serpentes, escorpiões, aranhas e lagartas.

A aplicação reúne informações sobre animais peçonhentos, orientações preventivas, um checklist interativo e recomendações gerais sobre como agir em caso de acidente. O projeto tem como foco inicial a população urbana e rural do interior do Paraná, contribuindo para a disseminação de informações de forma simples e acessível.

## Problema que o serviço pretende resolver

A falta de acesso rápido a informações claras sobre animais peçonhentos, prevenção de acidentes e primeiros socorros pode dificultar a adoção de medidas de segurança.

A SPA busca centralizar essas informações em uma plataforma de fácil utilização, ajudando os usuários a reconhecer situações de risco, adotar medidas preventivas e conhecer as condutas recomendadas em caso de acidente.

## Público-alvo

- Moradores de áreas urbanas e rurais;
- Agricultores e trabalhadores do campo;
- Estudantes, professores e instituições de ensino;
- Famílias e comunidades locais;
- Pessoas que frequentam trilhas, parques e áreas naturais.

## Funcionalidades

- **Página inicial:** apresentação do projeto e acesso às principais seções.
- **Guia de animais:** consulta de informações sobre serpentes, escorpiões, aranhas e lagartas.
- **Busca de animais:** pesquisa por nome e descrição.
- **Fichas educativas:** apresentação de orientações preventivas para cada grupo de animais.
- **Checklist de prevenção:** ferramenta interativa para verificar medidas preventivas no ambiente doméstico e rural.
- **Primeiros socorros:** orientações gerais sobre o que fazer e o que evitar em caso de acidente.
- **Navegação responsiva:** interface adaptada para computadores e dispositivos móveis.

## Tecnologias utilizadas

- **React:** desenvolvimento da interface e dos componentes reutilizáveis.
- **Vite:** ferramenta para execução do ambiente de desenvolvimento e geração da versão de produção.
- **JavaScript:** implementação das funcionalidades e interações.
- **CSS:** estilização e adaptação da interface para diferentes tamanhos de tela.
- **Lucide React:** biblioteca de ícones utilizada na interface.
- **Git e GitHub:** controle de versão e hospedagem do código-fonte.

## Possibilidades de monetização

Embora a primeira versão tenha finalidade educativa e não implemente mecanismos de monetização, o projeto apresenta possibilidades de evolução comercial e institucional, como:

- Espaços publicitários para empresas e cooperativas da região;
- Conteúdos patrocinados relacionados à segurança rural e à educação ambiental;
- Parcerias com instituições de ensino, organizações e projetos de extensão;
- Apoio de empresas e entidades interessadas em campanhas educativas;
- Divulgação de iniciativas e serviços relacionados à prevenção de acidentes.

Eventuais anúncios e conteúdos patrocinados deverão ser identificados claramente, sem comprometer a qualidade e a imparcialidade das informações de saúde.

## Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado, preferencialmente em uma versão LTS compatível com as dependências do projeto;
- npm, instalado junto com o Node.js;
- Git instalado, caso seja necessário clonar o repositório.

### Passos para execução

1. Clone o repositório do projeto:

   ```bash
   git clone URL_DO_REPOSITORIO
   ```

2. Entre na pasta do projeto:

   ```bash
   cd spa-ic
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador o endereço local informado pelo Vite, normalmente:

   ```text
   http://localhost:5173
   ```

### Gerar a versão de produção

Para gerar os arquivos de produção, execute:

```bash
npm run build
```

Os arquivos gerados ficarão disponíveis na pasta `dist`.

Integração Contínua

Ferramenta utilizada

Foi utilizado o GitHub Actions para implementar a integração contínua (CI) do projeto Peçonha Zero. A ferramenta permite automatizar tarefas de validação do código-fonte a cada alteração enviada ao repositório.

Quando o pipeline é executado

O workflow é executado automaticamente quando ocorre um push para a branch main ou quando um Pull Request é aberto ou atualizado com destino à branch main.

Também é possível iniciar uma execução manualmente pela aba Actions do GitHub, utilizando o evento workflow_dispatch.

Etapas do pipeline

O pipeline é composto pelas seguintes etapas:

Checkout: utiliza a ação actions/checkout@v4 para disponibilizar o código-fonte no ambiente de execução.

Configuração do Node.js: utiliza actions/setup-node@v4 com Node.js 22 para preparar o ambiente.

Instalação das dependências: executa npm ci para instalar as dependências registradas no arquivo package-lock.json.

Build: executa npm run build para compilar a aplicação React com Vite e verificar se o processo de geração dos arquivos de produção é concluído.

Se todas as etapas forem executadas corretamente, o workflow será marcado como bem-sucedido. Caso alguma etapa apresente erro, a execução será marcada como falha e os logs poderão ser consultados no GitHub Actions.

Como verificar uma execução

Acesse o repositório do projeto no GitHub.

Abra a aba Actions.

Selecione o workflow

Abra a execução correspondente ao commit enviado.

Consulte as etapas do pipeline para verificar o resultado da instalação das dependências e do build.

Uma execução bem-sucedida indica que o código foi obtido, as dependências foram instaladas e a aplicação foi compilada sem erros de build. Isso não garante, por si só, que todas as funcionalidades estejam livres de defeitos.

Fluxo implementado

O fluxo de integração contínua segue a sequência:

Push/Pull Request → Checkout → Configuração do Node.js → npm ci → npm run build → Resultado

A implementação automatiza a validação básica do projeto e permite identificar problemas de compilação antes de futuras evoluções da aplicação.

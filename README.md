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
- **Next.js:** framework React usado no ambiente de desenvolvimento e na geração da versão de produção.
- **TypeScript:** implementação tipada das funcionalidades e interações.
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
   npm ci
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador:

   ```text
   http://localhost:3000
   ```

### Gerar a versão de produção

Para gerar os arquivos de produção, execute:

```bash
npm run build
```

O Next.js gera os arquivos de produção na pasta `.next`.

## Integração Contínua

### Ferramentas utilizadas

GitHub Actions, Vitest e SonarQube Cloud. O workflow executa validações automaticamente e envia ao SonarQube o relatório LCOV gerado pelos testes.

Configure `SONAR_TOKEN` como um secret e `SONAR_PROJECT_KEY` e `SONAR_ORGANIZATION` como variables em **Settings → Secrets and variables → Actions**. Use os valores correspondentes ao projeto e à organização cadastrados no SonarQube Cloud.

### Quando o pipeline é executado

O workflow é executado em pushes e pull requests direcionados à branch `main`. Também pode ser iniciado manualmente pela aba **Actions**.

### Etapas do pipeline

O pipeline segue esta sequência:

1. Checkout do código com `actions/checkout@v4`.
2. Configuração do Node.js 22 com `actions/setup-node@v4`.
3. Instalação determinística das dependências com `npm ci`.
4. Análise estática com `npm run lint`.
5. Testes unitários com `npm test`.
6. Testes com cobertura com `npm run test:coverage`, que gera `coverage/lcov.info`.
7. Análise pelo SonarQube Cloud com o relatório LCOV; o workflow aguarda o resultado do Quality Gate.
8. Build de produção com `npm run build`.

Se uma etapa falhar, as etapas seguintes não serão executadas e os detalhes estarão disponíveis nos logs da execução no GitHub Actions.

O arquivo `sonar-project.properties` informa ao scanner os diretórios do código e dos testes e a localização do relatório de cobertura.

### Como verificar uma execução

Na página do repositório no GitHub, abra **Actions**, selecione o workflow **CI** e escolha uma execução. Confira os logs de cada etapa e consulte o dashboard do projeto no SonarQube Cloud para ver a análise e o Quality Gate.

### Fluxo implementado

Push/Pull Request → Checkout → Setup Node.js → Instalação → Lint → Testes unitários → Cobertura → SonarQube Scan → Build

## Evidências da análise de qualidade

As capturas serão incluídas em `docs/evidencias/` após a execução integrada do workflow e a confirmação dos resultados no SonarQube Cloud. Não foram criadas capturas simuladas.

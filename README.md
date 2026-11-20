# SPA - Prevenção de Acidentes com Animais Peçonhentos

## 1. Sobre o projeto

O projeto é uma Single Page Application (SPA) educativa voltada à prevenção de acidentes com animais peçonhentos, como serpentes, escorpiões, aranhas e lagartas.

A aplicação reúne informações sobre animais peçonhentos, orientações preventivas, um checklist interativo e recomendações gerais sobre como agir em caso de acidente.

O projeto tem como foco inicial a população urbana e rural do interior do Paraná, contribuindo para a disseminação de informações de forma simples, acessível e educativa.

## 2. Serviço proposto

O serviço proposto consiste em uma plataforma digital que centraliza informações educativas sobre animais peçonhentos, prevenção de acidentes e primeiros socorros.

A solução busca resolver o problema da dificuldade de acesso rápido a informações claras e confiáveis, permitindo que os usuários reconheçam situações de risco, adotem medidas preventivas e conheçam as condutas recomendadas em caso de acidente.

O público-alvo contempla:

- Moradores de áreas urbanas e rurais;
- Agricultores e trabalhadores do campo;
- Estudantes, professores e instituições de ensino;
- Famílias e comunidades locais;
- Pessoas que frequentam trilhas, parques e áreas naturais.

## 3. Funcionalidades

A aplicação disponibiliza as seguintes funcionalidades:

- **Página inicial:** apresentação do projeto e acesso às principais seções.
- **Guia de animais:** consulta de informações sobre serpentes, escorpiões, aranhas e lagartas.
- **Busca de animais:** pesquisa por nome e descrição.
- **Fichas educativas:** apresentação de orientações preventivas para cada grupo de animais.
- **Checklist de prevenção:** ferramenta interativa para verificar medidas preventivas no ambiente doméstico e rural.
- **Primeiros socorros:** orientações gerais sobre o que fazer e o que evitar em caso de acidente.
- **Navegação responsiva:** interface adaptada para computadores e dispositivos móveis.

## 4. Tecnologias utilizadas

- **React:** desenvolvimento da interface e dos componentes reutilizáveis.
- **Next.js:** framework React utilizado no ambiente de desenvolvimento e na geração da versão de produção.
- **TypeScript:** implementação tipada das funcionalidades e interações.
- **CSS:** estilização e adaptação da interface para diferentes tamanhos de tela.
- **Lucide React:** biblioteca de ícones utilizada na interface.
- **Vitest:** execução de testes automatizados.
- **Git e GitHub:** controle de versão e hospedagem do código-fonte.
- **GitHub Actions:** automação do pipeline de integração contínua.
- **SonarQube Cloud:** análise estática e acompanhamento da qualidade do código.

## 5. Arquitetura da aplicação

A aplicação utiliza uma arquitetura baseada em componentes, seguindo a estrutura disponibilizada pelo Next.js.

A interface é dividida em componentes reutilizáveis, páginas e recursos de estilização, permitindo melhor organização, manutenção e evolução do código.

A arquitetura contempla:

- **Camada de apresentação:** páginas, componentes React e elementos visuais.
- **Camada de funcionalidades:** implementação das interações e regras da aplicação.
- **Camada de testes:** testes automatizados das funcionalidades desenvolvidas.
- **Camada de qualidade:** ferramentas de análise estática e verificação da qualidade do código.

O projeto segue uma organização modular, facilitando a inclusão de novas funcionalidades e futuras integrações.

## 6. Estratégia de branches e versionamento

O controle de versão é realizado utilizando Git e GitHub.

A branch `main` é utilizada como branch principal, concentrando as versões estáveis do projeto.

Para organizar o desenvolvimento, podem ser utilizadas branches específicas para novas funcionalidades, correções e melhorias.

Convenção sugerida:

- `main`: versão principal e estável.
- `feature/nome-da-funcionalidade`: desenvolvimento de novas funcionalidades.
- `fix/nome-da-correcao`: correções de problemas identificados.
- `docs/nome-da-documentacao`: alterações na documentação.

As alterações são integradas à branch principal por meio de Pull Requests, permitindo revisão e execução das validações automatizadas antes da integração.

O versionamento utiliza commits descritivos, facilitando a identificação das alterações realizadas.

## 7. Pipeline CI/CD

O projeto utiliza GitHub Actions para automatizar o processo de integração contínua (CI), executando verificações de código, testes automatizados, análise de qualidade e build.

### Ferramentas utilizadas

- GitHub Actions;
- Vitest;
- SonarQube Cloud;
- Node.js 22.

### Gatilhos de execução

O workflow é executado automaticamente em:

- Push direcionado à branch `main`;
- Pull Requests direcionados à branch `main`;
- Execução manual pela aba **Actions** do GitHub.

### Etapas do pipeline

O pipeline segue a seguinte sequência:

1. **Checkout:** obtenção do código-fonte com `actions/checkout@v4`.
2. **Setup Node.js:** configuração do ambiente Node.js 22 com `actions/setup-node@v4`.
3. **Instalação:** instalação determinística das dependências utilizando `npm ci`.
4. **Lint:** análise estática inicial por meio de `npm run lint`.
5. **Testes unitários:** execução dos testes com `npm test`.
6. **Cobertura de testes:** execução de `npm run test:coverage`, gerando o relatório `coverage/lcov.info`.
7. **SonarQube Scan:** envio dos resultados para o SonarQube Cloud, incluindo o relatório de cobertura, com verificação do Quality Gate.
8. **Build:** geração da versão de produção utilizando `npm run build`.

Caso alguma etapa apresente falha, as etapas seguintes não serão executadas, permitindo identificar o problema pelos logs da execução.

### Configuração de variáveis e secrets

Para a integração com o SonarQube Cloud, devem ser configurados os seguintes valores no GitHub:

Em **Settings → Secrets and variables → Actions**:

- `SONAR_TOKEN`: cadastrado como Secret.
- `SONAR_PROJECT_KEY`: cadastrado como Variable.
- `SONAR_ORGANIZATION`: cadastrado como Variable.

Os valores devem corresponder ao projeto e à organização cadastrados no SonarQube Cloud.

## 8. Testes automatizados

O projeto utiliza Vitest para execução dos testes automatizados.

Os testes têm como objetivo verificar o comportamento das funcionalidades implementadas e identificar possíveis falhas durante o desenvolvimento.

São executadas duas verificações principais:

- **Testes unitários:** executados por meio do comando `npm test`.
- **Testes com cobertura:** executados por meio de `npm run test:coverage`, gerando o relatório LCOV em `coverage/lcov.info`.

O relatório de cobertura é utilizado pelo SonarQube Cloud para complementar a análise de qualidade do código.

## 9. Qualidade de código

A qualidade do código é acompanhada por meio do SonarQube Cloud, integrado ao pipeline do GitHub Actions.

A ferramenta realiza análises estáticas para identificar possíveis problemas no código-fonte, incluindo:

- Bugs e possíveis erros de implementação;
- Vulnerabilidades de segurança;
- Code Smells;
- Duplicação de código;
- Cobertura de testes automatizados.

O arquivo `sonar-project.properties` contém as configurações necessárias para a análise, incluindo os diretórios do código-fonte, dos testes e a localização do relatório de cobertura.

O Quality Gate é utilizado como critério para avaliar se os resultados da análise atendem aos critérios de qualidade configurados no projeto.

## 10. Segurança

A segurança do projeto é considerada durante o desenvolvimento e nas etapas de validação automatizada.

As principais medidas adotadas incluem:

- Utilização de secrets do GitHub para armazenar tokens de integração.
- Não exposição de credenciais diretamente no código-fonte.
- Análise estática de segurança realizada pelo SonarQube Cloud.
- Verificação de possíveis vulnerabilidades identificadas durante a análise.
- Utilização de dependências gerenciadas pelo npm.
- Controle de alterações por meio do Git e GitHub.

Essas medidas contribuem para reduzir riscos e melhorar a confiabilidade do processo de desenvolvimento.

## 11. Build e artefatos

A geração da versão de produção é realizada por meio do comando:

```bash
npm run build
```

O Next.js executa o processo de compilação e gera os arquivos necessários para a versão de produção na pasta `.next`.

O relatório de cobertura dos testes é gerado em:

```text
coverage/lcov.info
```

Esse arquivo é utilizado na integração com o SonarQube Cloud.

Os principais artefatos gerados durante o processo são:

- Arquivos compilados da aplicação;
- Relatório LCOV de cobertura dos testes;
- Relatórios e resultados das análises realizadas pelo SonarQube Cloud.

## 12. Deploy

O projeto possui configuração para execução local e geração da versão de produção.

Para iniciar a aplicação em ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para executar a versão de produção localmente:

```bash
npm run start
```

A publicação em um serviço de hospedagem poderá ser realizada posteriormente, utilizando plataformas compatíveis com aplicações Next.js, como Vercel.

Atualmente, o pipeline está direcionado à integração contínua e à validação da aplicação, não contemplando uma etapa automatizada de deploy.

## 13. Monitoramento e observabilidade

O acompanhamento da execução do pipeline é realizado pela aba **Actions** do GitHub.

Por meio dela, é possível consultar:

- Histórico das execuções do workflow;
- Status de cada etapa do pipeline;
- Logs de instalação, testes, análise e build;
- Identificação de falhas durante a execução.

O SonarQube Cloud complementa esse acompanhamento por meio do dashboard de qualidade, disponibilizando indicadores sobre bugs, vulnerabilidades, Code Smells, cobertura de testes e resultados do Quality Gate.

Essas ferramentas permitem acompanhar a saúde do código e identificar oportunidades de melhoria.

## 14. Docker (opcional)

A aplicação não utiliza Docker na configuração atual.

A execução é realizada diretamente por meio do Node.js e do npm, sem necessidade de containerização.

A utilização do Docker poderá ser considerada futuramente para padronizar o ambiente de execução e facilitar a implantação em diferentes ambientes.

"use strict";

// Um tópico por dia: cada item deve terminar em código, teste ou explicação própria.
// 8 meses x 4 semanas x 6 dias = 192 atividades. Domingo é descanso.
const W = (id, title, tasks, outputs) => ({
  id, title, days: tasks.split("|"), outputs: outputs.split("|")
});

const MONTHS = [
  {
    title: "Java: lógica e fundamentos",
    subtitle: "Aprender a resolver problemas sem depender de framework.",
    weeks: [
      W("s01", "Ambiente e primeiros programas",
        "Instalar JDK 21 e executar um programa no IntelliJ|Criar repositório Git e fazer o primeiro commit|Usar variáveis, tipos primitivos e conversões|Ler dados com Scanner e formatar saída|Resolver cinco cálculos simples com operadores|Revisar sem consulta e corrigir dois programas com bugs",
        "Repositório java-fundamentos organizado|Dez exercícios executáveis versionados|README com instruções para rodar"),
      W("s02", "Condições e repetição",
        "Implementar if, else e comparações|Usar switch e operadores lógicos|Resolver problemas com for|Resolver problemas com while e do-while|Validar entrada inválida sem travar o programa|Construir menu de terminal com repetição",
        "Menu interativo funcionando|Doze exercícios com entradas de teste|Explicação de quando escolher for ou while"),
      W("s03", "Métodos, arrays e decomposição",
        "Criar métodos com parâmetros e retorno|Praticar escopo, sobrecarga e responsabilidade|Percorrer arrays e calcular estatísticas|Buscar maior, menor e média sem biblioteca pronta|Dividir um programa longo em métodos pequenos|Iniciar BibliotecaCLI: cadastrar livros em memória",
        "BibliotecaCLI com menu e cadastro|Oito exercícios usando métodos e arrays|Commit explicando a separação das responsabilidades"),
      W("s04", "Strings, depuração e revisão",
        "Trabalhar com String, equals e equalsIgnoreCase|Validar texto usando trim e isBlank|Criar busca de livros por título|Aprender a usar breakpoints e inspecionar variáveis|Reproduzir, localizar e corrigir três erros|Refazer exercícios das semanas anteriores sem consultar",
        "BibliotecaCLI busca livros por título|Três bugs documentados e corrigidos|Checkpoint: explicar métodos, arrays e fluxo de execução")
    ]
  },
  {
    title: "POO e Java profissional",
    subtitle: "Modelagem, coleções, exceções e domínio da linguagem.",
    weeks: [
      W("s05", "Classes e encapsulamento",
        "Modelar Livro, Usuario e Emprestimo|Criar construtores e atributos privados|Implementar getters apenas quando necessários|Criar métodos com regras de empréstimo|Entender static, final e modificadores de acesso|Refatorar BibliotecaCLI para objetos reais",
        "Modelo orientado a objetos sem atributos públicos|Empréstimo e devolução com regras básicas|Diagrama de classes simples no README"),
      W("s06", "Herança, interfaces e composição",
        "Praticar herança e sobrescrita de métodos|Usar polimorfismo em um exemplo pequeno|Implementar interface de notificação|Comparar composição e herança em dois cenários|Criar enums para status de empréstimo|Refatorar uma classe com responsabilidades demais",
        "Interface e duas implementações funcionais|Status do empréstimo representado por enum|Texto breve justificando composição versus herança"),
      W("s07", "Collections e Generics",
        "Trocar arrays fixos por ArrayList|Praticar Set para impedir itens duplicados|Usar Map para localizar livros por código|Implementar equals e hashCode corretamente|Ordenar livros com Comparator|Criar método genérico simples e revisar tipos",
        "BibliotecaCLI usando List, Set e Map|Busca e ordenação com critérios definidos|Dez exercícios de coleções resolvidos"),
      W("s08", "Exceções e tipos úteis",
        "Criar exceções de domínio para empréstimo inválido|Usar try-catch sem esconder falhas|Aprender try-with-resources em arquivo pequeno|Usar LocalDate e calcular prazo de devolução|Praticar BigDecimal em multa monetária|Criar record de resposta e revisar POO",
        "BibliotecaCLI calcula multa com BigDecimal|Erros de negócio têm mensagens claras|Checkpoint: explicar interface, coleção e exceção")
    ]
  },
  {
    title: "Java moderno, testes e SQL",
    subtitle: "Ferramentas essenciais e fundamentos de dados relacionais.",
    weeks: [
      W("s09", "Streams, Optional e arquivos",
        "Filtrar coleções com Stream e filter|Transformar listas usando map e collect|Aplicar sorted e groupingBy em relatórios|Usar Optional sem abusar de get|Salvar livros em CSV e tratar leitura inválida|Refatorar e documentar BibliotecaCLI",
        "Relatório de empréstimos usando Streams|Persistência CSV com tratamento de erro|BibliotecaCLI v1 com instruções de execução"),
      W("s10", "Maven, JUnit e boas práticas Git",
        "Migrar BibliotecaCLI para Maven|Criar primeiros testes com JUnit 5|Testar casos válidos e inválidos de empréstimo|Usar testes parametrizados|Criar branch e abrir pull request no próprio repositório|Analisar cinco vagas Java e listar requisitos repetidos",
        "Dez testes automatizados passando|Pull request com descrição e revisão própria|Lista de requisitos reais de vagas no README"),
      W("s11", "SQL: consultas fundamentais",
        "Criar tabelas e inserir dados no PostgreSQL|Praticar SELECT, WHERE e ORDER BY|Usar INSERT, UPDATE e DELETE com WHERE|Criar consultas com LIKE, IN e BETWEEN|Entender NULL e operadores IS NULL|Resolver dez consultas sem auxílio",
        "Script SQL reproduzível com dados de teste|Dez consultas SQL validadas|Descrição do resultado esperado de cada consulta"),
      W("s12", "JOIN, agregação e modelagem",
        "Desenhar DER de livros, usuários e empréstimos|Criar PK, FK e restrições básicas|Resolver INNER JOIN e LEFT JOIN|Aplicar GROUP BY, COUNT e HAVING|Praticar subconsulta e EXISTS|Construir relatório de empréstimos atrasados em SQL",
        "DER com relacionamento e cardinalidade|Doze consultas envolvendo JOIN e agregação|Checkpoint SQL sem copiar exemplos")
    ]
  },
  {
    title: "PostgreSQL, JDBC e Spring Boot",
    subtitle: "Sair do terminal e criar sua primeira API REST.",
    weeks: [
      W("s13", "Transações, índices e PostgreSQL",
        "Entender ACID com um exemplo de transferência de dados|Executar BEGIN, COMMIT e ROLLBACK|Criar índice e medir consulta com EXPLAIN|Comparar integridade por código e constraint|Revisar níveis de isolamento em exemplos simples|Criar script de banco da BibliotecaCLI",
        "Script com constraints e índice justificado|Exemplo que prova rollback|Três consultas analisadas com EXPLAIN"),
      W("s14", "JDBC e separação de camadas",
        "Abrir conexão JDBC via configuração externa|Implementar DAO para cadastrar e buscar livros|Usar PreparedStatement e evitar SQL injection|Criar camada de serviço separada de persistência|Tratar falhas de conexão e fechar recursos|Documentar execução da BibliotecaCLI com PostgreSQL",
        "BibliotecaCLI v2 persistindo no PostgreSQL|DAO usando PreparedStatement|README, instruções SQL e vídeo curto de demonstração"),
      W("s15", "Spring, HTTP e dependências",
        "Criar projeto Spring Boot pelo Initializr|Explicar IoC, DI, Bean e ApplicationContext|Praticar injeção por construtor|Entender GET, POST, PUT, PATCH e DELETE|Criar controller com endpoints de teste|Usar status HTTP e JSON adequadamente",
        "Projeto OrderFlow inicial rodando|Endpoints de exemplo com respostas HTTP corretas|Explicação própria de IoC e DI"),
      W("s16", "REST, DTOs e validação",
        "Modelar recursos Produto e Cliente|Criar DTOs de entrada e saída|Implementar endpoints CRUD em memória|Aplicar Bean Validation com mensagens úteis|Usar ResponseEntity e status apropriados|Criar requests .http e candidatar-se a vagas compatíveis",
        "API CRUD com DTOs e validação|Coleção .http cobrindo casos de erro|Primeiras candidaturas registradas")
    ]
  },
  {
    title: "Spring Data JPA e qualidade de APIs",
    subtitle: "Persistência real, regras de negócio e APIs bem comportadas.",
    weeks: [
      W("s17", "JPA e Spring Data",
        "Configurar datasource PostgreSQL no Spring|Mapear entidade Produto e sua chave|Criar JpaRepository e consultas básicas|Distinguir entidade de DTO de resposta|Persistir Cliente com validação de unicidade|Implementar CRUD real na OrderFlow",
        "API persiste produtos e clientes|DTOs desacoplados das entidades|Testes manuais com dados reais"),
      W("s18", "Relacionamentos e consultas",
        "Modelar Pedido e ItemPedido|Implementar ManyToOne e OneToMany|Entender fetch lazy e eager|Observar N+1 por logs de SQL|Criar consulta customizada com @Query|Usar paginação e ordenação no catálogo",
        "Pedido com itens e relacionamentos corretos|Exemplo de N+1 identificado e corrigido|Consulta paginada com filtros documentados"),
      W("s19", "Flyway, erros e transações",
        "Criar primeira migration Flyway versionada|Adicionar coluna por nova migration sem editar a antiga|Criar ControllerAdvice para erros globais|Definir resposta padronizada para erro de negócio|Usar @Transactional no cadastro completo do pedido|Provocar falha e verificar rollback no banco",
        "Migrations executam em banco vazio|Erros 400, 404 e 409 padronizados|Teste ou demonstração de rollback registrada"),
      W("s20", "Regras de domínio e documentação",
        "Validar status e transições de pedido|Calcular total com BigDecimal|Impedir quantidade inválida de itens|Documentar API com OpenAPI|Refatorar controllers para manter regra no service|Revisar cinco vagas e atualizar currículo técnico",
        "OrderFlow cria pedidos com regras testáveis|OpenAPI navegável e exemplos de request|README com diagrama e fluxo de pedido")
    ]
  },
  {
    title: "Testes, segurança e entrega",
    subtitle: "Competências do cotidiano em equipes profissionais.",
    weeks: [
      W("s21", "JUnit e Mockito no Spring",
        "Separar testes de unidade e integração|Testar service usando Mockito|Verificar chamada a dependências com verify|Usar @WebMvcTest para validar controller|Testar validações e erros de API|Corrigir bug intencional antes de olhar solução",
        "Testes de regras críticas passando|Testes de controller para sucesso e erro|Registro de bug: causa, teste e correção"),
      W("s22", "Testcontainers e testes de integração",
        "Subir PostgreSQL de teste com Testcontainers|Criar @DataJpaTest para consultas reais|Testar fluxo HTTP com banco de teste|Testar rollback com falha de item|Testar paginação e constraint de unicidade|Criar pipeline local de testes Maven",
        "Testes de integração reproduzíveis|Fluxo criar produto-cliente-pedido validado|Candidaturas e revisão de requisitos da semana"),
      W("s23", "Spring Security e autorização",
        "Diferenciar autenticação e autorização|Conhecer filtros do Spring Security|Proteger endpoints por perfil de usuário|Validar JWT usando componentes mantidos pela comunidade|Tratar 401 e 403 corretamente|Testar acesso autorizado e negado",
        "Endpoints protegidos com perfis|Segredo fora do repositório|Testes cobrindo 401, 403 e sucesso"),
      W("s24", "Docker, GitHub Actions e configuração",
        "Criar Dockerfile do backend|Subir API e Postgres no Docker Compose|Configurar env vars sem expor segredos|Criar GitHub Actions com build e testes|Adicionar endpoint de health e logs úteis|Executar projeto do zero apenas pelo README",
        "Docker Compose sobe API e PostgreSQL|CI verde em pull request|README permite reproduzir ambiente")
    ]
  },
  {
    title: "Projeto final: OrderFlow",
    subtitle: "Uma API de pedidos que demonstre domínio de problemas reais.",
    weeks: [
      W("s25", "Modelagem de produto, estoque e pedidos",
        "Revisar requisitos funcionais e regras de negócio|Desenhar DER de produto, cliente, pedido e item|Criar migrations para estoque e preço|Criar validações de status do produto|Escrever testes de criação de pedido|Abrir pull request com decisões de modelagem",
        "DER e regras de negócio atualizados|Migrations e testes básicos prontos|PR com descrição técnica revisada"),
      W("s26", "Estoque consistente e transações",
        "Implementar reserva ou baixa de estoque transacional|Impedir venda de produto sem saldo suficiente|Tratar pedido com múltiplos itens atomicamente|Entender lock otimista e aplicar se necessário|Testar duas compras concorrentes do mesmo item|Registrar decisão de concorrência no README",
        "Saldo de estoque não fica inconsistente|Teste de concorrência reproduzível|Explicação de transação e lock escolhido"),
      W("s27", "Hardening e manutenção",
        "Tratar itens duplicados no mesmo pedido|Evitar atualização não permitida de status|Adicionar filtros de pedidos por data e cliente|Medir uma consulta lenta com EXPLAIN|Refatorar um trecho com code smell|Executar regressão completa após alteração",
        "API cobre cenários de borda importantes|Consulta otimizada com evidência simples|Testes de regressão passando"),
      W("s28", "Publicação e apresentação",
        "Preparar configuração segura para deploy|Publicar API em ambiente acessível ou documentar execução local reproduzível|Validar health, logs e erros de inicialização|Criar diagrama e exemplos HTTP no README|Gravar demonstração de três minutos|Simular code review e ajustar currículo",
        "OrderFlow concluído e demonstrável|README, vídeo, diagramas e testes atualizados|Candidaturas com links do portfólio")
    ]
  },
  {
    title: "Entrevistas e entrada no mercado",
    subtitle: "Revisão, debugging, desafios reais e candidaturas contínuas.",
    weeks: [
      W("s29", "Java em entrevistas",
        "Explicar JDK, JRE, JVM e compilação|Explicar heap, stack e garbage collection em nível básico|Resolver desafios de String e arrays|Revisar equals, hashCode e coleções|Comparar interface, classe abstrata e composição|Fazer entrevista simulada de Java e revisar erros",
        "Resumo com respostas próprias de Java|Dez desafios de lógica resolvidos|Simulado gravado ou registrado"),
      W("s30", "Spring, HTTP e SQL em entrevistas",
        "Explicar ciclo de requisição REST|Desenhar fluxo Controller-Service-Repository|Revisar DI, Beans e profiles|Resolver JOIN e GROUP BY sem consulta|Explicar transação, índice e problema N+1|Corrigir bug desconhecido em API com logs e testes",
        "Dez consultas SQL sem consultar material|Exercício de debugging documentado|Simulado técnico de Spring e PostgreSQL"),
      W("s31", "Algoritmos e desafio prático",
        "Resolver busca linear e binária|Explicar Big O de listas, mapas e loops|Implementar pilha ou fila simples|Resolver desafios com HashMap e Set|Fazer take-home de API em tempo limitado|Revisar solução, testes e README do desafio",
        "Quinze exercícios de algoritmo registrados|Take-home com testes e documentação|Lista pessoal dos pontos a revisar"),
      W("s32", "Portfólio, candidaturas e próximos passos",
        "Revisar currículo com base em anúncios reais|Revisar LinkedIn e repositórios fixados|Fazer simulado de conversa com recrutador|Fazer simulado técnico completo|Candidatar-se a vagas compatíveis e registrar retorno|Definir próximos 30 dias a partir dos feedbacks",
        "Dois projetos com README, testes e demos|Currículo atualizado e histórico de candidaturas|Plano de continuidade baseado em lacunas reais")
    ]
  }
];

// Projetos separados dos checkboxes diários para monitorar entregas reais.
const PROJECTS = [
  {
    id: "biblioteca", name: "BibliotecaCLI", period: "Meses 1 a 4",
    description: "Sistema de biblioteca no terminal: primeiro em memória, depois com PostgreSQL via JDBC.",
    stack: "Java 21 · POO · Collections · Maven · JUnit 5 · JDBC · PostgreSQL",
    phases: [
      ["Fundamentos", "Menu com navegação sem falhas|Cadastro e listagem de livros|Busca por título e código"],
      ["Modelagem e regras", "Classes Livro, Usuário e Empréstimo|Empréstimo e devolução com validação|Multa monetária com BigDecimal e data com LocalDate"],
      ["Qualidade", "Collections no armazenamento em memória|Testes JUnit de regras principais|Exceções de domínio e mensagens claras"],
      ["Persistência", "DER e script SQL|DAO usando PreparedStatement|Conexão e operações CRUD via JDBC"],
      ["Entrega", "Projeto Maven reproduzível|README com testes, instruções e exemplos|Vídeo ou GIF demonstrando o fluxo"]
    ]
  },
  {
    id: "orderflow", name: "OrderFlow API", period: "Meses 4 a 7",
    description: "API REST de produtos, clientes, estoque e pedidos com regras de negócio e testes.",
    stack: "Java 21 · Spring Boot · PostgreSQL · JPA · Flyway · Security · Docker · CI",
    phases: [
      ["Contrato e domínio", "Requisitos funcionais descritos|DER de cliente, produto, pedido e item|Endpoints REST e DTOs definidos"],
      ["Persistência e regras", "Migrations Flyway versionadas|CRUD de produtos e clientes|Pedido com validação e cálculo BigDecimal|Estoque transacional sem venda acima da quantidade"],
      ["Qualidade", "Erros 400, 404, 409 padronizados|Testes unitários com JUnit e Mockito|Testes de integração com Testcontainers|Teste de concorrência de estoque"],
      ["Segurança e operação", "Autenticação e autorização funcionando|Segredos externos ao repositório|Docker Compose com API e banco|Pipeline CI executando testes"],
      ["Portfólio", "Swagger/OpenAPI com exemplos|README com arquitetura e trade-offs|Demonstração de três minutos|Deploy acessível ou execução local reproduzível"]
    ]
  }
];

const STORAGE = "roadmap-java-junior-2027-v2";
const THEME_KEY = "rm-theme";
const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const $ = selector => document.querySelector(selector);
const esc = text => String(text).replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
);
const slug = text => text.toLowerCase().normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const validRecord = obj => obj !== null && typeof obj === "object" && !Array.isArray(obj);

function load() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE));
    if (validRecord(data)) return data;
  } catch (_) { /* Sem dados ou JSON inválido. */ }
  return {};
}
let data = load();
let checks = validRecord(data.checks) ? data.checks : {};
let logs = validRecord(data.logs) ? data.logs : {};
let mode = data.mode === "ferias" ? "ferias" : "aulas";
let openMonth = 0;
let openProject = "biblioteca";
const drafts = {};
const allWeeks = MONTHS.flatMap(month => month.weeks);

if (MONTHS.length !== 8 || allWeeks.length !== 32 || allWeeks.some(w => w.days.length !== 6 || w.outputs.length !== 3)) {
  throw new Error("O roadmap precisa ter 8 meses, 32 semanas, 6 dias e 3 entregas por semana.");
}

function save() {
  try { localStorage.setItem(STORAGE, JSON.stringify({ version: 2, checks, logs, mode })); }
  catch (err) { console.warn("Não foi possível salvar o progresso:", err); }
}
function dayKey(w, task) { return `d:${w.id}:${slug(task)}`; }
function outputKey(w, text) { return `e:${w.id}:${slug(text)}`; }
function projectKey(p, phase, text) { return `p:${p.id}:${slug(phase)}:${slug(text)}`; }
function countWeek(w) { return [w.days.filter(t => checks[dayKey(w, t)]).length, w.days.length]; }
function countMonth(m) {
  const values = m.weeks.map(countWeek);
  return [values.reduce((sum, n) => sum + n[0], 0), values.reduce((sum, n) => sum + n[1], 0)];
}
function countProject(p) {
  let done = 0, total = 0;
  p.phases.forEach(([phase, items]) => items.split("|").forEach(text => {
    total++; if (checks[projectKey(p, phase, text)]) done++;
  }));
  return [done, total];
}
function checkbox(key, body, kind) {
  return `<label class="day"><input type="checkbox" data-${kind}="${esc(key)}" ${checks[key] ? "checked" : ""}>` +
    `<span class="box" aria-hidden="true"></span><span class="t">${body}</span></label>`;
}
function chevron() {
  return `<svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
}

function renderRoadmap() {
  $("#blocks").innerHTML = MONTHS.map((m, mi) => {
    const [a, total] = countMonth(m);
    const weeksHTML = m.weeks.map((w, wi) => {
      const [done, size] = countWeek(w);
      const daysHTML = w.days.map((task, di) => checkbox(dayKey(w, task),
        `<small>Dia ${di + 1} · ${DAYS[di]}</small>${esc(task)}`, "day")).join("");
      return `<div class="week"><div class="wh"><div><em>Semana ${mi * 4 + wi + 1}</em><h3>${esc(w.title)}</h3></div><small>${done}/${size}</small></div>` +
        `${daysHTML}<button class="ver" type="button" data-deliver="${w.id}">Ver entregas →</button></div>`;
    }).join("");
    return `<article class="block ${mi === openMonth ? "open" : ""} ${a === total ? "done" : ""}">` +
      `<button class="head" type="button" data-month="${mi}" aria-expanded="${mi === openMonth}">` +
      `<span class="num">${mi + 1}</span><span class="info"><h2>${esc(m.title)}</h2><p>${esc(m.subtitle)}</p>` +
      `<span class="mini"><span class="bar"><i style="width:${(a / total) * 100}%"></i></span>${a}/${total}</span></span>${chevron()}</button>` +
      `<div class="body">${weeksHTML}</div></article>`;
  }).join("");

  const done = allWeeks.reduce((n, w) => n + countWeek(w)[0], 0);
  const total = 192;
  const percent = Math.round((done / total) * 100);
  $("#pct").textContent = `${percent}%`;
  $("#bar").style.width = `${percent}%`;
  $("#count").textContent = `${done} de ${total} dias concluídos · Entregas semanais e projetos na sua própria lista`;
  $("#progressTrack").setAttribute("aria-valuenow", String(percent));
}

function renderProjects() {
  $("#v-proj").innerHTML = PROJECTS.map((p, idx) => {
    const [done, total] = countProject(p);
    const phasesHTML = p.phases.map(([phase, items]) =>
      `<div class="week"><div class="wh"><h3>${esc(phase)}</h3></div>` +
      items.split("|").map(text => checkbox(projectKey(p, phase, text), esc(text), "project-check")).join("") +
      `</div>`).join("");
    const entries = Array.isArray(logs[p.id]) ? logs[p.id] : [];
    const history = entries.map((entry, i) =>
      `<li><b>${esc(entry.date || "")}</b><p>${esc(entry.text || "")}</p>` +
      `<button class="x" type="button" data-remove="${p.id}:${i}">remover</button></li>`).join("");
    const isOpen = p.id === openProject;
    return `<article class="block ${isOpen ? "open" : ""} ${done === total ? "done" : ""}">` +
      `<button class="head" type="button" data-project="${p.id}" aria-expanded="${isOpen}">` +
      `<span class="num">${idx + 1}</span><span class="info"><p class="tags">${esc(p.period)} · ${esc(p.stack)}</p>` +
      `<h2>${esc(p.name)}</h2><p>${esc(p.description)}</p>` +
      `<span class="mini"><span class="bar"><i style="width:${(done / total) * 100}%"></i></span>${done}/${total}</span></span>${chevron()}</button>` +
      `<div class="body">${phasesHTML}<div class="week wide"><div class="wh"><h3>Check-in de hoje</h3></div>` +
      `<textarea data-draft="${p.id}" maxlength="700" placeholder="O que implementei? O que falhou? O que farei depois?">${esc(drafts[p.id] || "")}</textarea>` +
      `<button class="ghost" type="button" data-log="${p.id}">Registrar check-in</button><ul class="log">${history}</ul></div></div></article>`;
  }).join("");
}

function renderMode() {
  document.querySelectorAll("[data-mode]").forEach(button => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("on", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const vacation = mode === "ferias";
  $("#weekdayLabel").textContent = vacation ? "Seg–Sex · 3h30/dia" : "Seg–Sex · 2h15/dia";
  $("#weekdayText").textContent = vacation
    ? "45 min de conceito, 2h15 de prática e 30 min de testes e revisão."
    : "30 min de conceito, 1h30 de código e 15 min de revisão.";
  $("#saturdayLabel").textContent = vacation ? "Sábado · 5h" : "Sábado · 3h45";
  $("#saturdayText").textContent = vacation
    ? "3h de projeto, 1h de revisão e 1h de algoritmos/carreira."
    : "2h30 de projeto, 45 min de revisão e 30 min de carreira.";
  $("#modeNote").textContent = vacation
    ? "22h30/semana. Aumente a prática, não o número de assuntos."
    : "15h/semana. Só marque quando conseguir demonstrar a prática.";
}

function openDeliverables(id) {
  const week = allWeeks.find(w => w.id === id);
  if (!week) return;
  const monthIndex = MONTHS.findIndex(m => m.weeks.includes(week));
  $("#dk").textContent = `Mês ${monthIndex + 1} · Semana ${Number(id.slice(1))} · ${week.title}`;
  $("#dt").textContent = "Entrega prática da semana";
  $("#db").innerHTML = week.outputs.map(text => checkbox(outputKey(week, text), esc(text), "output")).join("");
  $("#dlg").showModal();
}

$("#blocks").addEventListener("click", event => {
  const deliver = event.target.closest("[data-deliver]");
  if (deliver) return openDeliverables(deliver.dataset.deliver);
  const header = event.target.closest("[data-month]");
  if (!header) return;
  const idx = Number(header.dataset.month);
  openMonth = openMonth === idx ? -1 : idx;
  renderRoadmap();
});
$("#blocks").addEventListener("change", event => {
  const key = event.target.dataset.day;
  if (!key) return;
  checks[key] = event.target.checked;
  save(); renderRoadmap();
});
$("#db").addEventListener("change", event => {
  const key = event.target.dataset.output;
  if (!key) return;
  checks[key] = event.target.checked;
  save();
});
$("#v-proj").addEventListener("input", event => {
  const id = event.target.dataset.draft;
  if (id) drafts[id] = event.target.value;
});
$("#v-proj").addEventListener("change", event => {
  const key = event.target.dataset.projectCheck;
  if (!key) return;
  checks[key] = event.target.checked;
  save(); renderProjects();
});
$("#v-proj").addEventListener("click", event => {
  const head = event.target.closest("[data-project]");
  if (head) {
    const id = head.dataset.project;
    openProject = openProject === id ? "" : id;
    return renderProjects();
  }
  const logButton = event.target.closest("[data-log]");
  if (logButton) {
    const id = logButton.dataset.log;
    const text = (drafts[id] || "").trim();
    if (!text) return;
    if (!Array.isArray(logs[id])) logs[id] = [];
    logs[id].unshift({ date: new Date().toLocaleDateString("pt-BR"), text });
    drafts[id] = "";
    save(); return renderProjects();
  }
  const remove = event.target.closest("[data-remove]");
  if (remove) {
    const [id, index] = remove.dataset.remove.split(":");
    if (Array.isArray(logs[id])) logs[id].splice(Number(index), 1);
    save(); renderProjects();
  }
});

document.querySelectorAll(".tabs button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(tab => {
    const active = tab === button;
    tab.classList.toggle("on", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  $("#v-road").hidden = button.dataset.tab !== "road";
  $("#v-proj").hidden = button.dataset.tab !== "proj";
}));

document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => {
  mode = button.dataset.mode;
  save(); renderMode();
}));

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $("#theme").textContent = theme === "dark" ? "☀" : "☾";
  try { localStorage.setItem(THEME_KEY, theme); } catch (_) { /* Modo privado. */ }
}
$("#theme").addEventListener("click", () =>
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")
);
$("#dx").addEventListener("click", () => $("#dlg").close());
$("#dlg").addEventListener("click", event => {
  if (event.target === $("#dlg")) $("#dlg").close();
});

$("#reset").addEventListener("click", () => {
  if (!confirm("Zerar os checkboxes e todos os check-ins deste novo roadmap?")) return;
  checks = {}; logs = {};
  save(); renderRoadmap(); renderProjects();
});
$("#export").addEventListener("click", () => {
  const content = JSON.stringify({ version: 2, checks, logs, mode, exportedAt: new Date().toISOString() }, null, 2);
  const url = URL.createObjectURL(new Blob([content], { type: "application/json" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "roadmap-java-junior-backup.json";
  document.body.appendChild(anchor);
  anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
$("#importButton").addEventListener("click", () => $("#importFile").click());
$("#importFile").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 2_000_000) throw new Error("Arquivo muito grande.");
    const imported = JSON.parse(await file.text());
    if (imported.version !== 2 || !validRecord(imported.checks) || !validRecord(imported.logs)) {
      throw new Error("Backup inválido ou versão incompatível.");
    }
    if (!confirm("Substituir o progresso atual pelos dados deste backup?")) return;
    checks = Object.fromEntries(Object.entries(imported.checks).filter(([key, value]) =>
      typeof key === "string" && key.length < 250 && typeof value === "boolean"));
    logs = {};
    for (const p of PROJECTS) {
      const entries = imported.logs[p.id];
      logs[p.id] = Array.isArray(entries) ? entries.slice(0, 150)
        .filter(e => validRecord(e) && typeof e.text === "string" && typeof e.date === "string")
        .map(e => ({ text: e.text.slice(0, 700), date: e.date.slice(0, 30) })) : [];
    }
    mode = imported.mode === "ferias" ? "ferias" : "aulas";
    save(); renderMode(); renderRoadmap(); renderProjects();
    alert("Backup importado com sucesso.");
  } catch (error) { alert(`Não foi possível importar: ${error.message}`); }
  finally { event.target.value = ""; }
});

setTheme(document.documentElement.dataset.theme || "dark");
renderMode();
renderRoadmap();
renderProjects();

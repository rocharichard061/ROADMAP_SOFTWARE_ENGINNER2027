const D=[
["Java Fundamentos","Base da linguagem e orientação a objetos.",[
["Setup e sintaxe","Instalar JDK 21, IntelliJ, Git e GitHub;Variáveis, tipos e operadores;if/else, switch e loops;Métodos e escopo;Arrays e Strings;Exercícios de lógica e revisão"],
["Orientação a objetos","Classes, objetos e encapsulamento;Construtores e static;Herança e polimorfismo;Interfaces e classes abstratas;Enums e records;Modelar Conta e Cliente"],
["Exceptions e Collections","Exceptions e try-with-resources;List e ArrayList;Set e HashSet;Map e HashMap por dentro;equals e hashCode;Comparable, Comparator e Generics"],
["Streams e CLI","Lambdas;Streams: map, filter, collect;Optional;BigDecimal e java.time;Leitura e escrita de arquivos;Projeto: CLI Banco v1"]]],
["Java sólido, Git e testes","Qualidade de código desde cedo.",[
["Git e Maven","Git: commit, branch, merge;Pull request e conflitos;Maven e dependências;Estrutura de projeto e pacotes;Clean code e nomes;README e perfil do GitHub"],
["Testes com JUnit","JUnit 5 básico;Assertions e testes parametrizados;Mockito: mock e verify;TDD no CLI Banco;Cobertura com JaCoCo;Refatorar com testes"],
["SOLID e patterns","SRP e OCP;LSP, ISP e DIP;Strategy;Factory e Builder;Observer;Aplicar no CLI Banco"],
["Java moderno e SQL","Sealed, pattern matching e records;Thread e Runnable;ExecutorService;SQL: SELECT, WHERE, ORDER BY;SQL: JOIN e GROUP BY;CLI Banco v2 com testes"]]],
["Spring Boot, JPA e Postgres","Sua primeira API de verdade.",[
["Spring Boot e REST","IoC, DI e beans;Starters e auto-configuration;Controllers e REST;Status codes e DTOs;Profiles e YAML;API CRUD de clientes"],
["JPA e Hibernate","Postgres no Docker;Entidades e @Id;Relacionamentos 1:N e N:N;Spring Data JPA repositories;Lazy, eager e problema N+1;Queries derivadas e @Query"],
["Qualidade da API","Bean Validation;Handler global de erros (ProblemDetail);Paginação e ordenação;OpenAPI e Swagger;MapStruct;Logs com SLF4J"],
["Flyway e transações","Flyway migrations;@Transactional e propagation;Armadilhas do proxy;Modelagem DER bancário;Contas e transferências;Meridian API v0"]]],
["Projeto 1 · Meridian","Regras de negócio de banco, testadas de verdade.",[
["Domínio bancário","Requisitos e regras de negócio;Cliente e conta: tipos e status;Depósito e saque;Saldo com BigDecimal;Limites e validações;Revisão e testes"],
["Transferências","Transferência atômica;Extrato paginado;Tarifas e limite diário;Estorno;Auditoria de transações;Testes de serviço"],
["Testes de integração","Testcontainers com Postgres;@DataJpaTest;@WebMvcTest;Testes de regra de negócio;Cobertura de 75%;Corrigir bugs encontrados"],
["Entrega do projeto","Índices e consulta do extrato;Dockerfile;docker-compose com Postgres;README e diagrama;Revisão do código;Publicar o Meridian"]]],
["Segurança, concorrência e CI","O que separa um CRUD de um sistema de banco.",[
["Spring Security","Autenticação vs autorização;BCrypt e usuários;JWT: geração;JWT: filtro e validação;Roles e permissões;OWASP Top 10 básico"],
["Concorrência no banco","ACID;Níveis de isolamento;Lock otimista (@Version);Lock pessimista;Idempotency-Key;Teste de 100 transferências simultâneas"],
["Docker e CI","Docker multi-stage;docker-compose completo;GitHub Actions: build;GitHub Actions: testes;Secrets e variáveis;Fluxo de PR e review"],
["Postgres aplicado","Window functions;CTEs;Índices B-tree e compostos;EXPLAIN ANALYZE;Locks e deadlocks;Meridian v2 com CI verde"]]],
["Base sólida · Meridian","Arquitetura, regras avançadas e batch no seu projeto principal.",[
["Arquitetura","Camadas vs hexagonal;DDD leve: entidades e value objects;Ports e adapters;Refatorar o Meridian;Exceptions de domínio;Clean architecture na prática"],
["Meridian · Regras avançadas","Transferências agendadas;Cheque especial e juros;Extrato com filtros avançados;Categorias de transação;Regras de limite por perfil;Testes de borda das regras"],
["Meridian · Batch e relatórios","Spring Batch: fechamento mensal;Agendamento com @Scheduled;Relatórios em SQL;Cache simples;Documentação da API;Testes de integração"],
["Revisão da base","Java core: 50 perguntas;Spring e JPA: 50 perguntas;SQL: 50 exercícios;Git e Docker: revisão;Mock interview;Polir o Meridian e o README"]]],
["PayStream · Kafka e Redis","Mensageria, resiliência e o segundo projeto.",[
["Kafka base","Mensageria e por que Kafka;Topic, partição e offset;Consumer groups;Kafka no Docker Compose;Producer com Spring Kafka;Consumer com Spring Kafka"],
["Confiabilidade","Idempotência no consumidor;Retry e DLQ;Outbox Pattern;Saga (conceito);Chaves de partição e ordem;Testes com Kafka"],
["Microsserviços","Monolito vs microsserviços;Separar payment e ledger;Síncrono vs eventos;API Gateway (conceito);Redis e @Cacheable;Resilience4j: retry e timeout"],
["PayStream · Fluxo completo","Fluxo de pagamento completo;Circuit breaker;Rate limit;Actuator e Micrometer;Prometheus e Grafana;Publicar o PayStream"]]],
["PayStream na AWS e entrevistas","Nuvem, deploy e fase final de candidaturas.",[
["AWS essencial","IAM e conta segura;EC2 e rede básica;S3;RDS Postgres;SQS e SNS;Deploy do PayStream na AWS"],
["Containers e K8s","ECR e ECS (conceito);Kubernetes: pod e deployment;Services e config;kind ou minikube local;Logs e monitoramento;CI/CD até o deploy"],
["Entrevista técnica","JVM: heap e GC;CompletableFuture e virtual threads;Algoritmos: arrays e hash;Algoritmos: stack e árvores;System design júnior;Take-home simulado"],
["Candidaturas","LinkedIn e currículo final;Vídeo demo dos projetos;30 candidaturas;Mock comportamental;Mock técnico;Retro e próximos passos"]]]
];
const DAYS=["Seg","Ter","Qua","Qui","Sex","Sáb"],KEY="rm-java-v1";
let st={};try{st=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
const $=s=>document.querySelector(s),root=$("#blocks");
let openIdx=+(localStorage.getItem("rm-open")||0);
const cnt=(m,w)=>{let a=0,b=0;D[m][2].forEach((_,wi)=>{if(w!=null&&w!==wi)return;for(let d=0;d<6;d++){b++;if(st[`${m}-${wi}-${d}`])a++}});return[a,b]};
function render(){
 root.innerHTML=D.map((b,m)=>{const[a,t]=cnt(m);
  const weeks=b[2].map((w,wi)=>{const[x,y]=cnt(m,wi);
   const days=w[1].split(";").map((d,di)=>{const id=`${m}-${wi}-${di}`;
    return`<label class="day"><input type="checkbox" data-id="${id}" ${st[id]?"checked":""}><span class="box"></span><span class="t"><small>Dia ${di+1} · ${DAYS[di]}</small>${d}</span></label>`}).join("");
   return`<div class="week"><div class="wh"><div><em>Semana ${wi+1}</em><h3>${w[0]}</h3></div><small>${x}/${y}</small></div>${days}<button class="ver" data-e="${m}-${wi}">Ver projeto →</button></div>`}).join("");
  return`<article class="block ${m===openIdx?"open":""} ${a===t?"done":""}"><button class="head" data-m="${m}" aria-expanded="${m===openIdx}"><span class="num">${m+1}</span><span class="info"><h2>${b[0]}</h2><p>${b[1]}</p><span class="mini"><span class="bar"><i style="width:${a/t*100}%"></i></span>${a}/${t}</span></span><svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="body">${weeks}</div></article>`}).join("");
 let A=0,T=0;D.forEach((_,m)=>{const[a,t]=cnt(m);A+=a;T+=t});
 const p=Math.round(A/T*100);$("#pct").textContent=p+"%";$("#bar").style.width=p+"%";$("#count").textContent=`${A} de ${T} dias concluídos`;
}
root.addEventListener("click",e=>{const v=e.target.closest(".ver");if(v){const[q,r]=v.dataset.e.split("-");return openE(+q,+r)}const h=e.target.closest(".head");if(!h)return;const m=+h.dataset.m;openIdx=openIdx===m?-1:m;try{localStorage.setItem("rm-open",openIdx)}catch(e){}render()});
root.addEventListener("change",e=>{const id=e.target.dataset.id;if(!id)return;e.target.checked?st[id]=1:delete st[id];save();const y=scrollY;render();scrollTo(0,y)});
const th=$("#theme"),setT=t=>{document.documentElement.dataset.theme=t;th.textContent=t==="dark"?"☀":"☾";try{localStorage.setItem("rm-theme",t)}catch(e){}};
th.onclick=()=>setT(document.documentElement.dataset.theme==="dark"?"light":"dark");
$("#reset").onclick=()=>{if(confirm("Zerar todo o progresso?")){st={};save();render()}};
setT(document.documentElement.dataset.theme||"light");render();

/* ===== Projetos ===== */
const P=[
["Meridian","Meses 4 a 6","Banco digital com contas, transferências e extrato. Foco em consistência de dados.","Java 21 · Spring Boot · PostgreSQL · Flyway · Testcontainers · Docker",[
["Planejamento",["Repositório criado com README inicial","DER desenhado (cliente, conta, transação)","Regras de negócio escritas em 1 página"]],
["Regras de negócio",["Saldo nunca fica negativo","Transferência atômica com @Transactional","Limite diário e tarifas configuráveis","Estorno gera lançamento inverso (nunca apaga)","Transferências agendadas","Cheque especial com juros"]],
["Qualidade",["Testes unitários das regras","Testes de integração com Testcontainers","Cobertura de 75% ou mais","Teste com 100 transferências concorrentes"]],
["Segurança",["JWT com roles","Idempotency-Key nas transferências"]],
["Arquitetura",["Arquitetura hexagonal aplicada","Job Spring Batch de fechamento mensal"]],
["Entrega",["Docker Compose sobe tudo com 1 comando","CI verde no GitHub Actions","README com diagrama e decisões","Vídeo demo de 3 minutos"]]]],
["PayStream","Meses 7 e 8","Pix distribuído entre serviços, com mensageria, cache e deploy na nuvem.","Spring Boot · Kafka · PostgreSQL · Redis · Resilience4j · Grafana · AWS",[
["Planejamento",["Diagrama de serviços e eventos","Contratos dos eventos definidos"]],
["Serviços",["payment-service publica o evento","ledger-service debita e credita","notification-service consome","Outbox Pattern implementado"]],
["Confiabilidade",["Consumidor idempotente (sem cobrança dupla)","Retry e DLQ funcionando","Circuit breaker nas chamadas externas","Rate limit com Redis","Teste derrubando o Kafka no meio do fluxo"]],
["Observabilidade",["Métricas no Prometheus","Dashboard Grafana (TPS, latência, erros)"]],
["AWS",["Alerta de gasto e IAM com permissão mínima","Banco no RDS Postgres","Serviços na EC2 com Docker","Arquivos no S3"]],
["Entrega",["README com diagrama e o que quebra se X cair","Vídeo demo de 3 minutos"]]]]
];
let lg={};try{lg=JSON.parse(localStorage.getItem("rm-logs"))||{}}catch(e){}
const dr={},vp=$("#v-proj"),esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let oP=0;
const pc=i=>{let a=0,b=0;P[i][4].forEach((f,fi)=>f[1].forEach((_,k)=>{b++;if(st[`p${i}-${fi}-${k}`])a++}));return[a,b]};
function renderP(){
 vp.innerHTML=P.map((p,i)=>{const[a,b]=pc(i);
  const ph=p[4].map((f,fi)=>`<div class="week"><div class="wh"><h3>${f[0]}</h3></div>${f[1].map((t,k)=>{const id=`p${i}-${fi}-${k}`;return`<label class="day"><input type="checkbox" data-id="${id}" ${st[id]?"checked":""}><span class="box"></span><span class="t">${t}</span></label>`}).join("")}</div>`).join("");
  const L=(lg[i]||[]).map((e,j)=>`<li><b>${e.d}</b><p>${esc(e.t)}</p><button class="x" data-del="${i}-${j}">remover</button></li>`).join("");
  return`<article class="block ${i===oP?"open":""} ${a===b?"done":""}"><button class="head" data-p="${i}" aria-expanded="${i===oP}"><span class="num">${i+1}</span><span class="info"><p class="tags">${p[1]} · ${p[3]}</p><h2>${p[0]}</h2><p>${p[2]}</p><span class="mini"><span class="bar"><i style="width:${a/b*100}%"></i></span>${a}/${b}</span></span><svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="body">${ph}<div class="week wide"><div class="wh"><h3>Check-in de hoje</h3></div><textarea data-dr="${i}" placeholder="O que fiz hoje? O que travou? Qual é o próximo passo?">${esc(dr[i]||"")}</textarea><button class="ghost" data-log="${i}">Registrar check-in</button><ul class="log">${L}</ul></div></div></article>`}).join("");
}
vp.addEventListener("click",e=>{
 const h=e.target.closest(".head"),g=e.target.closest("[data-log]"),x=e.target.closest("[data-del]");
 if(h){const i=+h.dataset.p;oP=oP===i?-1:i;renderP()}
 else if(g){const i=+g.dataset.log,t=(dr[i]||"").trim();if(!t)return;(lg[i]=lg[i]||[]).unshift({d:new Date().toLocaleDateString("pt-BR"),t});dr[i]="";try{localStorage.setItem("rm-logs",JSON.stringify(lg))}catch(e){}renderP()}
 else if(x){const[i,j]=x.dataset.del.split("-");lg[i].splice(+j,1);try{localStorage.setItem("rm-logs",JSON.stringify(lg))}catch(e){}renderP()}
});
vp.addEventListener("input",e=>{if(e.target.dataset.dr!=null)dr[e.target.dataset.dr]=e.target.value});
vp.addEventListener("change",e=>{const id=e.target.dataset.id;if(!id)return;e.target.checked?st[id]=1:delete st[id];save();const y=scrollY;renderP();scrollTo(0,y)});
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tabs button").forEach(x=>x.classList.toggle("on",x===b));$("#v-road").hidden=b.dataset.tab!=="road";vp.hidden=b.dataset.tab!=="proj"});
$("#reset").onclick=()=>{if(confirm("Zerar todo o progresso e os check-ins?")){st={};lg={};save();try{localStorage.removeItem("rm-logs")}catch(e){}render();renderP()}};
renderP();

/* ===== Entregas semanais ===== */
const E="Repositório java-lab|Repo java-lab no GitHub com README;15 exercícios de lógica resolvidos e commitados;Programa com tabuada e média de números lidos do teclado#Domínio Conta e Cliente|Classes Conta e Cliente com encapsulamento;Interface Titular e enum TipoConta;Record de Extrato com testes manuais no main#CLI Banco, núcleo|Menu no terminal: criar conta, depositar e sacar;Exception própria SaldoInsuficiente;Contas guardadas em Map com equals e hashCode#CLI Banco v1 completo|Extrato ordenado com Streams;Valores em BigDecimal;Persistência em arquivo CSV;README com como rodar#Projeto no Maven e Git|CLI Banco migrado para Maven com pacotes organizados;Branches de feature e 3 pull requests no seu repo;README com prints e perfil do GitHub atualizado#Testes do CLI Banco|20 testes JUnit nas regras de conta;Mockito no repositório de contas;Cobertura mínima de 70% no JaCoCo#Código com SOLID|Regra de tarifa como Strategy;Factory para criar tipos de conta;Texto de 1 página explicando o que refatorou e por quê#CLI Banco v2|Uso de records, sealed e streams;Depósito e saque em threads sem corromper o saldo;10 consultas SQL escritas sobre um modelo de banco#API de clientes|CRUD de clientes com Spring Boot;DTOs e status codes corretos;Coleção de requests (Postman ou .http) no repo#Persistência com Postgres|Postgres no docker-compose;Entidades Cliente e Conta com relacionamentos;3 queries customizadas nos repositórios#API profissional|Validações com mensagens claras;Handler global de erros e paginação;Swagger funcionando#Base do Meridian|Migrations Flyway com o DER bancário;Endpoint de transferência simples com @Transactional;Teste mostrando rollback quando falha#Meridian · domínio|Documento de regras de negócio (1 página);Depósito, saque e saldo com BigDecimal;Limites validados com testes unitários#Meridian · transferências|Transferência atômica entre contas;Extrato paginado com filtros;Estorno por lançamento inverso e auditoria#Meridian · testes|Testcontainers com Postgres real;Testes de integração dos endpoints;Cobertura de 75% no relatório#Meridian v1 publicado|Dockerfile e docker-compose com 1 comando;Índice no extrato e EXPLAIN registrado;README com diagrama e regras#Meridian · segurança|Login com JWT e BCrypt;Roles CLIENTE e ADMIN;Endpoints protegidos com testes#Meridian · concorrência|Idempotency-Key nas transferências;Lock otimista com @Version;Teste com 100 transferências simultâneas#Meridian · CI e Docker|Dockerfile multi-stage;GitHub Actions rodando build e testes;Badge de CI verde no README#Meridian v2|3 consultas com window functions e CTE;Índices medidos com EXPLAIN ANALYZE;Release v2 no GitHub com changelog#Meridian · arquitetura|Refatoração em portas e adaptadores;Exceptions de domínio;Diagrama da arquitetura no README#Meridian · regras avançadas|Transferências agendadas;Cheque especial com juros;Categorias de transação com testes de borda#Meridian · batch|Job Spring Batch de fechamento mensal;Relatório SQL de saldo por período;Testes de integração do job#Meridian final|150 perguntas revisadas;Vídeo demo de 3 minutos;README final com decisões e trade-offs#PayStream · Kafka base|Kafka no Docker Compose;Producer e consumer funcionando com Spring Kafka;Anotações sobre partições e consumer groups#PayStream · confiabilidade|Consumidor idempotente;Retry e DLQ;Outbox Pattern no payment-service#PayStream · serviços|payment-service e ledger-service separados;Redis para cache e rate limit;Resilience4j com timeout e retry#PayStream · fluxo completo|Pix de ponta a ponta com notificação;Circuit breaker e teste derrubando o Kafka;Dashboard Grafana com TPS e latência#PayStream na AWS|Conta AWS com alerta de gasto e IAM mínimo;Banco no RDS e arquivos no S3;Serviços rodando numa EC2 com Docker#Pipeline e containers|Imagens no ECR;Deploy automático via GitHub Actions;Manifests Kubernetes rodando no kind#Preparação técnica|Take-home de 4h resolvido;30 problemas de algoritmo concluídos;System design de transferência bancária desenhado#Candidaturas|Currículo e LinkedIn finais;30 candidaturas enviadas;2 mocks (técnico e comportamental) gravados".split("#");
const dlg=$("#dlg");
function openE(m,w){const[t,it]=E[m*4+w].split("|");
 $("#dk").textContent=`Mês ${m+1} · Semana ${w+1} · ${D[m][2][w][0]}`;$("#dt").textContent=t;
 $("#db").innerHTML=it.split(";").map((x,k)=>{const id=`e${m}-${w}-${k}`;return`<label class="day"><input type="checkbox" data-id="${id}" ${st[id]?"checked":""}><span class="box"></span><span class="t">${x}</span></label>`}).join("");
 dlg.showModal()}
$("#db").addEventListener("change",e=>{const id=e.target.dataset.id;e.target.checked?st[id]=1:delete st[id];save()});
$("#dx").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});

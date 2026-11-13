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
["Flyway e transações","Flyway migrations;@Transactional e propagation;Armadilhas do proxy;Modelagem DER bancário;Contas e transferências;NeoBank API v0"]]],
["Projeto 1 · NeoBank","Regras de negócio de banco, testadas de verdade.",[
["Domínio bancário","Requisitos e regras de negócio;Cliente e conta: tipos e status;Depósito e saque;Saldo com BigDecimal;Limites e validações;Revisão e testes"],
["Transferências","Transferência atômica;Extrato paginado;Tarifas e limite diário;Estorno;Auditoria de transações;Testes de serviço"],
["Testes de integração","Testcontainers com Postgres;@DataJpaTest;@WebMvcTest;Testes de regra de negócio;Cobertura de 75%;Corrigir bugs encontrados"],
["Entrega do projeto","Índices e consulta do extrato;Dockerfile;docker-compose com Postgres;README e diagrama;Revisão do código;Publicar Projeto 1"]]],
["Segurança, concorrência e CI","O que separa um CRUD de um sistema de banco.",[
["Spring Security","Autenticação vs autorização;BCrypt e usuários;JWT: geração;JWT: filtro e validação;Roles e permissões;OWASP Top 10 básico"],
["Concorrência no banco","ACID;Níveis de isolamento;Lock otimista (@Version);Lock pessimista;Idempotency-Key;Teste de 100 transferências simultâneas"],
["Docker e CI","Docker multi-stage;docker-compose completo;GitHub Actions: build;GitHub Actions: testes;Secrets e variáveis;Fluxo de PR e review"],
["Postgres aplicado","Window functions;CTEs;Índices B-tree e compostos;EXPLAIN ANALYZE;Locks e deadlocks;NeoBank v2 com CI verde"]]],
["Base sólida · Projeto 2","Arquitetura e um segundo projeto com regras complexas.",[
["Arquitetura","Camadas vs hexagonal;DDD leve: entidades e value objects;Ports e adapters;Refatorar o NeoBank;Exceptions de domínio;Clean architecture na prática"],
["Projeto 2 · Cartão de crédito","Requisitos: fatura e limite;Entidades e migrations;Compras e parcelas;Juros e cálculo da fatura;Pagamento da fatura;Testes das regras"],
["Projeto 2 · Avançado","Spring Batch: fechamento da fatura;Agendamento com @Scheduled;Relatórios em SQL;Cache simples;Documentação da API;Testes de integração"],
["Revisão da base","Java core: 50 perguntas;Spring e JPA: 50 perguntas;SQL: 50 exercícios;Git e Docker: revisão;Mock interview;Polir Projeto 2 e README"]]],
["Kafka, Redis e microsserviços","Mensageria e resiliência.",[
["Kafka base","Mensageria e por que Kafka;Topic, partição e offset;Consumer groups;Kafka no Docker Compose;Producer com Spring Kafka;Consumer com Spring Kafka"],
["Confiabilidade","Idempotência no consumidor;Retry e DLQ;Outbox Pattern;Saga (conceito);Chaves de partição e ordem;Testes com Kafka"],
["Microsserviços","Monolito vs microsserviços;Separar payment e ledger;Síncrono vs eventos;API Gateway (conceito);Redis e @Cacheable;Resilience4j: retry e timeout"],
["Projeto 3 · Pix Simulator","Fluxo de pagamento completo;Circuit breaker;Rate limit;Actuator e Micrometer;Prometheus e Grafana;Publicar Projeto 3"]]],
["AWS, Kubernetes e entrevistas","Nuvem, deploy e fase final de candidaturas.",[
["AWS essencial","IAM e conta segura;EC2 e rede básica;S3;RDS Postgres;SQS e SNS;Deploy do projeto"],
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
   return`<div class="week"><div class="wh"><div><em>Semana ${wi+1}</em><h3>${w[0]}</h3></div><small>${x}/${y}</small></div>${days}</div>`}).join("");
  return`<article class="block ${m===openIdx?"open":""} ${a===t?"done":""}"><button class="head" data-m="${m}" aria-expanded="${m===openIdx}"><span class="num">${m+1}</span><span class="info"><h2>${b[0]}</h2><p>${b[1]}</p><span class="mini"><span class="bar"><i style="width:${a/t*100}%"></i></span>${a}/${t}</span></span><svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="body">${weeks}</div></article>`}).join("");
 let A=0,T=0;D.forEach((_,m)=>{const[a,t]=cnt(m);A+=a;T+=t});
 const p=Math.round(A/T*100);$("#pct").textContent=p+"%";$("#bar").style.width=p+"%";$("#count").textContent=`${A} de ${T} dias concluídos`;
}
root.addEventListener("click",e=>{const h=e.target.closest(".head");if(!h)return;const m=+h.dataset.m;openIdx=openIdx===m?-1:m;try{localStorage.setItem("rm-open",openIdx)}catch(e){}render()});
root.addEventListener("change",e=>{const id=e.target.dataset.id;if(!id)return;e.target.checked?st[id]=1:delete st[id];save();const y=scrollY;render();scrollTo(0,y)});
const th=$("#theme"),setT=t=>{document.documentElement.dataset.theme=t;th.textContent=t==="dark"?"☀":"☾";try{localStorage.setItem("rm-theme",t)}catch(e){}};
th.onclick=()=>setT(document.documentElement.dataset.theme==="dark"?"light":"dark");
$("#reset").onclick=()=>{if(confirm("Zerar todo o progresso?")){st={};save();render()}};
setT(document.documentElement.dataset.theme||"light");render();

/* ===== Projetos ===== */
const P=[
["NeoBank API","Meses 4 e 5","Banco digital com contas, transferências e extrato. Foco em consistência de dados.","Java 21 · Spring Boot · PostgreSQL · Flyway · Testcontainers · Docker",[
["Planejamento",["Repositório criado com README inicial","DER desenhado (cliente, conta, transação)","Regras de negócio escritas em 1 página"]],
["Regras de negócio",["Saldo nunca fica negativo","Transferência atômica com @Transactional","Limite diário e tarifas configuráveis","Estorno gera lançamento inverso (nunca apaga)"]],
["Qualidade",["Testes unitários das regras","Testes de integração com Testcontainers","Cobertura de 75% ou mais","Teste com 100 transferências concorrentes"]],
["Segurança",["JWT com roles","Idempotency-Key nas transferências"]],
["Entrega",["Docker Compose sobe tudo com 1 comando","CI verde no GitHub Actions","README com diagrama e como rodar"]]]],
["Cartão de Crédito","Mês 6","Fatura, limite, parcelas e juros. Regras de negócio mais ricas que o projeto 1.","Java 21 · Spring Boot · PostgreSQL · Spring Batch · Arquitetura hexagonal",[
["Planejamento",["Requisitos e casos de uso escritos","Modelo de dados (cartão, compra, parcela, fatura)"]],
["Regras de negócio",["Limite disponível = limite menos compras em aberto","Compra parcelada gera N parcelas com centavos corretos","Fechamento e vencimento da fatura por cartão","Juros e multa por atraso","Pagamento parcial atualiza o saldo devedor","Cartão bloqueado recusa compra"]],
["Qualidade",["Testes de borda (fim de mês, arredondamento)","Job Spring Batch de fechamento testado","Arquitetura hexagonal aplicada"]],
["Entrega",["README com decisões e trade-offs","Docker Compose e CI verde","Vídeo demo de 3 minutos"]]]],
["Pix Simulator","Mês 7","Pagamento instantâneo entre serviços, com mensageria e tolerância a falhas.","Spring Boot · Kafka · PostgreSQL · Redis · Resilience4j · Prometheus · Grafana",[
["Planejamento",["Diagrama de serviços e eventos","Contratos dos eventos definidos"]],
["Serviços",["payment-service publica o evento","ledger-service debita e credita","notification-service consome","Outbox Pattern implementado"]],
["Confiabilidade",["Consumidor idempotente (sem cobrança dupla)","Retry e DLQ funcionando","Circuit breaker nas chamadas externas","Rate limit com Redis","Teste derrubando o Kafka no meio do fluxo"]],
["Observabilidade",["Métricas no Prometheus","Dashboard Grafana (TPS, latência, erros)"]],
["Entrega",["Compose sobe o ambiente completo","README com diagrama e o que quebra se X cair","Vídeo demo de 3 minutos"]]]]
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

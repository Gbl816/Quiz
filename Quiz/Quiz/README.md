# 🧠 QuizLab - Projeto de Engenharia de Interface

---

### **1. Definição do Problema**
*   **Contexto**: Dashboard de quiz interativo voltado para educação e entretenimento.
*   **Público-alvo**: Estudantes universitários e jovens adultos que buscam estudos rápidos
*   **Dor Principal**: Falta de ferramentas simples e rápidas para testar conhecimentos sem distrações visuais.
*   **Critério de Sucesso**: O usuário deve conseguir responder **10 perguntas** e visualizar sua pontuação de forma intuitiva.

---

### **2. Planejamento de Interface (Wireframe)**
*   **Estrutura**: Layout responsivo em **três colunas** no desktop que colapsa para uma coluna no mobile.
*   **Semântica**: Uso de tags **HTML5** (`header`, `main`, `aside`, `section`) para organização lógica.
*   **Hierarquia**: Fluxo de informação estruturado com títulos de **$H1 \rightarrow H2 \rightarrow H3$**.

---

### **3. Identidade Visual e Acessibilidade**
*   **Paleta de Cores (WCAG AA)**: 
    *   **Primária**: `#2c3e50`
    *   **Destaque**: `#3498db`
    *   **Sucesso**: `#27ae60`
    *   **Fundo**: `#f4f7f6`.
*   **Acessibilidade**: Contraste verificado para garantir leitura clara (**Ratio $\ge$ 4.5:1**).
*   **Tipografia**: Escala baseada em **`clamp()`** para adaptabilidade total de tela.

---

### **4. Arquitetura do Projeto (ITCSS)**
A estrutura de arquivos foi organizada para garantir manutenção eficiente:
*   **`css/variables.css`**: Variáveis globais de cores e fontes.
*   **`css/reset.css`**: Modern CSS Reset aplicado para consistência.
*   **`css/layout.css`**: Regras de **Grid**, **Flexbox** e **Media Queries**.
*   **`css/components/`**: Estilos modulares para componentes específicos (**`nav.css`** e **`card.css`**).

---

### **5. Como Executar**
1.  Abra a pasta do projeto no **VS Code**.
2.  Utilize a extensão **Live Server** para rodar o `index.html`.
3.  **Checkpoint Final**: Verifique no console do navegador (**F12**) se todos os arquivos CSS foram carregados na ordem correta.

---
## Demanda do cliente

A demanda do cliente era criar uma interface de quiz interativo, simples, responsiva e acessível, voltada para estudantes universitários e jovens adultos que desejam testar conhecimentos de forma rápida e sem distrações visuais.

## Como a demanda foi abordada

A demanda foi abordada parcialmente por meio da criação de uma interface estruturada em HTML5 semântico, com organização visual baseada em Grid Layout e Flexbox. O projeto utiliza uma arquitetura CSS modular, separando estilos globais, reset, layout e componentes, o que facilita a manutenção e evolução da interface.

Além disso, foram aplicadas boas práticas de acessibilidade, como contraste de cores seguindo o padrão WCAG AA, uso de hierarquia de títulos e tipografia responsiva com `clamp()`.

## Justificativa técnica

A escolha por HTML5 semântico melhora a organização do conteúdo e a acessibilidade da página. O uso de CSS modular baseado em ITCSS facilita a manutenção do projeto. O layout responsivo foi planejado para funcionar em desktop e mobile.

## Limitações atuais

A demanda foi atendida parcialmente porque ainda é necessário realizar testes completos com as 10 perguntas, validar a pontuação final, revisar a responsividade em telas menores e melhorar o feedback visual das respostas.
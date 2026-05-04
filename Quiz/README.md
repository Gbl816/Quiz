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
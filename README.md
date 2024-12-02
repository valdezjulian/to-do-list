# Sistema To-Do List

Um sistema moderno de gerenciamento de tarefas com interface futurista e design responsivo, desenvolvido com HTML5, CSS3 e JavaScript.

<img src="./assets/img/mockup.png" alt="Apresentação de varias telas do projeto: Desktop, notebook, tablet e smartphone.">

## 🚀 Funcionalidades

- Adição de tarefas com diferentes níveis de prioridade (Normal, Alerta, Crítico)
- Sistema de filtragem por prioridade
- Agendamento de tarefas com data e hora
- Animação de partículas no background
- Persistência de dados usando localStorage
- Interface responsiva e moderna
- Indicadores visuais de prioridade
- Sistema de conclusão e exclusão de tarefas

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript 
- Particles.js - Para animações de fundo
- Flatpickr - Para seleção de data e hora
- FontAwesome - Para ícones

## 💻 Estrutura do Projeto

```
sistema-todo-list/
│
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── README.md
```

## 🎯 Como Usar

1. Digite sua tarefa no campo "Nova tarefa"
2. Selecione a prioridade (Normal, Alerta ou Crítico)
3. Defina uma data/hora limite (opcional)
4. Clique em "Executar" para adicionar a tarefa
5. Use os filtros para visualizar tarefas por prioridade
6. Marque tarefas como concluídas ou exclua-as conforme necessário

## 🔍 Funcionalidades Detalhadas

### Sistema de Prioridades
- **Normal**: Borda verde - tarefas do dia a dia
- **Alerta**: Borda amarela - tarefas importantes
- **Crítico**: Borda vermelha - tarefas urgentes

### Persistência de Dados
- Todas as tarefas são salvas automaticamente no localStorage do navegador
- Os dados persistem mesmo após fechar o navegador

### Interface Responsiva
- Design adaptável para desktop, tablet e mobile
- Mantém a usabilidade em diferentes tamanhos de tela

## ⚙️ Configuração

### Particles.js
O arquivo `script.js` inclui configurações personalizadas para o Particles.js:
```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 150 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out'
        }
    }
});
```

## 📱 Compatibilidade

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)
- Opera (última versão)

## 👨‍💻 Desenvolvedor

Desenvolvido por Julian Valdez

- [GitHub](https://github.com/valdezjulian)
- [LinkedIn](https://www.linkedin.com/in/valdezjulian/)
- [Instagram](https://www.instagram.com/valdezjulian.dev/)
- [Email](mailto:valdezjulian.tab@email.com)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
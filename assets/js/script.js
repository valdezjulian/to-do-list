
// Utilitário para gerar ícones aleatórios
function getRandomIcon() {
    const icons = [
        'fa-star', 'fa-check-circle', 'fa-bell', 'fa-bookmark', 
        'fa-calendar-check', 'fa-rocket', 'fa-tag'
    ];
    return icons[Math.floor(Math.random() * icons.length)];
}

// Gerenciamento da Aplicação
const TodoApp = {
    // Estado inicial
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    currentFilter: 'todas',

    // Persistência de dados
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    // Operações com tarefas
    addTodo(text, priority, deadline) {
        if (!text.trim()) return;

        const todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            priority: priority.toLowerCase(),
            deadline: deadline,
            icon: getRandomIcon()
        };

        this.todos.push(todo);
        this.saveTodos();
        this.renderTodos();
    },

    deleteTodo(id) {
        if (confirm('Deseja excluir esta tarefa?')) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.saveTodos();
            this.renderTodos();
        }
    },

    toggleTodo(id) {
        this.todos = this.todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.saveTodos();
        this.renderTodos();
    },

    // Renderização
    renderTodos() {
        const todoList = document.getElementById('todoList');
        if (!todoList) return;
        
        todoList.innerHTML = '';
        
        const filteredTodos = this.currentFilter === 'todas' 
            ? this.todos 
            : this.todos.filter(todo => todo.priority === this.currentFilter);

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item priority-${todo.priority.toLowerCase()}`;
            
            li.innerHTML = `
                <div class="task-main">
                    <span class="todo-text ${todo.completed ? 'completed' : ''}">
                        <i class="fas ${todo.icon}"></i>
                        ${todo.text}
                    </span>
                    ${todo.deadline ? `
                        <div class="deadline">
                            ${new Date(todo.deadline).toLocaleString()}
                        </div>
                    ` : ''}
                    <div class="task-actions">
                        <button onclick="TodoApp.toggleTodo(${todo.id})" class="complete-btn">
                            <i class="fas ${todo.completed ? 'fa-undo' : 'fa-check'}"></i>
                        </button>
                        <button onclick="TodoApp.deleteTodo(${todo.id})" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            todoList.appendChild(li);
        });
    },

    // Inicialização de filtros
    initializeFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentFilter = btn.getAttribute('data-filter') || 'todas';
                this.renderTodos();
            });
        });
    },

    // Inicialização da aplicação
    init() {
        // Configuração do Particles.js
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

        // Configuração do Flatpickr
        flatpickr(".flatpickr", {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: "today"
        });

        // Event Listeners
        document.getElementById('addButton')?.addEventListener('click', () => {
            const todoInput = document.getElementById('todoInput');
            const prioritySelect = document.getElementById('prioritySelect');
            const dateInput = document.getElementById('dateInput');

            this.addTodo(
                todoInput.value, 
                prioritySelect.value, 
                dateInput.value
            );

            todoInput.value = '';
            dateInput.value = '';
        });

        document.getElementById('todoInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('addButton').click();
            }
        });

        // Inicializar filtros e renderizar tarefas
        this.initializeFilters();
        this.renderTodos();
    }
};

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => TodoApp.init());
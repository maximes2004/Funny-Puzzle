<template>
  <div class="game-container">
    <h1>Собери паззл на время</h1>

    <!-- Отображение имени авторизованного пользователя -->
    <p v-if="isNameSaved" class="user-info">Авторизован пользователь: <strong>{{ username }}</strong></p>

    <!-- Ввод имени -->
    <div v-if="isFormVisible">
      <input v-model="username" type="text" placeholder="Введите ваше имя" />
      <button @click="saveUser">Сохранить</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>

    <!-- Кнопки игры, показываются только если имя сохранено -->
    <div v-if="isNameSaved && !gameStarted">
      <button @click="startGame">Начать игру</button>
      <button @click="viewLeaderboard">Таблица лидеров</button>
      <button @click="changeUser">Сменить пользователя</button>
    </div>

    <!-- Игра -->
    <div v-if="gameStarted">
      <div class="puzzle-grid">
        <div
          v-for="(piece, index) in puzzlePieces"
          :key="index"
          :class="['puzzle-piece', { dragging: isDragging && dragStartIndex === index }]"
          @dragstart="dragStart"
          @dragover="dragOver"
          @drop="(event) => dropPiece(index, event)"  <!-- Передаем оба параметра -->
          @touchstart="touchStart(index, $event)"
          @touchmove="touchMove($event)"
          @touchend="touchEnd"
        >
          <img
            :src="piece.img"
            :alt="piece.alt"
            :id="piece.id"
            class="puzzle-img"
            draggable="true"
          />
        </div>
      </div>

      <p class="timer-block">Время: {{ timer }}</p>
      <button @click="checkSolution">Завершить игру</button>
      <button @click="restartGame">Попробовать еще раз</button>
      <button @click="viewLeaderboard">Таблица лидеров</button>
      <button @click="changeUser">Сменить пользователя</button>
      <p v-if="gameCompleted" class="success-message">Решено!</p>
    </div>
  </div>
</template>

<script>
import { db, ref, push } from '../services/firebase';

export default {
  name: 'GamePuzzle',
  data() {
    return {
      puzzlePieces: [
        { id: 'puzzle-1', img: 'puzzle1.jpg', alt: 'puzzle 1' },
        { id: 'puzzle-2', img: 'puzzle2.jpg', alt: 'puzzle 2' },
        { id: 'puzzle-3', img: 'puzzle3.jpg', alt: 'puzzle 3' },
        { id: 'puzzle-4', img: 'puzzle4.jpg', alt: 'puzzle 4' },
        { id: 'puzzle-5', img: 'puzzle5.jpg', alt: 'puzzle 5' },
        { id: 'puzzle-6', img: 'puzzle6.jpg', alt: 'puzzle 6' },
        { id: 'puzzle-7', img: 'puzzle7.jpg', alt: 'puzzle 7' },
        { id: 'puzzle-8', img: 'puzzle8.jpg', alt: 'puzzle 8' },
        { id: 'puzzle-9', img: 'puzzle9.jpg', alt: 'puzzle 9' },
        { id: 'puzzle-10', img: 'puzzle10.jpg', alt: 'puzzle 10' },
        { id: 'puzzle-11', img: 'puzzle11.jpg', alt: 'puzzle 11' },
        { id: 'puzzle-12', img: 'puzzle12.jpg', alt: 'puzzle 12' },
        { id: 'puzzle-13', img: 'puzzle13.jpg', alt: 'puzzle 13' },
        { id: 'puzzle-14', img: 'puzzle14.jpg', alt: 'puzzle 14' },
        { id: 'puzzle-15', img: 'puzzle15.jpg', alt: 'puzzle 15' },
        { id: 'puzzle-16', img: 'puzzle16.jpg', alt: 'puzzle 16' },
        { id: 'puzzle-17', img: 'puzzle17.jpg', alt: 'puzzle 17' },
        { id: 'puzzle-18', img: 'puzzle18.jpg', alt: 'puzzle 18' },
        { id: 'puzzle-19', img: 'puzzle19.jpg', alt: 'puzzle 19' },
        { id: 'puzzle-20', img: 'puzzle20.jpg', alt: 'puzzle 20' },
        { id: 'puzzle-21', img: 'puzzle21.jpg', alt: 'puzzle 21' },
        { id: 'puzzle-22', img: 'puzzle22.jpg', alt: 'puzzle 22' },
        { id: 'puzzle-23', img: 'puzzle23.jpg', alt: 'puzzle 23' },
        { id: 'puzzle-24', img: 'puzzle24.jpg', alt: 'puzzle 24' },
      ],
      username: '',
      isFormVisible: true,
      isNameSaved: false,
      gameStarted: false,
      timer: 0,
      timerInterval: null,
      errorMessage: '',
      gameCompleted: false,
      dragStartIndex: null,
      startTouchX: null,
      startTouchY: null,
      currentTouchX: null,
      currentTouchY: null,
      isDragging: false,
      draggedElement: null
    };
  },
  methods: {
    saveUser() {
      if (!this.username || this.username.trim().length < 4) {
        this.errorMessage = 'Введите свое имя (не менее 4 символов)';
      } else {
        this.errorMessage = '';
        localStorage.setItem('username', this.username);
        this.isFormVisible = false;
        this.isNameSaved = true;
      }
    },
    startGame() {
      if (!this.username) {
        this.errorMessage = 'Введите свое имя (не менее 4 символов)';
        return;
      }
      this.gameStarted = true;
      this.shufflePuzzle();
      this.startTimer();
    },
    checkSolution() {
      const isCorrect = this.puzzlePieces.every((piece, index) => piece.id === `puzzle-${index + 1}`);
      if (isCorrect) {
        clearInterval(this.timerInterval);
        this.gameCompleted = true;
        const result = { username: this.username, time: this.timer };
        push(ref(db, 'leaderboard'), result);
      } else {
        alert('Паззл собран неверно!');
      }
    },
    startTimer() {
      this.timer = 0;
      this.timerInterval = setInterval(() => {
        this.timer++;
      }, 1000);
    },
    shufflePuzzle() {
      this.puzzlePieces = this.puzzlePieces.sort(() => Math.random() - 0.5);
    },
    dragStart(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
    },
    dragOver(e) {
      e.preventDefault();
    },
    // Обработка сброса перетаскиваемого элемента
    dropPiece(index, event) { // Добавляем параметр event
        // Получаем идентификатор перетаскиваемого элемента из события
        const draggedId = event.dataTransfer.getData('text/plain');
        
        // Находим индекс элемента в массиве по его id
        const draggedIndex = this.puzzlePieces.findIndex((piece) => piece.id === draggedId);
        
        // Если элемент найден
        if (draggedIndex !== -1) {
            // Создаем временную копию перетаскиваемого элемента
            const temp = this.puzzlePieces[draggedIndex];
            // Меняем местами элементы
            this.puzzlePieces[draggedIndex] = this.puzzlePieces[index];
            this.puzzlePieces[index] = temp;
        }
    },
    touchStart(index, event) {
      event.preventDefault();
      const touch = event.touches[0];
      this.dragStartIndex = index;
      this.startTouchX = touch.clientX;
      this.startTouchY = touch.clientY;
      this.isDragging = true;
      
      const piece = event.target.closest('.puzzle-piece');
      if (piece) {
        piece.style.opacity = '0.6';
        this.draggedElement = piece;
      }
    },

    touchMove(event) {
      if (!this.isDragging) return;
      event.preventDefault();
      
      const touch = event.touches[0];
      this.currentTouchX = touch.clientX;
      this.currentTouchY = touch.clientY;
      
      const elementUnderTouch = document.elementFromPoint(
        this.currentTouchX,
        this.currentTouchY
      );
      
      const targetPiece = elementUnderTouch?.closest('.puzzle-piece');
      if (targetPiece) {
        targetPiece.style.border = '2px solid #007bff';
      }
      
      document.querySelectorAll('.puzzle-piece').forEach(piece => {
        if (piece !== targetPiece) {
          piece.style.border = '2px solid rgba(0, 0, 0, 0.1)';
        }
      });
    },

    touchEnd() {  // Убираем неиспользуемый параметр event
    if (!this.isDragging) return;
    
    const elementUnderTouch = document.elementFromPoint(
      this.currentTouchX,
      this.currentTouchY
    );
    const targetPiece = elementUnderTouch?.closest('.puzzle-piece');
    
    if (targetPiece) {
      const targetIndex = Array.from(targetPiece.parentNode.children).indexOf(targetPiece);
      
      if (this.dragStartIndex !== null && targetIndex !== -1) {
        const temp = this.puzzlePieces[this.dragStartIndex];
        this.puzzlePieces[this.dragStartIndex] = this.puzzlePieces[targetIndex];
        this.puzzlePieces[targetIndex] = temp;
      }
    }
    
    // Очищаем состояние
    this.isDragging = false;
    this.dragStartIndex = null;
    this.startTouchX = null;
    this.startTouchY = null;
    this.currentTouchX = null;
    this.currentTouchY = null;
    
    // Возвращаем визуальное оформление
    if (this.draggedElement) {
      this.draggedElement.style.opacity = '1';
      this.draggedElement = null;
    }
    
    // Убираем все подсветки
    document.querySelectorAll('.puzzle-piece').forEach(piece => {
      piece.style.border = '2px solid rgba(0, 0, 0, 0.1)';
    });
  },
    viewLeaderboard() {
      this.$router.push('/leaderboard');
    },
    changeUser() {
      this.username = '';
      localStorage.removeItem('username');
      this.isFormVisible = true;
      this.isNameSaved = false;
      clearInterval(this.timerInterval); // Сброс таймера
      this.timer = 0; // Обнуление таймера
      this.gameStarted = false; // Завершение игры
      this.$router.push('/');
    },
    restartGame() {
      this.shufflePuzzle();
      this.timer = 0;
      this.gameCompleted = false;
      clearInterval(this.timerInterval);
      this.startTimer();
    },
  },
  mounted() {
    this.username = localStorage.getItem('username') || '';
  },
};
</script>

<style scoped>
.game-container {
  text-align: center;
}

.user-info {
  font-size: 18px;
  margin-bottom: 20px;
}

.puzzle-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  margin: 0 auto;
  max-width: 100vh;
  max-height: 100vw;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.puzzle-piece {
  height: 100%;
  aspect-ratio: 1 / 1;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  position: relative;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.puzzle-piece.dragging {
  opacity: 0.6;
  z-index: 1000;
}

.puzzle-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.success-message {
  color: green;
  font-size: 20px;
  margin-top: 20px;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.timer-block {
  padding-top: 0.5rem;
  color: brown;
}
</style>
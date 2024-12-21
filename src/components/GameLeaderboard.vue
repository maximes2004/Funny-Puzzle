<template>
  <div class="leaderboard-container">
    <h1>Таблица лидеров</h1>
    <table class="leaderboard-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя пользователя</th>
          <th>Время (секунды)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in sortedLeaderboard" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ entry.username }}</td>
          <td>{{ entry.time }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="goBack">Назад</button>
  </div>
</template>

<script>
import { db } from '../services/firebase';
import { get, child, ref } from 'firebase/database';

export default {
  name: 'GameLeaderboard',
  data() {
    return {
      leaderboard: [], // Список результатов из базы данных
    };
  },
  computed: {
    /**
     * Сортировка списка лидеров по времени.
     * Возвращает новый массив, упорядоченный по возрастанию времени.
     */
    sortedLeaderboard() {
      return [...this.leaderboard].sort((a, b) => a.time - b.time);
    },
  },
  methods: {
    /**
     * Возврат на главную страницу.
     */
    goBack() {
      this.$router.push('/');
    },
  },
  async mounted() {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, 'leaderboard'));
      if (snapshot.exists()) {
        this.leaderboard = Object.values(snapshot.val());
      } else {
        console.log('Нет данных в таблице лидеров.');
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  },
};
</script>

<style scoped>
/* Стили контейнера таблицы */
.leaderboard-container {
  text-align: center;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

/* Стили таблицы лидеров */
.leaderboard-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 16px;
}

.leaderboard-table th,
.leaderboard-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.leaderboard-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.leaderboard-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.leaderboard-table tr:hover {
  background-color: #f1f1f1;
}

/* Стили кнопки */
button {
  margin-top: 20px;
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
</style>

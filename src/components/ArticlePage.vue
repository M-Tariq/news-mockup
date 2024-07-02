<template>
  <div>
    <banner></banner>
    <div class="article-page">
      <h1>Latest News</h1>
      <div class="article-list">
        <div v-for="article in articles" :key="article.id" class="article-card">
          <img :src="article.image" alt="Article Image" class="article-image" />
          <div class="article-content">
            <h2>{{ article.title }}</h2>
            <p class="article-preview">{{ article.content }}</p>
            <p class="article-meta">
              <span>By {{ article.author }}</span> |
              <span>{{ article.date }}</span>
            </p>
            <button @click="goToArticle(article.id)">Continue Reading</button>
          </div>
        </div>
        <div class="see-more">
          <button @click="goToMoreArticles">See More Articles</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useArticles } from "../composeable/useArticles";
import Banner from "./Banner.vue";
export default {
  name: "ArticlePage",
  components: { Banner },
  data() {
    return {
      articles: useArticles().articles,
    };
  },
  methods: {
    goToArticle(id) {
      this.$router.push(`/article/${id}`);
    },

    goToMoreArticles() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.article-page {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 250px;
  /* height: 150px; */
  object-fit: cover;
}

.article-content {
  padding: 15px;
  flex: 1;
}

.article-content h2 {
  margin: 0;
  font-size: 1.4em;
}

.article-content p {
  margin: 10px 0;
  color: #555;
  font-size: 1.1em;
}

.article-preview {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  text-overflow: ellipsis;
}

.article-meta {
  font-size: 1em;
  color: #888;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #0056b3;
}

.see-more {
  text-align: center;
  margin-top: 20px;
}
</style>

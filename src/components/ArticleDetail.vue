<template>
  <div class="article-detail">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" alt="Article Image" class="article-image" />
    <p class="article-meta">
      <span>By {{ article.author }}</span> | <span>{{ article.date }}</span>
    </p>
    <p class="article-content">{{ article.content }}</p>
    <button @click="goBack">Back to Articles</button>
  </div>
</template>

<script>
import { useArticles } from "../composeable/useArticles";
export default {
  name: "ArticleDetail",
  data() {
    return {
      article: "",
      articles: useArticles().articles,
    };
  },

  created() {
    if (this.isLoggedIn()) {
      const articleId = parseInt(this.$route.params.id);
      this.article = this.articles.find((article) => article.id === articleId);
    } else {
      this.$router.push("/signup");
    }
  },
  methods: {
    goBack() {
      this.$router.push("/articles");
    },

    isLoggedIn() {
      return localStorage.getItem("isLoggedIn");
    },
  },
};
</script>

<style scoped>
.article-detail {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  margin-top: 100px;
}

.article-image {
  width: 100%;
  height: auto;
  margin: 20px 0;
}

.article-meta {
  font-size: 1em;
  color: #888;
  margin-bottom: 20px;
}

.article-content {
  font-size: 1.2em;
  color: #333;
  line-height: 1.6;
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
</style>

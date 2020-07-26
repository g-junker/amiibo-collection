<template>
    <div>
        <div class="single-char bg-img">
            <img :src="character.image" >
            <div class="single-char-info">
                <h1>{{ character.name }}</h1>
                <p>Series: {{ character.amiiboSeries }}</p>
                <p>Character: {{ character.character }}</p>
                <p>Game Series: {{ character.gameSeries }}</p>
                <p>Type: {{ character.type }}</p> 
            </div>
        </div>
        <div class="related">
            <h3>More from {{ character.amiiboSeries }} series</h3>
        </div>
        <div class="related">
            <h3>More from {{ character.gameSeries }} game series</h3>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
       id: this.$route.params.id,
       character: {}
    }
  },
  created() {
      this.$http.get('https://www.amiiboapi.com/api/amiibo/?id=' + this.id)
        .then(response => { this.character = response.data.amiibo})
  }
}
</script>

<style scoped>
h1 {
    text-align: left;
}
.single-char {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 3em 0;
    border-bottom: 8px solid lightgrey;
}

.single-char img {
    max-width: 300px;
    max-height: 300px;
    padding: 0 2em;
}

.single-char-info {
    padding: 0 2em;
    font-size: 0.9em;
    line-height: 1.2em;
}

.single-char-info h1 {
    margin-bottom: 1em;
}

.related {
    margin: 3em auto;
    width: 80%;
}

</style>

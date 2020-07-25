<template>
    <div class="bg-img">
        <h1>Browse by Series</h1>
        <div class="browse-by-wrapper">
          <div v-for="(serie, index) in series" :key="index" class="browse-by-item">
            <router-link :to="'/browse-series/' + serie">
              <p>{{ serie }}</p>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
       chars: [],
       series: []
    }
  },
  mounted() {
    const uri = 'https://www.amiiboapi.com/api/amiibo';
    this.$http.get(uri)
        .then(response => {
            this.chars = response.data.amiibo;
            this.chars.forEach(char => {
                if(!this.series.includes(char.amiiboSeries)) this.series.push(char.amiiboSeries);
            })
        })
  }
}
</script>
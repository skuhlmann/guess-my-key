<template>
  <div class="Key__Form">
    <h4>WIN MILLIONS</h4>

    <form v-if="this.result === ''" v-on:submit.prevent="guessKey" class="form">
      <h5>
        ENTER A NUMBER BETWEEN 1 AND 2
        <sup>256</sup>
      </h5>
      <input
        v-model="privateKey"
        v-validate="'required'"
        class="Key__Input"
        type="text"
        name="privateKey"
        placeholder="YOU CAN DO IT!"
        autocomplete="off"
      >
      <button
        v-bind:disabled="privateKey.length < 1"
        v-bind:class="{ disabled: privateKey.length < 1 }"
        class="Key__button"
      >Ok, I think I got it</button>
    </form>
    <div v-if="this.result !== ''">
      <p class="Key__result">{{result}}</p>
      <p class="Key__try" v-on:click="tryAgain">TRY AGAIN</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyForm",
  data: () => {
    return { privateKey: "", result: "" };
  },
  methods: {
    guessKey() {
      const results = [
        "NOPE",
        "No",
        "Good guess, but no",
        "Not even close",
        "Ohhh, that was close!",
        "Nothing doing",
        "Waaay off"
      ];
      this.result = results[
        Math.floor(Math.random() * results.length)
      ].toUpperCase();
      this.privateKey = "";
    },
    tryAgain() {
      this.result = "";
    }
  }
};
</script>

<style>
.Key__Form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

h4 {
  flex-basis: 70px;
  flex-shrink: 0;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

input.Key__Input {
  font-size: 40px;
  width: 99vw;
  text-align: center;
  flex-basis: 70px;
  flex-shrink: 0;
}

.disabled {
  background-color: #999999;
}

button.Key__button {
  margin-top: 6vh;
  flex-basis: 70px;
  flex-shrink: 0;
}

button.disabled:hover {
  color: #555;
  border: 1px solid #bbb;
}

.Key__result {
  font-size: 100px;
  line-height: 1;
}

p.Key__try:hover {
  color: #555;
  cursor: pointer;
}
</style>
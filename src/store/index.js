import { createStore } from 'vuex'
import { VueCookieNext } from 'vue-cookie-next'
import router from '@/router'
import questions from '@/assets/data.json'


export default createStore({
  state: {

    question: null,
    score: null

  },

  actions: {
    startQuestionary() {
      if (!VueCookieNext.getCookie('questionary'))
        VueCookieNext.setCookie('questionary', {
          "nbQ": 1,
          "responses": JSON.stringify([])
        })

      router.push('/questionary')
    },

    setQuestion({ state }) {
      let nbQ
      nbQ = VueCookieNext.getCookie('questionary').nbQ

      state.question = questions.find(x => x.nbQ === nbQ)

      if (state.question == undefined)
        router.push('/congratulation')
    },

    uplaodResponse({ dispatch }, index) {
      let cookie
      let parseResponsesArray

      cookie = VueCookieNext.getCookie('questionary')
      parseResponsesArray = JSON.parse(cookie.responses)
      parseResponsesArray.push({
        "question": cookie.nbQ,
        "response": index
      })

      VueCookieNext.setCookie('questionary', {
        "nbQ": (parseInt(cookie.nbQ) + 1),
        "responses": JSON.stringify(parseResponsesArray)
      })

      dispatch('setQuestion')
    },

    congratulation({ state }) {
      let responses
      let score = 0
      responses = JSON.parse(VueCookieNext.getCookie('questionary').responses)

      responses.forEach(response => {
        if (questions.find(x => x.nbQ == response.question).response.findIndex(x => x.validate == true) == response.response)
          score = score + 1
      })

      state.score = score / questions.length * 100
    },

    returnHome() {
      VueCookieNext.removeCookie('questionary')

      router.push('/')
    }
  }
})

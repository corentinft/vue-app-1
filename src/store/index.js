import { createStore } from 'vuex'
import { VueCookieNext } from 'vue-cookie-next'
import router from '@/router'
import questions from '@/assets/data.json'


export default createStore({
  state: {

    questions: questions,
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

    setQuestion({ state, dispatch }) {
      let nbQ
      nbQ = VueCookieNext.getCookie('questionary').nbQ

      state.question = questions.find(x => x.nbQ === nbQ)

      if (state.question = -1)
        dispatch('congratulation')
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
        "responses": JSON.stringify(parseResponseArray)
      })

      dispatch('setQuestion')
    },

    congratulation() {
      let responses
      let score = 0
      responses = VueCookieNext.getCookie('questionary').responses

      responses.forEach(response => {
        if questions
      })
      state.question = questions.find(x => x.nbQ === nbQ)

      router.push('/questionary')
    }

  }
})

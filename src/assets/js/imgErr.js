export const imgErrMixin = {
  data () {
    return {
      imgErrList: []
    }
  },
  created () {
    window.addEventListener('online', () => {
      for (let i = 0; i < this.imgErrList.length; i++) {
        this.imgErrList[i].src = this.imgErrList[i].src
      }
    })
  },
  methods: {
    imgOnErr (e) {
      this.imgErrList.push(e.target)
    },
    imgOnLoad (e) {
      let index
      if ((index = this.imgErrList.indexOf(e.target)) > -1) {
        this.imgErrList.splice(index, 1)
      }
    }
  }
}

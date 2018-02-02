import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  methods = {
    tap () {
      console.log('mix tap')
    }
  }

  onShow() {
    console.log('mixin show')
  }
}

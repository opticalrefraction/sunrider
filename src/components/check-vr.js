AFRAME.registerSystem('check-vr', {
  init: function () {
    // iOS/mobile restriction removed: keep the VR button visible so WebXR-capable
    // browsers can enter VR on iOS. Only hide it on non-iOS mobile devices.
    if (AFRAME.utils.device.isMobile() && !AFRAME.utils.device.isIOS()) {
      document.getElementById('vrButton').style.display = 'none';
    }

    setTimeout(() => {
      if (AFRAME.utils.device.checkHeadsetConnected()) {
        this.el.emit('displayconnected');
      }
    }, 250);
  }
});

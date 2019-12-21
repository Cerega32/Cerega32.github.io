{
  var fireballSize = 22;
  var getFireballSpeed = (direction) => {
    if(direction === "left") {
      return 5;
    } else {
      return 2;
    }
  }
  var wizardSpeed = 3;
  var wizardWidth = 70;
  var getWizardHeight = () => {
    return 1.337*wizardWidth;
  }
  var getWizardX = (width) => {
    return width/2 - wizardWidth/2;
  }
  var getWizardY = (height) => {
    return height*2/3;
  }
}

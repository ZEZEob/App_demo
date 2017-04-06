// guidePage页面业务逻辑
// 页面功能：引导页功能          创建日期：2020.23.23
// 创建者：张三                 修改日期：2020.3.46
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl',function ($scope,$ionicActionSheet,$state,$ionicModal,$ionicSlideBoxDelegate) {

// 点击按钮触发，或一些其他的触发条件
    $scope.show = function() {

      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '拍照' },
          { text: '相册' },
        ],
        destructiveText: '删除',
        titleText: '更换照片的方式',
        cancelText: '取消',
        buttonClicked: function(index) {
          switch(index){
            case 0:
              console.log("拍照");
                  break;
            case 1:
              console.log("相册");
              break;
          }
          return true;
        }
      });
    };



    //setInterval(function(){
    //  $ionicSlideBoxDelegate.next();
    //},1000)

    //$ionicModal.fromTemplateUrl('modal.html', {
    //  scope: $scope,
    //  animation: 'slide-in-up'
    //}).then(function(modal) {
    //  $scope.modal = modal;
    //});
    //$scope.openModal = function() {
    //  $scope.modal.show();
    //};
    //$scope.closeModal = function() {
    //  $scope.modal.hide();
    //};
    ////当我们用到模型时，清除它！
    //$scope.$on('$destroy', function() {
    //  $scope.modal.remove();
    //});
    //// 当隐藏的模型时执行动作
    //$scope.$on('modal.hide', function() {
    //  // 执行动作
    //});
    //// 当移动模型时执行动作
    //$scope.$on('modal.removed', function() {
    //  // 执行动作
    //});


  })

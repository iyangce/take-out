<script>
	import authorize from '@/common/authorize.js';
    export default {
        onLaunch: function() {
            console.log('App Launch');
			
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
			    console.log(loginRes);
			/* 	authorize.login(loginRes); */
			  }
			});
			
			const updateManager = uni.getUpdateManager();
			
			updateManager.onCheckForUpdate(function (res) {
			  // 请求完新版本信息的回调
			  console.log(res.hasUpdate);
			});
			
			updateManager.onUpdateReady(function (res) {
			  uni.showModal({
			    title: '更新提示',
			    content: '新版本已经准备好，是否重启应用？',
			    success(res) {
			      if (res.confirm) {
			        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			        updateManager.applyUpdate();
			      }
			    }
			  });
			
			});
            // #ifdef APP-PLUS
            // 检测升级
            uni.request({
                url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
                data: {
                    appid: plus.runtime.appid,
                    version: plus.runtime.version,
                    imei: plus.device.imei
                },
                success: (res) => {
                    if (res.statusCode == 200 && res.data.isUpdate) {
                        let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
                        // 提醒用户更新
                        uni.showModal({
                            title: '更新提示',
                            content: res.data.note ? res.data.note : '是否选择更新',
                            success: (showResult) => {
                                if (showResult.confirm) {
                                    plus.runtime.openURL(openUrl);
                                }
                            }
                        })
                    }
                }
            })
            // #endif
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		globalData: {
			test: ''
		}
    }
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';

    /* 以下样式用于 hello uni-app 演示所需 */
    page {
        background-color: rgb(240,241,245);
        height: 100%;
        font-size: 28rpx;
    }
	uni-image{
		width: 100%;
	}
	uni-view{
		line-height: normal;
	}
    /* #endif*/
</style>

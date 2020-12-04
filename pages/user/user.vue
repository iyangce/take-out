<template>
	<view class="user">
		<view class="content">
			<view class="info">暂未开放</view>
		</view>
	</view>
</template>
<style>
	.user{
		width: 100%;
		height: 100%;
	}
	.user .content .info{
		font-size: 50rpx;
		color: rgb(244, 194, 66);
		width: 100%;
		text-align: center;
		margin-top: 200rpx;
	}
</style>
<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue';
	import uniSection from '@/components/uni-section/uni-section.vue';
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	export default {
		components: {
			uniSection,
			uniList,
			uniListItem,
			uniIcons,
		},
		data() {
			return {
				
			};
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				// 来自页面内分享按钮
				console.log(res.target);
			}
			return {
				title: '这里有好多吃喝优惠券，快来领券吧~~',
				path: '/pages/index/index',
				imageUrl: 'https://lajun-chihe.oss-cn-beijing.aliyuncs.com/chihe-share.png',
			};
		},
		methods: {
			notify: function() {
				let http = this.$http;
				console.log(http);
				let templateId = 'kXBmBC98SYth6HltqOVc-3_Y2EncSybE2-0TMvyCXDk';
				uni.requestSubscribeMessage({
					tmplIds: [templateId],
					success(res) {
						console.log(res);
						let token = uni.getStorageSync('token');
						let params = {
							template_id: templateId,
							token: token,
						};
						console.log(params);
						http.post('/add-subscribe', params)
							.then((res) => {
								let data = res.data;
								uni.showToast({
									icon: 'none',
									title: data.msg,
									duration: 1000,
								});
							})
							.catch(function(e) {
								console.log(e);
							});
					},
					fail(res) {
						console.log(res);
					},
				});
			},
			goToLink: function(index) {
				let item = this.navList[index];
				let type = item.type;
				let url = item.url;
				console.log(item);
				if (type == 2) {
					uni.navigateTo({
						url: url,
					});
				} else if (type == 3) {
					this.notify(); //领券提醒
				} else {
					console.log(url);
					uni.previewImage({
						urls: [url],
						longPressActions: {
							itemList: ['发送给朋友', '保存图片', '收藏'],
							success: function(data) {
								console.log(
									'选中了第' +
									(data.tapIndex + 1) +
									'个按钮,第' +
									(data.index + 1) +
									'张图片'
								);
							},
							fail: function(err) {
								console.log(err.errMsg);
							},
						},
					});
				}
			},
		},
	};
</script>

<style></style>

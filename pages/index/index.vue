<template>
	<view>
		<view class="page-section page-slide swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" :circular='circular' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				 :duration="duration">
					<swiper-item>
						<view class="swiper-item">
							<image mode="widthFix" src="https://mpstatic.qingting123.com/img/take-out/weapp-1.png"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image mode="widthFix" src="https://mpstatic.qingting123.com/img/take-out/weapp-2.png"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image mode="widthFix" src="https://mpstatic.qingting123.com/img/take-out/weapp-3.png"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="project-list">
			<view class="list-item" v-for="(item, index) in list" :key="item.id" @tap="goToProject(index)">
				<view class="list-item_box">
					<image class="label" v-if='item.type==="ele"' src='https://mpstatic.qingting123.com/img/take-out/label-ele.png'></image>
					<image class="label" v-if='item.type==="mt"' src='https://mpstatic.qingting123.com/img/take-out/label-mt.png'></image>
					<image class="mark" v-if='item.type==="ele"' src='https://mpstatic.qingting123.com/img/take-out/mark-ele.png'></image>
					<image class="mark" v-if='item.type==="mt"' src='https://mpstatic.qingting123.com/img/take-out/mark-mt.png'></image>
					<view class="content g-flex-align-center">
						<view class="money g-flex-horizontal-vertical">
							<view class="number">
								{{item.num}}
							</view>
							<view class="unit">
								元
							</view>
						</view>
						<view class="info">
							<view class="title">
								{{item.title}}
							</view>
							<view class="des">
								{{item.des}}
							</view>
						</view>
					</view>
				</view>
				<view class="list-item_btn">
					<view class="btn">免费领取</view>
				</view>
			</view>
		</view>

		<!-- <view class="project-container">
			<view class="project_item" v-for="(item, index) in projects" :key="item.id">
				<view class="project-header">
					<view class="title">{{ item.title }}</view><button class="share" open-type="share" :data-index="index">
						<image mode="widthFix" src="../../static/share.png"></image>
					</button>
				</view>
				<view class="project-content" @tap="goToProject(index)">
					<view v-if="item.image" class="image" @tap="previewImage(index)">
						<image mode="widthFix" :src="item.image"></image>
					</view>
					<view v-if="item.description" class="description">{{
                        item.description
                    }}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import showTips from '../../wxcomponents/redflower-showTips/redflower-showTips.vue';

	export default {
		components: {
			showTips,
		},
		onLoad() {},
		data() {
			return {
				indicatorDots: false,
				circular: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				list: [{
					Id: 1,
					num: 32,
					type: 'ele',
					title: '饿了么外卖红包',
					des: '饿了么天天领红包',
					app_id: 'wxece3a9a4c82f58c9',
					path: 'pages/sharePid/web/index?scene=s.click.ele.me%2Fb2Wq2wu'
				}, {
					Id: 2,
					num: 56,
					type: 'mt',
					title: '美团外卖红包',
					des: '吃喝玩乐红包不停',
					app_id: 'wxde8ac0a21135c07d',
					path: '/index/pages/h5/h5?f_token=0&weburl=https%3a%2f%2fi.meituan.com%2fawp%2fhfe%2fblock%2fa13b87919a9ace9cfab4%2f89400%2findex.html',
				}, {
					Id: 3,
					num: 32,
					type: 'mt',
					title: '美团商超生鲜',
					des: '最高32元商超生鲜红包',
					app_id: 'wxde8ac0a21135c07d',
					path: '/index/pages/h5/h5?f_token=0&weburl=https%3a%2f%2fi.meituan.com%2fawp%2fhfe%2fblock%2fc9ff59b58f6f5bf385b6%2f94455%2findex.html',
				}, {
					Id: 4,
					num: 20,
					type: 'ele',
					title: '饿了么超级红包',
					des: '20元红包天天领',
					app_id: 'wxece3a9a4c82f58c9',
					path: 'ele-recommend-price/pages/guest/index?inviterId=d535deb'
				}]
			};
		},
		onShareAppMessage(res) {
			let projectId = res.target.dataset.index;
			let project = this.projects[projectId];
			let title = project.description;
			if (!title) {
				title = 'Hi~,偷偷地告诉你，这里有很多优惠券哦！';
			}
			if (res.from === 'button') {
				// 来自页面内分享按钮
				return {
					title: title,
					imageUrl: project.image,
					path: '/pages/index/index',
				};
			}

			return {
				title: '这里有好多吃喝优惠券，快来领券吧~~',
				path: '/pages/index/index',
				imageUrl: 'https://yc-develop.oss-cn-shanghai.aliyuncs.com/take-out/chihe-share.png',
			};
		},
		methods: {
			goToProject: function(index) {
				let project = this.list[index];
				uni.navigateToMiniProgram({
					appId: project.app_id,
					path: project.path,
					success(res) {},
				});
			},
			shareProject: function(index) {
				let project = this.projects[index];
				uni.navigateToMiniProgram({
					appId: project.app_id,
					path: project.path,
					success(res) {},
				});
			},
			previewImage: function(index) {},
			notify: function() {
				let http = this.$http;
				console.log(http);
				let templateId = 'kXBmBC98SYth6HltqOVc-3_Y2EncSybE2-0TMvyCXDk';
				uni.requestSubscribeMessage({
					tmplIds: [templateId],
					success(res) {
						console.log(res);
					},
					fail(res) {
						console.log(res);
					},
				});
			},
		},
	};
</script>

<style>
	.page-slide {
		width: 100%;
		height: 260rpx;
	}

	.page-slide .page-section-spacing {
		padding-top: 30rpx;
		width: 705rpx;
		margin: 0 auto;
	}

	.page-slide .page-section-spacing uni-image {
		width: 705rpx;
		height: 240rpx;
	}

	.page-slide .page-section-spacing image {
		width: 705rpx;
		height: 240rpx;
	}

	.project-list {
		margin: 0 22rpx;
		padding-top: 20rpx;
		padding-bottom: 120rpx;
	}

	.project-list .list-item {
		width: 100%;
		height: 200rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		display: flex;
		margin-top: 20rpx;
	}

	.project-list .list-item .list-item_box {
		position: relative;
		flex: 1;
	}

	.project-list .list-item .list-item_box .label {
		position: absolute;
		top: 0;
		left: 0;
		width: 106rpx;
		height: 106rpx;
	}

	.project-list .list-item .list-item_box .mark {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 92rpx;
		height: 68rpx;
	}

	.project-list .list-item .list-item_box .content {
		margin-left: 60rpx;
		height: 200rpx;
		display: flex;
	}

	.project-list .list-item .list-item_box .content .money {
		color: #ff6d33;
		display: flex;
	}

	.project-list .list-item .list-item_box .content .money .number {
		font-size: 70rpx;
		font-weight: bold;
	}

	.project-list .list-item .list-item_box .content .money .unit {
		font-size: 30rpx;
		margin-left: 5rpx;
	}

	.project-list .list-item .list-item_box .content .info {
		margin-left: 20rpx;
	}

	.project-list .list-item .list-item_box .content .info .title {
		font-size: 32rpx;
		color: #000000;
		font-weight: bold;
	}

	.project-list .list-item .list-item_box .content .info .des {
		font-size: 26rpx;
		color: #aaa;
	}

	.project-list .list-item .list-item_btn {
		width: 200rpx;
		display: flex;
		-moz-box-align: center;
		-webkit-box-align: center;
		box-align: center;
		align-items: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-pack: center;
		-ms-box-pack: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		justify-content: center;
	}

	.project-list .list-item .list-item_btn .btn {
		width: 135rpx;
		background: linear-gradient(to right, #e48950, #f96050);
		height: 56rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		border-radius: 30rpx;
		display: flex;
		-moz-box-align: center;
		-webkit-box-align: center;
		box-align: center;
		align-items: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-pack: center;
		-ms-box-pack: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		justify-content: center;
	}

	.g-flex-horizontal-vertical {
		-moz-box-align: center;
		-webkit-box-align: center;
		box-align: center;
		align-items: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-pack: center;
		-ms-box-pack: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		justify-content: center;
	}

	.g-flex-center {
		-moz-box-pack: center;
		-ms-box-pack: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		justify-content: center;
	}

	.g-flex-align-center {
		-moz-box-align: center;
		-webkit-box-align: center;
		box-align: center;
		align-items: center;
		-webkit-align-items: center;
		-moz-align-items: center;
	}
</style>

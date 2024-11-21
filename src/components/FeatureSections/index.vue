<script setup lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import demo1 from './demo1/index.vue';
import demo2 from './demo2/index.vue';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper: any) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<template>
    <div class="feature-sections">
        <swiper :modules="modules" navigation :scrollbar="{ draggable: true }" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide>
                <div class="swiper-item">
                    <demo1></demo1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-item">
                    <demo2></demo2>
                </div>
            </swiper-slide>
        </swiper>
        <div class="section__container-desc">
            <p class="section__container-desc-title">特色栏目</p>
            <p class="section__container-desc-text">使用这些 Tailwind CSS 功能部分示例来突出显示您的产品或服务的最重要功能。这些示例由 Tailwind CSS
                团队设计和构建，包含各种不同的样式和布局。</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.feature-sections {
    position: relative;
}
.swiper-item {
    width: 100vw;
    height: 100vh;
}
</style>
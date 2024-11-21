<script setup lang="ts">

import HeroSections from '@/components/HeroSections/index.vue';
import FeatureSections from '@/components/FeatureSections/index.vue';
import CTASections from '@/components/CTASections/index.vue';
import BentoGrids from '@/components/BentoGrids/index.vue';

const options = { }



</script>

<template>
    <full-page class="full-page" :options="options">
        <div class="section">
            <div class="section__container">
                <HeroSections></HeroSections>
                <div class="section__container-desc">
                    <p class="section__container-desc-title">英雄部分</p>
                    <p class="section__container-desc-text">使用这些 Tailwind CSS 英雄部分示例将重要消息、产品照片和号召性用语添加到网站顶部。这些英雄示例由 Tailwind CSS 团队设计和构建，包含各种不同的样式和布局。</p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-container">
                <FeatureSections></FeatureSections>
            </div>
        </div>
        <div class="section">
            <div class="section__container">
                <CTASections></CTASections>
                <div class="section__container-desc">
                    <p class="section__container-desc-title">CTA 部分</p>
                    <p class="section__container-desc-text">使用这些 Tailwind CSS CTA 部分示例来鼓励您的访问者采取行动并注册您的产品或服务。这些 CTA 示例由 Tailwind CSS 团队设计和构建，包含各种不同的样式和布局。</p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__container">
                <BentoGrids></BentoGrids>
                <div class="section__container-desc">
                    <p class="section__container-desc-title">便当格</p>
                    <p class="section__container-desc-text">使用这些 Tailwind CSS 便当网格示例来创建视觉上引人入胜的功能部分，以突出您的产品或服务的关键方面。这些卡片布局包括各种不同的网格图案，并包括浅色和深色示例。</p>
                </div>
            </div>
        </div>
    </full-page>

</template>

<style lang="scss" scoped>
.section {
    height: 100vh;

    &__container {
        position: relative;
        height: 100vh;
        &-desc {
            
        }
    }
}
</style>
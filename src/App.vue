<script setup lang="ts">

import HeroSections from '@/components/HeroSections/index.vue';
import FeatureSections1 from '@/components/FeatureSections/demo1/index.vue';

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
                <FeatureSections1></FeatureSections1>
                <div class="section__container-desc">
                    <p class="section__container-desc-title">特色栏目</p>
                    <p class="section__container-desc-text">使用这些 Tailwind CSS 功能部分示例来突出显示您的产品或服务的最重要功能。这些示例由 Tailwind CSS 团队设计和构建，包含各种不同的样式和布局。</p>
                </div>
            </div>
        </div>
    </full-page>

</template>

<style lang="scss" scoped>
.section {
    height: 100vh;

    &__container {
        height: 100vh;
        &-desc {
            width: fit-content;
            margin: 0 auto;
            padding: 20px 10px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            p {
                text-align: center;
            }
            &-title {
                font-size: 1.4em;
                font-weight: 600;
            }
            &-text {
                font-size: 1.2em;
            }
        }
    }
}
</style>
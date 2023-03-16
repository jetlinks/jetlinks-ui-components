<template>
    <j-page-container title="首页">
        <j-button @click="jump" />
    </j-page-container>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name: 'Welcome',
    setup() {
        const router = useRouter();
        const jump = () => {
            router.push('/list/sub-page');
        };

        return {
            jump,
        };
    },
};
</script>

<style scoped></style>
